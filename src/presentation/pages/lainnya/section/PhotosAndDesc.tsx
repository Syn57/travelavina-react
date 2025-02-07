import { PAGE_WIDTH_CONFIG } from "../../../../utils/Constants";

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
      <div className="flex items-center justify-center">
        <div className={`flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10 justify-center mt-10 ${PAGE_WIDTH_CONFIG}`}>
          {/* Photo Grid */}
          {/* Text Section */}
          <div className="text-center md:text-left w-full md:w-1/2">
            <h2 className="text-3xl font-abhaya-bold font-semibold mb-4 text-center">{sectionTitle.toUpperCase()}</h2>
            <p className="text-gray-700 font-alike text-justify">{sectionDesc}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full md:w-1/2">
            {photos.map((photo, index) => (
              <img
                key={index}
                src={photo}
                alt={`Photo ${index + 1}`}
                className={`w-full rounded-lg shadow-lg object-cover h-[170px]`}
              />
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default PhotosAndDesc;
  