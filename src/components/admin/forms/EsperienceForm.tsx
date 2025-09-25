import ResponsibilitiesInput from "@/components/ui/ResponsibilitiesInput";
import { UseFormReturn } from "react-hook-form";
import { ResumeEntryInput } from "@/types/graphql";

interface Props {
    form: UseFormReturn<ResumeEntryInput>;
}

export default function ExperienceForm({ form }: Props) {
    const { register, watch, setValue } = form;

    return (
        <div className="experience-form">
            <input {...register('title')} placeholder="Job Title" className="input" />
            <input {...register('subtitle')} placeholder="Company" className="input" />
            <ResponsibilitiesInput
                value={watch('description') || ''}
                onChange={(val) => setValue('description', val)}
            />
            <input {...register('startDate')} placeholder="Start Date" className="input" />
            <input {...register('endDate')} placeholder="End Date" className="input" />
        </div>
    );
}