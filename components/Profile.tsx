import Image from "next/image";

interface ProfileProps {
  classname?: string;
  imgClass?: string;
}

const Profile = ({ classname, imgClass }: ProfileProps) => {
  return (
    <div className={classname}>
      <Image
        className={imgClass}
        src="/profile_img.jpeg"
        alt="Profile picture"
        width={200} // Adjusted size for mobile
        height={200}
      />
      <h3 className="text-lg md:text-xl font-bold mt-4">PORTAL MARTIN</h3>
      <p className="text-gray-600 text-sm md:text-base">
        Fullstack Web Developer
      </p>
    </div>
  );
};

export default Profile;
