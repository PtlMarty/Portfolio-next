declare type ContactInfoProps = {
  label: string;
  value: string;
};

const ContactInfos = ({ label, value }: ContactInfoProps) => (
  <div>
    <p className="text-sm md:text-lg font-semibold">{label}</p>
    <p className="text-sm md:text-lg">{value}</p>
  </div>
);

export default ContactInfos;
