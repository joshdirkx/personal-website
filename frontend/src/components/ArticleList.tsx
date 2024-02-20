import { useState, useEffect } from "react";

const requestHeaders: Headers = new Headers();

requestHeaders.set("Access-Control-Allow-Origin", "https://joshdirkx.com");

interface Item {
  id: 0;
  link: string;
  title: string;
  image_url: string;
}

export default function ArticleList() {
  const [items, setItems] = useState<Item[]>([]); // Initializes items state as an empty array
  const [isLoading, setIsLoading] = useState<boolean>(true); // Initializes loading state as true

  useEffect(() => {
    // Function to fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://gz7qe65r25njl362je6y6t63xq0ifrth.lambda-url.us-west-2.on.aws/",
          {
            method: "GET",
            headers: requestHeaders,
          },
        );
        const data = await response.json();

        setItems(data); // Update items state with the fetched data
        setIsLoading(false); // Set loading state to false after data is loaded
      } catch (error) {
        console.error("Error fetching data: ", error);
        setIsLoading(false); // Ensure loading state is false on error as well
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once on mount

  // Render
  if (isLoading) return <div>Loading...</div>; // Display loading state

  return (
    <div id="articles" className="overflow-hidden rounded-lg bg-white shadow">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Articles</h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {items.map((product) => (
            <a key={product.id} href={product.link} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={product.image_url}
                  alt="Placeholder"
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="bg-gray-200 rounded-lg p-2 mt-4 text-sm text-gray-700">
                {product.title}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
