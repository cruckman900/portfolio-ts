import { UseFormReturn } from "react-hook-form";
import { ResumeEntryInput } from "@/types/graphql";

interface Props {
    form: UseFormReturn<ResumeEntryInput>;
}

export default function SkillsForm({ form }: Props) {
    const { register } = form;

    return (
        <div className="skills-form">
            <h3 className="section-label">Skills</h3>
            <input {...register('title')} placeholder="Skill Category" className="input" />
            <input {...register('tags')} placeholder="Skills (comma-separated)" className="input" />
        </div>
    );
}
