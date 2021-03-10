import React from 'react';
import parse, {
  attributesToProps,
  domToReact,
  HTMLReactParserOptions,
  DOMNode,
} from 'html-react-parser';
import { graphql, useStaticQuery } from 'gatsby';
import { Element } from 'domhandler';
import { BicstoneIconDataQuery } from '../../types';

type Props = {
  width: number;
  height: number;
};

export const BicstoneIcon: React.FC<Props> = ({ width, height }) => {
  // アイコンはMITにできないため、contentfulから持ってくる形にする
  const options: HTMLReactParserOptions = {
    replace: domNode => {
      if (
        domNode instanceof Element &&
        domNode.attribs &&
        domNode.name === 'svg' &&
        domNode.children
      ) {
        const props = attributesToProps(domNode.attribs);
        return (
          <svg {...props} width={width} height={height}>
            {domToReact(domNode.children as DOMNode[])}
          </svg>
        );
      }
    },
  };
  // `5qVePilXXNs2WxxIcvndga`は、contentful assetsのアイコンのID
  const { contentfulAsset }: BicstoneIconDataQuery = useStaticQuery(
    graphql`
      query BicstoneIconData {
        contentfulAsset(contentful_id: { eq: "5qVePilXXNs2WxxIcvndga" }) {
          title
          svg {
            content
          }
        }
      }
    `,
  );
  return (
    <span role="img" aria-label={contentfulAsset?.title || ''} title={contentfulAsset?.title || ''}>
      {parse(contentfulAsset?.svg?.content || '', options)}
    </span>
  );
};
