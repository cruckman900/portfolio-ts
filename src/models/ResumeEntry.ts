import mongoose from 'mongoose';

const ResumeEntrySchema = new mongoose.Schema({
    section: { type: String, required: true },
    title: { type: String, required: true },
    subtitle: String,
    description: [String],
    startDate: String,
    endDate: String,
    tags: [String],
    order: Number,
});

export default mongoose.models.ResumeEntry || mongoose.model('ResumeEntry', ResumeEntrySchema);
