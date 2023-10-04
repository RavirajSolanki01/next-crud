import EditTopicForm from "@/components/EditTopicForm";
import React from "react";

const EditTopic = ({ params }: { params: { id: string } }) => {
    return (
        <EditTopicForm id={params.id} />
    );
};
export default EditTopic;