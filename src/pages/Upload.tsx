
import { Navbar } from "@/components/layout/Navbar";
import { UploadForm } from "@/components/upload/UploadForm";

const Upload = () => {
  return (
    <div className="min-h-screen bg-xenon-900 text-white">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold mb-2">Upload Video</h1>
          <p className="text-xenon-300 mb-6">Share your content with the world</p>
          
          <UploadForm />
        </div>
      </div>
    </div>
  );
};

export default Upload;
