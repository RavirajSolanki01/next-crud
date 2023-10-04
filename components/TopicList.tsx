"use client"
import React, { useEffect, useState } from "react";
import Card from "./Card";
import { useRouter } from "next/navigation";


const TopicList = () => {
    const [topics, setTopics] = useState<Array<{}> | null>(null)
    const router = useRouter()
    useEffect(() => {

        getTopics();
    }, [])
    console.log(topics, "Now Hey tnere");
    const getTopics = async () => {
        try {
            const res = await fetch(`/api/topics`, {
                cache: "no-store",
            });
            if (!res.ok) {
                throw new Error("Failed to fetch topics");
            }
            const result = await res.json();
            setTopics(result?.topics)
        } catch (error) {
            console.log("Error loading topics", error);
        }
    };

    const handleDelete = async (id: string) => {
        const res = await fetch(`api/topics?id=${id}`, {
            method: "DELETE",
        });
        if (res.ok) {
            router.refresh();
            getTopics()
        }
    };

    return (
        <div className="flex flex-col gap-2">
            {topics?.map(({ title, description, _id }: any) => (
                <Card id={_id} description={description} title={title} key={_id} onDelete={handleDelete} />
            ))}
        </div>
    );
};

export default TopicList;