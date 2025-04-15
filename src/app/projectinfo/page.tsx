type Props = {
    params: {
      id: string;
    };
  };
  
  export default function ProjectInfo({ params }: Props) {
    return (
      <div className="p-10">
        <h1 className="text-3xl font-bold">Project ID: {params.id}</h1>
        {/* Fetch and display specific project details */}
      </div>
    );
  }
  