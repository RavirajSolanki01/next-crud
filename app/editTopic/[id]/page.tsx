"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const EditTopic = ({ params }: { params: { id: string } }) => {
    const port = process.env.PORT;
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const router = useRouter()

    useEffect(() => {
        getTopics()

    }, [])

    const getTopics = async () => {
        try {
            const res = await fetch(`${port}/api/topics/${params.id}`, {
                cache: "no-store",
            });
            if (!res.ok) {
                throw new Error("Failed to fetch topics");
            }
            const result = await res.json();
            setTitle(result.topic.title)
            setDescription(result.topic.description)
        } catch (error) {
            console.log("Error loading topics", error);
        }
    };
console.log(process.env.PORT, "process.env.BASE_URL!", process.env.PORT!);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!title || !description) {
            alert("Title and Description are required!");
        }
        try {
            const res = await fetch(`api/topics/${params.id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({ title, description })
            })

            if (!res.ok) {
                throw new Error("Failed to update topic");
            }
            router.push("/")

        } catch (error) {
            console.log(error);
        }

    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col items-center gap-4">
                    <input
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        type="text"
                        className="w-[100%] bg-black outline-none border-white border-2 p-2 rounded"
                    />
                    <textarea
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                        className="w-[100%] bg-black outline-none border-white border-2 p-2 rounded"
                    />
                    <button className="w-[100%] bg-white text-black rounded p-3 text-2xl">
                        Update
                    </button>
                </div>
            </form>
        </div>
    );
};
export default EditTopic;