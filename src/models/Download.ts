import mongoose, { Schema, Document } from "mongoose";

export interface IDownload extends Document {
  name: string;
  email: string;
  company?: string;
}

const DownloadSchema = new Schema<IDownload>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    company: { type: String, required: false },
  },
  { timestamps: true }
);

export default mongoose.models.Download || mongoose.model<IDownload>("Download", DownloadSchema);
