package main

import (
	"bytes"
	"encoding/json"
	"encoding/xml"
	"fmt"
	"net/http"
	"strings"

	"github.com/aws/aws-lambda-go/lambda"
)

type RSS struct {
	Channel Channel `xml:"channel"`
}

type Channel struct {
	Items []Item `xml:"item"`
}

type Item struct {
	Title       string `xml:"title"`
	Link        string `xml:"link"`
	Description string `xml:"description"`
	Encoded     string `xml:"encoded"`
}

type Post struct {
    Title       string `json:"title"`
    Link        string `json:"link"`
    Description string `json:"description"`
}

func Handler() ([]Post, error) {
	url := "https://medium.com/feed/@matwerber"

	resp, err := http.Get(url)
	if err != nil {
		return nil, fmt.Errorf("error fetching RSS feed: %v", err)
	}
	defer resp.Body.Close()

	buf := new(bytes.Buffer)
	buf.ReadFrom(resp.Body)
	rssContent := buf.String()

	rss := RSS{}
	if err := xml.Unmarshal([]byte(rssContent), &rss); err != nil {
		return nil, fmt.Errorf("error parsing XML: %v", err)
	}

	var results []Post
    for _, item := range rss.Channel.Items {
        // Extract the first 140 characters of the article's content.
        description := item.Encoded
        if len(description) > 140 {
            description = description[:140]
        }
        // Create a Post struct for each item and append it to the results slice.
        post := Post{
            Title:       item.Title,
            Link:        item.Link,
            Description: description, // Assume you've already cleaned up the description as before.
        }
        results = append(results, post)
    }

	return results, nil
}

func main() {
	lambda.Start(Handler)
}
