const PhotosAndDesc = ({
    photos,
    sectionTitle,
    sectionDesc,
  }: {
    photos: string[];
    sectionTitle: string;
    sectionDesc: string;
  }) => {
    return (
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10 md:px-10 justify-center mt-10">
        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-md md:max-w-xl">
          {photos.map((photo, index) => (
            <img
              key={index}
              src={photo}
              alt={`Photo ${index + 1}`}
              className={`w-full rounded-lg shadow-lg object-cover}`}
            />
          ))}
        </div>
  
        {/* Text Section */}
        <div className="text-center md:text-left max-w-lg">
          <h2 className="text-3xl font-abhaya-bold font-semibold mb-4">{sectionTitle.toUpperCase()}</h2>
          <p className="text-gray-700 font-alike leading-relaxed">{sectionDesc}</p>
        </div>
      </div>
    );
  };
  
  export default PhotosAndDesc;
  