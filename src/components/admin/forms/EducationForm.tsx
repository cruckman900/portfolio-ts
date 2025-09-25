import { UseFormReturn } from "react-hook-form";
import { ResumeEntryInput } from "@/types/graphql";

interface Props {
    form: UseFormReturn<ResumeEntryInput>;
}

export default function EducationForm({ form }: Props) {
    const { register } = form;

    return (
        <div className="experience-form">
            <input {...register('title')} placeholder="Degree" className="input" />
            <input {...register('subtitle')} placeholder="Institution" className="input" />
            <input {...register('startDate')} placeholder="Start Year" className="input" />
            <input {...register('endDate')} placeholder="End Year" className="input" />
        </div>
    );
}
