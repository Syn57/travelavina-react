const ImageBannerStatic = ( { img, title, className }: {img:string, title:string, className:string} ) => {
    return (
        <div className={`${className} relative h-[400px]`}>
            <div className="flex flex-wrap justify-between w-full h-full items-center z-10 relative bg-primary bg-opacity-80">
                <p className="font-alfaslab text-center text-white w-full text-5xl">{title}</p>
            </div>
            <img
                src={img}
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
                alt="Background"
            />
        </div>
    );
};

export default ImageBannerStatic;