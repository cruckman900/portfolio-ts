// components/EditResumeForm.tsx
import styles from './ProjectEditor.module.scss';
import { useState } from 'react';

type ResumeData = {
  name: string;
  title: string;
  summary: string;
  skills: string[];
  experience: {
    company: string;
    role: string;
    responsibilities: string[];
  }[];
};

export default function EditResumeForm() {
  const [resume, setResume] = useState<ResumeData>({
    name: '',
    title: '',
    summary: '',
    skills: [],
    experience: [],
  });

  const [hasError, setHasError] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: keyof ResumeData
  ) => {
    setResume(prev => ({ ...prev, [field]: e.target.value }));
    setIsSaved(false);
    setHasError(false);
  };

  const handleSave = () => {
    if (!resume.name || !resume.title) {
      setHasError(true);
      return;
    }
    // Simulate save logic
    setIsSaved(true);
  };

  return (
    <form>
      <fieldset className={`${styles.fieldset} ${resume.name ? styles.active : ''}`}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          value={resume.name}
          onChange={e => handleChange(e, 'name')}
        />
      </fieldset>

      <fieldset className={`${styles.fieldset} ${resume.title ? styles.active : ''}`}>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          type="text"
          value={resume.title}
          onChange={e => handleChange(e, 'title')}
        />
      </fieldset>

      <fieldset className={`${styles.fieldset} ${resume.summary ? styles.active : ''}`}>
        <label htmlFor="summary">Summary</label>
        <textarea
          id="summary"
          name="summary"
          value={resume.summary}
          onChange={e => handleChange(e, 'summary')}
        />
      </fieldset>

      {/* Skills */}
      <fieldset className={`${styles.fieldset} ${resume.skills.length ? styles.active : ''}`}>
        <label htmlFor="skills">Skills (comma-separated)</label>
        <input
          id="skills"
          name="skills"
          type="text"
          value={resume.skills.join(', ')}
          onChange={e =>
            setResume(prev => ({
              ...prev,
              skills: e.target.value.split(',').map(s => s.trim()),
            }))
          }
        />
      </fieldset>

      {/* Experience */}
      {resume.experience.map((exp, index) => (
        <fieldset key={index} className={styles.fieldset}>
          <label>Company</label>
          <input
            type="text"
            value={exp.company}
            onChange={e => {
              const updated = [...resume.experience];
              updated[index].company = e.target.value;
              setResume(prev => ({ ...prev, experience: updated }));
            }}
          />
          <label>Role</label>
          <input
            type="text"
            value={exp.role}
            onChange={e => {
              const updated = [...resume.experience];
              updated[index].role = e.target.value;
              setResume(prev => ({ ...prev, experience: updated }));
            }}
          />
          <label>Responsibilities (comma-separated)</label>
          <input
            type="text"
            value={exp.responsibilities.join(', ')}
            onChange={e => {
              const updated = [...resume.experience];
              updated[index].responsibilities = e.target.value.split(',').map(r => r.trim());
              setResume(prev => ({ ...prev, experience: updated }));
            }}
          />
        </fieldset>
      ))}

      <button type="button" onClick={handleSave}>
        Save Resume
      </button>

      {hasError && (
        <div className={styles.errorFeedback}>System breach detected: missing required fields</div>
      )}
      {isSaved && <div className={styles.saveFeedback}>Data stabilized</div>}
    </form>
  );
}
