import ResumeEntry from "@/models/ResumeEntry";
import { DeleteArgs, ResumeArgs, ResumeEntryInput, UpdateArgs } from "@/types/graphql";

export const resolvers = {
    Query: {
        resume: async(_: unknown, args: ResumeArgs) => {
            return (await ResumeEntry.find({ section: args.section })).sort((a, b) => a.order - b.order);
        },
    },
    Mutation: {
        addEntry: async (_: unknown, args: { input: ResumeEntryInput }) => {
            return await ResumeEntry.create(args.input);
        },
        updateEntry: async (_: unknown, args: UpdateArgs) => {
            return await ResumeEntry.findByIdAndUpdate(args.id, args.input, { new: true });
        },
        deleteEntry: async (_: unknown, args: DeleteArgs) => {
            await ResumeEntry.findByIdAndDelete(args.id);
            return true;
        }
    }
}