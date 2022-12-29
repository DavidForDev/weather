const AdditionDetail = ({ name, description, value }) => {
  return (
    <div className="flex items-center justify-between bg-slate-100 py-14 px-7 rounded-lg cursor-pointer w-full">
      <div className="flex flex-col gap-1">
        <h3 className="text-xl">{name}</h3>
        <p className="text-black/50 text-base">{description}</p>
      </div>
      <h2 className="text-2xl text-black/50">{value}</h2>
    </div>
  );
};

export default AdditionDetail;
