package main

import (
	"bytes"
	"encoding/xml"
	"fmt"
	"net/http"
	"regexp"

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
    ImageURL    string `json:"image_url,omitempty"` // Use omitempty to omit the field if it's empty
}

func Handler() ([]Post, error) {
  imgRegex := regexp.MustCompile(`<img[^>]+\bsrc=["']([^"']+)["']`)

	url := "https://medium.com/feed/@joshdirkx"

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
        description := item.Encoded

        var imageURL string

        matches := imgRegex.FindStringSubmatch(description)

        if len(matches) > 1 {
            imageURL = matches[1]
        }

        post := Post{
            Title:       item.Title,
            Link:        item.Link,
            ImageURL:    imageURL,
        }

        results = append(results, post)
    }

	return results, nil
}

func main() {
	lambda.Start(Handler)
}
