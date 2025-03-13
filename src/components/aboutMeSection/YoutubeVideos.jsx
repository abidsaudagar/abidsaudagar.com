import React from "react";

const YoutubeVideos = () => {
  const videos = [
    { id: "8L_YG5ZYWQc" },
    { id: "waouoJ1QG70" },
    { id: "DimRiZuNhuM" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-7 mr-8 mb-6">
      {videos.map((video) => (
        <div key={video.id} className="w-full">
          <div className="aspect-w-16 aspect-h-9">
          <iframe
          className="w-full h-full rounded-lg shadow-lg"
            width="100%"
            height="200"
            src={`https://www.youtube.com/embed/${video.id}`}
            title={video.title}
            allowFullScreen
          ></iframe>
          </div>
        </div>
      ))}
    </div>
  );
};

export default YoutubeVideos;
