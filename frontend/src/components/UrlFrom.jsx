import React, { useState } from "react";
import { createShortUrl } from "../api/shortUrl.api.jsx";

const UrlFrom = () => {
  const [url, setUrl] = useState("https://www.google.com");
  const [shortUrl, setShortUrl] = useState();
  const [copied, setCopied] = useState(false);

  const handleSubmit = async () => {
    const shortUrl = await createShortUrl(url);
    setShortUrl(shortUrl);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl);
    setCopied(true);

    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6 p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl shadow-lg">
      <div>
        <label
          htmlFor="url"
          className="mb-3 block text-base font-semibold text-indigo-900"
        >
          Enter your long URL
        </label>

        <input
          type="url"
          id="url"
          value={url}
          onInput={(e) => setUrl(e.target.value)}
          placeholder="https://example.com"
          className="w-full px-4 py-3 border border-indigo-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
        />
      </div>

      <button
        onClick={handleSubmit}
        type="submit"
        className="w-full mt-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-xl font-medium hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg"
      >
        Shorten URL
      </button>

      {shortUrl && (
        <div className="mt-8 p-5 bg-white rounded-xl shadow-md">
          <h2 className="text-lg font-semibold mb-3 text-indigo-900">
            Your Shortened URL
          </h2>
          <div className="flex items-center">
            <input
              type="text"
              value={shortUrl}
              readOnly
              className="flex-1 p-3 border border-indigo-200 rounded-l-lg bg-indigo-50 text-indigo-800 font-medium focus:outline-none"
            />
            <button
              onClick={handleCopy}
              className={`px-3 py-3 rounded-r-lg font-medium transition-colors duration-200 ${
                copied
                  ? "bg-emerald-500 hover:bg-emerald-600 text-white"
                  : "bg-indigo-500 hover:bg-indigo-600 text-white"
              }`}
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UrlFrom;
