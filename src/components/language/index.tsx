import styles from './language.module.css';

type LanguageProps = {
  language: string;
};

export default function Language({ language }: LanguageProps) {
  return (
    <div className={ styles.container }>
      {language}
    </div>
  );
}
