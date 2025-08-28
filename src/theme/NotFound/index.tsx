import React from 'react';
import { translate } from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './styles.module.css';

export default function NotFound() {
  return (
    <Layout
      title={translate({
        id: 'theme.NotFound.title',
        message: 'Page non trouvée',
      })}
      description={translate({
        id: 'theme.NotFound.description', 
        message: 'La page que vous recherchez n\'existe pas.',
      })}
    >
      <main className={styles.container}>
        <div className={styles.content}>
          <div className={styles.illustration}>
            <div className={styles.errorCode}>404</div>
            <div className={styles.emoji}>🦕💭</div>
          </div>

          <div className={styles.textContent}>
            <h1 className={styles.title}>
              {translate({
                id: 'theme.NotFound.title',
                message: 'Page non trouvée',
              })}
            </h1>

            <p className={styles.description}>
              {translate({
                id: 'theme.NotFound.description',
                message: 'Désolé, nous n\'avons pas pu trouver la page que vous recherchez.',
              })}
            </p>

            <p className={styles.suggestion}>
              {translate({
                id: 'theme.NotFound.suggestion',
                message: 'Peut-être avez-vous fait une faute de frappe dans l\'URL ? Vérifiez bien l\'orthographe.',
              })}
            </p>

            <div className={styles.actions}>
              <a href="/" className={styles.homeButton}>
                {translate({
                  id: 'theme.NotFound.backToHome',
                  message: '🏠 Retour à l\'accueil',
                })}
              </a>

              <a href="/docs" className={styles.docsButton}>
                {translate({
                  id: 'theme.NotFound.goToDocs',
                  message: '📖 Voir la documentation',
                })}
              </a>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}