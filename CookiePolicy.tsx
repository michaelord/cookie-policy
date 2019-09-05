import React, {useState} from 'react';

import './CookiePolicy.scss';

import {getModifiers} from 'components/libs';
import {Box} from 'components/block';
import {Heading, RichText} from 'components/editable';
import {Container} from 'components/layout';
import {Button} from 'components/form';

const setCookie = (name: string, value: string, expiration: number): void => {
	console.log('set', name, value, expiration);
};

const getCookie = (name: string): string => {
	console.log('get', name);
	return 'never';
};

type Props = {
	prefix?: string;
	expirationDays?: number;
	lastUpdated?: string;
	title?: string;
	content: string;
	accept: string;
};

const COOKIE_NAME: string = 'cookiePolicyAccepted';

export const CookiePolicy = (props: Props) => {
	const base: string = 'cookie-policy';

	const {title, content, accept, prefix = '', expirationDays = 365, lastUpdated = 'never'} = props;

	const cookieName = `${prefix}${COOKIE_NAME}`;

	const [accepted, setAccepted] = useState(getCookie(cookieName) === lastUpdated);

	const atts: object = {
		className: getModifiers(base, {
			accepted,
		}),
	};

	const onAccept = (ev: MouseEvent) => {
		ev.preventDefault();
		setCookie(cookieName, lastUpdated, expirationDays);
		setAccepted(true);
	};

	return (
		<div {...atts}>
			<Container width="xxl">
				<div className={`${base}__main`}>
					<Box>
						<Heading title={title} />
						<RichText content={content} />
						<Button onClick={onAccept} label={accept} priority="primary" isWide />
					</Box>
				</div>
			</Container>
		</div>
	);
};
