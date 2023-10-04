"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const AddTopic = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const router = useRouter();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!title || !description) {
            alert("Title and Description are required!");
        }

        try {
            const res = await fetch(`${process.env.PORT!}api/topics`, {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ title, description }),
            });
            console.log(res, "RESPONNSE");

            if (res.ok) {
                router.push("/");
            } else {
                throw new Error("Failed to add topic");
            }
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
                    <button type="submit" className="w-[100%] bg-white text-black rounded p-3 text-2xl">
                        Submit
                    </button>
                </div>
            </form>

        </div>
    );
};
export default AddTopic;