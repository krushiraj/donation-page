import React, { FunctionComponent } from 'react';
import clsx from 'clsx';

interface Props {
  className?: string;
}

export const H1: FunctionComponent<Props> = ({ className, ...props }) => (
  <h1 className={clsx(['text-2xl text-pink-400 px-4 py-1', className])} {...props} />
);

export const H2: FunctionComponent<Props> = ({ className, ...props }) => (
  <h2 className={clsx(['text-xl text-pink-400 px-4 py-1 mt-3', className])} {...props} />
);

export const Paragraph: FunctionComponent<Props> = ({ className, ...props }) => (
  <p className={clsx(['px-4 py-2 text-sm text-gray-700 leading-normal', className])} {...props} />
);
