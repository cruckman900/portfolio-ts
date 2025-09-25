import { UseFormReturn } from "react-hook-form";
import { ResumeEntryInput } from "@/types/graphql";

interface Props {
    form: UseFormReturn<ResumeEntryInput>;
}

export default function ProjectsForm({ form }: Props) {
    const { register } = form;

    return (
        <div className="projects-form">
            <input {...register('title')} placeholder="Project Name" className="input" />
            <textarea {...register('description')} placeholder="Project Description" className="textarea" />
            <input {...register('tags')} placeholder="Technologies (comma-separated)" className="input" />
        </div>
    );
}
