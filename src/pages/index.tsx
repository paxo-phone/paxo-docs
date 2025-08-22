import {useEffect, type ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';

import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from '../css/index.module.css';
import { useHistory } from '@docusaurus/router';

function HeroBanner() {
  return (
    <div className={styles.hero} data-theme="dark">
      <div className={styles.heroInner}>
        <Heading as="h1" className={styles.heroProjectTagline}>
          <img
            alt={translate({message: 'Docusaurus with Keytar'})}
            className={styles.heroLogo}
            src={useBaseUrl('/img/Paxo-PhoneMokeup.png')}
            width="500"
            height="5 00"
          />
          <span
            className={styles.heroTitleTextHtml}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: translate({
                id: 'homepage.hero.title'
              }),
            }}
          />
        </Heading>
        <div className={styles.indexCtas}>
          <Link className="button button--info" to="/docs/intro">
            <Translate>Get Started</Translate>
          </Link>
          <span className={styles.indexCtasGitHubButtonWrapper}>
            <iframe
              className={styles.indexCtasGitHubButton}
              src="https://ghbtns.com/github-btn.html?user=paxo-phone&amp;repo=paxos-9&amp;type=star&amp;count=true&amp;size=large"
              width={160}
              height={30}
              title="GitHub Stars"
            />
          </span>
        </div>
      </div>
    </div>
  );
}

function TopBanner() {
  // TODO We should be able to strongly type customFields
  //  Refactor to use a CustomFields interface + TS declaration merging
  const announcedVersion = useDocusaurusContext().siteConfig.customFields
    ?.announcedVersion as string;

  return (
    <div className={styles.topBanner}>
      <div className={styles.topBannerTitle}>
        {'🎉\xa0'}
        <Link
          className={styles.topBannerTitleText}>
          <Translate
            id="homepage.banner.launch.newVersion"
            values="9">
            {'PaxOS\xa09 is\xa0out!️'}
          </Translate>
        </Link>
        {'\xa0🥳'}
      </div>
    </div>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <main>
        <TopBanner />
        <HeroBanner />
      </main>
    </Layout>
  );
} 