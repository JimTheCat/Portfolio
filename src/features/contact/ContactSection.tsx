import { useState, type FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { personalInfo } from '../../data';
import { SectionHead, Icon } from '../../components';
import { isValidEmail, isValidName, isValidMessage } from '../../utils';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const ContactSection = () => {
  const { t } = useTranslation();

  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [sent, setSent] = useState(false);

  const validate = () => {
    const e: Partial<FormState> = {};
    if (!isValidName(form.name)) e.name = t('contact.formErrName');
    if (!isValidEmail(form.email)) e.email = t('contact.formErrEmail');
    if (!isValidMessage(form.message)) e.message = t('contact.formErrMessage');
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = (ev: FormEvent) => {
    ev.preventDefault();
    if (validate()) {
      setSent(true);
      setTimeout(() => {
        setSent(false);
        setForm({ name: '', email: '', subject: '', message: '' });
      }, 4000);
    }
  };

  const ghUrl = personalInfo.social.github.replace('https://', '');
  const liUrl = personalInfo.social.linkedin.replace('https://', '');

  return (
    <section id="contact">
      <div className="container">
        <SectionHead num="06" title={t('contact.title')} />
        <div className="contact-grid">
          <div className="contact-intro">
            <h2>
              {t('contact.titlePre')}{' '}
              <span className="accent">{t('contact.titleAccent')}</span>{' '}
              {t('contact.titlePost')}
            </h2>
            <p>{t('contact.intro')}</p>
            <div className="contact-channels">
              <a className="contact-channel" href={`mailto:${personalInfo.email}`}>
                <span className="contact-channel-icon">
                  <Icon.Mail />
                </span>
                <div>
                  <div className="contact-channel-meta">Email</div>
                  <div className="contact-channel-value">{personalInfo.email}</div>
                </div>
                <span className="contact-channel-arrow">
                  <Icon.ArrowUpRight />
                </span>
              </a>
              <a
                className="contact-channel"
                href={personalInfo.social.github}
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-channel-icon">
                  <Icon.Github />
                </span>
                <div>
                  <div className="contact-channel-meta">GitHub</div>
                  <div className="contact-channel-value">{ghUrl}</div>
                </div>
                <span className="contact-channel-arrow">
                  <Icon.ArrowUpRight />
                </span>
              </a>
              <a
                className="contact-channel"
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-channel-icon">
                  <Icon.Linkedin />
                </span>
                <div>
                  <div className="contact-channel-meta">LinkedIn</div>
                  <div className="contact-channel-value">{liUrl}</div>
                </div>
                <span className="contact-channel-arrow">
                  <Icon.ArrowUpRight />
                </span>
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={submit} noValidate>
            <div className="form-row split">
              <div>
                <label className="form-label">
                  {t('contact.formName')} <span className="req">*</span>
                </label>
                <input
                  className={`form-input${errors.name ? ' error' : ''}`}
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                {errors.name && <span className="form-error">! {errors.name}</span>}
              </div>
              <div>
                <label className="form-label">
                  {t('contact.formEmail')} <span className="req">*</span>
                </label>
                <input
                  className={`form-input${errors.email ? ' error' : ''}`}
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
                {errors.email && <span className="form-error">! {errors.email}</span>}
              </div>
            </div>
            <div className="form-row">
              <label className="form-label">{t('contact.formSubject')}</label>
              <input
                className="form-input"
                type="text"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                placeholder={t('contact.formSubjectPlaceholder')}
              />
            </div>
            <div className="form-row">
              <label className="form-label">
                {t('contact.formMessage')} <span className="req">*</span>
              </label>
              <textarea
                className={`form-textarea${errors.message ? ' error' : ''}`}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
              {errors.message && (
                <span className="form-error">! {errors.message}</span>
              )}
            </div>
            <div className="form-actions">
              <span className="form-status">{sent ? `✓ ${t('contact.formSent')}` : ''}</span>
              <button type="submit" className="btn btn-primary">
                {t('contact.formSend')}
                <Icon.ArrowRight />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
