---
title: Cookie Policy
tags : ["all", "done"]
category: "Undefined"
logo: "./thumbnail.jpg"
icon: '<svg x="0px" y="0px" viewBox="0 0 260 180" ><rect width="260" height="180" fill="var(--color-bg)"></rect>	<path fill="var(--color-contrast-low)" d="M137.4,65.6c0-4.1-3.3-7.4-7.4-7.4s-7.4,3.3-7.4,7.4s3.3,7.4,7.4,7.4C134.1,73,137.4,69.7,137.4,65.6z		 M124.7,65.6c0-2.9,2.4-5.3,5.3-5.3c2.9,0,5.3,2.4,5.3,5.3c0,2.9-2.4,5.3-5.3,5.3C127.1,70.9,124.7,68.5,124.7,65.6z"/>	<path fill="var(--color-contrast-low)" d="M158.5,114.5c-0.4-1.9-2.2-3.3-4.1-3.3h-0.1c-0.5-1.7-2-3-3.7-3.2c-1.8-0.2-3.5,0.8-4.2,2.5l-11.1-7.5l-2-13.1		V78.3c0-0.4-0.2-0.8-0.6-0.9l-17-8.5c-0.1-0.1-0.3-0.1-0.5-0.1H99.2c-0.6,0-1.1,0.5-1.1,1.1v19.1c0,0.6,0.5,1.1,1.1,1.1h5.3		c0.2,0,0.3-0.1,0.5-0.1l1.4,0.9l-0.8,2c0,0.1-0.1,0.2-0.1,0.4v11.4l-7.3,15.7c-0.2,0.3-0.1,0.7,0.1,1c0.2,0.3,0.5,0.5,0.9,0.5h7.4		c0.4,0,0.8-0.2,0.9-0.6l7.4-14.9c0.1-0.1,0.1-0.3,0.1-0.5v-6.5l5.3,6.8v14.5c0,0.6,0.5,1.1,1.1,1.1h7.4c0.6,0,1.1-0.5,1.1-1.1v-14		l11.6,7.8c-1.8,0.5-3.1,2.2-3.1,4.1v2.1c0,0.6,0.5,1.1,1.1,1.1h21.2c0.6,0,1.1-0.5,1.1-1.1v-2.1C161.8,116.7,160.5,115,158.5,114.5		z M134.1,104.9l10,6.8c-0.6,0.3-1,0.6-1.4,1.1l-11.7-7.9H134.1z M108.6,85.1l-3-2v-5.8h5.9L108.6,85.1z M105.6,87.7v-2.1l2.2,1.5		l-0.6,1.6L105.6,87.7z M127.9,119.7h-5.3v-13.8c0-0.2-0.1-0.5-0.2-0.7l-7.4-9.5c-0.3-0.4-0.8-0.5-1.2-0.4c-0.4,0.1-0.7,0.5-0.7,1		v9.3l-7,14h-5.1l6.7-14.4c0.1-0.1,0.1-0.3,0.1-0.4V93.4l6.3-16.8c0.1-0.3,0.1-0.7-0.1-1c-0.2-0.3-0.5-0.5-0.9-0.5h-8.5		c-0.6,0-1.1,0.5-1.1,1.1v11.7h-3.2v-17h14.6l16.2,8.1v11c0,0.1,0,0.1,0,0.2l1.9,12.6h-3.3L126.8,92v-9.4c0-0.5-0.4-0.9-0.9-1		c-0.5-0.1-1,0.2-1.2,0.6l-4.2,10.6c-0.1,0.3-0.1,0.7,0.1,1l7.2,10.3V119.7z M124.8,96l-2.1-3l2-5v4c0,0.1,0,0.2,0,0.3l1.2,4.4		L124.8,96z M159.7,119.7h-19.1v-1.1c0-1.2,0.9-2.1,2.1-2.1c0.6,0,1.1-0.5,1.1-1.1c0-1.2,0.9-2.1,2.1-2.1h1.1c0.6,0,1.1-0.5,1.1-1.1		c0-1.2,0.9-2.1,2.1-2.1s2.1,0.9,2.1,2.1c0,0.6,0.5,1.1,1.1,1.1h1.1c1.2,0,2.1,0.9,2.1,2.1c0,0.6,0.5,1.1,1.1,1.1		c1.2,0,2.1,0.9,2.1,2.1V119.7z"/>	<path fill="var(--color-contrast-low)" d="M128.9,115.5h2.1v2.1h-2.1V115.5z"/>	<path fill="var(--color-contrast-low)" d="M128.9,114.4h2.1v2.1h-2.1V114.4z"/></svg>'
published : true
---
import { Playground, PlaygroudCode } from 'components/styleguide';
import {Table} from 'components/editable';
import {Toggle} from 'components/accordion';
import {Alert} from 'components/alert';

Cookie Policy that is built with the intention that it will be linked to the *cookie policy* page on your site, the `lastUpdated` prop should be set to be the last updated time for the cookie policy page. Doing so will cause the cookie popup to show when there are updates to the policy.

<Alert type="info">
    <p>If you do not see a cookie policy pop-up on the site, please clear your cookies and refrest this page.</p>
</Alert>

<Toggle title="Props" isExpanded>
    <Table
        layout="standard"
        headings={['prop', 'Type', 'Description']}
        data={[
            ['content', 'string', '...'],
            ['expirationDays', 'number', '...'],
            ['lastUpdated', 'string', '...'],
            ['prefix', 'string', '...'],
            ['title', 'string', '...'],
            ['accept', 'string', '...'],
        ]}
    />
</Toggle>
