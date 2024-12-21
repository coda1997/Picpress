"use client";

import { useState, type ChangeEvent } from "react";
import { Image } from "image-js";

export default function Compress() {
  const [images, setImages] = useState<File[]>([]);
  const [compressed, setCompressed] = useState<File[]>([]);

  const handleSelectFiles = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImages(Array.from(e.target.files));
    }
  };

  const handleCompress = async () => {
    const compressedImages: File[] = [];

    for (const image of images) {
      const arrayBuffer = await image.arrayBuffer();
      const img = await Image.load(arrayBuffer);
      const compressedArrayBuffer = await img
        .resize({ width: img.width / 2 })
        .toBlob("image/jpeg", 0.8);

      const compressedFile = new File([compressedArrayBuffer], image.name, {
        type: "image/jpeg",
      });

      compressedImages.push(compressedFile);
    }

    setCompressed(compressedImages);
  };

  const handleDownload = (file: File) => {
    const url = URL.createObjectURL(file);
    const link = document.createElement("a");
    link.href = url;
    link.download = `compressed-${file.name}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 p-8">
      <h1 className="text-white text-3xl mb-6 font-bold">
        Batch Image Compression
      </h1>
      <div className="bg-white rounded-lg p-6 shadow-md flex flex-col items-center gap-4 max-w-lg w-full">
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handleSelectFiles}
          className="border border-gray-300 p-2 rounded"
        />
        <button
          type="button"
          onClick={handleCompress}
          className="bg-purple-600 text-white rounded py-2 px-4 hover:bg-purple-700 transition"
        >
          Compress
        </button>
        <div className="w-full">
          <h2 className="text-gray-700 font-semibold mb-2">Selected Images:</h2>
          <ul className="list-disc list-inside">
            {images.map((img) => (
              <li key={img.name}>{img.name}</li>
            ))}
          </ul>
        </div>
        {compressed.length > 0 && (
          <div className="w-full">
            <h2 className="text-gray-700 font-semibold mb-2">
              Compressed Results:
            </h2>
            <ul className="list-disc list-inside text-green-600">
              {/* Add a download button for each file */}
              {compressed.map((c) => (
                <li key={c.name}>
                  {c.name}
                  <button
                    type="button"
                    onClick={() => handleDownload(c)}
                    className="text-blue-600 underline ml-2"
                  >
                    Download
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
