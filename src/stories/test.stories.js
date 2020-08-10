import React from 'react';

import Component from '../'

export default {
  title: 'Component',
  component: Component,
};

export const storyOne = (
  <Component />
)

storyOne.story = {
  parameters: {
    docs: {
      storyDescription: `
Markdown description
        `,
    },
  },
}