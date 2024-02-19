package main

import (
	"bytes"
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

func Handler() ([]string, error) {
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

	results := make([]string, 0)
	for _, item := range rss.Channel.Items {
		description := item.Encoded

		if len(description) > 140 {
			description = description[:140]
		}

		description = strings.Replace(description, "<![CDATA[", "", -1)
		description = strings.Replace(description, "]]>", "", -1)
		description = strings.Replace(description, "<p>", "", -1)
		description = strings.Replace(description, "</p>", "", -1)

		result := fmt.Sprintf("Title: %s\nLink: %s\nDescription: %s", item.Title, item.Link, description)
		results = append(results, result)
	}

	return results, nil
}

func main() {
	lambda.Start(Handler)
}
