import Link from "next/link";

export interface ICardProps {
    id: string;
    title: string;
    description: string;
    onDelete: (id: string) => void
}

export default function Card({ id, title, description, onDelete }: ICardProps) {

    return (
        <div className="p-3 bg-slate-300 text-black ">
            <div className="flex w-[100%] justify-between">
                <p className="text-3xl">{title}</p>
                <div className="flex gap-2">
                    <button onClick={() => onDelete(id)} className="bg-white p-2 rounded "  >Delete</button>
                    <Link href={`/editTopic/${id}`} className="bg-white p-2 rounded " >Edit</Link>
                </div>
            </div>
            <p>{description}</p>
        </div>
    );
}