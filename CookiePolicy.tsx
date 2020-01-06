// @ts-ignore
import {cookie} from 'browser-cookie-lite';
import {Box} from 'components/block';
import {Heading, RichText} from 'components/editable';
import {Button} from 'components/form';
import {Container} from 'components/layout';
import {getModifiers} from 'components/libs';
import 'components/pre-header/Transition.scss';
import * as Types from 'components/types';
import React, {useState} from 'react';
import {CSSTransition} from 'react-transition-group';
import './CookiePolicy.scss';

type Props = {
	content: Types.RichText;
	expirationDays?: Types.Number;
	lastUpdated?: Types.Text;
	prefix?: Types.Text;
	title?: Types.Text;
	accept: Types.Text;
};

const COOKIE_NAME: string = 'cookiePolicyAccepted';

export const CookiePolicy = (props: Props) => {
	const base: string = 'cookie-policy';

	const {title, content, accept, prefix = '', expirationDays = 365, lastUpdated = 'never'} = props;

	const cookieName = `${prefix}${COOKIE_NAME}`;

	const [accepted, setAccepted] = useState(cookie(cookieName) === lastUpdated);

	const atts: object = {
		className: getModifiers(base, {}),
	};

	const onAccept = (ev: MouseEvent) => {
		ev.preventDefault();
		cookie(cookieName, lastUpdated, 60 * 60 * 24 * expirationDays, '/');
		setAccepted(true);
	};

	return (
		<CSSTransition in={!accepted} timeout={300} classNames="display" unmountOnExit>
			<div {...atts}>
				<Container width="full">
					<div className={`${base}__main`}>
						<Box>
							<Heading title={title} />
							<RichText content={content} />
							<Button onClick={onAccept} label={accept} priority="primary" isWide />
						</Box>
					</div>
				</Container>
			</div>
		</CSSTransition>
	);
};
