export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};











export type AvifOptions = {
  quality?: Maybe<Scalars['Int']>;
  lossless?: Maybe<Scalars['Boolean']>;
  speed?: Maybe<Scalars['Int']>;
};

export type BlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  width?: Maybe<Scalars['Int']>;
  /**
   * Force the output format for the low-res preview. Default is to use the same
   * format as the input. You should rarely need to change this
   */
  toFormat?: Maybe<ImageFormat>;
};

export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};

export type ContentfulAsset = ContentfulReference & Node & {
  __typename?: 'ContentfulAsset';
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  file?: Maybe<ContentfulAssetFile>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  node_locale?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulAssetSys>;
  localFile?: Maybe<File>;
  fixed?: Maybe<ContentfulFixed>;
  fluid?: Maybe<ContentfulFluid>;
  gatsbyImageData?: Maybe<Scalars['JSON']>;
  resize?: Maybe<ContentfulResize>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  svg?: Maybe<InlineSvg>;
};


export type ContentfulAssetCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulAssetUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulAssetFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
};


export type ContentfulAssetFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
  sizes?: Maybe<Scalars['String']>;
};


export type ContentfulAssetGatsbyImageDataArgs = {
  layout?: Maybe<GatsbyImageLayout>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  placeholder?: Maybe<GatsbyImagePlaceholder>;
  formats?: Maybe<Array<Maybe<ContentfulImageFormat>>>;
  outputPixelDensities?: Maybe<Array<Maybe<Scalars['Float']>>>;
  breakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
  sizes?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  quality?: Maybe<Scalars['Int']>;
};


export type ContentfulAssetResizeArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  toFormat?: Maybe<ContentfulImageFormat>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
};

export type ContentfulAssetConnection = {
  __typename?: 'ContentfulAssetConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAssetEdge>;
  nodes: Array<ContentfulAsset>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulAssetGroupConnection>;
};


export type ContentfulAssetConnectionDistinctArgs = {
  field: ContentfulAssetFieldsEnum;
};


export type ContentfulAssetConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulAssetFieldsEnum;
};

export type ContentfulAssetEdge = {
  __typename?: 'ContentfulAssetEdge';
  next?: Maybe<ContentfulAsset>;
  node: ContentfulAsset;
  previous?: Maybe<ContentfulAsset>;
};

export enum ContentfulAssetFieldsEnum {
  contentful_id = 'contentful_id',
  id = 'id',
  spaceId = 'spaceId',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  file___url = 'file___url',
  file___details___size = 'file___details___size',
  file___details___image___width = 'file___details___image___width',
  file___details___image___height = 'file___details___image___height',
  file___fileName = 'file___fileName',
  file___contentType = 'file___contentType',
  title = 'title',
  description = 'description',
  node_locale = 'node_locale',
  sys___type = 'sys___type',
  sys___revision = 'sys___revision',
  localFile___sourceInstanceName = 'localFile___sourceInstanceName',
  localFile___absolutePath = 'localFile___absolutePath',
  localFile___relativePath = 'localFile___relativePath',
  localFile___extension = 'localFile___extension',
  localFile___size = 'localFile___size',
  localFile___prettySize = 'localFile___prettySize',
  localFile___modifiedTime = 'localFile___modifiedTime',
  localFile___accessTime = 'localFile___accessTime',
  localFile___changeTime = 'localFile___changeTime',
  localFile___birthTime = 'localFile___birthTime',
  localFile___root = 'localFile___root',
  localFile___dir = 'localFile___dir',
  localFile___base = 'localFile___base',
  localFile___ext = 'localFile___ext',
  localFile___name = 'localFile___name',
  localFile___relativeDirectory = 'localFile___relativeDirectory',
  localFile___dev = 'localFile___dev',
  localFile___mode = 'localFile___mode',
  localFile___nlink = 'localFile___nlink',
  localFile___uid = 'localFile___uid',
  localFile___gid = 'localFile___gid',
  localFile___rdev = 'localFile___rdev',
  localFile___ino = 'localFile___ino',
  localFile___atimeMs = 'localFile___atimeMs',
  localFile___mtimeMs = 'localFile___mtimeMs',
  localFile___ctimeMs = 'localFile___ctimeMs',
  localFile___atime = 'localFile___atime',
  localFile___mtime = 'localFile___mtime',
  localFile___ctime = 'localFile___ctime',
  localFile___birthtime = 'localFile___birthtime',
  localFile___birthtimeMs = 'localFile___birthtimeMs',
  localFile___blksize = 'localFile___blksize',
  localFile___blocks = 'localFile___blocks',
  localFile___url = 'localFile___url',
  localFile___publicURL = 'localFile___publicURL',
  localFile___childrenImageSharp = 'localFile___childrenImageSharp',
  localFile___childrenImageSharp___fixed___base64 = 'localFile___childrenImageSharp___fixed___base64',
  localFile___childrenImageSharp___fixed___tracedSVG = 'localFile___childrenImageSharp___fixed___tracedSVG',
  localFile___childrenImageSharp___fixed___aspectRatio = 'localFile___childrenImageSharp___fixed___aspectRatio',
  localFile___childrenImageSharp___fixed___width = 'localFile___childrenImageSharp___fixed___width',
  localFile___childrenImageSharp___fixed___height = 'localFile___childrenImageSharp___fixed___height',
  localFile___childrenImageSharp___fixed___src = 'localFile___childrenImageSharp___fixed___src',
  localFile___childrenImageSharp___fixed___srcSet = 'localFile___childrenImageSharp___fixed___srcSet',
  localFile___childrenImageSharp___fixed___srcWebp = 'localFile___childrenImageSharp___fixed___srcWebp',
  localFile___childrenImageSharp___fixed___srcSetWebp = 'localFile___childrenImageSharp___fixed___srcSetWebp',
  localFile___childrenImageSharp___fixed___originalName = 'localFile___childrenImageSharp___fixed___originalName',
  localFile___childrenImageSharp___fluid___base64 = 'localFile___childrenImageSharp___fluid___base64',
  localFile___childrenImageSharp___fluid___tracedSVG = 'localFile___childrenImageSharp___fluid___tracedSVG',
  localFile___childrenImageSharp___fluid___aspectRatio = 'localFile___childrenImageSharp___fluid___aspectRatio',
  localFile___childrenImageSharp___fluid___src = 'localFile___childrenImageSharp___fluid___src',
  localFile___childrenImageSharp___fluid___srcSet = 'localFile___childrenImageSharp___fluid___srcSet',
  localFile___childrenImageSharp___fluid___srcWebp = 'localFile___childrenImageSharp___fluid___srcWebp',
  localFile___childrenImageSharp___fluid___srcSetWebp = 'localFile___childrenImageSharp___fluid___srcSetWebp',
  localFile___childrenImageSharp___fluid___sizes = 'localFile___childrenImageSharp___fluid___sizes',
  localFile___childrenImageSharp___fluid___originalImg = 'localFile___childrenImageSharp___fluid___originalImg',
  localFile___childrenImageSharp___fluid___originalName = 'localFile___childrenImageSharp___fluid___originalName',
  localFile___childrenImageSharp___fluid___presentationWidth = 'localFile___childrenImageSharp___fluid___presentationWidth',
  localFile___childrenImageSharp___fluid___presentationHeight = 'localFile___childrenImageSharp___fluid___presentationHeight',
  localFile___childrenImageSharp___gatsbyImageData = 'localFile___childrenImageSharp___gatsbyImageData',
  localFile___childrenImageSharp___original___width = 'localFile___childrenImageSharp___original___width',
  localFile___childrenImageSharp___original___height = 'localFile___childrenImageSharp___original___height',
  localFile___childrenImageSharp___original___src = 'localFile___childrenImageSharp___original___src',
  localFile___childrenImageSharp___resize___src = 'localFile___childrenImageSharp___resize___src',
  localFile___childrenImageSharp___resize___tracedSVG = 'localFile___childrenImageSharp___resize___tracedSVG',
  localFile___childrenImageSharp___resize___width = 'localFile___childrenImageSharp___resize___width',
  localFile___childrenImageSharp___resize___height = 'localFile___childrenImageSharp___resize___height',
  localFile___childrenImageSharp___resize___aspectRatio = 'localFile___childrenImageSharp___resize___aspectRatio',
  localFile___childrenImageSharp___resize___originalName = 'localFile___childrenImageSharp___resize___originalName',
  localFile___childrenImageSharp___id = 'localFile___childrenImageSharp___id',
  localFile___childrenImageSharp___parent___id = 'localFile___childrenImageSharp___parent___id',
  localFile___childrenImageSharp___parent___children = 'localFile___childrenImageSharp___parent___children',
  localFile___childrenImageSharp___children = 'localFile___childrenImageSharp___children',
  localFile___childrenImageSharp___children___id = 'localFile___childrenImageSharp___children___id',
  localFile___childrenImageSharp___children___children = 'localFile___childrenImageSharp___children___children',
  localFile___childrenImageSharp___internal___content = 'localFile___childrenImageSharp___internal___content',
  localFile___childrenImageSharp___internal___contentDigest = 'localFile___childrenImageSharp___internal___contentDigest',
  localFile___childrenImageSharp___internal___description = 'localFile___childrenImageSharp___internal___description',
  localFile___childrenImageSharp___internal___fieldOwners = 'localFile___childrenImageSharp___internal___fieldOwners',
  localFile___childrenImageSharp___internal___ignoreType = 'localFile___childrenImageSharp___internal___ignoreType',
  localFile___childrenImageSharp___internal___mediaType = 'localFile___childrenImageSharp___internal___mediaType',
  localFile___childrenImageSharp___internal___owner = 'localFile___childrenImageSharp___internal___owner',
  localFile___childrenImageSharp___internal___type = 'localFile___childrenImageSharp___internal___type',
  localFile___childImageSharp___fixed___base64 = 'localFile___childImageSharp___fixed___base64',
  localFile___childImageSharp___fixed___tracedSVG = 'localFile___childImageSharp___fixed___tracedSVG',
  localFile___childImageSharp___fixed___aspectRatio = 'localFile___childImageSharp___fixed___aspectRatio',
  localFile___childImageSharp___fixed___width = 'localFile___childImageSharp___fixed___width',
  localFile___childImageSharp___fixed___height = 'localFile___childImageSharp___fixed___height',
  localFile___childImageSharp___fixed___src = 'localFile___childImageSharp___fixed___src',
  localFile___childImageSharp___fixed___srcSet = 'localFile___childImageSharp___fixed___srcSet',
  localFile___childImageSharp___fixed___srcWebp = 'localFile___childImageSharp___fixed___srcWebp',
  localFile___childImageSharp___fixed___srcSetWebp = 'localFile___childImageSharp___fixed___srcSetWebp',
  localFile___childImageSharp___fixed___originalName = 'localFile___childImageSharp___fixed___originalName',
  localFile___childImageSharp___fluid___base64 = 'localFile___childImageSharp___fluid___base64',
  localFile___childImageSharp___fluid___tracedSVG = 'localFile___childImageSharp___fluid___tracedSVG',
  localFile___childImageSharp___fluid___aspectRatio = 'localFile___childImageSharp___fluid___aspectRatio',
  localFile___childImageSharp___fluid___src = 'localFile___childImageSharp___fluid___src',
  localFile___childImageSharp___fluid___srcSet = 'localFile___childImageSharp___fluid___srcSet',
  localFile___childImageSharp___fluid___srcWebp = 'localFile___childImageSharp___fluid___srcWebp',
  localFile___childImageSharp___fluid___srcSetWebp = 'localFile___childImageSharp___fluid___srcSetWebp',
  localFile___childImageSharp___fluid___sizes = 'localFile___childImageSharp___fluid___sizes',
  localFile___childImageSharp___fluid___originalImg = 'localFile___childImageSharp___fluid___originalImg',
  localFile___childImageSharp___fluid___originalName = 'localFile___childImageSharp___fluid___originalName',
  localFile___childImageSharp___fluid___presentationWidth = 'localFile___childImageSharp___fluid___presentationWidth',
  localFile___childImageSharp___fluid___presentationHeight = 'localFile___childImageSharp___fluid___presentationHeight',
  localFile___childImageSharp___gatsbyImageData = 'localFile___childImageSharp___gatsbyImageData',
  localFile___childImageSharp___original___width = 'localFile___childImageSharp___original___width',
  localFile___childImageSharp___original___height = 'localFile___childImageSharp___original___height',
  localFile___childImageSharp___original___src = 'localFile___childImageSharp___original___src',
  localFile___childImageSharp___resize___src = 'localFile___childImageSharp___resize___src',
  localFile___childImageSharp___resize___tracedSVG = 'localFile___childImageSharp___resize___tracedSVG',
  localFile___childImageSharp___resize___width = 'localFile___childImageSharp___resize___width',
  localFile___childImageSharp___resize___height = 'localFile___childImageSharp___resize___height',
  localFile___childImageSharp___resize___aspectRatio = 'localFile___childImageSharp___resize___aspectRatio',
  localFile___childImageSharp___resize___originalName = 'localFile___childImageSharp___resize___originalName',
  localFile___childImageSharp___id = 'localFile___childImageSharp___id',
  localFile___childImageSharp___parent___id = 'localFile___childImageSharp___parent___id',
  localFile___childImageSharp___parent___children = 'localFile___childImageSharp___parent___children',
  localFile___childImageSharp___children = 'localFile___childImageSharp___children',
  localFile___childImageSharp___children___id = 'localFile___childImageSharp___children___id',
  localFile___childImageSharp___children___children = 'localFile___childImageSharp___children___children',
  localFile___childImageSharp___internal___content = 'localFile___childImageSharp___internal___content',
  localFile___childImageSharp___internal___contentDigest = 'localFile___childImageSharp___internal___contentDigest',
  localFile___childImageSharp___internal___description = 'localFile___childImageSharp___internal___description',
  localFile___childImageSharp___internal___fieldOwners = 'localFile___childImageSharp___internal___fieldOwners',
  localFile___childImageSharp___internal___ignoreType = 'localFile___childImageSharp___internal___ignoreType',
  localFile___childImageSharp___internal___mediaType = 'localFile___childImageSharp___internal___mediaType',
  localFile___childImageSharp___internal___owner = 'localFile___childImageSharp___internal___owner',
  localFile___childImageSharp___internal___type = 'localFile___childImageSharp___internal___type',
  localFile___childrenLocale = 'localFile___childrenLocale',
  localFile___childrenLocale___id = 'localFile___childrenLocale___id',
  localFile___childrenLocale___parent___id = 'localFile___childrenLocale___parent___id',
  localFile___childrenLocale___parent___children = 'localFile___childrenLocale___parent___children',
  localFile___childrenLocale___children = 'localFile___childrenLocale___children',
  localFile___childrenLocale___children___id = 'localFile___childrenLocale___children___id',
  localFile___childrenLocale___children___children = 'localFile___childrenLocale___children___children',
  localFile___childrenLocale___internal___content = 'localFile___childrenLocale___internal___content',
  localFile___childrenLocale___internal___contentDigest = 'localFile___childrenLocale___internal___contentDigest',
  localFile___childrenLocale___internal___description = 'localFile___childrenLocale___internal___description',
  localFile___childrenLocale___internal___fieldOwners = 'localFile___childrenLocale___internal___fieldOwners',
  localFile___childrenLocale___internal___ignoreType = 'localFile___childrenLocale___internal___ignoreType',
  localFile___childrenLocale___internal___mediaType = 'localFile___childrenLocale___internal___mediaType',
  localFile___childrenLocale___internal___owner = 'localFile___childrenLocale___internal___owner',
  localFile___childrenLocale___internal___type = 'localFile___childrenLocale___internal___type',
  localFile___childrenLocale___language = 'localFile___childrenLocale___language',
  localFile___childrenLocale___ns = 'localFile___childrenLocale___ns',
  localFile___childrenLocale___data = 'localFile___childrenLocale___data',
  localFile___childrenLocale___fileAbsolutePath = 'localFile___childrenLocale___fileAbsolutePath',
  localFile___childLocale___id = 'localFile___childLocale___id',
  localFile___childLocale___parent___id = 'localFile___childLocale___parent___id',
  localFile___childLocale___parent___children = 'localFile___childLocale___parent___children',
  localFile___childLocale___children = 'localFile___childLocale___children',
  localFile___childLocale___children___id = 'localFile___childLocale___children___id',
  localFile___childLocale___children___children = 'localFile___childLocale___children___children',
  localFile___childLocale___internal___content = 'localFile___childLocale___internal___content',
  localFile___childLocale___internal___contentDigest = 'localFile___childLocale___internal___contentDigest',
  localFile___childLocale___internal___description = 'localFile___childLocale___internal___description',
  localFile___childLocale___internal___fieldOwners = 'localFile___childLocale___internal___fieldOwners',
  localFile___childLocale___internal___ignoreType = 'localFile___childLocale___internal___ignoreType',
  localFile___childLocale___internal___mediaType = 'localFile___childLocale___internal___mediaType',
  localFile___childLocale___internal___owner = 'localFile___childLocale___internal___owner',
  localFile___childLocale___internal___type = 'localFile___childLocale___internal___type',
  localFile___childLocale___language = 'localFile___childLocale___language',
  localFile___childLocale___ns = 'localFile___childLocale___ns',
  localFile___childLocale___data = 'localFile___childLocale___data',
  localFile___childLocale___fileAbsolutePath = 'localFile___childLocale___fileAbsolutePath',
  localFile___id = 'localFile___id',
  localFile___parent___id = 'localFile___parent___id',
  localFile___parent___parent___id = 'localFile___parent___parent___id',
  localFile___parent___parent___children = 'localFile___parent___parent___children',
  localFile___parent___children = 'localFile___parent___children',
  localFile___parent___children___id = 'localFile___parent___children___id',
  localFile___parent___children___children = 'localFile___parent___children___children',
  localFile___parent___internal___content = 'localFile___parent___internal___content',
  localFile___parent___internal___contentDigest = 'localFile___parent___internal___contentDigest',
  localFile___parent___internal___description = 'localFile___parent___internal___description',
  localFile___parent___internal___fieldOwners = 'localFile___parent___internal___fieldOwners',
  localFile___parent___internal___ignoreType = 'localFile___parent___internal___ignoreType',
  localFile___parent___internal___mediaType = 'localFile___parent___internal___mediaType',
  localFile___parent___internal___owner = 'localFile___parent___internal___owner',
  localFile___parent___internal___type = 'localFile___parent___internal___type',
  localFile___children = 'localFile___children',
  localFile___children___id = 'localFile___children___id',
  localFile___children___parent___id = 'localFile___children___parent___id',
  localFile___children___parent___children = 'localFile___children___parent___children',
  localFile___children___children = 'localFile___children___children',
  localFile___children___children___id = 'localFile___children___children___id',
  localFile___children___children___children = 'localFile___children___children___children',
  localFile___children___internal___content = 'localFile___children___internal___content',
  localFile___children___internal___contentDigest = 'localFile___children___internal___contentDigest',
  localFile___children___internal___description = 'localFile___children___internal___description',
  localFile___children___internal___fieldOwners = 'localFile___children___internal___fieldOwners',
  localFile___children___internal___ignoreType = 'localFile___children___internal___ignoreType',
  localFile___children___internal___mediaType = 'localFile___children___internal___mediaType',
  localFile___children___internal___owner = 'localFile___children___internal___owner',
  localFile___children___internal___type = 'localFile___children___internal___type',
  localFile___internal___content = 'localFile___internal___content',
  localFile___internal___contentDigest = 'localFile___internal___contentDigest',
  localFile___internal___description = 'localFile___internal___description',
  localFile___internal___fieldOwners = 'localFile___internal___fieldOwners',
  localFile___internal___ignoreType = 'localFile___internal___ignoreType',
  localFile___internal___mediaType = 'localFile___internal___mediaType',
  localFile___internal___owner = 'localFile___internal___owner',
  localFile___internal___type = 'localFile___internal___type',
  fixed___base64 = 'fixed___base64',
  fixed___tracedSVG = 'fixed___tracedSVG',
  fixed___aspectRatio = 'fixed___aspectRatio',
  fixed___width = 'fixed___width',
  fixed___height = 'fixed___height',
  fixed___src = 'fixed___src',
  fixed___srcSet = 'fixed___srcSet',
  fixed___srcWebp = 'fixed___srcWebp',
  fixed___srcSetWebp = 'fixed___srcSetWebp',
  fluid___base64 = 'fluid___base64',
  fluid___tracedSVG = 'fluid___tracedSVG',
  fluid___aspectRatio = 'fluid___aspectRatio',
  fluid___src = 'fluid___src',
  fluid___srcSet = 'fluid___srcSet',
  fluid___srcWebp = 'fluid___srcWebp',
  fluid___srcSetWebp = 'fluid___srcSetWebp',
  fluid___sizes = 'fluid___sizes',
  gatsbyImageData = 'gatsbyImageData',
  resize___base64 = 'resize___base64',
  resize___tracedSVG = 'resize___tracedSVG',
  resize___src = 'resize___src',
  resize___width = 'resize___width',
  resize___height = 'resize___height',
  resize___aspectRatio = 'resize___aspectRatio',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type'
}

export type ContentfulAssetFile = {
  __typename?: 'ContentfulAssetFile';
  url?: Maybe<Scalars['String']>;
  details?: Maybe<ContentfulAssetFileDetails>;
  fileName?: Maybe<Scalars['String']>;
  contentType?: Maybe<Scalars['String']>;
};

export type ContentfulAssetFileDetails = {
  __typename?: 'ContentfulAssetFileDetails';
  size?: Maybe<Scalars['Int']>;
  image?: Maybe<ContentfulAssetFileDetailsImage>;
};

export type ContentfulAssetFileDetailsFilterInput = {
  size?: Maybe<IntQueryOperatorInput>;
  image?: Maybe<ContentfulAssetFileDetailsImageFilterInput>;
};

export type ContentfulAssetFileDetailsImage = {
  __typename?: 'ContentfulAssetFileDetailsImage';
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type ContentfulAssetFileDetailsImageFilterInput = {
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type ContentfulAssetFileFilterInput = {
  url?: Maybe<StringQueryOperatorInput>;
  details?: Maybe<ContentfulAssetFileDetailsFilterInput>;
  fileName?: Maybe<StringQueryOperatorInput>;
  contentType?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulAssetFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  file?: Maybe<ContentfulAssetFileFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulAssetSysFilterInput>;
  localFile?: Maybe<FileFilterInput>;
  fixed?: Maybe<ContentfulFixedFilterInput>;
  fluid?: Maybe<ContentfulFluidFilterInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  resize?: Maybe<ContentfulResizeFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ContentfulAssetGroupConnection = {
  __typename?: 'ContentfulAssetGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAssetEdge>;
  nodes: Array<ContentfulAsset>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulAssetSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulAssetFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulAssetSys = {
  __typename?: 'ContentfulAssetSys';
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
};

export type ContentfulAssetSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
};

export type ContentfulBlogAuthor = ContentfulReference & ContentfulEntry & Node & {
  __typename?: 'ContentfulBlogAuthor';
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type ContentfulBlogAuthorConnection = {
  __typename?: 'ContentfulBlogAuthorConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBlogAuthorEdge>;
  nodes: Array<ContentfulBlogAuthor>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulBlogAuthorGroupConnection>;
};


export type ContentfulBlogAuthorConnectionDistinctArgs = {
  field: ContentfulBlogAuthorFieldsEnum;
};


export type ContentfulBlogAuthorConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulBlogAuthorFieldsEnum;
};

export type ContentfulBlogAuthorEdge = {
  __typename?: 'ContentfulBlogAuthorEdge';
  next?: Maybe<ContentfulBlogAuthor>;
  node: ContentfulBlogAuthor;
  previous?: Maybe<ContentfulBlogAuthor>;
};

export enum ContentfulBlogAuthorFieldsEnum {
  contentful_id = 'contentful_id',
  id = 'id',
  node_locale = 'node_locale',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type'
}

export type ContentfulBlogAuthorFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ContentfulBlogAuthorGroupConnection = {
  __typename?: 'ContentfulBlogAuthorGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBlogAuthorEdge>;
  nodes: Array<ContentfulBlogAuthor>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulBlogAuthorSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulBlogAuthorFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulContact = ContentfulReference & ContentfulEntry & Node & {
  __typename?: 'ContentfulContact';
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  sortKey?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  subName?: Maybe<Scalars['String']>;
  href?: Maybe<Scalars['String']>;
  icon?: Maybe<ContentfulIcon>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulContactSys>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulContactCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulContactUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulContactConnection = {
  __typename?: 'ContentfulContactConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulContactEdge>;
  nodes: Array<ContentfulContact>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulContactGroupConnection>;
};


export type ContentfulContactConnectionDistinctArgs = {
  field: ContentfulContactFieldsEnum;
};


export type ContentfulContactConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulContactFieldsEnum;
};

export type ContentfulContactEdge = {
  __typename?: 'ContentfulContactEdge';
  next?: Maybe<ContentfulContact>;
  node: ContentfulContact;
  previous?: Maybe<ContentfulContact>;
};

export enum ContentfulContactFieldsEnum {
  contentful_id = 'contentful_id',
  id = 'id',
  node_locale = 'node_locale',
  sortKey = 'sortKey',
  name = 'name',
  subName = 'subName',
  href = 'href',
  icon___contentful_id = 'icon___contentful_id',
  icon___id = 'icon___id',
  icon___node_locale = 'icon___node_locale',
  icon___name = 'icon___name',
  icon___what_i_can_do = 'icon___what_i_can_do',
  icon___what_i_can_do___contentful_id = 'icon___what_i_can_do___contentful_id',
  icon___what_i_can_do___id = 'icon___what_i_can_do___id',
  icon___what_i_can_do___node_locale = 'icon___what_i_can_do___node_locale',
  icon___what_i_can_do___sortKey = 'icon___what_i_can_do___sortKey',
  icon___what_i_can_do___name = 'icon___what_i_can_do___name',
  icon___what_i_can_do___subName = 'icon___what_i_can_do___subName',
  icon___what_i_can_do___icon___contentful_id = 'icon___what_i_can_do___icon___contentful_id',
  icon___what_i_can_do___icon___id = 'icon___what_i_can_do___icon___id',
  icon___what_i_can_do___icon___node_locale = 'icon___what_i_can_do___icon___node_locale',
  icon___what_i_can_do___icon___name = 'icon___what_i_can_do___icon___name',
  icon___what_i_can_do___icon___what_i_can_do = 'icon___what_i_can_do___icon___what_i_can_do',
  icon___what_i_can_do___icon___project = 'icon___what_i_can_do___icon___project',
  icon___what_i_can_do___icon___oss = 'icon___what_i_can_do___icon___oss',
  icon___what_i_can_do___icon___spaceId = 'icon___what_i_can_do___icon___spaceId',
  icon___what_i_can_do___icon___createdAt = 'icon___what_i_can_do___icon___createdAt',
  icon___what_i_can_do___icon___updatedAt = 'icon___what_i_can_do___icon___updatedAt',
  icon___what_i_can_do___icon___history = 'icon___what_i_can_do___icon___history',
  icon___what_i_can_do___icon___contact = 'icon___what_i_can_do___icon___contact',
  icon___what_i_can_do___icon___childrenContentfulIconSvgTextNode = 'icon___what_i_can_do___icon___childrenContentfulIconSvgTextNode',
  icon___what_i_can_do___icon___children = 'icon___what_i_can_do___icon___children',
  icon___what_i_can_do___spaceId = 'icon___what_i_can_do___spaceId',
  icon___what_i_can_do___createdAt = 'icon___what_i_can_do___createdAt',
  icon___what_i_can_do___updatedAt = 'icon___what_i_can_do___updatedAt',
  icon___what_i_can_do___sys___type = 'icon___what_i_can_do___sys___type',
  icon___what_i_can_do___sys___revision = 'icon___what_i_can_do___sys___revision',
  icon___what_i_can_do___parent___id = 'icon___what_i_can_do___parent___id',
  icon___what_i_can_do___parent___children = 'icon___what_i_can_do___parent___children',
  icon___what_i_can_do___children = 'icon___what_i_can_do___children',
  icon___what_i_can_do___children___id = 'icon___what_i_can_do___children___id',
  icon___what_i_can_do___children___children = 'icon___what_i_can_do___children___children',
  icon___what_i_can_do___internal___content = 'icon___what_i_can_do___internal___content',
  icon___what_i_can_do___internal___contentDigest = 'icon___what_i_can_do___internal___contentDigest',
  icon___what_i_can_do___internal___description = 'icon___what_i_can_do___internal___description',
  icon___what_i_can_do___internal___fieldOwners = 'icon___what_i_can_do___internal___fieldOwners',
  icon___what_i_can_do___internal___ignoreType = 'icon___what_i_can_do___internal___ignoreType',
  icon___what_i_can_do___internal___mediaType = 'icon___what_i_can_do___internal___mediaType',
  icon___what_i_can_do___internal___owner = 'icon___what_i_can_do___internal___owner',
  icon___what_i_can_do___internal___type = 'icon___what_i_can_do___internal___type',
  icon___project = 'icon___project',
  icon___project___contentful_id = 'icon___project___contentful_id',
  icon___project___id = 'icon___project___id',
  icon___project___node_locale = 'icon___project___node_locale',
  icon___project___name = 'icon___project___name',
  icon___project___subName = 'icon___project___subName',
  icon___project___startDate = 'icon___project___startDate',
  icon___project___endDate = 'icon___project___endDate',
  icon___project___tags = 'icon___project___tags',
  icon___project___tags___contentful_id = 'icon___project___tags___contentful_id',
  icon___project___tags___id = 'icon___project___tags___id',
  icon___project___tags___node_locale = 'icon___project___tags___node_locale',
  icon___project___tags___name = 'icon___project___tags___name',
  icon___project___tags___level = 'icon___project___tags___level',
  icon___project___tags___skill_map = 'icon___project___tags___skill_map',
  icon___project___tags___project = 'icon___project___tags___project',
  icon___project___tags___spaceId = 'icon___project___tags___spaceId',
  icon___project___tags___createdAt = 'icon___project___tags___createdAt',
  icon___project___tags___updatedAt = 'icon___project___tags___updatedAt',
  icon___project___tags___oss = 'icon___project___tags___oss',
  icon___project___tags___children = 'icon___project___tags___children',
  icon___project___icon___contentful_id = 'icon___project___icon___contentful_id',
  icon___project___icon___id = 'icon___project___icon___id',
  icon___project___icon___node_locale = 'icon___project___icon___node_locale',
  icon___project___icon___name = 'icon___project___icon___name',
  icon___project___icon___what_i_can_do = 'icon___project___icon___what_i_can_do',
  icon___project___icon___project = 'icon___project___icon___project',
  icon___project___icon___oss = 'icon___project___icon___oss',
  icon___project___icon___spaceId = 'icon___project___icon___spaceId',
  icon___project___icon___createdAt = 'icon___project___icon___createdAt',
  icon___project___icon___updatedAt = 'icon___project___icon___updatedAt',
  icon___project___icon___history = 'icon___project___icon___history',
  icon___project___icon___contact = 'icon___project___icon___contact',
  icon___project___icon___childrenContentfulIconSvgTextNode = 'icon___project___icon___childrenContentfulIconSvgTextNode',
  icon___project___icon___children = 'icon___project___icon___children',
  icon___project___detail___id = 'icon___project___detail___id',
  icon___project___detail___children = 'icon___project___detail___children',
  icon___project___detail___detail = 'icon___project___detail___detail',
  icon___project___detail___childrenMarkdownRemark = 'icon___project___detail___childrenMarkdownRemark',
  icon___project___spaceId = 'icon___project___spaceId',
  icon___project___createdAt = 'icon___project___createdAt',
  icon___project___updatedAt = 'icon___project___updatedAt',
  icon___project___sys___type = 'icon___project___sys___type',
  icon___project___sys___revision = 'icon___project___sys___revision',
  icon___project___childrenContentfulProjectDetailTextNode = 'icon___project___childrenContentfulProjectDetailTextNode',
  icon___project___childrenContentfulProjectDetailTextNode___id = 'icon___project___childrenContentfulProjectDetailTextNode___id',
  icon___project___childrenContentfulProjectDetailTextNode___children = 'icon___project___childrenContentfulProjectDetailTextNode___children',
  icon___project___childrenContentfulProjectDetailTextNode___detail = 'icon___project___childrenContentfulProjectDetailTextNode___detail',
  icon___project___childrenContentfulProjectDetailTextNode___childrenMarkdownRemark = 'icon___project___childrenContentfulProjectDetailTextNode___childrenMarkdownRemark',
  icon___project___childContentfulProjectDetailTextNode___id = 'icon___project___childContentfulProjectDetailTextNode___id',
  icon___project___childContentfulProjectDetailTextNode___children = 'icon___project___childContentfulProjectDetailTextNode___children',
  icon___project___childContentfulProjectDetailTextNode___detail = 'icon___project___childContentfulProjectDetailTextNode___detail',
  icon___project___childContentfulProjectDetailTextNode___childrenMarkdownRemark = 'icon___project___childContentfulProjectDetailTextNode___childrenMarkdownRemark',
  icon___project___parent___id = 'icon___project___parent___id',
  icon___project___parent___children = 'icon___project___parent___children',
  icon___project___children = 'icon___project___children',
  icon___project___children___id = 'icon___project___children___id',
  icon___project___children___children = 'icon___project___children___children',
  icon___project___internal___content = 'icon___project___internal___content',
  icon___project___internal___contentDigest = 'icon___project___internal___contentDigest',
  icon___project___internal___description = 'icon___project___internal___description',
  icon___project___internal___fieldOwners = 'icon___project___internal___fieldOwners',
  icon___project___internal___ignoreType = 'icon___project___internal___ignoreType',
  icon___project___internal___mediaType = 'icon___project___internal___mediaType',
  icon___project___internal___owner = 'icon___project___internal___owner',
  icon___project___internal___type = 'icon___project___internal___type',
  icon___oss = 'icon___oss',
  icon___oss___contentful_id = 'icon___oss___contentful_id',
  icon___oss___id = 'icon___oss___id',
  icon___oss___node_locale = 'icon___oss___node_locale',
  icon___oss___name = 'icon___oss___name',
  icon___oss___subName = 'icon___oss___subName',
  icon___oss___startDate = 'icon___oss___startDate',
  icon___oss___href = 'icon___oss___href',
  icon___oss___tags = 'icon___oss___tags',
  icon___oss___tags___contentful_id = 'icon___oss___tags___contentful_id',
  icon___oss___tags___id = 'icon___oss___tags___id',
  icon___oss___tags___node_locale = 'icon___oss___tags___node_locale',
  icon___oss___tags___name = 'icon___oss___tags___name',
  icon___oss___tags___level = 'icon___oss___tags___level',
  icon___oss___tags___skill_map = 'icon___oss___tags___skill_map',
  icon___oss___tags___project = 'icon___oss___tags___project',
  icon___oss___tags___spaceId = 'icon___oss___tags___spaceId',
  icon___oss___tags___createdAt = 'icon___oss___tags___createdAt',
  icon___oss___tags___updatedAt = 'icon___oss___tags___updatedAt',
  icon___oss___tags___oss = 'icon___oss___tags___oss',
  icon___oss___tags___children = 'icon___oss___tags___children',
  icon___oss___icon___contentful_id = 'icon___oss___icon___contentful_id',
  icon___oss___icon___id = 'icon___oss___icon___id',
  icon___oss___icon___node_locale = 'icon___oss___icon___node_locale',
  icon___oss___icon___name = 'icon___oss___icon___name',
  icon___oss___icon___what_i_can_do = 'icon___oss___icon___what_i_can_do',
  icon___oss___icon___project = 'icon___oss___icon___project',
  icon___oss___icon___oss = 'icon___oss___icon___oss',
  icon___oss___icon___spaceId = 'icon___oss___icon___spaceId',
  icon___oss___icon___createdAt = 'icon___oss___icon___createdAt',
  icon___oss___icon___updatedAt = 'icon___oss___icon___updatedAt',
  icon___oss___icon___history = 'icon___oss___icon___history',
  icon___oss___icon___contact = 'icon___oss___icon___contact',
  icon___oss___icon___childrenContentfulIconSvgTextNode = 'icon___oss___icon___childrenContentfulIconSvgTextNode',
  icon___oss___icon___children = 'icon___oss___icon___children',
  icon___oss___image___contentful_id = 'icon___oss___image___contentful_id',
  icon___oss___image___id = 'icon___oss___image___id',
  icon___oss___image___spaceId = 'icon___oss___image___spaceId',
  icon___oss___image___createdAt = 'icon___oss___image___createdAt',
  icon___oss___image___updatedAt = 'icon___oss___image___updatedAt',
  icon___oss___image___title = 'icon___oss___image___title',
  icon___oss___image___description = 'icon___oss___image___description',
  icon___oss___image___node_locale = 'icon___oss___image___node_locale',
  icon___oss___image___gatsbyImageData = 'icon___oss___image___gatsbyImageData',
  icon___oss___image___children = 'icon___oss___image___children',
  icon___oss___detail___id = 'icon___oss___detail___id',
  icon___oss___detail___children = 'icon___oss___detail___children',
  icon___oss___detail___detail = 'icon___oss___detail___detail',
  icon___oss___detail___childrenMarkdownRemark = 'icon___oss___detail___childrenMarkdownRemark',
  icon___oss___spaceId = 'icon___oss___spaceId',
  icon___oss___createdAt = 'icon___oss___createdAt',
  icon___oss___updatedAt = 'icon___oss___updatedAt',
  icon___oss___sys___type = 'icon___oss___sys___type',
  icon___oss___sys___revision = 'icon___oss___sys___revision',
  icon___oss___childrenContentfulOssDetailTextNode = 'icon___oss___childrenContentfulOssDetailTextNode',
  icon___oss___childrenContentfulOssDetailTextNode___id = 'icon___oss___childrenContentfulOssDetailTextNode___id',
  icon___oss___childrenContentfulOssDetailTextNode___children = 'icon___oss___childrenContentfulOssDetailTextNode___children',
  icon___oss___childrenContentfulOssDetailTextNode___detail = 'icon___oss___childrenContentfulOssDetailTextNode___detail',
  icon___oss___childrenContentfulOssDetailTextNode___childrenMarkdownRemark = 'icon___oss___childrenContentfulOssDetailTextNode___childrenMarkdownRemark',
  icon___oss___childContentfulOssDetailTextNode___id = 'icon___oss___childContentfulOssDetailTextNode___id',
  icon___oss___childContentfulOssDetailTextNode___children = 'icon___oss___childContentfulOssDetailTextNode___children',
  icon___oss___childContentfulOssDetailTextNode___detail = 'icon___oss___childContentfulOssDetailTextNode___detail',
  icon___oss___childContentfulOssDetailTextNode___childrenMarkdownRemark = 'icon___oss___childContentfulOssDetailTextNode___childrenMarkdownRemark',
  icon___oss___parent___id = 'icon___oss___parent___id',
  icon___oss___parent___children = 'icon___oss___parent___children',
  icon___oss___children = 'icon___oss___children',
  icon___oss___children___id = 'icon___oss___children___id',
  icon___oss___children___children = 'icon___oss___children___children',
  icon___oss___internal___content = 'icon___oss___internal___content',
  icon___oss___internal___contentDigest = 'icon___oss___internal___contentDigest',
  icon___oss___internal___description = 'icon___oss___internal___description',
  icon___oss___internal___fieldOwners = 'icon___oss___internal___fieldOwners',
  icon___oss___internal___ignoreType = 'icon___oss___internal___ignoreType',
  icon___oss___internal___mediaType = 'icon___oss___internal___mediaType',
  icon___oss___internal___owner = 'icon___oss___internal___owner',
  icon___oss___internal___type = 'icon___oss___internal___type',
  icon___svg___id = 'icon___svg___id',
  icon___svg___parent___id = 'icon___svg___parent___id',
  icon___svg___parent___children = 'icon___svg___parent___children',
  icon___svg___children = 'icon___svg___children',
  icon___svg___children___id = 'icon___svg___children___id',
  icon___svg___children___children = 'icon___svg___children___children',
  icon___svg___internal___content = 'icon___svg___internal___content',
  icon___svg___internal___contentDigest = 'icon___svg___internal___contentDigest',
  icon___svg___internal___description = 'icon___svg___internal___description',
  icon___svg___internal___fieldOwners = 'icon___svg___internal___fieldOwners',
  icon___svg___internal___ignoreType = 'icon___svg___internal___ignoreType',
  icon___svg___internal___mediaType = 'icon___svg___internal___mediaType',
  icon___svg___internal___owner = 'icon___svg___internal___owner',
  icon___svg___internal___type = 'icon___svg___internal___type',
  icon___svg___svg = 'icon___svg___svg',
  icon___svg___sys___type = 'icon___svg___sys___type',
  icon___svg___childrenMarkdownRemark = 'icon___svg___childrenMarkdownRemark',
  icon___svg___childrenMarkdownRemark___id = 'icon___svg___childrenMarkdownRemark___id',
  icon___svg___childrenMarkdownRemark___excerpt = 'icon___svg___childrenMarkdownRemark___excerpt',
  icon___svg___childrenMarkdownRemark___rawMarkdownBody = 'icon___svg___childrenMarkdownRemark___rawMarkdownBody',
  icon___svg___childrenMarkdownRemark___html = 'icon___svg___childrenMarkdownRemark___html',
  icon___svg___childrenMarkdownRemark___htmlAst = 'icon___svg___childrenMarkdownRemark___htmlAst',
  icon___svg___childrenMarkdownRemark___excerptAst = 'icon___svg___childrenMarkdownRemark___excerptAst',
  icon___svg___childrenMarkdownRemark___headings = 'icon___svg___childrenMarkdownRemark___headings',
  icon___svg___childrenMarkdownRemark___timeToRead = 'icon___svg___childrenMarkdownRemark___timeToRead',
  icon___svg___childrenMarkdownRemark___tableOfContents = 'icon___svg___childrenMarkdownRemark___tableOfContents',
  icon___svg___childrenMarkdownRemark___children = 'icon___svg___childrenMarkdownRemark___children',
  icon___svg___childMarkdownRemark___id = 'icon___svg___childMarkdownRemark___id',
  icon___svg___childMarkdownRemark___excerpt = 'icon___svg___childMarkdownRemark___excerpt',
  icon___svg___childMarkdownRemark___rawMarkdownBody = 'icon___svg___childMarkdownRemark___rawMarkdownBody',
  icon___svg___childMarkdownRemark___html = 'icon___svg___childMarkdownRemark___html',
  icon___svg___childMarkdownRemark___htmlAst = 'icon___svg___childMarkdownRemark___htmlAst',
  icon___svg___childMarkdownRemark___excerptAst = 'icon___svg___childMarkdownRemark___excerptAst',
  icon___svg___childMarkdownRemark___headings = 'icon___svg___childMarkdownRemark___headings',
  icon___svg___childMarkdownRemark___timeToRead = 'icon___svg___childMarkdownRemark___timeToRead',
  icon___svg___childMarkdownRemark___tableOfContents = 'icon___svg___childMarkdownRemark___tableOfContents',
  icon___svg___childMarkdownRemark___children = 'icon___svg___childMarkdownRemark___children',
  icon___spaceId = 'icon___spaceId',
  icon___createdAt = 'icon___createdAt',
  icon___updatedAt = 'icon___updatedAt',
  icon___sys___type = 'icon___sys___type',
  icon___sys___revision = 'icon___sys___revision',
  icon___history = 'icon___history',
  icon___history___contentful_id = 'icon___history___contentful_id',
  icon___history___id = 'icon___history___id',
  icon___history___node_locale = 'icon___history___node_locale',
  icon___history___name = 'icon___history___name',
  icon___history___date = 'icon___history___date',
  icon___history___subName = 'icon___history___subName',
  icon___history___icon___contentful_id = 'icon___history___icon___contentful_id',
  icon___history___icon___id = 'icon___history___icon___id',
  icon___history___icon___node_locale = 'icon___history___icon___node_locale',
  icon___history___icon___name = 'icon___history___icon___name',
  icon___history___icon___what_i_can_do = 'icon___history___icon___what_i_can_do',
  icon___history___icon___project = 'icon___history___icon___project',
  icon___history___icon___oss = 'icon___history___icon___oss',
  icon___history___icon___spaceId = 'icon___history___icon___spaceId',
  icon___history___icon___createdAt = 'icon___history___icon___createdAt',
  icon___history___icon___updatedAt = 'icon___history___icon___updatedAt',
  icon___history___icon___history = 'icon___history___icon___history',
  icon___history___icon___contact = 'icon___history___icon___contact',
  icon___history___icon___childrenContentfulIconSvgTextNode = 'icon___history___icon___childrenContentfulIconSvgTextNode',
  icon___history___icon___children = 'icon___history___icon___children',
  icon___history___spaceId = 'icon___history___spaceId',
  icon___history___createdAt = 'icon___history___createdAt',
  icon___history___updatedAt = 'icon___history___updatedAt',
  icon___history___sys___type = 'icon___history___sys___type',
  icon___history___sys___revision = 'icon___history___sys___revision',
  icon___history___parent___id = 'icon___history___parent___id',
  icon___history___parent___children = 'icon___history___parent___children',
  icon___history___children = 'icon___history___children',
  icon___history___children___id = 'icon___history___children___id',
  icon___history___children___children = 'icon___history___children___children',
  icon___history___internal___content = 'icon___history___internal___content',
  icon___history___internal___contentDigest = 'icon___history___internal___contentDigest',
  icon___history___internal___description = 'icon___history___internal___description',
  icon___history___internal___fieldOwners = 'icon___history___internal___fieldOwners',
  icon___history___internal___ignoreType = 'icon___history___internal___ignoreType',
  icon___history___internal___mediaType = 'icon___history___internal___mediaType',
  icon___history___internal___owner = 'icon___history___internal___owner',
  icon___history___internal___type = 'icon___history___internal___type',
  icon___contact = 'icon___contact',
  icon___contact___contentful_id = 'icon___contact___contentful_id',
  icon___contact___id = 'icon___contact___id',
  icon___contact___node_locale = 'icon___contact___node_locale',
  icon___contact___sortKey = 'icon___contact___sortKey',
  icon___contact___name = 'icon___contact___name',
  icon___contact___subName = 'icon___contact___subName',
  icon___contact___href = 'icon___contact___href',
  icon___contact___icon___contentful_id = 'icon___contact___icon___contentful_id',
  icon___contact___icon___id = 'icon___contact___icon___id',
  icon___contact___icon___node_locale = 'icon___contact___icon___node_locale',
  icon___contact___icon___name = 'icon___contact___icon___name',
  icon___contact___icon___what_i_can_do = 'icon___contact___icon___what_i_can_do',
  icon___contact___icon___project = 'icon___contact___icon___project',
  icon___contact___icon___oss = 'icon___contact___icon___oss',
  icon___contact___icon___spaceId = 'icon___contact___icon___spaceId',
  icon___contact___icon___createdAt = 'icon___contact___icon___createdAt',
  icon___contact___icon___updatedAt = 'icon___contact___icon___updatedAt',
  icon___contact___icon___history = 'icon___contact___icon___history',
  icon___contact___icon___contact = 'icon___contact___icon___contact',
  icon___contact___icon___childrenContentfulIconSvgTextNode = 'icon___contact___icon___childrenContentfulIconSvgTextNode',
  icon___contact___icon___children = 'icon___contact___icon___children',
  icon___contact___spaceId = 'icon___contact___spaceId',
  icon___contact___createdAt = 'icon___contact___createdAt',
  icon___contact___updatedAt = 'icon___contact___updatedAt',
  icon___contact___sys___type = 'icon___contact___sys___type',
  icon___contact___sys___revision = 'icon___contact___sys___revision',
  icon___contact___parent___id = 'icon___contact___parent___id',
  icon___contact___parent___children = 'icon___contact___parent___children',
  icon___contact___children = 'icon___contact___children',
  icon___contact___children___id = 'icon___contact___children___id',
  icon___contact___children___children = 'icon___contact___children___children',
  icon___contact___internal___content = 'icon___contact___internal___content',
  icon___contact___internal___contentDigest = 'icon___contact___internal___contentDigest',
  icon___contact___internal___description = 'icon___contact___internal___description',
  icon___contact___internal___fieldOwners = 'icon___contact___internal___fieldOwners',
  icon___contact___internal___ignoreType = 'icon___contact___internal___ignoreType',
  icon___contact___internal___mediaType = 'icon___contact___internal___mediaType',
  icon___contact___internal___owner = 'icon___contact___internal___owner',
  icon___contact___internal___type = 'icon___contact___internal___type',
  icon___childrenContentfulIconSvgTextNode = 'icon___childrenContentfulIconSvgTextNode',
  icon___childrenContentfulIconSvgTextNode___id = 'icon___childrenContentfulIconSvgTextNode___id',
  icon___childrenContentfulIconSvgTextNode___parent___id = 'icon___childrenContentfulIconSvgTextNode___parent___id',
  icon___childrenContentfulIconSvgTextNode___parent___children = 'icon___childrenContentfulIconSvgTextNode___parent___children',
  icon___childrenContentfulIconSvgTextNode___children = 'icon___childrenContentfulIconSvgTextNode___children',
  icon___childrenContentfulIconSvgTextNode___children___id = 'icon___childrenContentfulIconSvgTextNode___children___id',
  icon___childrenContentfulIconSvgTextNode___children___children = 'icon___childrenContentfulIconSvgTextNode___children___children',
  icon___childrenContentfulIconSvgTextNode___internal___content = 'icon___childrenContentfulIconSvgTextNode___internal___content',
  icon___childrenContentfulIconSvgTextNode___internal___contentDigest = 'icon___childrenContentfulIconSvgTextNode___internal___contentDigest',
  icon___childrenContentfulIconSvgTextNode___internal___description = 'icon___childrenContentfulIconSvgTextNode___internal___description',
  icon___childrenContentfulIconSvgTextNode___internal___fieldOwners = 'icon___childrenContentfulIconSvgTextNode___internal___fieldOwners',
  icon___childrenContentfulIconSvgTextNode___internal___ignoreType = 'icon___childrenContentfulIconSvgTextNode___internal___ignoreType',
  icon___childrenContentfulIconSvgTextNode___internal___mediaType = 'icon___childrenContentfulIconSvgTextNode___internal___mediaType',
  icon___childrenContentfulIconSvgTextNode___internal___owner = 'icon___childrenContentfulIconSvgTextNode___internal___owner',
  icon___childrenContentfulIconSvgTextNode___internal___type = 'icon___childrenContentfulIconSvgTextNode___internal___type',
  icon___childrenContentfulIconSvgTextNode___svg = 'icon___childrenContentfulIconSvgTextNode___svg',
  icon___childrenContentfulIconSvgTextNode___sys___type = 'icon___childrenContentfulIconSvgTextNode___sys___type',
  icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark = 'icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark',
  icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___id = 'icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___id',
  icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___excerpt = 'icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___excerpt',
  icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___rawMarkdownBody = 'icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___rawMarkdownBody',
  icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___html = 'icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___html',
  icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___htmlAst = 'icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___htmlAst',
  icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___excerptAst = 'icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___excerptAst',
  icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___headings = 'icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___headings',
  icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___timeToRead = 'icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___timeToRead',
  icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___tableOfContents = 'icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___tableOfContents',
  icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___children = 'icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___children',
  icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___id = 'icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___id',
  icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___excerpt = 'icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___excerpt',
  icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___rawMarkdownBody = 'icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___rawMarkdownBody',
  icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___html = 'icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___html',
  icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___htmlAst = 'icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___htmlAst',
  icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___excerptAst = 'icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___excerptAst',
  icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___headings = 'icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___headings',
  icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___timeToRead = 'icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___timeToRead',
  icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___tableOfContents = 'icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___tableOfContents',
  icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___children = 'icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___children',
  icon___childContentfulIconSvgTextNode___id = 'icon___childContentfulIconSvgTextNode___id',
  icon___childContentfulIconSvgTextNode___parent___id = 'icon___childContentfulIconSvgTextNode___parent___id',
  icon___childContentfulIconSvgTextNode___parent___children = 'icon___childContentfulIconSvgTextNode___parent___children',
  icon___childContentfulIconSvgTextNode___children = 'icon___childContentfulIconSvgTextNode___children',
  icon___childContentfulIconSvgTextNode___children___id = 'icon___childContentfulIconSvgTextNode___children___id',
  icon___childContentfulIconSvgTextNode___children___children = 'icon___childContentfulIconSvgTextNode___children___children',
  icon___childContentfulIconSvgTextNode___internal___content = 'icon___childContentfulIconSvgTextNode___internal___content',
  icon___childContentfulIconSvgTextNode___internal___contentDigest = 'icon___childContentfulIconSvgTextNode___internal___contentDigest',
  icon___childContentfulIconSvgTextNode___internal___description = 'icon___childContentfulIconSvgTextNode___internal___description',
  icon___childContentfulIconSvgTextNode___internal___fieldOwners = 'icon___childContentfulIconSvgTextNode___internal___fieldOwners',
  icon___childContentfulIconSvgTextNode___internal___ignoreType = 'icon___childContentfulIconSvgTextNode___internal___ignoreType',
  icon___childContentfulIconSvgTextNode___internal___mediaType = 'icon___childContentfulIconSvgTextNode___internal___mediaType',
  icon___childContentfulIconSvgTextNode___internal___owner = 'icon___childContentfulIconSvgTextNode___internal___owner',
  icon___childContentfulIconSvgTextNode___internal___type = 'icon___childContentfulIconSvgTextNode___internal___type',
  icon___childContentfulIconSvgTextNode___svg = 'icon___childContentfulIconSvgTextNode___svg',
  icon___childContentfulIconSvgTextNode___sys___type = 'icon___childContentfulIconSvgTextNode___sys___type',
  icon___childContentfulIconSvgTextNode___childrenMarkdownRemark = 'icon___childContentfulIconSvgTextNode___childrenMarkdownRemark',
  icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___id = 'icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___id',
  icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___excerpt = 'icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___excerpt',
  icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___rawMarkdownBody = 'icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___rawMarkdownBody',
  icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___html = 'icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___html',
  icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___htmlAst = 'icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___htmlAst',
  icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___excerptAst = 'icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___excerptAst',
  icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___headings = 'icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___headings',
  icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___timeToRead = 'icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___timeToRead',
  icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___tableOfContents = 'icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___tableOfContents',
  icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___children = 'icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___children',
  icon___childContentfulIconSvgTextNode___childMarkdownRemark___id = 'icon___childContentfulIconSvgTextNode___childMarkdownRemark___id',
  icon___childContentfulIconSvgTextNode___childMarkdownRemark___excerpt = 'icon___childContentfulIconSvgTextNode___childMarkdownRemark___excerpt',
  icon___childContentfulIconSvgTextNode___childMarkdownRemark___rawMarkdownBody = 'icon___childContentfulIconSvgTextNode___childMarkdownRemark___rawMarkdownBody',
  icon___childContentfulIconSvgTextNode___childMarkdownRemark___html = 'icon___childContentfulIconSvgTextNode___childMarkdownRemark___html',
  icon___childContentfulIconSvgTextNode___childMarkdownRemark___htmlAst = 'icon___childContentfulIconSvgTextNode___childMarkdownRemark___htmlAst',
  icon___childContentfulIconSvgTextNode___childMarkdownRemark___excerptAst = 'icon___childContentfulIconSvgTextNode___childMarkdownRemark___excerptAst',
  icon___childContentfulIconSvgTextNode___childMarkdownRemark___headings = 'icon___childContentfulIconSvgTextNode___childMarkdownRemark___headings',
  icon___childContentfulIconSvgTextNode___childMarkdownRemark___timeToRead = 'icon___childContentfulIconSvgTextNode___childMarkdownRemark___timeToRead',
  icon___childContentfulIconSvgTextNode___childMarkdownRemark___tableOfContents = 'icon___childContentfulIconSvgTextNode___childMarkdownRemark___tableOfContents',
  icon___childContentfulIconSvgTextNode___childMarkdownRemark___children = 'icon___childContentfulIconSvgTextNode___childMarkdownRemark___children',
  icon___parent___id = 'icon___parent___id',
  icon___parent___parent___id = 'icon___parent___parent___id',
  icon___parent___parent___children = 'icon___parent___parent___children',
  icon___parent___children = 'icon___parent___children',
  icon___parent___children___id = 'icon___parent___children___id',
  icon___parent___children___children = 'icon___parent___children___children',
  icon___parent___internal___content = 'icon___parent___internal___content',
  icon___parent___internal___contentDigest = 'icon___parent___internal___contentDigest',
  icon___parent___internal___description = 'icon___parent___internal___description',
  icon___parent___internal___fieldOwners = 'icon___parent___internal___fieldOwners',
  icon___parent___internal___ignoreType = 'icon___parent___internal___ignoreType',
  icon___parent___internal___mediaType = 'icon___parent___internal___mediaType',
  icon___parent___internal___owner = 'icon___parent___internal___owner',
  icon___parent___internal___type = 'icon___parent___internal___type',
  icon___children = 'icon___children',
  icon___children___id = 'icon___children___id',
  icon___children___parent___id = 'icon___children___parent___id',
  icon___children___parent___children = 'icon___children___parent___children',
  icon___children___children = 'icon___children___children',
  icon___children___children___id = 'icon___children___children___id',
  icon___children___children___children = 'icon___children___children___children',
  icon___children___internal___content = 'icon___children___internal___content',
  icon___children___internal___contentDigest = 'icon___children___internal___contentDigest',
  icon___children___internal___description = 'icon___children___internal___description',
  icon___children___internal___fieldOwners = 'icon___children___internal___fieldOwners',
  icon___children___internal___ignoreType = 'icon___children___internal___ignoreType',
  icon___children___internal___mediaType = 'icon___children___internal___mediaType',
  icon___children___internal___owner = 'icon___children___internal___owner',
  icon___children___internal___type = 'icon___children___internal___type',
  icon___internal___content = 'icon___internal___content',
  icon___internal___contentDigest = 'icon___internal___contentDigest',
  icon___internal___description = 'icon___internal___description',
  icon___internal___fieldOwners = 'icon___internal___fieldOwners',
  icon___internal___ignoreType = 'icon___internal___ignoreType',
  icon___internal___mediaType = 'icon___internal___mediaType',
  icon___internal___owner = 'icon___internal___owner',
  icon___internal___type = 'icon___internal___type',
  spaceId = 'spaceId',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  sys___type = 'sys___type',
  sys___revision = 'sys___revision',
  sys___contentType___sys___type = 'sys___contentType___sys___type',
  sys___contentType___sys___linkType = 'sys___contentType___sys___linkType',
  sys___contentType___sys___id = 'sys___contentType___sys___id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type'
}

export type ContentfulContactFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  sortKey?: Maybe<IntQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  subName?: Maybe<StringQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<ContentfulIconFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulContactSysFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ContentfulContactFilterListInput = {
  elemMatch?: Maybe<ContentfulContactFilterInput>;
};

export type ContentfulContactGroupConnection = {
  __typename?: 'ContentfulContactGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulContactEdge>;
  nodes: Array<ContentfulContact>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulContactSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulContactFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulContactSys = {
  __typename?: 'ContentfulContactSys';
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulContactSysContentType>;
};

export type ContentfulContactSysContentType = {
  __typename?: 'ContentfulContactSysContentType';
  sys?: Maybe<ContentfulContactSysContentTypeSys>;
};

export type ContentfulContactSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulContactSysContentTypeSysFilterInput>;
};

export type ContentfulContactSysContentTypeSys = {
  __typename?: 'ContentfulContactSysContentTypeSys';
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulContactSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulContactSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulContactSysContentTypeFilterInput>;
};

export type ContentfulContentType = Node & {
  __typename?: 'ContentfulContentType';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  displayField?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulContentTypeSys>;
};

export type ContentfulContentTypeConnection = {
  __typename?: 'ContentfulContentTypeConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulContentTypeEdge>;
  nodes: Array<ContentfulContentType>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulContentTypeGroupConnection>;
};


export type ContentfulContentTypeConnectionDistinctArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


export type ContentfulContentTypeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulContentTypeFieldsEnum;
};

export type ContentfulContentTypeEdge = {
  __typename?: 'ContentfulContentTypeEdge';
  next?: Maybe<ContentfulContentType>;
  node: ContentfulContentType;
  previous?: Maybe<ContentfulContentType>;
};

export enum ContentfulContentTypeFieldsEnum {
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  name = 'name',
  displayField = 'displayField',
  description = 'description',
  sys___type = 'sys___type'
}

export type ContentfulContentTypeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  displayField?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulContentTypeSysFilterInput>;
};

export type ContentfulContentTypeGroupConnection = {
  __typename?: 'ContentfulContentTypeGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulContentTypeEdge>;
  nodes: Array<ContentfulContentType>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulContentTypeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulContentTypeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulContentTypeSys = {
  __typename?: 'ContentfulContentTypeSys';
  type?: Maybe<Scalars['String']>;
};

export type ContentfulContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulEntry = {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
};

export type ContentfulEntryConnection = {
  __typename?: 'ContentfulEntryConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulEntryEdge>;
  nodes: Array<ContentfulEntry>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulEntryGroupConnection>;
};


export type ContentfulEntryConnectionDistinctArgs = {
  field: ContentfulEntryFieldsEnum;
};


export type ContentfulEntryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulEntryFieldsEnum;
};

export type ContentfulEntryEdge = {
  __typename?: 'ContentfulEntryEdge';
  next?: Maybe<ContentfulEntry>;
  node: ContentfulEntry;
  previous?: Maybe<ContentfulEntry>;
};

export enum ContentfulEntryFieldsEnum {
  contentful_id = 'contentful_id',
  id = 'id',
  node_locale = 'node_locale'
}

export type ContentfulEntryFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulEntryGroupConnection = {
  __typename?: 'ContentfulEntryGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulEntryEdge>;
  nodes: Array<ContentfulEntry>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulEntrySortInput = {
  fields?: Maybe<Array<Maybe<ContentfulEntryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulFixed = {
  __typename?: 'ContentfulFixed';
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
};

export type ContentfulFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulFluid = {
  __typename?: 'ContentfulFluid';
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
};

export type ContentfulFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulHello = ContentfulReference & ContentfulEntry & Node & {
  __typename?: 'ContentfulHello';
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  sortKey?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  href?: Maybe<Scalars['String']>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulHelloSys>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulHelloCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulHelloUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulHelloConnection = {
  __typename?: 'ContentfulHelloConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulHelloEdge>;
  nodes: Array<ContentfulHello>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulHelloGroupConnection>;
};


export type ContentfulHelloConnectionDistinctArgs = {
  field: ContentfulHelloFieldsEnum;
};


export type ContentfulHelloConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulHelloFieldsEnum;
};

export type ContentfulHelloEdge = {
  __typename?: 'ContentfulHelloEdge';
  next?: Maybe<ContentfulHello>;
  node: ContentfulHello;
  previous?: Maybe<ContentfulHello>;
};

export enum ContentfulHelloFieldsEnum {
  contentful_id = 'contentful_id',
  id = 'id',
  node_locale = 'node_locale',
  sortKey = 'sortKey',
  name = 'name',
  href = 'href',
  spaceId = 'spaceId',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  sys___type = 'sys___type',
  sys___revision = 'sys___revision',
  sys___contentType___sys___type = 'sys___contentType___sys___type',
  sys___contentType___sys___linkType = 'sys___contentType___sys___linkType',
  sys___contentType___sys___id = 'sys___contentType___sys___id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type'
}

export type ContentfulHelloFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  sortKey?: Maybe<IntQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulHelloSysFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ContentfulHelloGroupConnection = {
  __typename?: 'ContentfulHelloGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulHelloEdge>;
  nodes: Array<ContentfulHello>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulHelloSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulHelloFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulHelloSys = {
  __typename?: 'ContentfulHelloSys';
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulHelloSysContentType>;
};

export type ContentfulHelloSysContentType = {
  __typename?: 'ContentfulHelloSysContentType';
  sys?: Maybe<ContentfulHelloSysContentTypeSys>;
};

export type ContentfulHelloSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulHelloSysContentTypeSysFilterInput>;
};

export type ContentfulHelloSysContentTypeSys = {
  __typename?: 'ContentfulHelloSysContentTypeSys';
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulHelloSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulHelloSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulHelloSysContentTypeFilterInput>;
};

export type ContentfulHistory = ContentfulReference & ContentfulEntry & Node & {
  __typename?: 'ContentfulHistory';
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  subName?: Maybe<Scalars['String']>;
  icon?: Maybe<ContentfulIcon>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulHistorySys>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulHistoryDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulHistoryCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulHistoryUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulHistoryConnection = {
  __typename?: 'ContentfulHistoryConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulHistoryEdge>;
  nodes: Array<ContentfulHistory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulHistoryGroupConnection>;
};


export type ContentfulHistoryConnectionDistinctArgs = {
  field: ContentfulHistoryFieldsEnum;
};


export type ContentfulHistoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulHistoryFieldsEnum;
};

export type ContentfulHistoryEdge = {
  __typename?: 'ContentfulHistoryEdge';
  next?: Maybe<ContentfulHistory>;
  node: ContentfulHistory;
  previous?: Maybe<ContentfulHistory>;
};

export enum ContentfulHistoryFieldsEnum {
  contentful_id = 'contentful_id',
  id = 'id',
  node_locale = 'node_locale',
  name = 'name',
  date = 'date',
  subName = 'subName',
  icon___contentful_id = 'icon___contentful_id',
  icon___id = 'icon___id',
  icon___node_locale = 'icon___node_locale',
  icon___name = 'icon___name',
  icon___what_i_can_do = 'icon___what_i_can_do',
  icon___what_i_can_do___contentful_id = 'icon___what_i_can_do___contentful_id',
  icon___what_i_can_do___id = 'icon___what_i_can_do___id',
  icon___what_i_can_do___node_locale = 'icon___what_i_can_do___node_locale',
  icon___what_i_can_do___sortKey = 'icon___what_i_can_do___sortKey',
  icon___what_i_can_do___name = 'icon___what_i_can_do___name',
  icon___what_i_can_do___subName = 'icon___what_i_can_do___subName',
  icon___what_i_can_do___icon___contentful_id = 'icon___what_i_can_do___icon___contentful_id',
  icon___what_i_can_do___icon___id = 'icon___what_i_can_do___icon___id',
  icon___what_i_can_do___icon___node_locale = 'icon___what_i_can_do___icon___node_locale',
  icon___what_i_can_do___icon___name = 'icon___what_i_can_do___icon___name',
  icon___what_i_can_do___icon___what_i_can_do = 'icon___what_i_can_do___icon___what_i_can_do',
  icon___what_i_can_do___icon___project = 'icon___what_i_can_do___icon___project',
  icon___what_i_can_do___icon___oss = 'icon___what_i_can_do___icon___oss',
  icon___what_i_can_do___icon___spaceId = 'icon___what_i_can_do___icon___spaceId',
  icon___what_i_can_do___icon___createdAt = 'icon___what_i_can_do___icon___createdAt',
  icon___what_i_can_do___icon___updatedAt = 'icon___what_i_can_do___icon___updatedAt',
  icon___what_i_can_do___icon___history = 'icon___what_i_can_do___icon___history',
  icon___what_i_can_do___icon___contact = 'icon___what_i_can_do___icon___contact',
  icon___what_i_can_do___icon___childrenContentfulIconSvgTextNode = 'icon___what_i_can_do___icon___childrenContentfulIconSvgTextNode',
  icon___what_i_can_do___icon___children = 'icon___what_i_can_do___icon___children',
  icon___what_i_can_do___spaceId = 'icon___what_i_can_do___spaceId',
  icon___what_i_can_do___createdAt = 'icon___what_i_can_do___createdAt',
  icon___what_i_can_do___updatedAt = 'icon___what_i_can_do___updatedAt',
  icon___what_i_can_do___sys___type = 'icon___what_i_can_do___sys___type',
  icon___what_i_can_do___sys___revision = 'icon___what_i_can_do___sys___revision',
  icon___what_i_can_do___parent___id = 'icon___what_i_can_do___parent___id',
  icon___what_i_can_do___parent___children = 'icon___what_i_can_do___parent___children',
  icon___what_i_can_do___children = 'icon___what_i_can_do___children',
  icon___what_i_can_do___children___id = 'icon___what_i_can_do___children___id',
  icon___what_i_can_do___children___children = 'icon___what_i_can_do___children___children',
  icon___what_i_can_do___internal___content = 'icon___what_i_can_do___internal___content',
  icon___what_i_can_do___internal___contentDigest = 'icon___what_i_can_do___internal___contentDigest',
  icon___what_i_can_do___internal___description = 'icon___what_i_can_do___internal___description',
  icon___what_i_can_do___internal___fieldOwners = 'icon___what_i_can_do___internal___fieldOwners',
  icon___what_i_can_do___internal___ignoreType = 'icon___what_i_can_do___internal___ignoreType',
  icon___what_i_can_do___internal___mediaType = 'icon___what_i_can_do___internal___mediaType',
  icon___what_i_can_do___internal___owner = 'icon___what_i_can_do___internal___owner',
  icon___what_i_can_do___internal___type = 'icon___what_i_can_do___internal___type',
  icon___project = 'icon___project',
  icon___project___contentful_id = 'icon___project___contentful_id',
  icon___project___id = 'icon___project___id',
  icon___project___node_locale = 'icon___project___node_locale',
  icon___project___name = 'icon___project___name',
  icon___project___subName = 'icon___project___subName',
  icon___project___startDate = 'icon___project___startDate',
  icon___project___endDate = 'icon___project___endDate',
  icon___project___tags = 'icon___project___tags',
  icon___project___tags___contentful_id = 'icon___project___tags___contentful_id',
  icon___project___tags___id = 'icon___project___tags___id',
  icon___project___tags___node_locale = 'icon___project___tags___node_locale',
  icon___project___tags___name = 'icon___project___tags___name',
  icon___project___tags___level = 'icon___project___tags___level',
  icon___project___tags___skill_map = 'icon___project___tags___skill_map',
  icon___project___tags___project = 'icon___project___tags___project',
  icon___project___tags___spaceId = 'icon___project___tags___spaceId',
  icon___project___tags___createdAt = 'icon___project___tags___createdAt',
  icon___project___tags___updatedAt = 'icon___project___tags___updatedAt',
  icon___project___tags___oss = 'icon___project___tags___oss',
  icon___project___tags___children = 'icon___project___tags___children',
  icon___project___icon___contentful_id = 'icon___project___icon___contentful_id',
  icon___project___icon___id = 'icon___project___icon___id',
  icon___project___icon___node_locale = 'icon___project___icon___node_locale',
  icon___project___icon___name = 'icon___project___icon___name',
  icon___project___icon___what_i_can_do = 'icon___project___icon___what_i_can_do',
  icon___project___icon___project = 'icon___project___icon___project',
  icon___project___icon___oss = 'icon___project___icon___oss',
  icon___project___icon___spaceId = 'icon___project___icon___spaceId',
  icon___project___icon___createdAt = 'icon___project___icon___createdAt',
  icon___project___icon___updatedAt = 'icon___project___icon___updatedAt',
  icon___project___icon___history = 'icon___project___icon___history',
  icon___project___icon___contact = 'icon___project___icon___contact',
  icon___project___icon___childrenContentfulIconSvgTextNode = 'icon___project___icon___childrenContentfulIconSvgTextNode',
  icon___project___icon___children = 'icon___project___icon___children',
  icon___project___detail___id = 'icon___project___detail___id',
  icon___project___detail___children = 'icon___project___detail___children',
  icon___project___detail___detail = 'icon___project___detail___detail',
  icon___project___detail___childrenMarkdownRemark = 'icon___project___detail___childrenMarkdownRemark',
  icon___project___spaceId = 'icon___project___spaceId',
  icon___project___createdAt = 'icon___project___createdAt',
  icon___project___updatedAt = 'icon___project___updatedAt',
  icon___project___sys___type = 'icon___project___sys___type',
  icon___project___sys___revision = 'icon___project___sys___revision',
  icon___project___childrenContentfulProjectDetailTextNode = 'icon___project___childrenContentfulProjectDetailTextNode',
  icon___project___childrenContentfulProjectDetailTextNode___id = 'icon___project___childrenContentfulProjectDetailTextNode___id',
  icon___project___childrenContentfulProjectDetailTextNode___children = 'icon___project___childrenContentfulProjectDetailTextNode___children',
  icon___project___childrenContentfulProjectDetailTextNode___detail = 'icon___project___childrenContentfulProjectDetailTextNode___detail',
  icon___project___childrenContentfulProjectDetailTextNode___childrenMarkdownRemark = 'icon___project___childrenContentfulProjectDetailTextNode___childrenMarkdownRemark',
  icon___project___childContentfulProjectDetailTextNode___id = 'icon___project___childContentfulProjectDetailTextNode___id',
  icon___project___childContentfulProjectDetailTextNode___children = 'icon___project___childContentfulProjectDetailTextNode___children',
  icon___project___childContentfulProjectDetailTextNode___detail = 'icon___project___childContentfulProjectDetailTextNode___detail',
  icon___project___childContentfulProjectDetailTextNode___childrenMarkdownRemark = 'icon___project___childContentfulProjectDetailTextNode___childrenMarkdownRemark',
  icon___project___parent___id = 'icon___project___parent___id',
  icon___project___parent___children = 'icon___project___parent___children',
  icon___project___children = 'icon___project___children',
  icon___project___children___id = 'icon___project___children___id',
  icon___project___children___children = 'icon___project___children___children',
  icon___project___internal___content = 'icon___project___internal___content',
  icon___project___internal___contentDigest = 'icon___project___internal___contentDigest',
  icon___project___internal___description = 'icon___project___internal___description',
  icon___project___internal___fieldOwners = 'icon___project___internal___fieldOwners',
  icon___project___internal___ignoreType = 'icon___project___internal___ignoreType',
  icon___project___internal___mediaType = 'icon___project___internal___mediaType',
  icon___project___internal___owner = 'icon___project___internal___owner',
  icon___project___internal___type = 'icon___project___internal___type',
  icon___oss = 'icon___oss',
  icon___oss___contentful_id = 'icon___oss___contentful_id',
  icon___oss___id = 'icon___oss___id',
  icon___oss___node_locale = 'icon___oss___node_locale',
  icon___oss___name = 'icon___oss___name',
  icon___oss___subName = 'icon___oss___subName',
  icon___oss___startDate = 'icon___oss___startDate',
  icon___oss___href = 'icon___oss___href',
  icon___oss___tags = 'icon___oss___tags',
  icon___oss___tags___contentful_id = 'icon___oss___tags___contentful_id',
  icon___oss___tags___id = 'icon___oss___tags___id',
  icon___oss___tags___node_locale = 'icon___oss___tags___node_locale',
  icon___oss___tags___name = 'icon___oss___tags___name',
  icon___oss___tags___level = 'icon___oss___tags___level',
  icon___oss___tags___skill_map = 'icon___oss___tags___skill_map',
  icon___oss___tags___project = 'icon___oss___tags___project',
  icon___oss___tags___spaceId = 'icon___oss___tags___spaceId',
  icon___oss___tags___createdAt = 'icon___oss___tags___createdAt',
  icon___oss___tags___updatedAt = 'icon___oss___tags___updatedAt',
  icon___oss___tags___oss = 'icon___oss___tags___oss',
  icon___oss___tags___children = 'icon___oss___tags___children',
  icon___oss___icon___contentful_id = 'icon___oss___icon___contentful_id',
  icon___oss___icon___id = 'icon___oss___icon___id',
  icon___oss___icon___node_locale = 'icon___oss___icon___node_locale',
  icon___oss___icon___name = 'icon___oss___icon___name',
  icon___oss___icon___what_i_can_do = 'icon___oss___icon___what_i_can_do',
  icon___oss___icon___project = 'icon___oss___icon___project',
  icon___oss___icon___oss = 'icon___oss___icon___oss',
  icon___oss___icon___spaceId = 'icon___oss___icon___spaceId',
  icon___oss___icon___createdAt = 'icon___oss___icon___createdAt',
  icon___oss___icon___updatedAt = 'icon___oss___icon___updatedAt',
  icon___oss___icon___history = 'icon___oss___icon___history',
  icon___oss___icon___contact = 'icon___oss___icon___contact',
  icon___oss___icon___childrenContentfulIconSvgTextNode = 'icon___oss___icon___childrenContentfulIconSvgTextNode',
  icon___oss___icon___children = 'icon___oss___icon___children',
  icon___oss___image___contentful_id = 'icon___oss___image___contentful_id',
  icon___oss___image___id = 'icon___oss___image___id',
  icon___oss___image___spaceId = 'icon___oss___image___spaceId',
  icon___oss___image___createdAt = 'icon___oss___image___createdAt',
  icon___oss___image___updatedAt = 'icon___oss___image___updatedAt',
  icon___oss___image___title = 'icon___oss___image___title',
  icon___oss___image___description = 'icon___oss___image___description',
  icon___oss___image___node_locale = 'icon___oss___image___node_locale',
  icon___oss___image___gatsbyImageData = 'icon___oss___image___gatsbyImageData',
  icon___oss___image___children = 'icon___oss___image___children',
  icon___oss___detail___id = 'icon___oss___detail___id',
  icon___oss___detail___children = 'icon___oss___detail___children',
  icon___oss___detail___detail = 'icon___oss___detail___detail',
  icon___oss___detail___childrenMarkdownRemark = 'icon___oss___detail___childrenMarkdownRemark',
  icon___oss___spaceId = 'icon___oss___spaceId',
  icon___oss___createdAt = 'icon___oss___createdAt',
  icon___oss___updatedAt = 'icon___oss___updatedAt',
  icon___oss___sys___type = 'icon___oss___sys___type',
  icon___oss___sys___revision = 'icon___oss___sys___revision',
  icon___oss___childrenContentfulOssDetailTextNode = 'icon___oss___childrenContentfulOssDetailTextNode',
  icon___oss___childrenContentfulOssDetailTextNode___id = 'icon___oss___childrenContentfulOssDetailTextNode___id',
  icon___oss___childrenContentfulOssDetailTextNode___children = 'icon___oss___childrenContentfulOssDetailTextNode___children',
  icon___oss___childrenContentfulOssDetailTextNode___detail = 'icon___oss___childrenContentfulOssDetailTextNode___detail',
  icon___oss___childrenContentfulOssDetailTextNode___childrenMarkdownRemark = 'icon___oss___childrenContentfulOssDetailTextNode___childrenMarkdownRemark',
  icon___oss___childContentfulOssDetailTextNode___id = 'icon___oss___childContentfulOssDetailTextNode___id',
  icon___oss___childContentfulOssDetailTextNode___children = 'icon___oss___childContentfulOssDetailTextNode___children',
  icon___oss___childContentfulOssDetailTextNode___detail = 'icon___oss___childContentfulOssDetailTextNode___detail',
  icon___oss___childContentfulOssDetailTextNode___childrenMarkdownRemark = 'icon___oss___childContentfulOssDetailTextNode___childrenMarkdownRemark',
  icon___oss___parent___id = 'icon___oss___parent___id',
  icon___oss___parent___children = 'icon___oss___parent___children',
  icon___oss___children = 'icon___oss___children',
  icon___oss___children___id = 'icon___oss___children___id',
  icon___oss___children___children = 'icon___oss___children___children',
  icon___oss___internal___content = 'icon___oss___internal___content',
  icon___oss___internal___contentDigest = 'icon___oss___internal___contentDigest',
  icon___oss___internal___description = 'icon___oss___internal___description',
  icon___oss___internal___fieldOwners = 'icon___oss___internal___fieldOwners',
  icon___oss___internal___ignoreType = 'icon___oss___internal___ignoreType',
  icon___oss___internal___mediaType = 'icon___oss___internal___mediaType',
  icon___oss___internal___owner = 'icon___oss___internal___owner',
  icon___oss___internal___type = 'icon___oss___internal___type',
  icon___svg___id = 'icon___svg___id',
  icon___svg___parent___id = 'icon___svg___parent___id',
  icon___svg___parent___children = 'icon___svg___parent___children',
  icon___svg___children = 'icon___svg___children',
  icon___svg___children___id = 'icon___svg___children___id',
  icon___svg___children___children = 'icon___svg___children___children',
  icon___svg___internal___content = 'icon___svg___internal___content',
  icon___svg___internal___contentDigest = 'icon___svg___internal___contentDigest',
  icon___svg___internal___description = 'icon___svg___internal___description',
  icon___svg___internal___fieldOwners = 'icon___svg___internal___fieldOwners',
  icon___svg___internal___ignoreType = 'icon___svg___internal___ignoreType',
  icon___svg___internal___mediaType = 'icon___svg___internal___mediaType',
  icon___svg___internal___owner = 'icon___svg___internal___owner',
  icon___svg___internal___type = 'icon___svg___internal___type',
  icon___svg___svg = 'icon___svg___svg',
  icon___svg___sys___type = 'icon___svg___sys___type',
  icon___svg___childrenMarkdownRemark = 'icon___svg___childrenMarkdownRemark',
  icon___svg___childrenMarkdownRemark___id = 'icon___svg___childrenMarkdownRemark___id',
  icon___svg___childrenMarkdownRemark___excerpt = 'icon___svg___childrenMarkdownRemark___excerpt',
  icon___svg___childrenMarkdownRemark___rawMarkdownBody = 'icon___svg___childrenMarkdownRemark___rawMarkdownBody',
  icon___svg___childrenMarkdownRemark___html = 'icon___svg___childrenMarkdownRemark___html',
  icon___svg___childrenMarkdownRemark___htmlAst = 'icon___svg___childrenMarkdownRemark___htmlAst',
  icon___svg___childrenMarkdownRemark___excerptAst = 'icon___svg___childrenMarkdownRemark___excerptAst',
  icon___svg___childrenMarkdownRemark___headings = 'icon___svg___childrenMarkdownRemark___headings',
  icon___svg___childrenMarkdownRemark___timeToRead = 'icon___svg___childrenMarkdownRemark___timeToRead',
  icon___svg___childrenMarkdownRemark___tableOfContents = 'icon___svg___childrenMarkdownRemark___tableOfContents',
  icon___svg___childrenMarkdownRemark___children = 'icon___svg___childrenMarkdownRemark___children',
  icon___svg___childMarkdownRemark___id = 'icon___svg___childMarkdownRemark___id',
  icon___svg___childMarkdownRemark___excerpt = 'icon___svg___childMarkdownRemark___excerpt',
  icon___svg___childMarkdownRemark___rawMarkdownBody = 'icon___svg___childMarkdownRemark___rawMarkdownBody',
  icon___svg___childMarkdownRemark___html = 'icon___svg___childMarkdownRemark___html',
  icon___svg___childMarkdownRemark___htmlAst = 'icon___svg___childMarkdownRemark___htmlAst',
  icon___svg___childMarkdownRemark___excerptAst = 'icon___svg___childMarkdownRemark___excerptAst',
  icon___svg___childMarkdownRemark___headings = 'icon___svg___childMarkdownRemark___headings',
  icon___svg___childMarkdownRemark___timeToRead = 'icon___svg___childMarkdownRemark___timeToRead',
  icon___svg___childMarkdownRemark___tableOfContents = 'icon___svg___childMarkdownRemark___tableOfContents',
  icon___svg___childMarkdownRemark___children = 'icon___svg___childMarkdownRemark___children',
  icon___spaceId = 'icon___spaceId',
  icon___createdAt = 'icon___createdAt',
  icon___updatedAt = 'icon___updatedAt',
  icon___sys___type = 'icon___sys___type',
  icon___sys___revision = 'icon___sys___revision',
  icon___history = 'icon___history',
  icon___history___contentful_id = 'icon___history___contentful_id',
  icon___history___id = 'icon___history___id',
  icon___history___node_locale = 'icon___history___node_locale',
  icon___history___name = 'icon___history___name',
  icon___history___date = 'icon___history___date',
  icon___history___subName = 'icon___history___subName',
  icon___history___icon___contentful_id = 'icon___history___icon___contentful_id',
  icon___history___icon___id = 'icon___history___icon___id',
  icon___history___icon___node_locale = 'icon___history___icon___node_locale',
  icon___history___icon___name = 'icon___history___icon___name',
  icon___history___icon___what_i_can_do = 'icon___history___icon___what_i_can_do',
  icon___history___icon___project = 'icon___history___icon___project',
  icon___history___icon___oss = 'icon___history___icon___oss',
  icon___history___icon___spaceId = 'icon___history___icon___spaceId',
  icon___history___icon___createdAt = 'icon___history___icon___createdAt',
  icon___history___icon___updatedAt = 'icon___history___icon___updatedAt',
  icon___history___icon___history = 'icon___history___icon___history',
  icon___history___icon___contact = 'icon___history___icon___contact',
  icon___history___icon___childrenContentfulIconSvgTextNode = 'icon___history___icon___childrenContentfulIconSvgTextNode',
  icon___history___icon___children = 'icon___history___icon___children',
  icon___history___spaceId = 'icon___history___spaceId',
  icon___history___createdAt = 'icon___history___createdAt',
  icon___history___updatedAt = 'icon___history___updatedAt',
  icon___history___sys___type = 'icon___history___sys___type',
  icon___history___sys___revision = 'icon___history___sys___revision',
  icon___history___parent___id = 'icon___history___parent___id',
  icon___history___parent___children = 'icon___history___parent___children',
  icon___history___children = 'icon___history___children',
  icon___history___children___id = 'icon___history___children___id',
  icon___history___children___children = 'icon___history___children___children',
  icon___history___internal___content = 'icon___history___internal___content',
  icon___history___internal___contentDigest = 'icon___history___internal___contentDigest',
  icon___history___internal___description = 'icon___history___internal___description',
  icon___history___internal___fieldOwners = 'icon___history___internal___fieldOwners',
  icon___history___internal___ignoreType = 'icon___history___internal___ignoreType',
  icon___history___internal___mediaType = 'icon___history___internal___mediaType',
  icon___history___internal___owner = 'icon___history___internal___owner',
  icon___history___internal___type = 'icon___history___internal___type',
  icon___contact = 'icon___contact',
  icon___contact___contentful_id = 'icon___contact___contentful_id',
  icon___contact___id = 'icon___contact___id',
  icon___contact___node_locale = 'icon___contact___node_locale',
  icon___contact___sortKey = 'icon___contact___sortKey',
  icon___contact___name = 'icon___contact___name',
  icon___contact___subName = 'icon___contact___subName',
  icon___contact___href = 'icon___contact___href',
  icon___contact___icon___contentful_id = 'icon___contact___icon___contentful_id',
  icon___contact___icon___id = 'icon___contact___icon___id',
  icon___contact___icon___node_locale = 'icon___contact___icon___node_locale',
  icon___contact___icon___name = 'icon___contact___icon___name',
  icon___contact___icon___what_i_can_do = 'icon___contact___icon___what_i_can_do',
  icon___contact___icon___project = 'icon___contact___icon___project',
  icon___contact___icon___oss = 'icon___contact___icon___oss',
  icon___contact___icon___spaceId = 'icon___contact___icon___spaceId',
  icon___contact___icon___createdAt = 'icon___contact___icon___createdAt',
  icon___contact___icon___updatedAt = 'icon___contact___icon___updatedAt',
  icon___contact___icon___history = 'icon___contact___icon___history',
  icon___contact___icon___contact = 'icon___contact___icon___contact',
  icon___contact___icon___childrenContentfulIconSvgTextNode = 'icon___contact___icon___childrenContentfulIconSvgTextNode',
  icon___contact___icon___children = 'icon___contact___icon___children',
  icon___contact___spaceId = 'icon___contact___spaceId',
  icon___contact___createdAt = 'icon___contact___createdAt',
  icon___contact___updatedAt = 'icon___contact___updatedAt',
  icon___contact___sys___type = 'icon___contact___sys___type',
  icon___contact___sys___revision = 'icon___contact___sys___revision',
  icon___contact___parent___id = 'icon___contact___parent___id',
  icon___contact___parent___children = 'icon___contact___parent___children',
  icon___contact___children = 'icon___contact___children',
  icon___contact___children___id = 'icon___contact___children___id',
  icon___contact___children___children = 'icon___contact___children___children',
  icon___contact___internal___content = 'icon___contact___internal___content',
  icon___contact___internal___contentDigest = 'icon___contact___internal___contentDigest',
  icon___contact___internal___description = 'icon___contact___internal___description',
  icon___contact___internal___fieldOwners = 'icon___contact___internal___fieldOwners',
  icon___contact___internal___ignoreType = 'icon___contact___internal___ignoreType',
  icon___contact___internal___mediaType = 'icon___contact___internal___mediaType',
  icon___contact___internal___owner = 'icon___contact___internal___owner',
  icon___contact___internal___type = 'icon___contact___internal___type',
  icon___childrenContentfulIconSvgTextNode = 'icon___childrenContentfulIconSvgTextNode',
  icon___childrenContentfulIconSvgTextNode___id = 'icon___childrenContentfulIconSvgTextNode___id',
  icon___childrenContentfulIconSvgTextNode___parent___id = 'icon___childrenContentfulIconSvgTextNode___parent___id',
  icon___childrenContentfulIconSvgTextNode___parent___children = 'icon___childrenContentfulIconSvgTextNode___parent___children',
  icon___childrenContentfulIconSvgTextNode___children = 'icon___childrenContentfulIconSvgTextNode___children',
  icon___childrenContentfulIconSvgTextNode___children___id = 'icon___childrenContentfulIconSvgTextNode___children___id',
  icon___childrenContentfulIconSvgTextNode___children___children = 'icon___childrenContentfulIconSvgTextNode___children___children',
  icon___childrenContentfulIconSvgTextNode___internal___content = 'icon___childrenContentfulIconSvgTextNode___internal___content',
  icon___childrenContentfulIconSvgTextNode___internal___contentDigest = 'icon___childrenContentfulIconSvgTextNode___internal___contentDigest',
  icon___childrenContentfulIconSvgTextNode___internal___description = 'icon___childrenContentfulIconSvgTextNode___internal___description',
  icon___childrenContentfulIconSvgTextNode___internal___fieldOwners = 'icon___childrenContentfulIconSvgTextNode___internal___fieldOwners',
  icon___childrenContentfulIconSvgTextNode___internal___ignoreType = 'icon___childrenContentfulIconSvgTextNode___internal___ignoreType',
  icon___childrenContentfulIconSvgTextNode___internal___mediaType = 'icon___childrenContentfulIconSvgTextNode___internal___mediaType',
  icon___childrenContentfulIconSvgTextNode___internal___owner = 'icon___childrenContentfulIconSvgTextNode___internal___owner',
  icon___childrenContentfulIconSvgTextNode___internal___type = 'icon___childrenContentfulIconSvgTextNode___internal___type',
  icon___childrenContentfulIconSvgTextNode___svg = 'icon___childrenContentfulIconSvgTextNode___svg',
  icon___childrenContentfulIconSvgTextNode___sys___type = 'icon___childrenContentfulIconSvgTextNode___sys___type',
  icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark = 'icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark',
  icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___id = 'icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___id',
  icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___excerpt = 'icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___excerpt',
  icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___rawMarkdownBody = 'icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___rawMarkdownBody',
  icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___html = 'icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___html',
  icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___htmlAst = 'icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___htmlAst',
  icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___excerptAst = 'icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___excerptAst',
  icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___headings = 'icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___headings',
  icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___timeToRead = 'icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___timeToRead',
  icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___tableOfContents = 'icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___tableOfContents',
  icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___children = 'icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___children',
  icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___id = 'icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___id',
  icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___excerpt = 'icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___excerpt',
  icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___rawMarkdownBody = 'icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___rawMarkdownBody',
  icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___html = 'icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___html',
  icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___htmlAst = 'icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___htmlAst',
  icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___excerptAst = 'icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___excerptAst',
  icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___headings = 'icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___headings',
  icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___timeToRead = 'icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___timeToRead',
  icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___tableOfContents = 'icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___tableOfContents',
  icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___children = 'icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___children',
  icon___childContentfulIconSvgTextNode___id = 'icon___childContentfulIconSvgTextNode___id',
  icon___childContentfulIconSvgTextNode___parent___id = 'icon___childContentfulIconSvgTextNode___parent___id',
  icon___childContentfulIconSvgTextNode___parent___children = 'icon___childContentfulIconSvgTextNode___parent___children',
  icon___childContentfulIconSvgTextNode___children = 'icon___childContentfulIconSvgTextNode___children',
  icon___childContentfulIconSvgTextNode___children___id = 'icon___childContentfulIconSvgTextNode___children___id',
  icon___childContentfulIconSvgTextNode___children___children = 'icon___childContentfulIconSvgTextNode___children___children',
  icon___childContentfulIconSvgTextNode___internal___content = 'icon___childContentfulIconSvgTextNode___internal___content',
  icon___childContentfulIconSvgTextNode___internal___contentDigest = 'icon___childContentfulIconSvgTextNode___internal___contentDigest',
  icon___childContentfulIconSvgTextNode___internal___description = 'icon___childContentfulIconSvgTextNode___internal___description',
  icon___childContentfulIconSvgTextNode___internal___fieldOwners = 'icon___childContentfulIconSvgTextNode___internal___fieldOwners',
  icon___childContentfulIconSvgTextNode___internal___ignoreType = 'icon___childContentfulIconSvgTextNode___internal___ignoreType',
  icon___childContentfulIconSvgTextNode___internal___mediaType = 'icon___childContentfulIconSvgTextNode___internal___mediaType',
  icon___childContentfulIconSvgTextNode___internal___owner = 'icon___childContentfulIconSvgTextNode___internal___owner',
  icon___childContentfulIconSvgTextNode___internal___type = 'icon___childContentfulIconSvgTextNode___internal___type',
  icon___childContentfulIconSvgTextNode___svg = 'icon___childContentfulIconSvgTextNode___svg',
  icon___childContentfulIconSvgTextNode___sys___type = 'icon___childContentfulIconSvgTextNode___sys___type',
  icon___childContentfulIconSvgTextNode___childrenMarkdownRemark = 'icon___childContentfulIconSvgTextNode___childrenMarkdownRemark',
  icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___id = 'icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___id',
  icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___excerpt = 'icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___excerpt',
  icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___rawMarkdownBody = 'icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___rawMarkdownBody',
  icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___html = 'icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___html',
  icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___htmlAst = 'icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___htmlAst',
  icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___excerptAst = 'icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___excerptAst',
  icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___headings = 'icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___headings',
  icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___timeToRead = 'icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___timeToRead',
  icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___tableOfContents = 'icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___tableOfContents',
  icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___children = 'icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___children',
  icon___childContentfulIconSvgTextNode___childMarkdownRemark___id = 'icon___childContentfulIconSvgTextNode___childMarkdownRemark___id',
  icon___childContentfulIconSvgTextNode___childMarkdownRemark___excerpt = 'icon___childContentfulIconSvgTextNode___childMarkdownRemark___excerpt',
  icon___childContentfulIconSvgTextNode___childMarkdownRemark___rawMarkdownBody = 'icon___childContentfulIconSvgTextNode___childMarkdownRemark___rawMarkdownBody',
  icon___childContentfulIconSvgTextNode___childMarkdownRemark___html = 'icon___childContentfulIconSvgTextNode___childMarkdownRemark___html',
  icon___childContentfulIconSvgTextNode___childMarkdownRemark___htmlAst = 'icon___childContentfulIconSvgTextNode___childMarkdownRemark___htmlAst',
  icon___childContentfulIconSvgTextNode___childMarkdownRemark___excerptAst = 'icon___childContentfulIconSvgTextNode___childMarkdownRemark___excerptAst',
  icon___childContentfulIconSvgTextNode___childMarkdownRemark___headings = 'icon___childContentfulIconSvgTextNode___childMarkdownRemark___headings',
  icon___childContentfulIconSvgTextNode___childMarkdownRemark___timeToRead = 'icon___childContentfulIconSvgTextNode___childMarkdownRemark___timeToRead',
  icon___childContentfulIconSvgTextNode___childMarkdownRemark___tableOfContents = 'icon___childContentfulIconSvgTextNode___childMarkdownRemark___tableOfContents',
  icon___childContentfulIconSvgTextNode___childMarkdownRemark___children = 'icon___childContentfulIconSvgTextNode___childMarkdownRemark___children',
  icon___parent___id = 'icon___parent___id',
  icon___parent___parent___id = 'icon___parent___parent___id',
  icon___parent___parent___children = 'icon___parent___parent___children',
  icon___parent___children = 'icon___parent___children',
  icon___parent___children___id = 'icon___parent___children___id',
  icon___parent___children___children = 'icon___parent___children___children',
  icon___parent___internal___content = 'icon___parent___internal___content',
  icon___parent___internal___contentDigest = 'icon___parent___internal___contentDigest',
  icon___parent___internal___description = 'icon___parent___internal___description',
  icon___parent___internal___fieldOwners = 'icon___parent___internal___fieldOwners',
  icon___parent___internal___ignoreType = 'icon___parent___internal___ignoreType',
  icon___parent___internal___mediaType = 'icon___parent___internal___mediaType',
  icon___parent___internal___owner = 'icon___parent___internal___owner',
  icon___parent___internal___type = 'icon___parent___internal___type',
  icon___children = 'icon___children',
  icon___children___id = 'icon___children___id',
  icon___children___parent___id = 'icon___children___parent___id',
  icon___children___parent___children = 'icon___children___parent___children',
  icon___children___children = 'icon___children___children',
  icon___children___children___id = 'icon___children___children___id',
  icon___children___children___children = 'icon___children___children___children',
  icon___children___internal___content = 'icon___children___internal___content',
  icon___children___internal___contentDigest = 'icon___children___internal___contentDigest',
  icon___children___internal___description = 'icon___children___internal___description',
  icon___children___internal___fieldOwners = 'icon___children___internal___fieldOwners',
  icon___children___internal___ignoreType = 'icon___children___internal___ignoreType',
  icon___children___internal___mediaType = 'icon___children___internal___mediaType',
  icon___children___internal___owner = 'icon___children___internal___owner',
  icon___children___internal___type = 'icon___children___internal___type',
  icon___internal___content = 'icon___internal___content',
  icon___internal___contentDigest = 'icon___internal___contentDigest',
  icon___internal___description = 'icon___internal___description',
  icon___internal___fieldOwners = 'icon___internal___fieldOwners',
  icon___internal___ignoreType = 'icon___internal___ignoreType',
  icon___internal___mediaType = 'icon___internal___mediaType',
  icon___internal___owner = 'icon___internal___owner',
  icon___internal___type = 'icon___internal___type',
  spaceId = 'spaceId',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  sys___type = 'sys___type',
  sys___revision = 'sys___revision',
  sys___contentType___sys___type = 'sys___contentType___sys___type',
  sys___contentType___sys___linkType = 'sys___contentType___sys___linkType',
  sys___contentType___sys___id = 'sys___contentType___sys___id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type'
}

export type ContentfulHistoryFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  subName?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<ContentfulIconFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulHistorySysFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ContentfulHistoryFilterListInput = {
  elemMatch?: Maybe<ContentfulHistoryFilterInput>;
};

export type ContentfulHistoryGroupConnection = {
  __typename?: 'ContentfulHistoryGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulHistoryEdge>;
  nodes: Array<ContentfulHistory>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulHistorySortInput = {
  fields?: Maybe<Array<Maybe<ContentfulHistoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulHistorySys = {
  __typename?: 'ContentfulHistorySys';
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulHistorySysContentType>;
};

export type ContentfulHistorySysContentType = {
  __typename?: 'ContentfulHistorySysContentType';
  sys?: Maybe<ContentfulHistorySysContentTypeSys>;
};

export type ContentfulHistorySysContentTypeFilterInput = {
  sys?: Maybe<ContentfulHistorySysContentTypeSysFilterInput>;
};

export type ContentfulHistorySysContentTypeSys = {
  __typename?: 'ContentfulHistorySysContentTypeSys';
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulHistorySysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulHistorySysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulHistorySysContentTypeFilterInput>;
};

export type ContentfulIcon = ContentfulReference & ContentfulEntry & Node & {
  __typename?: 'ContentfulIcon';
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  what_i_can_do?: Maybe<Array<Maybe<ContentfulWhatICanDo>>>;
  project?: Maybe<Array<Maybe<ContentfulProject>>>;
  oss?: Maybe<Array<Maybe<ContentfulOss>>>;
  svg?: Maybe<ContentfulIconSvgTextNode>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulIconSys>;
  history?: Maybe<Array<Maybe<ContentfulHistory>>>;
  contact?: Maybe<Array<Maybe<ContentfulContact>>>;
  /** Returns all children nodes filtered by type contentfulIconSvgTextNode */
  childrenContentfulIconSvgTextNode?: Maybe<Array<Maybe<ContentfulIconSvgTextNode>>>;
  /** Returns the first child node of type contentfulIconSvgTextNode or null if there are no children of given type on this node */
  childContentfulIconSvgTextNode?: Maybe<ContentfulIconSvgTextNode>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulIconCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulIconUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulIconConnection = {
  __typename?: 'ContentfulIconConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulIconEdge>;
  nodes: Array<ContentfulIcon>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulIconGroupConnection>;
};


export type ContentfulIconConnectionDistinctArgs = {
  field: ContentfulIconFieldsEnum;
};


export type ContentfulIconConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulIconFieldsEnum;
};

export type ContentfulIconEdge = {
  __typename?: 'ContentfulIconEdge';
  next?: Maybe<ContentfulIcon>;
  node: ContentfulIcon;
  previous?: Maybe<ContentfulIcon>;
};

export enum ContentfulIconFieldsEnum {
  contentful_id = 'contentful_id',
  id = 'id',
  node_locale = 'node_locale',
  name = 'name',
  what_i_can_do = 'what_i_can_do',
  what_i_can_do___contentful_id = 'what_i_can_do___contentful_id',
  what_i_can_do___id = 'what_i_can_do___id',
  what_i_can_do___node_locale = 'what_i_can_do___node_locale',
  what_i_can_do___sortKey = 'what_i_can_do___sortKey',
  what_i_can_do___name = 'what_i_can_do___name',
  what_i_can_do___subName = 'what_i_can_do___subName',
  what_i_can_do___icon___contentful_id = 'what_i_can_do___icon___contentful_id',
  what_i_can_do___icon___id = 'what_i_can_do___icon___id',
  what_i_can_do___icon___node_locale = 'what_i_can_do___icon___node_locale',
  what_i_can_do___icon___name = 'what_i_can_do___icon___name',
  what_i_can_do___icon___what_i_can_do = 'what_i_can_do___icon___what_i_can_do',
  what_i_can_do___icon___what_i_can_do___contentful_id = 'what_i_can_do___icon___what_i_can_do___contentful_id',
  what_i_can_do___icon___what_i_can_do___id = 'what_i_can_do___icon___what_i_can_do___id',
  what_i_can_do___icon___what_i_can_do___node_locale = 'what_i_can_do___icon___what_i_can_do___node_locale',
  what_i_can_do___icon___what_i_can_do___sortKey = 'what_i_can_do___icon___what_i_can_do___sortKey',
  what_i_can_do___icon___what_i_can_do___name = 'what_i_can_do___icon___what_i_can_do___name',
  what_i_can_do___icon___what_i_can_do___subName = 'what_i_can_do___icon___what_i_can_do___subName',
  what_i_can_do___icon___what_i_can_do___spaceId = 'what_i_can_do___icon___what_i_can_do___spaceId',
  what_i_can_do___icon___what_i_can_do___createdAt = 'what_i_can_do___icon___what_i_can_do___createdAt',
  what_i_can_do___icon___what_i_can_do___updatedAt = 'what_i_can_do___icon___what_i_can_do___updatedAt',
  what_i_can_do___icon___what_i_can_do___children = 'what_i_can_do___icon___what_i_can_do___children',
  what_i_can_do___icon___project = 'what_i_can_do___icon___project',
  what_i_can_do___icon___project___contentful_id = 'what_i_can_do___icon___project___contentful_id',
  what_i_can_do___icon___project___id = 'what_i_can_do___icon___project___id',
  what_i_can_do___icon___project___node_locale = 'what_i_can_do___icon___project___node_locale',
  what_i_can_do___icon___project___name = 'what_i_can_do___icon___project___name',
  what_i_can_do___icon___project___subName = 'what_i_can_do___icon___project___subName',
  what_i_can_do___icon___project___startDate = 'what_i_can_do___icon___project___startDate',
  what_i_can_do___icon___project___endDate = 'what_i_can_do___icon___project___endDate',
  what_i_can_do___icon___project___tags = 'what_i_can_do___icon___project___tags',
  what_i_can_do___icon___project___spaceId = 'what_i_can_do___icon___project___spaceId',
  what_i_can_do___icon___project___createdAt = 'what_i_can_do___icon___project___createdAt',
  what_i_can_do___icon___project___updatedAt = 'what_i_can_do___icon___project___updatedAt',
  what_i_can_do___icon___project___childrenContentfulProjectDetailTextNode = 'what_i_can_do___icon___project___childrenContentfulProjectDetailTextNode',
  what_i_can_do___icon___project___children = 'what_i_can_do___icon___project___children',
  what_i_can_do___icon___oss = 'what_i_can_do___icon___oss',
  what_i_can_do___icon___oss___contentful_id = 'what_i_can_do___icon___oss___contentful_id',
  what_i_can_do___icon___oss___id = 'what_i_can_do___icon___oss___id',
  what_i_can_do___icon___oss___node_locale = 'what_i_can_do___icon___oss___node_locale',
  what_i_can_do___icon___oss___name = 'what_i_can_do___icon___oss___name',
  what_i_can_do___icon___oss___subName = 'what_i_can_do___icon___oss___subName',
  what_i_can_do___icon___oss___startDate = 'what_i_can_do___icon___oss___startDate',
  what_i_can_do___icon___oss___href = 'what_i_can_do___icon___oss___href',
  what_i_can_do___icon___oss___tags = 'what_i_can_do___icon___oss___tags',
  what_i_can_do___icon___oss___spaceId = 'what_i_can_do___icon___oss___spaceId',
  what_i_can_do___icon___oss___createdAt = 'what_i_can_do___icon___oss___createdAt',
  what_i_can_do___icon___oss___updatedAt = 'what_i_can_do___icon___oss___updatedAt',
  what_i_can_do___icon___oss___childrenContentfulOssDetailTextNode = 'what_i_can_do___icon___oss___childrenContentfulOssDetailTextNode',
  what_i_can_do___icon___oss___children = 'what_i_can_do___icon___oss___children',
  what_i_can_do___icon___svg___id = 'what_i_can_do___icon___svg___id',
  what_i_can_do___icon___svg___children = 'what_i_can_do___icon___svg___children',
  what_i_can_do___icon___svg___svg = 'what_i_can_do___icon___svg___svg',
  what_i_can_do___icon___svg___childrenMarkdownRemark = 'what_i_can_do___icon___svg___childrenMarkdownRemark',
  what_i_can_do___icon___spaceId = 'what_i_can_do___icon___spaceId',
  what_i_can_do___icon___createdAt = 'what_i_can_do___icon___createdAt',
  what_i_can_do___icon___updatedAt = 'what_i_can_do___icon___updatedAt',
  what_i_can_do___icon___sys___type = 'what_i_can_do___icon___sys___type',
  what_i_can_do___icon___sys___revision = 'what_i_can_do___icon___sys___revision',
  what_i_can_do___icon___history = 'what_i_can_do___icon___history',
  what_i_can_do___icon___history___contentful_id = 'what_i_can_do___icon___history___contentful_id',
  what_i_can_do___icon___history___id = 'what_i_can_do___icon___history___id',
  what_i_can_do___icon___history___node_locale = 'what_i_can_do___icon___history___node_locale',
  what_i_can_do___icon___history___name = 'what_i_can_do___icon___history___name',
  what_i_can_do___icon___history___date = 'what_i_can_do___icon___history___date',
  what_i_can_do___icon___history___subName = 'what_i_can_do___icon___history___subName',
  what_i_can_do___icon___history___spaceId = 'what_i_can_do___icon___history___spaceId',
  what_i_can_do___icon___history___createdAt = 'what_i_can_do___icon___history___createdAt',
  what_i_can_do___icon___history___updatedAt = 'what_i_can_do___icon___history___updatedAt',
  what_i_can_do___icon___history___children = 'what_i_can_do___icon___history___children',
  what_i_can_do___icon___contact = 'what_i_can_do___icon___contact',
  what_i_can_do___icon___contact___contentful_id = 'what_i_can_do___icon___contact___contentful_id',
  what_i_can_do___icon___contact___id = 'what_i_can_do___icon___contact___id',
  what_i_can_do___icon___contact___node_locale = 'what_i_can_do___icon___contact___node_locale',
  what_i_can_do___icon___contact___sortKey = 'what_i_can_do___icon___contact___sortKey',
  what_i_can_do___icon___contact___name = 'what_i_can_do___icon___contact___name',
  what_i_can_do___icon___contact___subName = 'what_i_can_do___icon___contact___subName',
  what_i_can_do___icon___contact___href = 'what_i_can_do___icon___contact___href',
  what_i_can_do___icon___contact___spaceId = 'what_i_can_do___icon___contact___spaceId',
  what_i_can_do___icon___contact___createdAt = 'what_i_can_do___icon___contact___createdAt',
  what_i_can_do___icon___contact___updatedAt = 'what_i_can_do___icon___contact___updatedAt',
  what_i_can_do___icon___contact___children = 'what_i_can_do___icon___contact___children',
  what_i_can_do___icon___childrenContentfulIconSvgTextNode = 'what_i_can_do___icon___childrenContentfulIconSvgTextNode',
  what_i_can_do___icon___childrenContentfulIconSvgTextNode___id = 'what_i_can_do___icon___childrenContentfulIconSvgTextNode___id',
  what_i_can_do___icon___childrenContentfulIconSvgTextNode___children = 'what_i_can_do___icon___childrenContentfulIconSvgTextNode___children',
  what_i_can_do___icon___childrenContentfulIconSvgTextNode___svg = 'what_i_can_do___icon___childrenContentfulIconSvgTextNode___svg',
  what_i_can_do___icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark = 'what_i_can_do___icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark',
  what_i_can_do___icon___childContentfulIconSvgTextNode___id = 'what_i_can_do___icon___childContentfulIconSvgTextNode___id',
  what_i_can_do___icon___childContentfulIconSvgTextNode___children = 'what_i_can_do___icon___childContentfulIconSvgTextNode___children',
  what_i_can_do___icon___childContentfulIconSvgTextNode___svg = 'what_i_can_do___icon___childContentfulIconSvgTextNode___svg',
  what_i_can_do___icon___childContentfulIconSvgTextNode___childrenMarkdownRemark = 'what_i_can_do___icon___childContentfulIconSvgTextNode___childrenMarkdownRemark',
  what_i_can_do___icon___parent___id = 'what_i_can_do___icon___parent___id',
  what_i_can_do___icon___parent___children = 'what_i_can_do___icon___parent___children',
  what_i_can_do___icon___children = 'what_i_can_do___icon___children',
  what_i_can_do___icon___children___id = 'what_i_can_do___icon___children___id',
  what_i_can_do___icon___children___children = 'what_i_can_do___icon___children___children',
  what_i_can_do___icon___internal___content = 'what_i_can_do___icon___internal___content',
  what_i_can_do___icon___internal___contentDigest = 'what_i_can_do___icon___internal___contentDigest',
  what_i_can_do___icon___internal___description = 'what_i_can_do___icon___internal___description',
  what_i_can_do___icon___internal___fieldOwners = 'what_i_can_do___icon___internal___fieldOwners',
  what_i_can_do___icon___internal___ignoreType = 'what_i_can_do___icon___internal___ignoreType',
  what_i_can_do___icon___internal___mediaType = 'what_i_can_do___icon___internal___mediaType',
  what_i_can_do___icon___internal___owner = 'what_i_can_do___icon___internal___owner',
  what_i_can_do___icon___internal___type = 'what_i_can_do___icon___internal___type',
  what_i_can_do___spaceId = 'what_i_can_do___spaceId',
  what_i_can_do___createdAt = 'what_i_can_do___createdAt',
  what_i_can_do___updatedAt = 'what_i_can_do___updatedAt',
  what_i_can_do___sys___type = 'what_i_can_do___sys___type',
  what_i_can_do___sys___revision = 'what_i_can_do___sys___revision',
  what_i_can_do___parent___id = 'what_i_can_do___parent___id',
  what_i_can_do___parent___parent___id = 'what_i_can_do___parent___parent___id',
  what_i_can_do___parent___parent___children = 'what_i_can_do___parent___parent___children',
  what_i_can_do___parent___children = 'what_i_can_do___parent___children',
  what_i_can_do___parent___children___id = 'what_i_can_do___parent___children___id',
  what_i_can_do___parent___children___children = 'what_i_can_do___parent___children___children',
  what_i_can_do___parent___internal___content = 'what_i_can_do___parent___internal___content',
  what_i_can_do___parent___internal___contentDigest = 'what_i_can_do___parent___internal___contentDigest',
  what_i_can_do___parent___internal___description = 'what_i_can_do___parent___internal___description',
  what_i_can_do___parent___internal___fieldOwners = 'what_i_can_do___parent___internal___fieldOwners',
  what_i_can_do___parent___internal___ignoreType = 'what_i_can_do___parent___internal___ignoreType',
  what_i_can_do___parent___internal___mediaType = 'what_i_can_do___parent___internal___mediaType',
  what_i_can_do___parent___internal___owner = 'what_i_can_do___parent___internal___owner',
  what_i_can_do___parent___internal___type = 'what_i_can_do___parent___internal___type',
  what_i_can_do___children = 'what_i_can_do___children',
  what_i_can_do___children___id = 'what_i_can_do___children___id',
  what_i_can_do___children___parent___id = 'what_i_can_do___children___parent___id',
  what_i_can_do___children___parent___children = 'what_i_can_do___children___parent___children',
  what_i_can_do___children___children = 'what_i_can_do___children___children',
  what_i_can_do___children___children___id = 'what_i_can_do___children___children___id',
  what_i_can_do___children___children___children = 'what_i_can_do___children___children___children',
  what_i_can_do___children___internal___content = 'what_i_can_do___children___internal___content',
  what_i_can_do___children___internal___contentDigest = 'what_i_can_do___children___internal___contentDigest',
  what_i_can_do___children___internal___description = 'what_i_can_do___children___internal___description',
  what_i_can_do___children___internal___fieldOwners = 'what_i_can_do___children___internal___fieldOwners',
  what_i_can_do___children___internal___ignoreType = 'what_i_can_do___children___internal___ignoreType',
  what_i_can_do___children___internal___mediaType = 'what_i_can_do___children___internal___mediaType',
  what_i_can_do___children___internal___owner = 'what_i_can_do___children___internal___owner',
  what_i_can_do___children___internal___type = 'what_i_can_do___children___internal___type',
  what_i_can_do___internal___content = 'what_i_can_do___internal___content',
  what_i_can_do___internal___contentDigest = 'what_i_can_do___internal___contentDigest',
  what_i_can_do___internal___description = 'what_i_can_do___internal___description',
  what_i_can_do___internal___fieldOwners = 'what_i_can_do___internal___fieldOwners',
  what_i_can_do___internal___ignoreType = 'what_i_can_do___internal___ignoreType',
  what_i_can_do___internal___mediaType = 'what_i_can_do___internal___mediaType',
  what_i_can_do___internal___owner = 'what_i_can_do___internal___owner',
  what_i_can_do___internal___type = 'what_i_can_do___internal___type',
  project = 'project',
  project___contentful_id = 'project___contentful_id',
  project___id = 'project___id',
  project___node_locale = 'project___node_locale',
  project___name = 'project___name',
  project___subName = 'project___subName',
  project___startDate = 'project___startDate',
  project___endDate = 'project___endDate',
  project___tags = 'project___tags',
  project___tags___contentful_id = 'project___tags___contentful_id',
  project___tags___id = 'project___tags___id',
  project___tags___node_locale = 'project___tags___node_locale',
  project___tags___name = 'project___tags___name',
  project___tags___level = 'project___tags___level',
  project___tags___skill_map = 'project___tags___skill_map',
  project___tags___skill_map___contentful_id = 'project___tags___skill_map___contentful_id',
  project___tags___skill_map___id = 'project___tags___skill_map___id',
  project___tags___skill_map___node_locale = 'project___tags___skill_map___node_locale',
  project___tags___skill_map___sortKey = 'project___tags___skill_map___sortKey',
  project___tags___skill_map___name = 'project___tags___skill_map___name',
  project___tags___skill_map___expanded = 'project___tags___skill_map___expanded',
  project___tags___skill_map___skills = 'project___tags___skill_map___skills',
  project___tags___skill_map___spaceId = 'project___tags___skill_map___spaceId',
  project___tags___skill_map___createdAt = 'project___tags___skill_map___createdAt',
  project___tags___skill_map___updatedAt = 'project___tags___skill_map___updatedAt',
  project___tags___skill_map___children = 'project___tags___skill_map___children',
  project___tags___project = 'project___tags___project',
  project___tags___project___contentful_id = 'project___tags___project___contentful_id',
  project___tags___project___id = 'project___tags___project___id',
  project___tags___project___node_locale = 'project___tags___project___node_locale',
  project___tags___project___name = 'project___tags___project___name',
  project___tags___project___subName = 'project___tags___project___subName',
  project___tags___project___startDate = 'project___tags___project___startDate',
  project___tags___project___endDate = 'project___tags___project___endDate',
  project___tags___project___tags = 'project___tags___project___tags',
  project___tags___project___spaceId = 'project___tags___project___spaceId',
  project___tags___project___createdAt = 'project___tags___project___createdAt',
  project___tags___project___updatedAt = 'project___tags___project___updatedAt',
  project___tags___project___childrenContentfulProjectDetailTextNode = 'project___tags___project___childrenContentfulProjectDetailTextNode',
  project___tags___project___children = 'project___tags___project___children',
  project___tags___spaceId = 'project___tags___spaceId',
  project___tags___createdAt = 'project___tags___createdAt',
  project___tags___updatedAt = 'project___tags___updatedAt',
  project___tags___sys___type = 'project___tags___sys___type',
  project___tags___sys___revision = 'project___tags___sys___revision',
  project___tags___oss = 'project___tags___oss',
  project___tags___oss___contentful_id = 'project___tags___oss___contentful_id',
  project___tags___oss___id = 'project___tags___oss___id',
  project___tags___oss___node_locale = 'project___tags___oss___node_locale',
  project___tags___oss___name = 'project___tags___oss___name',
  project___tags___oss___subName = 'project___tags___oss___subName',
  project___tags___oss___startDate = 'project___tags___oss___startDate',
  project___tags___oss___href = 'project___tags___oss___href',
  project___tags___oss___tags = 'project___tags___oss___tags',
  project___tags___oss___spaceId = 'project___tags___oss___spaceId',
  project___tags___oss___createdAt = 'project___tags___oss___createdAt',
  project___tags___oss___updatedAt = 'project___tags___oss___updatedAt',
  project___tags___oss___childrenContentfulOssDetailTextNode = 'project___tags___oss___childrenContentfulOssDetailTextNode',
  project___tags___oss___children = 'project___tags___oss___children',
  project___tags___parent___id = 'project___tags___parent___id',
  project___tags___parent___children = 'project___tags___parent___children',
  project___tags___children = 'project___tags___children',
  project___tags___children___id = 'project___tags___children___id',
  project___tags___children___children = 'project___tags___children___children',
  project___tags___internal___content = 'project___tags___internal___content',
  project___tags___internal___contentDigest = 'project___tags___internal___contentDigest',
  project___tags___internal___description = 'project___tags___internal___description',
  project___tags___internal___fieldOwners = 'project___tags___internal___fieldOwners',
  project___tags___internal___ignoreType = 'project___tags___internal___ignoreType',
  project___tags___internal___mediaType = 'project___tags___internal___mediaType',
  project___tags___internal___owner = 'project___tags___internal___owner',
  project___tags___internal___type = 'project___tags___internal___type',
  project___icon___contentful_id = 'project___icon___contentful_id',
  project___icon___id = 'project___icon___id',
  project___icon___node_locale = 'project___icon___node_locale',
  project___icon___name = 'project___icon___name',
  project___icon___what_i_can_do = 'project___icon___what_i_can_do',
  project___icon___what_i_can_do___contentful_id = 'project___icon___what_i_can_do___contentful_id',
  project___icon___what_i_can_do___id = 'project___icon___what_i_can_do___id',
  project___icon___what_i_can_do___node_locale = 'project___icon___what_i_can_do___node_locale',
  project___icon___what_i_can_do___sortKey = 'project___icon___what_i_can_do___sortKey',
  project___icon___what_i_can_do___name = 'project___icon___what_i_can_do___name',
  project___icon___what_i_can_do___subName = 'project___icon___what_i_can_do___subName',
  project___icon___what_i_can_do___spaceId = 'project___icon___what_i_can_do___spaceId',
  project___icon___what_i_can_do___createdAt = 'project___icon___what_i_can_do___createdAt',
  project___icon___what_i_can_do___updatedAt = 'project___icon___what_i_can_do___updatedAt',
  project___icon___what_i_can_do___children = 'project___icon___what_i_can_do___children',
  project___icon___project = 'project___icon___project',
  project___icon___project___contentful_id = 'project___icon___project___contentful_id',
  project___icon___project___id = 'project___icon___project___id',
  project___icon___project___node_locale = 'project___icon___project___node_locale',
  project___icon___project___name = 'project___icon___project___name',
  project___icon___project___subName = 'project___icon___project___subName',
  project___icon___project___startDate = 'project___icon___project___startDate',
  project___icon___project___endDate = 'project___icon___project___endDate',
  project___icon___project___tags = 'project___icon___project___tags',
  project___icon___project___spaceId = 'project___icon___project___spaceId',
  project___icon___project___createdAt = 'project___icon___project___createdAt',
  project___icon___project___updatedAt = 'project___icon___project___updatedAt',
  project___icon___project___childrenContentfulProjectDetailTextNode = 'project___icon___project___childrenContentfulProjectDetailTextNode',
  project___icon___project___children = 'project___icon___project___children',
  project___icon___oss = 'project___icon___oss',
  project___icon___oss___contentful_id = 'project___icon___oss___contentful_id',
  project___icon___oss___id = 'project___icon___oss___id',
  project___icon___oss___node_locale = 'project___icon___oss___node_locale',
  project___icon___oss___name = 'project___icon___oss___name',
  project___icon___oss___subName = 'project___icon___oss___subName',
  project___icon___oss___startDate = 'project___icon___oss___startDate',
  project___icon___oss___href = 'project___icon___oss___href',
  project___icon___oss___tags = 'project___icon___oss___tags',
  project___icon___oss___spaceId = 'project___icon___oss___spaceId',
  project___icon___oss___createdAt = 'project___icon___oss___createdAt',
  project___icon___oss___updatedAt = 'project___icon___oss___updatedAt',
  project___icon___oss___childrenContentfulOssDetailTextNode = 'project___icon___oss___childrenContentfulOssDetailTextNode',
  project___icon___oss___children = 'project___icon___oss___children',
  project___icon___svg___id = 'project___icon___svg___id',
  project___icon___svg___children = 'project___icon___svg___children',
  project___icon___svg___svg = 'project___icon___svg___svg',
  project___icon___svg___childrenMarkdownRemark = 'project___icon___svg___childrenMarkdownRemark',
  project___icon___spaceId = 'project___icon___spaceId',
  project___icon___createdAt = 'project___icon___createdAt',
  project___icon___updatedAt = 'project___icon___updatedAt',
  project___icon___sys___type = 'project___icon___sys___type',
  project___icon___sys___revision = 'project___icon___sys___revision',
  project___icon___history = 'project___icon___history',
  project___icon___history___contentful_id = 'project___icon___history___contentful_id',
  project___icon___history___id = 'project___icon___history___id',
  project___icon___history___node_locale = 'project___icon___history___node_locale',
  project___icon___history___name = 'project___icon___history___name',
  project___icon___history___date = 'project___icon___history___date',
  project___icon___history___subName = 'project___icon___history___subName',
  project___icon___history___spaceId = 'project___icon___history___spaceId',
  project___icon___history___createdAt = 'project___icon___history___createdAt',
  project___icon___history___updatedAt = 'project___icon___history___updatedAt',
  project___icon___history___children = 'project___icon___history___children',
  project___icon___contact = 'project___icon___contact',
  project___icon___contact___contentful_id = 'project___icon___contact___contentful_id',
  project___icon___contact___id = 'project___icon___contact___id',
  project___icon___contact___node_locale = 'project___icon___contact___node_locale',
  project___icon___contact___sortKey = 'project___icon___contact___sortKey',
  project___icon___contact___name = 'project___icon___contact___name',
  project___icon___contact___subName = 'project___icon___contact___subName',
  project___icon___contact___href = 'project___icon___contact___href',
  project___icon___contact___spaceId = 'project___icon___contact___spaceId',
  project___icon___contact___createdAt = 'project___icon___contact___createdAt',
  project___icon___contact___updatedAt = 'project___icon___contact___updatedAt',
  project___icon___contact___children = 'project___icon___contact___children',
  project___icon___childrenContentfulIconSvgTextNode = 'project___icon___childrenContentfulIconSvgTextNode',
  project___icon___childrenContentfulIconSvgTextNode___id = 'project___icon___childrenContentfulIconSvgTextNode___id',
  project___icon___childrenContentfulIconSvgTextNode___children = 'project___icon___childrenContentfulIconSvgTextNode___children',
  project___icon___childrenContentfulIconSvgTextNode___svg = 'project___icon___childrenContentfulIconSvgTextNode___svg',
  project___icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark = 'project___icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark',
  project___icon___childContentfulIconSvgTextNode___id = 'project___icon___childContentfulIconSvgTextNode___id',
  project___icon___childContentfulIconSvgTextNode___children = 'project___icon___childContentfulIconSvgTextNode___children',
  project___icon___childContentfulIconSvgTextNode___svg = 'project___icon___childContentfulIconSvgTextNode___svg',
  project___icon___childContentfulIconSvgTextNode___childrenMarkdownRemark = 'project___icon___childContentfulIconSvgTextNode___childrenMarkdownRemark',
  project___icon___parent___id = 'project___icon___parent___id',
  project___icon___parent___children = 'project___icon___parent___children',
  project___icon___children = 'project___icon___children',
  project___icon___children___id = 'project___icon___children___id',
  project___icon___children___children = 'project___icon___children___children',
  project___icon___internal___content = 'project___icon___internal___content',
  project___icon___internal___contentDigest = 'project___icon___internal___contentDigest',
  project___icon___internal___description = 'project___icon___internal___description',
  project___icon___internal___fieldOwners = 'project___icon___internal___fieldOwners',
  project___icon___internal___ignoreType = 'project___icon___internal___ignoreType',
  project___icon___internal___mediaType = 'project___icon___internal___mediaType',
  project___icon___internal___owner = 'project___icon___internal___owner',
  project___icon___internal___type = 'project___icon___internal___type',
  project___detail___id = 'project___detail___id',
  project___detail___parent___id = 'project___detail___parent___id',
  project___detail___parent___children = 'project___detail___parent___children',
  project___detail___children = 'project___detail___children',
  project___detail___children___id = 'project___detail___children___id',
  project___detail___children___children = 'project___detail___children___children',
  project___detail___internal___content = 'project___detail___internal___content',
  project___detail___internal___contentDigest = 'project___detail___internal___contentDigest',
  project___detail___internal___description = 'project___detail___internal___description',
  project___detail___internal___fieldOwners = 'project___detail___internal___fieldOwners',
  project___detail___internal___ignoreType = 'project___detail___internal___ignoreType',
  project___detail___internal___mediaType = 'project___detail___internal___mediaType',
  project___detail___internal___owner = 'project___detail___internal___owner',
  project___detail___internal___type = 'project___detail___internal___type',
  project___detail___detail = 'project___detail___detail',
  project___detail___sys___type = 'project___detail___sys___type',
  project___detail___childrenMarkdownRemark = 'project___detail___childrenMarkdownRemark',
  project___detail___childrenMarkdownRemark___id = 'project___detail___childrenMarkdownRemark___id',
  project___detail___childrenMarkdownRemark___excerpt = 'project___detail___childrenMarkdownRemark___excerpt',
  project___detail___childrenMarkdownRemark___rawMarkdownBody = 'project___detail___childrenMarkdownRemark___rawMarkdownBody',
  project___detail___childrenMarkdownRemark___html = 'project___detail___childrenMarkdownRemark___html',
  project___detail___childrenMarkdownRemark___htmlAst = 'project___detail___childrenMarkdownRemark___htmlAst',
  project___detail___childrenMarkdownRemark___excerptAst = 'project___detail___childrenMarkdownRemark___excerptAst',
  project___detail___childrenMarkdownRemark___headings = 'project___detail___childrenMarkdownRemark___headings',
  project___detail___childrenMarkdownRemark___timeToRead = 'project___detail___childrenMarkdownRemark___timeToRead',
  project___detail___childrenMarkdownRemark___tableOfContents = 'project___detail___childrenMarkdownRemark___tableOfContents',
  project___detail___childrenMarkdownRemark___children = 'project___detail___childrenMarkdownRemark___children',
  project___detail___childMarkdownRemark___id = 'project___detail___childMarkdownRemark___id',
  project___detail___childMarkdownRemark___excerpt = 'project___detail___childMarkdownRemark___excerpt',
  project___detail___childMarkdownRemark___rawMarkdownBody = 'project___detail___childMarkdownRemark___rawMarkdownBody',
  project___detail___childMarkdownRemark___html = 'project___detail___childMarkdownRemark___html',
  project___detail___childMarkdownRemark___htmlAst = 'project___detail___childMarkdownRemark___htmlAst',
  project___detail___childMarkdownRemark___excerptAst = 'project___detail___childMarkdownRemark___excerptAst',
  project___detail___childMarkdownRemark___headings = 'project___detail___childMarkdownRemark___headings',
  project___detail___childMarkdownRemark___timeToRead = 'project___detail___childMarkdownRemark___timeToRead',
  project___detail___childMarkdownRemark___tableOfContents = 'project___detail___childMarkdownRemark___tableOfContents',
  project___detail___childMarkdownRemark___children = 'project___detail___childMarkdownRemark___children',
  project___spaceId = 'project___spaceId',
  project___createdAt = 'project___createdAt',
  project___updatedAt = 'project___updatedAt',
  project___sys___type = 'project___sys___type',
  project___sys___revision = 'project___sys___revision',
  project___childrenContentfulProjectDetailTextNode = 'project___childrenContentfulProjectDetailTextNode',
  project___childrenContentfulProjectDetailTextNode___id = 'project___childrenContentfulProjectDetailTextNode___id',
  project___childrenContentfulProjectDetailTextNode___parent___id = 'project___childrenContentfulProjectDetailTextNode___parent___id',
  project___childrenContentfulProjectDetailTextNode___parent___children = 'project___childrenContentfulProjectDetailTextNode___parent___children',
  project___childrenContentfulProjectDetailTextNode___children = 'project___childrenContentfulProjectDetailTextNode___children',
  project___childrenContentfulProjectDetailTextNode___children___id = 'project___childrenContentfulProjectDetailTextNode___children___id',
  project___childrenContentfulProjectDetailTextNode___children___children = 'project___childrenContentfulProjectDetailTextNode___children___children',
  project___childrenContentfulProjectDetailTextNode___internal___content = 'project___childrenContentfulProjectDetailTextNode___internal___content',
  project___childrenContentfulProjectDetailTextNode___internal___contentDigest = 'project___childrenContentfulProjectDetailTextNode___internal___contentDigest',
  project___childrenContentfulProjectDetailTextNode___internal___description = 'project___childrenContentfulProjectDetailTextNode___internal___description',
  project___childrenContentfulProjectDetailTextNode___internal___fieldOwners = 'project___childrenContentfulProjectDetailTextNode___internal___fieldOwners',
  project___childrenContentfulProjectDetailTextNode___internal___ignoreType = 'project___childrenContentfulProjectDetailTextNode___internal___ignoreType',
  project___childrenContentfulProjectDetailTextNode___internal___mediaType = 'project___childrenContentfulProjectDetailTextNode___internal___mediaType',
  project___childrenContentfulProjectDetailTextNode___internal___owner = 'project___childrenContentfulProjectDetailTextNode___internal___owner',
  project___childrenContentfulProjectDetailTextNode___internal___type = 'project___childrenContentfulProjectDetailTextNode___internal___type',
  project___childrenContentfulProjectDetailTextNode___detail = 'project___childrenContentfulProjectDetailTextNode___detail',
  project___childrenContentfulProjectDetailTextNode___sys___type = 'project___childrenContentfulProjectDetailTextNode___sys___type',
  project___childrenContentfulProjectDetailTextNode___childrenMarkdownRemark = 'project___childrenContentfulProjectDetailTextNode___childrenMarkdownRemark',
  project___childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___id = 'project___childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___id',
  project___childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___excerpt = 'project___childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___excerpt',
  project___childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___rawMarkdownBody = 'project___childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___rawMarkdownBody',
  project___childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___html = 'project___childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___html',
  project___childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___htmlAst = 'project___childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___htmlAst',
  project___childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___excerptAst = 'project___childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___excerptAst',
  project___childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___headings = 'project___childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___headings',
  project___childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___timeToRead = 'project___childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___timeToRead',
  project___childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___tableOfContents = 'project___childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___tableOfContents',
  project___childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___children = 'project___childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___children',
  project___childrenContentfulProjectDetailTextNode___childMarkdownRemark___id = 'project___childrenContentfulProjectDetailTextNode___childMarkdownRemark___id',
  project___childrenContentfulProjectDetailTextNode___childMarkdownRemark___excerpt = 'project___childrenContentfulProjectDetailTextNode___childMarkdownRemark___excerpt',
  project___childrenContentfulProjectDetailTextNode___childMarkdownRemark___rawMarkdownBody = 'project___childrenContentfulProjectDetailTextNode___childMarkdownRemark___rawMarkdownBody',
  project___childrenContentfulProjectDetailTextNode___childMarkdownRemark___html = 'project___childrenContentfulProjectDetailTextNode___childMarkdownRemark___html',
  project___childrenContentfulProjectDetailTextNode___childMarkdownRemark___htmlAst = 'project___childrenContentfulProjectDetailTextNode___childMarkdownRemark___htmlAst',
  project___childrenContentfulProjectDetailTextNode___childMarkdownRemark___excerptAst = 'project___childrenContentfulProjectDetailTextNode___childMarkdownRemark___excerptAst',
  project___childrenContentfulProjectDetailTextNode___childMarkdownRemark___headings = 'project___childrenContentfulProjectDetailTextNode___childMarkdownRemark___headings',
  project___childrenContentfulProjectDetailTextNode___childMarkdownRemark___timeToRead = 'project___childrenContentfulProjectDetailTextNode___childMarkdownRemark___timeToRead',
  project___childrenContentfulProjectDetailTextNode___childMarkdownRemark___tableOfContents = 'project___childrenContentfulProjectDetailTextNode___childMarkdownRemark___tableOfContents',
  project___childrenContentfulProjectDetailTextNode___childMarkdownRemark___children = 'project___childrenContentfulProjectDetailTextNode___childMarkdownRemark___children',
  project___childContentfulProjectDetailTextNode___id = 'project___childContentfulProjectDetailTextNode___id',
  project___childContentfulProjectDetailTextNode___parent___id = 'project___childContentfulProjectDetailTextNode___parent___id',
  project___childContentfulProjectDetailTextNode___parent___children = 'project___childContentfulProjectDetailTextNode___parent___children',
  project___childContentfulProjectDetailTextNode___children = 'project___childContentfulProjectDetailTextNode___children',
  project___childContentfulProjectDetailTextNode___children___id = 'project___childContentfulProjectDetailTextNode___children___id',
  project___childContentfulProjectDetailTextNode___children___children = 'project___childContentfulProjectDetailTextNode___children___children',
  project___childContentfulProjectDetailTextNode___internal___content = 'project___childContentfulProjectDetailTextNode___internal___content',
  project___childContentfulProjectDetailTextNode___internal___contentDigest = 'project___childContentfulProjectDetailTextNode___internal___contentDigest',
  project___childContentfulProjectDetailTextNode___internal___description = 'project___childContentfulProjectDetailTextNode___internal___description',
  project___childContentfulProjectDetailTextNode___internal___fieldOwners = 'project___childContentfulProjectDetailTextNode___internal___fieldOwners',
  project___childContentfulProjectDetailTextNode___internal___ignoreType = 'project___childContentfulProjectDetailTextNode___internal___ignoreType',
  project___childContentfulProjectDetailTextNode___internal___mediaType = 'project___childContentfulProjectDetailTextNode___internal___mediaType',
  project___childContentfulProjectDetailTextNode___internal___owner = 'project___childContentfulProjectDetailTextNode___internal___owner',
  project___childContentfulProjectDetailTextNode___internal___type = 'project___childContentfulProjectDetailTextNode___internal___type',
  project___childContentfulProjectDetailTextNode___detail = 'project___childContentfulProjectDetailTextNode___detail',
  project___childContentfulProjectDetailTextNode___sys___type = 'project___childContentfulProjectDetailTextNode___sys___type',
  project___childContentfulProjectDetailTextNode___childrenMarkdownRemark = 'project___childContentfulProjectDetailTextNode___childrenMarkdownRemark',
  project___childContentfulProjectDetailTextNode___childrenMarkdownRemark___id = 'project___childContentfulProjectDetailTextNode___childrenMarkdownRemark___id',
  project___childContentfulProjectDetailTextNode___childrenMarkdownRemark___excerpt = 'project___childContentfulProjectDetailTextNode___childrenMarkdownRemark___excerpt',
  project___childContentfulProjectDetailTextNode___childrenMarkdownRemark___rawMarkdownBody = 'project___childContentfulProjectDetailTextNode___childrenMarkdownRemark___rawMarkdownBody',
  project___childContentfulProjectDetailTextNode___childrenMarkdownRemark___html = 'project___childContentfulProjectDetailTextNode___childrenMarkdownRemark___html',
  project___childContentfulProjectDetailTextNode___childrenMarkdownRemark___htmlAst = 'project___childContentfulProjectDetailTextNode___childrenMarkdownRemark___htmlAst',
  project___childContentfulProjectDetailTextNode___childrenMarkdownRemark___excerptAst = 'project___childContentfulProjectDetailTextNode___childrenMarkdownRemark___excerptAst',
  project___childContentfulProjectDetailTextNode___childrenMarkdownRemark___headings = 'project___childContentfulProjectDetailTextNode___childrenMarkdownRemark___headings',
  project___childContentfulProjectDetailTextNode___childrenMarkdownRemark___timeToRead = 'project___childContentfulProjectDetailTextNode___childrenMarkdownRemark___timeToRead',
  project___childContentfulProjectDetailTextNode___childrenMarkdownRemark___tableOfContents = 'project___childContentfulProjectDetailTextNode___childrenMarkdownRemark___tableOfContents',
  project___childContentfulProjectDetailTextNode___childrenMarkdownRemark___children = 'project___childContentfulProjectDetailTextNode___childrenMarkdownRemark___children',
  project___childContentfulProjectDetailTextNode___childMarkdownRemark___id = 'project___childContentfulProjectDetailTextNode___childMarkdownRemark___id',
  project___childContentfulProjectDetailTextNode___childMarkdownRemark___excerpt = 'project___childContentfulProjectDetailTextNode___childMarkdownRemark___excerpt',
  project___childContentfulProjectDetailTextNode___childMarkdownRemark___rawMarkdownBody = 'project___childContentfulProjectDetailTextNode___childMarkdownRemark___rawMarkdownBody',
  project___childContentfulProjectDetailTextNode___childMarkdownRemark___html = 'project___childContentfulProjectDetailTextNode___childMarkdownRemark___html',
  project___childContentfulProjectDetailTextNode___childMarkdownRemark___htmlAst = 'project___childContentfulProjectDetailTextNode___childMarkdownRemark___htmlAst',
  project___childContentfulProjectDetailTextNode___childMarkdownRemark___excerptAst = 'project___childContentfulProjectDetailTextNode___childMarkdownRemark___excerptAst',
  project___childContentfulProjectDetailTextNode___childMarkdownRemark___headings = 'project___childContentfulProjectDetailTextNode___childMarkdownRemark___headings',
  project___childContentfulProjectDetailTextNode___childMarkdownRemark___timeToRead = 'project___childContentfulProjectDetailTextNode___childMarkdownRemark___timeToRead',
  project___childContentfulProjectDetailTextNode___childMarkdownRemark___tableOfContents = 'project___childContentfulProjectDetailTextNode___childMarkdownRemark___tableOfContents',
  project___childContentfulProjectDetailTextNode___childMarkdownRemark___children = 'project___childContentfulProjectDetailTextNode___childMarkdownRemark___children',
  project___parent___id = 'project___parent___id',
  project___parent___parent___id = 'project___parent___parent___id',
  project___parent___parent___children = 'project___parent___parent___children',
  project___parent___children = 'project___parent___children',
  project___parent___children___id = 'project___parent___children___id',
  project___parent___children___children = 'project___parent___children___children',
  project___parent___internal___content = 'project___parent___internal___content',
  project___parent___internal___contentDigest = 'project___parent___internal___contentDigest',
  project___parent___internal___description = 'project___parent___internal___description',
  project___parent___internal___fieldOwners = 'project___parent___internal___fieldOwners',
  project___parent___internal___ignoreType = 'project___parent___internal___ignoreType',
  project___parent___internal___mediaType = 'project___parent___internal___mediaType',
  project___parent___internal___owner = 'project___parent___internal___owner',
  project___parent___internal___type = 'project___parent___internal___type',
  project___children = 'project___children',
  project___children___id = 'project___children___id',
  project___children___parent___id = 'project___children___parent___id',
  project___children___parent___children = 'project___children___parent___children',
  project___children___children = 'project___children___children',
  project___children___children___id = 'project___children___children___id',
  project___children___children___children = 'project___children___children___children',
  project___children___internal___content = 'project___children___internal___content',
  project___children___internal___contentDigest = 'project___children___internal___contentDigest',
  project___children___internal___description = 'project___children___internal___description',
  project___children___internal___fieldOwners = 'project___children___internal___fieldOwners',
  project___children___internal___ignoreType = 'project___children___internal___ignoreType',
  project___children___internal___mediaType = 'project___children___internal___mediaType',
  project___children___internal___owner = 'project___children___internal___owner',
  project___children___internal___type = 'project___children___internal___type',
  project___internal___content = 'project___internal___content',
  project___internal___contentDigest = 'project___internal___contentDigest',
  project___internal___description = 'project___internal___description',
  project___internal___fieldOwners = 'project___internal___fieldOwners',
  project___internal___ignoreType = 'project___internal___ignoreType',
  project___internal___mediaType = 'project___internal___mediaType',
  project___internal___owner = 'project___internal___owner',
  project___internal___type = 'project___internal___type',
  oss = 'oss',
  oss___contentful_id = 'oss___contentful_id',
  oss___id = 'oss___id',
  oss___node_locale = 'oss___node_locale',
  oss___name = 'oss___name',
  oss___subName = 'oss___subName',
  oss___startDate = 'oss___startDate',
  oss___href = 'oss___href',
  oss___tags = 'oss___tags',
  oss___tags___contentful_id = 'oss___tags___contentful_id',
  oss___tags___id = 'oss___tags___id',
  oss___tags___node_locale = 'oss___tags___node_locale',
  oss___tags___name = 'oss___tags___name',
  oss___tags___level = 'oss___tags___level',
  oss___tags___skill_map = 'oss___tags___skill_map',
  oss___tags___skill_map___contentful_id = 'oss___tags___skill_map___contentful_id',
  oss___tags___skill_map___id = 'oss___tags___skill_map___id',
  oss___tags___skill_map___node_locale = 'oss___tags___skill_map___node_locale',
  oss___tags___skill_map___sortKey = 'oss___tags___skill_map___sortKey',
  oss___tags___skill_map___name = 'oss___tags___skill_map___name',
  oss___tags___skill_map___expanded = 'oss___tags___skill_map___expanded',
  oss___tags___skill_map___skills = 'oss___tags___skill_map___skills',
  oss___tags___skill_map___spaceId = 'oss___tags___skill_map___spaceId',
  oss___tags___skill_map___createdAt = 'oss___tags___skill_map___createdAt',
  oss___tags___skill_map___updatedAt = 'oss___tags___skill_map___updatedAt',
  oss___tags___skill_map___children = 'oss___tags___skill_map___children',
  oss___tags___project = 'oss___tags___project',
  oss___tags___project___contentful_id = 'oss___tags___project___contentful_id',
  oss___tags___project___id = 'oss___tags___project___id',
  oss___tags___project___node_locale = 'oss___tags___project___node_locale',
  oss___tags___project___name = 'oss___tags___project___name',
  oss___tags___project___subName = 'oss___tags___project___subName',
  oss___tags___project___startDate = 'oss___tags___project___startDate',
  oss___tags___project___endDate = 'oss___tags___project___endDate',
  oss___tags___project___tags = 'oss___tags___project___tags',
  oss___tags___project___spaceId = 'oss___tags___project___spaceId',
  oss___tags___project___createdAt = 'oss___tags___project___createdAt',
  oss___tags___project___updatedAt = 'oss___tags___project___updatedAt',
  oss___tags___project___childrenContentfulProjectDetailTextNode = 'oss___tags___project___childrenContentfulProjectDetailTextNode',
  oss___tags___project___children = 'oss___tags___project___children',
  oss___tags___spaceId = 'oss___tags___spaceId',
  oss___tags___createdAt = 'oss___tags___createdAt',
  oss___tags___updatedAt = 'oss___tags___updatedAt',
  oss___tags___sys___type = 'oss___tags___sys___type',
  oss___tags___sys___revision = 'oss___tags___sys___revision',
  oss___tags___oss = 'oss___tags___oss',
  oss___tags___oss___contentful_id = 'oss___tags___oss___contentful_id',
  oss___tags___oss___id = 'oss___tags___oss___id',
  oss___tags___oss___node_locale = 'oss___tags___oss___node_locale',
  oss___tags___oss___name = 'oss___tags___oss___name',
  oss___tags___oss___subName = 'oss___tags___oss___subName',
  oss___tags___oss___startDate = 'oss___tags___oss___startDate',
  oss___tags___oss___href = 'oss___tags___oss___href',
  oss___tags___oss___tags = 'oss___tags___oss___tags',
  oss___tags___oss___spaceId = 'oss___tags___oss___spaceId',
  oss___tags___oss___createdAt = 'oss___tags___oss___createdAt',
  oss___tags___oss___updatedAt = 'oss___tags___oss___updatedAt',
  oss___tags___oss___childrenContentfulOssDetailTextNode = 'oss___tags___oss___childrenContentfulOssDetailTextNode',
  oss___tags___oss___children = 'oss___tags___oss___children',
  oss___tags___parent___id = 'oss___tags___parent___id',
  oss___tags___parent___children = 'oss___tags___parent___children',
  oss___tags___children = 'oss___tags___children',
  oss___tags___children___id = 'oss___tags___children___id',
  oss___tags___children___children = 'oss___tags___children___children',
  oss___tags___internal___content = 'oss___tags___internal___content',
  oss___tags___internal___contentDigest = 'oss___tags___internal___contentDigest',
  oss___tags___internal___description = 'oss___tags___internal___description',
  oss___tags___internal___fieldOwners = 'oss___tags___internal___fieldOwners',
  oss___tags___internal___ignoreType = 'oss___tags___internal___ignoreType',
  oss___tags___internal___mediaType = 'oss___tags___internal___mediaType',
  oss___tags___internal___owner = 'oss___tags___internal___owner',
  oss___tags___internal___type = 'oss___tags___internal___type',
  oss___icon___contentful_id = 'oss___icon___contentful_id',
  oss___icon___id = 'oss___icon___id',
  oss___icon___node_locale = 'oss___icon___node_locale',
  oss___icon___name = 'oss___icon___name',
  oss___icon___what_i_can_do = 'oss___icon___what_i_can_do',
  oss___icon___what_i_can_do___contentful_id = 'oss___icon___what_i_can_do___contentful_id',
  oss___icon___what_i_can_do___id = 'oss___icon___what_i_can_do___id',
  oss___icon___what_i_can_do___node_locale = 'oss___icon___what_i_can_do___node_locale',
  oss___icon___what_i_can_do___sortKey = 'oss___icon___what_i_can_do___sortKey',
  oss___icon___what_i_can_do___name = 'oss___icon___what_i_can_do___name',
  oss___icon___what_i_can_do___subName = 'oss___icon___what_i_can_do___subName',
  oss___icon___what_i_can_do___spaceId = 'oss___icon___what_i_can_do___spaceId',
  oss___icon___what_i_can_do___createdAt = 'oss___icon___what_i_can_do___createdAt',
  oss___icon___what_i_can_do___updatedAt = 'oss___icon___what_i_can_do___updatedAt',
  oss___icon___what_i_can_do___children = 'oss___icon___what_i_can_do___children',
  oss___icon___project = 'oss___icon___project',
  oss___icon___project___contentful_id = 'oss___icon___project___contentful_id',
  oss___icon___project___id = 'oss___icon___project___id',
  oss___icon___project___node_locale = 'oss___icon___project___node_locale',
  oss___icon___project___name = 'oss___icon___project___name',
  oss___icon___project___subName = 'oss___icon___project___subName',
  oss___icon___project___startDate = 'oss___icon___project___startDate',
  oss___icon___project___endDate = 'oss___icon___project___endDate',
  oss___icon___project___tags = 'oss___icon___project___tags',
  oss___icon___project___spaceId = 'oss___icon___project___spaceId',
  oss___icon___project___createdAt = 'oss___icon___project___createdAt',
  oss___icon___project___updatedAt = 'oss___icon___project___updatedAt',
  oss___icon___project___childrenContentfulProjectDetailTextNode = 'oss___icon___project___childrenContentfulProjectDetailTextNode',
  oss___icon___project___children = 'oss___icon___project___children',
  oss___icon___oss = 'oss___icon___oss',
  oss___icon___oss___contentful_id = 'oss___icon___oss___contentful_id',
  oss___icon___oss___id = 'oss___icon___oss___id',
  oss___icon___oss___node_locale = 'oss___icon___oss___node_locale',
  oss___icon___oss___name = 'oss___icon___oss___name',
  oss___icon___oss___subName = 'oss___icon___oss___subName',
  oss___icon___oss___startDate = 'oss___icon___oss___startDate',
  oss___icon___oss___href = 'oss___icon___oss___href',
  oss___icon___oss___tags = 'oss___icon___oss___tags',
  oss___icon___oss___spaceId = 'oss___icon___oss___spaceId',
  oss___icon___oss___createdAt = 'oss___icon___oss___createdAt',
  oss___icon___oss___updatedAt = 'oss___icon___oss___updatedAt',
  oss___icon___oss___childrenContentfulOssDetailTextNode = 'oss___icon___oss___childrenContentfulOssDetailTextNode',
  oss___icon___oss___children = 'oss___icon___oss___children',
  oss___icon___svg___id = 'oss___icon___svg___id',
  oss___icon___svg___children = 'oss___icon___svg___children',
  oss___icon___svg___svg = 'oss___icon___svg___svg',
  oss___icon___svg___childrenMarkdownRemark = 'oss___icon___svg___childrenMarkdownRemark',
  oss___icon___spaceId = 'oss___icon___spaceId',
  oss___icon___createdAt = 'oss___icon___createdAt',
  oss___icon___updatedAt = 'oss___icon___updatedAt',
  oss___icon___sys___type = 'oss___icon___sys___type',
  oss___icon___sys___revision = 'oss___icon___sys___revision',
  oss___icon___history = 'oss___icon___history',
  oss___icon___history___contentful_id = 'oss___icon___history___contentful_id',
  oss___icon___history___id = 'oss___icon___history___id',
  oss___icon___history___node_locale = 'oss___icon___history___node_locale',
  oss___icon___history___name = 'oss___icon___history___name',
  oss___icon___history___date = 'oss___icon___history___date',
  oss___icon___history___subName = 'oss___icon___history___subName',
  oss___icon___history___spaceId = 'oss___icon___history___spaceId',
  oss___icon___history___createdAt = 'oss___icon___history___createdAt',
  oss___icon___history___updatedAt = 'oss___icon___history___updatedAt',
  oss___icon___history___children = 'oss___icon___history___children',
  oss___icon___contact = 'oss___icon___contact',
  oss___icon___contact___contentful_id = 'oss___icon___contact___contentful_id',
  oss___icon___contact___id = 'oss___icon___contact___id',
  oss___icon___contact___node_locale = 'oss___icon___contact___node_locale',
  oss___icon___contact___sortKey = 'oss___icon___contact___sortKey',
  oss___icon___contact___name = 'oss___icon___contact___name',
  oss___icon___contact___subName = 'oss___icon___contact___subName',
  oss___icon___contact___href = 'oss___icon___contact___href',
  oss___icon___contact___spaceId = 'oss___icon___contact___spaceId',
  oss___icon___contact___createdAt = 'oss___icon___contact___createdAt',
  oss___icon___contact___updatedAt = 'oss___icon___contact___updatedAt',
  oss___icon___contact___children = 'oss___icon___contact___children',
  oss___icon___childrenContentfulIconSvgTextNode = 'oss___icon___childrenContentfulIconSvgTextNode',
  oss___icon___childrenContentfulIconSvgTextNode___id = 'oss___icon___childrenContentfulIconSvgTextNode___id',
  oss___icon___childrenContentfulIconSvgTextNode___children = 'oss___icon___childrenContentfulIconSvgTextNode___children',
  oss___icon___childrenContentfulIconSvgTextNode___svg = 'oss___icon___childrenContentfulIconSvgTextNode___svg',
  oss___icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark = 'oss___icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark',
  oss___icon___childContentfulIconSvgTextNode___id = 'oss___icon___childContentfulIconSvgTextNode___id',
  oss___icon___childContentfulIconSvgTextNode___children = 'oss___icon___childContentfulIconSvgTextNode___children',
  oss___icon___childContentfulIconSvgTextNode___svg = 'oss___icon___childContentfulIconSvgTextNode___svg',
  oss___icon___childContentfulIconSvgTextNode___childrenMarkdownRemark = 'oss___icon___childContentfulIconSvgTextNode___childrenMarkdownRemark',
  oss___icon___parent___id = 'oss___icon___parent___id',
  oss___icon___parent___children = 'oss___icon___parent___children',
  oss___icon___children = 'oss___icon___children',
  oss___icon___children___id = 'oss___icon___children___id',
  oss___icon___children___children = 'oss___icon___children___children',
  oss___icon___internal___content = 'oss___icon___internal___content',
  oss___icon___internal___contentDigest = 'oss___icon___internal___contentDigest',
  oss___icon___internal___description = 'oss___icon___internal___description',
  oss___icon___internal___fieldOwners = 'oss___icon___internal___fieldOwners',
  oss___icon___internal___ignoreType = 'oss___icon___internal___ignoreType',
  oss___icon___internal___mediaType = 'oss___icon___internal___mediaType',
  oss___icon___internal___owner = 'oss___icon___internal___owner',
  oss___icon___internal___type = 'oss___icon___internal___type',
  oss___image___contentful_id = 'oss___image___contentful_id',
  oss___image___id = 'oss___image___id',
  oss___image___spaceId = 'oss___image___spaceId',
  oss___image___createdAt = 'oss___image___createdAt',
  oss___image___updatedAt = 'oss___image___updatedAt',
  oss___image___file___url = 'oss___image___file___url',
  oss___image___file___fileName = 'oss___image___file___fileName',
  oss___image___file___contentType = 'oss___image___file___contentType',
  oss___image___title = 'oss___image___title',
  oss___image___description = 'oss___image___description',
  oss___image___node_locale = 'oss___image___node_locale',
  oss___image___sys___type = 'oss___image___sys___type',
  oss___image___sys___revision = 'oss___image___sys___revision',
  oss___image___localFile___sourceInstanceName = 'oss___image___localFile___sourceInstanceName',
  oss___image___localFile___absolutePath = 'oss___image___localFile___absolutePath',
  oss___image___localFile___relativePath = 'oss___image___localFile___relativePath',
  oss___image___localFile___extension = 'oss___image___localFile___extension',
  oss___image___localFile___size = 'oss___image___localFile___size',
  oss___image___localFile___prettySize = 'oss___image___localFile___prettySize',
  oss___image___localFile___modifiedTime = 'oss___image___localFile___modifiedTime',
  oss___image___localFile___accessTime = 'oss___image___localFile___accessTime',
  oss___image___localFile___changeTime = 'oss___image___localFile___changeTime',
  oss___image___localFile___birthTime = 'oss___image___localFile___birthTime',
  oss___image___localFile___root = 'oss___image___localFile___root',
  oss___image___localFile___dir = 'oss___image___localFile___dir',
  oss___image___localFile___base = 'oss___image___localFile___base',
  oss___image___localFile___ext = 'oss___image___localFile___ext',
  oss___image___localFile___name = 'oss___image___localFile___name',
  oss___image___localFile___relativeDirectory = 'oss___image___localFile___relativeDirectory',
  oss___image___localFile___dev = 'oss___image___localFile___dev',
  oss___image___localFile___mode = 'oss___image___localFile___mode',
  oss___image___localFile___nlink = 'oss___image___localFile___nlink',
  oss___image___localFile___uid = 'oss___image___localFile___uid',
  oss___image___localFile___gid = 'oss___image___localFile___gid',
  oss___image___localFile___rdev = 'oss___image___localFile___rdev',
  oss___image___localFile___ino = 'oss___image___localFile___ino',
  oss___image___localFile___atimeMs = 'oss___image___localFile___atimeMs',
  oss___image___localFile___mtimeMs = 'oss___image___localFile___mtimeMs',
  oss___image___localFile___ctimeMs = 'oss___image___localFile___ctimeMs',
  oss___image___localFile___atime = 'oss___image___localFile___atime',
  oss___image___localFile___mtime = 'oss___image___localFile___mtime',
  oss___image___localFile___ctime = 'oss___image___localFile___ctime',
  oss___image___localFile___birthtime = 'oss___image___localFile___birthtime',
  oss___image___localFile___birthtimeMs = 'oss___image___localFile___birthtimeMs',
  oss___image___localFile___blksize = 'oss___image___localFile___blksize',
  oss___image___localFile___blocks = 'oss___image___localFile___blocks',
  oss___image___localFile___url = 'oss___image___localFile___url',
  oss___image___localFile___publicURL = 'oss___image___localFile___publicURL',
  oss___image___localFile___childrenImageSharp = 'oss___image___localFile___childrenImageSharp',
  oss___image___localFile___childrenLocale = 'oss___image___localFile___childrenLocale',
  oss___image___localFile___id = 'oss___image___localFile___id',
  oss___image___localFile___children = 'oss___image___localFile___children',
  oss___image___fixed___base64 = 'oss___image___fixed___base64',
  oss___image___fixed___tracedSVG = 'oss___image___fixed___tracedSVG',
  oss___image___fixed___aspectRatio = 'oss___image___fixed___aspectRatio',
  oss___image___fixed___width = 'oss___image___fixed___width',
  oss___image___fixed___height = 'oss___image___fixed___height',
  oss___image___fixed___src = 'oss___image___fixed___src',
  oss___image___fixed___srcSet = 'oss___image___fixed___srcSet',
  oss___image___fixed___srcWebp = 'oss___image___fixed___srcWebp',
  oss___image___fixed___srcSetWebp = 'oss___image___fixed___srcSetWebp',
  oss___image___fluid___base64 = 'oss___image___fluid___base64',
  oss___image___fluid___tracedSVG = 'oss___image___fluid___tracedSVG',
  oss___image___fluid___aspectRatio = 'oss___image___fluid___aspectRatio',
  oss___image___fluid___src = 'oss___image___fluid___src',
  oss___image___fluid___srcSet = 'oss___image___fluid___srcSet',
  oss___image___fluid___srcWebp = 'oss___image___fluid___srcWebp',
  oss___image___fluid___srcSetWebp = 'oss___image___fluid___srcSetWebp',
  oss___image___fluid___sizes = 'oss___image___fluid___sizes',
  oss___image___gatsbyImageData = 'oss___image___gatsbyImageData',
  oss___image___resize___base64 = 'oss___image___resize___base64',
  oss___image___resize___tracedSVG = 'oss___image___resize___tracedSVG',
  oss___image___resize___src = 'oss___image___resize___src',
  oss___image___resize___width = 'oss___image___resize___width',
  oss___image___resize___height = 'oss___image___resize___height',
  oss___image___resize___aspectRatio = 'oss___image___resize___aspectRatio',
  oss___image___parent___id = 'oss___image___parent___id',
  oss___image___parent___children = 'oss___image___parent___children',
  oss___image___children = 'oss___image___children',
  oss___image___children___id = 'oss___image___children___id',
  oss___image___children___children = 'oss___image___children___children',
  oss___image___internal___content = 'oss___image___internal___content',
  oss___image___internal___contentDigest = 'oss___image___internal___contentDigest',
  oss___image___internal___description = 'oss___image___internal___description',
  oss___image___internal___fieldOwners = 'oss___image___internal___fieldOwners',
  oss___image___internal___ignoreType = 'oss___image___internal___ignoreType',
  oss___image___internal___mediaType = 'oss___image___internal___mediaType',
  oss___image___internal___owner = 'oss___image___internal___owner',
  oss___image___internal___type = 'oss___image___internal___type',
  oss___detail___id = 'oss___detail___id',
  oss___detail___parent___id = 'oss___detail___parent___id',
  oss___detail___parent___children = 'oss___detail___parent___children',
  oss___detail___children = 'oss___detail___children',
  oss___detail___children___id = 'oss___detail___children___id',
  oss___detail___children___children = 'oss___detail___children___children',
  oss___detail___internal___content = 'oss___detail___internal___content',
  oss___detail___internal___contentDigest = 'oss___detail___internal___contentDigest',
  oss___detail___internal___description = 'oss___detail___internal___description',
  oss___detail___internal___fieldOwners = 'oss___detail___internal___fieldOwners',
  oss___detail___internal___ignoreType = 'oss___detail___internal___ignoreType',
  oss___detail___internal___mediaType = 'oss___detail___internal___mediaType',
  oss___detail___internal___owner = 'oss___detail___internal___owner',
  oss___detail___internal___type = 'oss___detail___internal___type',
  oss___detail___detail = 'oss___detail___detail',
  oss___detail___sys___type = 'oss___detail___sys___type',
  oss___detail___childrenMarkdownRemark = 'oss___detail___childrenMarkdownRemark',
  oss___detail___childrenMarkdownRemark___id = 'oss___detail___childrenMarkdownRemark___id',
  oss___detail___childrenMarkdownRemark___excerpt = 'oss___detail___childrenMarkdownRemark___excerpt',
  oss___detail___childrenMarkdownRemark___rawMarkdownBody = 'oss___detail___childrenMarkdownRemark___rawMarkdownBody',
  oss___detail___childrenMarkdownRemark___html = 'oss___detail___childrenMarkdownRemark___html',
  oss___detail___childrenMarkdownRemark___htmlAst = 'oss___detail___childrenMarkdownRemark___htmlAst',
  oss___detail___childrenMarkdownRemark___excerptAst = 'oss___detail___childrenMarkdownRemark___excerptAst',
  oss___detail___childrenMarkdownRemark___headings = 'oss___detail___childrenMarkdownRemark___headings',
  oss___detail___childrenMarkdownRemark___timeToRead = 'oss___detail___childrenMarkdownRemark___timeToRead',
  oss___detail___childrenMarkdownRemark___tableOfContents = 'oss___detail___childrenMarkdownRemark___tableOfContents',
  oss___detail___childrenMarkdownRemark___children = 'oss___detail___childrenMarkdownRemark___children',
  oss___detail___childMarkdownRemark___id = 'oss___detail___childMarkdownRemark___id',
  oss___detail___childMarkdownRemark___excerpt = 'oss___detail___childMarkdownRemark___excerpt',
  oss___detail___childMarkdownRemark___rawMarkdownBody = 'oss___detail___childMarkdownRemark___rawMarkdownBody',
  oss___detail___childMarkdownRemark___html = 'oss___detail___childMarkdownRemark___html',
  oss___detail___childMarkdownRemark___htmlAst = 'oss___detail___childMarkdownRemark___htmlAst',
  oss___detail___childMarkdownRemark___excerptAst = 'oss___detail___childMarkdownRemark___excerptAst',
  oss___detail___childMarkdownRemark___headings = 'oss___detail___childMarkdownRemark___headings',
  oss___detail___childMarkdownRemark___timeToRead = 'oss___detail___childMarkdownRemark___timeToRead',
  oss___detail___childMarkdownRemark___tableOfContents = 'oss___detail___childMarkdownRemark___tableOfContents',
  oss___detail___childMarkdownRemark___children = 'oss___detail___childMarkdownRemark___children',
  oss___spaceId = 'oss___spaceId',
  oss___createdAt = 'oss___createdAt',
  oss___updatedAt = 'oss___updatedAt',
  oss___sys___type = 'oss___sys___type',
  oss___sys___revision = 'oss___sys___revision',
  oss___childrenContentfulOssDetailTextNode = 'oss___childrenContentfulOssDetailTextNode',
  oss___childrenContentfulOssDetailTextNode___id = 'oss___childrenContentfulOssDetailTextNode___id',
  oss___childrenContentfulOssDetailTextNode___parent___id = 'oss___childrenContentfulOssDetailTextNode___parent___id',
  oss___childrenContentfulOssDetailTextNode___parent___children = 'oss___childrenContentfulOssDetailTextNode___parent___children',
  oss___childrenContentfulOssDetailTextNode___children = 'oss___childrenContentfulOssDetailTextNode___children',
  oss___childrenContentfulOssDetailTextNode___children___id = 'oss___childrenContentfulOssDetailTextNode___children___id',
  oss___childrenContentfulOssDetailTextNode___children___children = 'oss___childrenContentfulOssDetailTextNode___children___children',
  oss___childrenContentfulOssDetailTextNode___internal___content = 'oss___childrenContentfulOssDetailTextNode___internal___content',
  oss___childrenContentfulOssDetailTextNode___internal___contentDigest = 'oss___childrenContentfulOssDetailTextNode___internal___contentDigest',
  oss___childrenContentfulOssDetailTextNode___internal___description = 'oss___childrenContentfulOssDetailTextNode___internal___description',
  oss___childrenContentfulOssDetailTextNode___internal___fieldOwners = 'oss___childrenContentfulOssDetailTextNode___internal___fieldOwners',
  oss___childrenContentfulOssDetailTextNode___internal___ignoreType = 'oss___childrenContentfulOssDetailTextNode___internal___ignoreType',
  oss___childrenContentfulOssDetailTextNode___internal___mediaType = 'oss___childrenContentfulOssDetailTextNode___internal___mediaType',
  oss___childrenContentfulOssDetailTextNode___internal___owner = 'oss___childrenContentfulOssDetailTextNode___internal___owner',
  oss___childrenContentfulOssDetailTextNode___internal___type = 'oss___childrenContentfulOssDetailTextNode___internal___type',
  oss___childrenContentfulOssDetailTextNode___detail = 'oss___childrenContentfulOssDetailTextNode___detail',
  oss___childrenContentfulOssDetailTextNode___sys___type = 'oss___childrenContentfulOssDetailTextNode___sys___type',
  oss___childrenContentfulOssDetailTextNode___childrenMarkdownRemark = 'oss___childrenContentfulOssDetailTextNode___childrenMarkdownRemark',
  oss___childrenContentfulOssDetailTextNode___childrenMarkdownRemark___id = 'oss___childrenContentfulOssDetailTextNode___childrenMarkdownRemark___id',
  oss___childrenContentfulOssDetailTextNode___childrenMarkdownRemark___excerpt = 'oss___childrenContentfulOssDetailTextNode___childrenMarkdownRemark___excerpt',
  oss___childrenContentfulOssDetailTextNode___childrenMarkdownRemark___rawMarkdownBody = 'oss___childrenContentfulOssDetailTextNode___childrenMarkdownRemark___rawMarkdownBody',
  oss___childrenContentfulOssDetailTextNode___childrenMarkdownRemark___html = 'oss___childrenContentfulOssDetailTextNode___childrenMarkdownRemark___html',
  oss___childrenContentfulOssDetailTextNode___childrenMarkdownRemark___htmlAst = 'oss___childrenContentfulOssDetailTextNode___childrenMarkdownRemark___htmlAst',
  oss___childrenContentfulOssDetailTextNode___childrenMarkdownRemark___excerptAst = 'oss___childrenContentfulOssDetailTextNode___childrenMarkdownRemark___excerptAst',
  oss___childrenContentfulOssDetailTextNode___childrenMarkdownRemark___headings = 'oss___childrenContentfulOssDetailTextNode___childrenMarkdownRemark___headings',
  oss___childrenContentfulOssDetailTextNode___childrenMarkdownRemark___timeToRead = 'oss___childrenContentfulOssDetailTextNode___childrenMarkdownRemark___timeToRead',
  oss___childrenContentfulOssDetailTextNode___childrenMarkdownRemark___tableOfContents = 'oss___childrenContentfulOssDetailTextNode___childrenMarkdownRemark___tableOfContents',
  oss___childrenContentfulOssDetailTextNode___childrenMarkdownRemark___children = 'oss___childrenContentfulOssDetailTextNode___childrenMarkdownRemark___children',
  oss___childrenContentfulOssDetailTextNode___childMarkdownRemark___id = 'oss___childrenContentfulOssDetailTextNode___childMarkdownRemark___id',
  oss___childrenContentfulOssDetailTextNode___childMarkdownRemark___excerpt = 'oss___childrenContentfulOssDetailTextNode___childMarkdownRemark___excerpt',
  oss___childrenContentfulOssDetailTextNode___childMarkdownRemark___rawMarkdownBody = 'oss___childrenContentfulOssDetailTextNode___childMarkdownRemark___rawMarkdownBody',
  oss___childrenContentfulOssDetailTextNode___childMarkdownRemark___html = 'oss___childrenContentfulOssDetailTextNode___childMarkdownRemark___html',
  oss___childrenContentfulOssDetailTextNode___childMarkdownRemark___htmlAst = 'oss___childrenContentfulOssDetailTextNode___childMarkdownRemark___htmlAst',
  oss___childrenContentfulOssDetailTextNode___childMarkdownRemark___excerptAst = 'oss___childrenContentfulOssDetailTextNode___childMarkdownRemark___excerptAst',
  oss___childrenContentfulOssDetailTextNode___childMarkdownRemark___headings = 'oss___childrenContentfulOssDetailTextNode___childMarkdownRemark___headings',
  oss___childrenContentfulOssDetailTextNode___childMarkdownRemark___timeToRead = 'oss___childrenContentfulOssDetailTextNode___childMarkdownRemark___timeToRead',
  oss___childrenContentfulOssDetailTextNode___childMarkdownRemark___tableOfContents = 'oss___childrenContentfulOssDetailTextNode___childMarkdownRemark___tableOfContents',
  oss___childrenContentfulOssDetailTextNode___childMarkdownRemark___children = 'oss___childrenContentfulOssDetailTextNode___childMarkdownRemark___children',
  oss___childContentfulOssDetailTextNode___id = 'oss___childContentfulOssDetailTextNode___id',
  oss___childContentfulOssDetailTextNode___parent___id = 'oss___childContentfulOssDetailTextNode___parent___id',
  oss___childContentfulOssDetailTextNode___parent___children = 'oss___childContentfulOssDetailTextNode___parent___children',
  oss___childContentfulOssDetailTextNode___children = 'oss___childContentfulOssDetailTextNode___children',
  oss___childContentfulOssDetailTextNode___children___id = 'oss___childContentfulOssDetailTextNode___children___id',
  oss___childContentfulOssDetailTextNode___children___children = 'oss___childContentfulOssDetailTextNode___children___children',
  oss___childContentfulOssDetailTextNode___internal___content = 'oss___childContentfulOssDetailTextNode___internal___content',
  oss___childContentfulOssDetailTextNode___internal___contentDigest = 'oss___childContentfulOssDetailTextNode___internal___contentDigest',
  oss___childContentfulOssDetailTextNode___internal___description = 'oss___childContentfulOssDetailTextNode___internal___description',
  oss___childContentfulOssDetailTextNode___internal___fieldOwners = 'oss___childContentfulOssDetailTextNode___internal___fieldOwners',
  oss___childContentfulOssDetailTextNode___internal___ignoreType = 'oss___childContentfulOssDetailTextNode___internal___ignoreType',
  oss___childContentfulOssDetailTextNode___internal___mediaType = 'oss___childContentfulOssDetailTextNode___internal___mediaType',
  oss___childContentfulOssDetailTextNode___internal___owner = 'oss___childContentfulOssDetailTextNode___internal___owner',
  oss___childContentfulOssDetailTextNode___internal___type = 'oss___childContentfulOssDetailTextNode___internal___type',
  oss___childContentfulOssDetailTextNode___detail = 'oss___childContentfulOssDetailTextNode___detail',
  oss___childContentfulOssDetailTextNode___sys___type = 'oss___childContentfulOssDetailTextNode___sys___type',
  oss___childContentfulOssDetailTextNode___childrenMarkdownRemark = 'oss___childContentfulOssDetailTextNode___childrenMarkdownRemark',
  oss___childContentfulOssDetailTextNode___childrenMarkdownRemark___id = 'oss___childContentfulOssDetailTextNode___childrenMarkdownRemark___id',
  oss___childContentfulOssDetailTextNode___childrenMarkdownRemark___excerpt = 'oss___childContentfulOssDetailTextNode___childrenMarkdownRemark___excerpt',
  oss___childContentfulOssDetailTextNode___childrenMarkdownRemark___rawMarkdownBody = 'oss___childContentfulOssDetailTextNode___childrenMarkdownRemark___rawMarkdownBody',
  oss___childContentfulOssDetailTextNode___childrenMarkdownRemark___html = 'oss___childContentfulOssDetailTextNode___childrenMarkdownRemark___html',
  oss___childContentfulOssDetailTextNode___childrenMarkdownRemark___htmlAst = 'oss___childContentfulOssDetailTextNode___childrenMarkdownRemark___htmlAst',
  oss___childContentfulOssDetailTextNode___childrenMarkdownRemark___excerptAst = 'oss___childContentfulOssDetailTextNode___childrenMarkdownRemark___excerptAst',
  oss___childContentfulOssDetailTextNode___childrenMarkdownRemark___headings = 'oss___childContentfulOssDetailTextNode___childrenMarkdownRemark___headings',
  oss___childContentfulOssDetailTextNode___childrenMarkdownRemark___timeToRead = 'oss___childContentfulOssDetailTextNode___childrenMarkdownRemark___timeToRead',
  oss___childContentfulOssDetailTextNode___childrenMarkdownRemark___tableOfContents = 'oss___childContentfulOssDetailTextNode___childrenMarkdownRemark___tableOfContents',
  oss___childContentfulOssDetailTextNode___childrenMarkdownRemark___children = 'oss___childContentfulOssDetailTextNode___childrenMarkdownRemark___children',
  oss___childContentfulOssDetailTextNode___childMarkdownRemark___id = 'oss___childContentfulOssDetailTextNode___childMarkdownRemark___id',
  oss___childContentfulOssDetailTextNode___childMarkdownRemark___excerpt = 'oss___childContentfulOssDetailTextNode___childMarkdownRemark___excerpt',
  oss___childContentfulOssDetailTextNode___childMarkdownRemark___rawMarkdownBody = 'oss___childContentfulOssDetailTextNode___childMarkdownRemark___rawMarkdownBody',
  oss___childContentfulOssDetailTextNode___childMarkdownRemark___html = 'oss___childContentfulOssDetailTextNode___childMarkdownRemark___html',
  oss___childContentfulOssDetailTextNode___childMarkdownRemark___htmlAst = 'oss___childContentfulOssDetailTextNode___childMarkdownRemark___htmlAst',
  oss___childContentfulOssDetailTextNode___childMarkdownRemark___excerptAst = 'oss___childContentfulOssDetailTextNode___childMarkdownRemark___excerptAst',
  oss___childContentfulOssDetailTextNode___childMarkdownRemark___headings = 'oss___childContentfulOssDetailTextNode___childMarkdownRemark___headings',
  oss___childContentfulOssDetailTextNode___childMarkdownRemark___timeToRead = 'oss___childContentfulOssDetailTextNode___childMarkdownRemark___timeToRead',
  oss___childContentfulOssDetailTextNode___childMarkdownRemark___tableOfContents = 'oss___childContentfulOssDetailTextNode___childMarkdownRemark___tableOfContents',
  oss___childContentfulOssDetailTextNode___childMarkdownRemark___children = 'oss___childContentfulOssDetailTextNode___childMarkdownRemark___children',
  oss___parent___id = 'oss___parent___id',
  oss___parent___parent___id = 'oss___parent___parent___id',
  oss___parent___parent___children = 'oss___parent___parent___children',
  oss___parent___children = 'oss___parent___children',
  oss___parent___children___id = 'oss___parent___children___id',
  oss___parent___children___children = 'oss___parent___children___children',
  oss___parent___internal___content = 'oss___parent___internal___content',
  oss___parent___internal___contentDigest = 'oss___parent___internal___contentDigest',
  oss___parent___internal___description = 'oss___parent___internal___description',
  oss___parent___internal___fieldOwners = 'oss___parent___internal___fieldOwners',
  oss___parent___internal___ignoreType = 'oss___parent___internal___ignoreType',
  oss___parent___internal___mediaType = 'oss___parent___internal___mediaType',
  oss___parent___internal___owner = 'oss___parent___internal___owner',
  oss___parent___internal___type = 'oss___parent___internal___type',
  oss___children = 'oss___children',
  oss___children___id = 'oss___children___id',
  oss___children___parent___id = 'oss___children___parent___id',
  oss___children___parent___children = 'oss___children___parent___children',
  oss___children___children = 'oss___children___children',
  oss___children___children___id = 'oss___children___children___id',
  oss___children___children___children = 'oss___children___children___children',
  oss___children___internal___content = 'oss___children___internal___content',
  oss___children___internal___contentDigest = 'oss___children___internal___contentDigest',
  oss___children___internal___description = 'oss___children___internal___description',
  oss___children___internal___fieldOwners = 'oss___children___internal___fieldOwners',
  oss___children___internal___ignoreType = 'oss___children___internal___ignoreType',
  oss___children___internal___mediaType = 'oss___children___internal___mediaType',
  oss___children___internal___owner = 'oss___children___internal___owner',
  oss___children___internal___type = 'oss___children___internal___type',
  oss___internal___content = 'oss___internal___content',
  oss___internal___contentDigest = 'oss___internal___contentDigest',
  oss___internal___description = 'oss___internal___description',
  oss___internal___fieldOwners = 'oss___internal___fieldOwners',
  oss___internal___ignoreType = 'oss___internal___ignoreType',
  oss___internal___mediaType = 'oss___internal___mediaType',
  oss___internal___owner = 'oss___internal___owner',
  oss___internal___type = 'oss___internal___type',
  svg___id = 'svg___id',
  svg___parent___id = 'svg___parent___id',
  svg___parent___parent___id = 'svg___parent___parent___id',
  svg___parent___parent___children = 'svg___parent___parent___children',
  svg___parent___children = 'svg___parent___children',
  svg___parent___children___id = 'svg___parent___children___id',
  svg___parent___children___children = 'svg___parent___children___children',
  svg___parent___internal___content = 'svg___parent___internal___content',
  svg___parent___internal___contentDigest = 'svg___parent___internal___contentDigest',
  svg___parent___internal___description = 'svg___parent___internal___description',
  svg___parent___internal___fieldOwners = 'svg___parent___internal___fieldOwners',
  svg___parent___internal___ignoreType = 'svg___parent___internal___ignoreType',
  svg___parent___internal___mediaType = 'svg___parent___internal___mediaType',
  svg___parent___internal___owner = 'svg___parent___internal___owner',
  svg___parent___internal___type = 'svg___parent___internal___type',
  svg___children = 'svg___children',
  svg___children___id = 'svg___children___id',
  svg___children___parent___id = 'svg___children___parent___id',
  svg___children___parent___children = 'svg___children___parent___children',
  svg___children___children = 'svg___children___children',
  svg___children___children___id = 'svg___children___children___id',
  svg___children___children___children = 'svg___children___children___children',
  svg___children___internal___content = 'svg___children___internal___content',
  svg___children___internal___contentDigest = 'svg___children___internal___contentDigest',
  svg___children___internal___description = 'svg___children___internal___description',
  svg___children___internal___fieldOwners = 'svg___children___internal___fieldOwners',
  svg___children___internal___ignoreType = 'svg___children___internal___ignoreType',
  svg___children___internal___mediaType = 'svg___children___internal___mediaType',
  svg___children___internal___owner = 'svg___children___internal___owner',
  svg___children___internal___type = 'svg___children___internal___type',
  svg___internal___content = 'svg___internal___content',
  svg___internal___contentDigest = 'svg___internal___contentDigest',
  svg___internal___description = 'svg___internal___description',
  svg___internal___fieldOwners = 'svg___internal___fieldOwners',
  svg___internal___ignoreType = 'svg___internal___ignoreType',
  svg___internal___mediaType = 'svg___internal___mediaType',
  svg___internal___owner = 'svg___internal___owner',
  svg___internal___type = 'svg___internal___type',
  svg___svg = 'svg___svg',
  svg___sys___type = 'svg___sys___type',
  svg___childrenMarkdownRemark = 'svg___childrenMarkdownRemark',
  svg___childrenMarkdownRemark___id = 'svg___childrenMarkdownRemark___id',
  svg___childrenMarkdownRemark___frontmatter___title = 'svg___childrenMarkdownRemark___frontmatter___title',
  svg___childrenMarkdownRemark___excerpt = 'svg___childrenMarkdownRemark___excerpt',
  svg___childrenMarkdownRemark___rawMarkdownBody = 'svg___childrenMarkdownRemark___rawMarkdownBody',
  svg___childrenMarkdownRemark___html = 'svg___childrenMarkdownRemark___html',
  svg___childrenMarkdownRemark___htmlAst = 'svg___childrenMarkdownRemark___htmlAst',
  svg___childrenMarkdownRemark___excerptAst = 'svg___childrenMarkdownRemark___excerptAst',
  svg___childrenMarkdownRemark___headings = 'svg___childrenMarkdownRemark___headings',
  svg___childrenMarkdownRemark___headings___id = 'svg___childrenMarkdownRemark___headings___id',
  svg___childrenMarkdownRemark___headings___value = 'svg___childrenMarkdownRemark___headings___value',
  svg___childrenMarkdownRemark___headings___depth = 'svg___childrenMarkdownRemark___headings___depth',
  svg___childrenMarkdownRemark___timeToRead = 'svg___childrenMarkdownRemark___timeToRead',
  svg___childrenMarkdownRemark___tableOfContents = 'svg___childrenMarkdownRemark___tableOfContents',
  svg___childrenMarkdownRemark___wordCount___paragraphs = 'svg___childrenMarkdownRemark___wordCount___paragraphs',
  svg___childrenMarkdownRemark___wordCount___sentences = 'svg___childrenMarkdownRemark___wordCount___sentences',
  svg___childrenMarkdownRemark___wordCount___words = 'svg___childrenMarkdownRemark___wordCount___words',
  svg___childrenMarkdownRemark___parent___id = 'svg___childrenMarkdownRemark___parent___id',
  svg___childrenMarkdownRemark___parent___children = 'svg___childrenMarkdownRemark___parent___children',
  svg___childrenMarkdownRemark___children = 'svg___childrenMarkdownRemark___children',
  svg___childrenMarkdownRemark___children___id = 'svg___childrenMarkdownRemark___children___id',
  svg___childrenMarkdownRemark___children___children = 'svg___childrenMarkdownRemark___children___children',
  svg___childrenMarkdownRemark___internal___content = 'svg___childrenMarkdownRemark___internal___content',
  svg___childrenMarkdownRemark___internal___contentDigest = 'svg___childrenMarkdownRemark___internal___contentDigest',
  svg___childrenMarkdownRemark___internal___description = 'svg___childrenMarkdownRemark___internal___description',
  svg___childrenMarkdownRemark___internal___fieldOwners = 'svg___childrenMarkdownRemark___internal___fieldOwners',
  svg___childrenMarkdownRemark___internal___ignoreType = 'svg___childrenMarkdownRemark___internal___ignoreType',
  svg___childrenMarkdownRemark___internal___mediaType = 'svg___childrenMarkdownRemark___internal___mediaType',
  svg___childrenMarkdownRemark___internal___owner = 'svg___childrenMarkdownRemark___internal___owner',
  svg___childrenMarkdownRemark___internal___type = 'svg___childrenMarkdownRemark___internal___type',
  svg___childMarkdownRemark___id = 'svg___childMarkdownRemark___id',
  svg___childMarkdownRemark___frontmatter___title = 'svg___childMarkdownRemark___frontmatter___title',
  svg___childMarkdownRemark___excerpt = 'svg___childMarkdownRemark___excerpt',
  svg___childMarkdownRemark___rawMarkdownBody = 'svg___childMarkdownRemark___rawMarkdownBody',
  svg___childMarkdownRemark___html = 'svg___childMarkdownRemark___html',
  svg___childMarkdownRemark___htmlAst = 'svg___childMarkdownRemark___htmlAst',
  svg___childMarkdownRemark___excerptAst = 'svg___childMarkdownRemark___excerptAst',
  svg___childMarkdownRemark___headings = 'svg___childMarkdownRemark___headings',
  svg___childMarkdownRemark___headings___id = 'svg___childMarkdownRemark___headings___id',
  svg___childMarkdownRemark___headings___value = 'svg___childMarkdownRemark___headings___value',
  svg___childMarkdownRemark___headings___depth = 'svg___childMarkdownRemark___headings___depth',
  svg___childMarkdownRemark___timeToRead = 'svg___childMarkdownRemark___timeToRead',
  svg___childMarkdownRemark___tableOfContents = 'svg___childMarkdownRemark___tableOfContents',
  svg___childMarkdownRemark___wordCount___paragraphs = 'svg___childMarkdownRemark___wordCount___paragraphs',
  svg___childMarkdownRemark___wordCount___sentences = 'svg___childMarkdownRemark___wordCount___sentences',
  svg___childMarkdownRemark___wordCount___words = 'svg___childMarkdownRemark___wordCount___words',
  svg___childMarkdownRemark___parent___id = 'svg___childMarkdownRemark___parent___id',
  svg___childMarkdownRemark___parent___children = 'svg___childMarkdownRemark___parent___children',
  svg___childMarkdownRemark___children = 'svg___childMarkdownRemark___children',
  svg___childMarkdownRemark___children___id = 'svg___childMarkdownRemark___children___id',
  svg___childMarkdownRemark___children___children = 'svg___childMarkdownRemark___children___children',
  svg___childMarkdownRemark___internal___content = 'svg___childMarkdownRemark___internal___content',
  svg___childMarkdownRemark___internal___contentDigest = 'svg___childMarkdownRemark___internal___contentDigest',
  svg___childMarkdownRemark___internal___description = 'svg___childMarkdownRemark___internal___description',
  svg___childMarkdownRemark___internal___fieldOwners = 'svg___childMarkdownRemark___internal___fieldOwners',
  svg___childMarkdownRemark___internal___ignoreType = 'svg___childMarkdownRemark___internal___ignoreType',
  svg___childMarkdownRemark___internal___mediaType = 'svg___childMarkdownRemark___internal___mediaType',
  svg___childMarkdownRemark___internal___owner = 'svg___childMarkdownRemark___internal___owner',
  svg___childMarkdownRemark___internal___type = 'svg___childMarkdownRemark___internal___type',
  spaceId = 'spaceId',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  sys___type = 'sys___type',
  sys___revision = 'sys___revision',
  sys___contentType___sys___type = 'sys___contentType___sys___type',
  sys___contentType___sys___linkType = 'sys___contentType___sys___linkType',
  sys___contentType___sys___id = 'sys___contentType___sys___id',
  history = 'history',
  history___contentful_id = 'history___contentful_id',
  history___id = 'history___id',
  history___node_locale = 'history___node_locale',
  history___name = 'history___name',
  history___date = 'history___date',
  history___subName = 'history___subName',
  history___icon___contentful_id = 'history___icon___contentful_id',
  history___icon___id = 'history___icon___id',
  history___icon___node_locale = 'history___icon___node_locale',
  history___icon___name = 'history___icon___name',
  history___icon___what_i_can_do = 'history___icon___what_i_can_do',
  history___icon___what_i_can_do___contentful_id = 'history___icon___what_i_can_do___contentful_id',
  history___icon___what_i_can_do___id = 'history___icon___what_i_can_do___id',
  history___icon___what_i_can_do___node_locale = 'history___icon___what_i_can_do___node_locale',
  history___icon___what_i_can_do___sortKey = 'history___icon___what_i_can_do___sortKey',
  history___icon___what_i_can_do___name = 'history___icon___what_i_can_do___name',
  history___icon___what_i_can_do___subName = 'history___icon___what_i_can_do___subName',
  history___icon___what_i_can_do___spaceId = 'history___icon___what_i_can_do___spaceId',
  history___icon___what_i_can_do___createdAt = 'history___icon___what_i_can_do___createdAt',
  history___icon___what_i_can_do___updatedAt = 'history___icon___what_i_can_do___updatedAt',
  history___icon___what_i_can_do___children = 'history___icon___what_i_can_do___children',
  history___icon___project = 'history___icon___project',
  history___icon___project___contentful_id = 'history___icon___project___contentful_id',
  history___icon___project___id = 'history___icon___project___id',
  history___icon___project___node_locale = 'history___icon___project___node_locale',
  history___icon___project___name = 'history___icon___project___name',
  history___icon___project___subName = 'history___icon___project___subName',
  history___icon___project___startDate = 'history___icon___project___startDate',
  history___icon___project___endDate = 'history___icon___project___endDate',
  history___icon___project___tags = 'history___icon___project___tags',
  history___icon___project___spaceId = 'history___icon___project___spaceId',
  history___icon___project___createdAt = 'history___icon___project___createdAt',
  history___icon___project___updatedAt = 'history___icon___project___updatedAt',
  history___icon___project___childrenContentfulProjectDetailTextNode = 'history___icon___project___childrenContentfulProjectDetailTextNode',
  history___icon___project___children = 'history___icon___project___children',
  history___icon___oss = 'history___icon___oss',
  history___icon___oss___contentful_id = 'history___icon___oss___contentful_id',
  history___icon___oss___id = 'history___icon___oss___id',
  history___icon___oss___node_locale = 'history___icon___oss___node_locale',
  history___icon___oss___name = 'history___icon___oss___name',
  history___icon___oss___subName = 'history___icon___oss___subName',
  history___icon___oss___startDate = 'history___icon___oss___startDate',
  history___icon___oss___href = 'history___icon___oss___href',
  history___icon___oss___tags = 'history___icon___oss___tags',
  history___icon___oss___spaceId = 'history___icon___oss___spaceId',
  history___icon___oss___createdAt = 'history___icon___oss___createdAt',
  history___icon___oss___updatedAt = 'history___icon___oss___updatedAt',
  history___icon___oss___childrenContentfulOssDetailTextNode = 'history___icon___oss___childrenContentfulOssDetailTextNode',
  history___icon___oss___children = 'history___icon___oss___children',
  history___icon___svg___id = 'history___icon___svg___id',
  history___icon___svg___children = 'history___icon___svg___children',
  history___icon___svg___svg = 'history___icon___svg___svg',
  history___icon___svg___childrenMarkdownRemark = 'history___icon___svg___childrenMarkdownRemark',
  history___icon___spaceId = 'history___icon___spaceId',
  history___icon___createdAt = 'history___icon___createdAt',
  history___icon___updatedAt = 'history___icon___updatedAt',
  history___icon___sys___type = 'history___icon___sys___type',
  history___icon___sys___revision = 'history___icon___sys___revision',
  history___icon___history = 'history___icon___history',
  history___icon___history___contentful_id = 'history___icon___history___contentful_id',
  history___icon___history___id = 'history___icon___history___id',
  history___icon___history___node_locale = 'history___icon___history___node_locale',
  history___icon___history___name = 'history___icon___history___name',
  history___icon___history___date = 'history___icon___history___date',
  history___icon___history___subName = 'history___icon___history___subName',
  history___icon___history___spaceId = 'history___icon___history___spaceId',
  history___icon___history___createdAt = 'history___icon___history___createdAt',
  history___icon___history___updatedAt = 'history___icon___history___updatedAt',
  history___icon___history___children = 'history___icon___history___children',
  history___icon___contact = 'history___icon___contact',
  history___icon___contact___contentful_id = 'history___icon___contact___contentful_id',
  history___icon___contact___id = 'history___icon___contact___id',
  history___icon___contact___node_locale = 'history___icon___contact___node_locale',
  history___icon___contact___sortKey = 'history___icon___contact___sortKey',
  history___icon___contact___name = 'history___icon___contact___name',
  history___icon___contact___subName = 'history___icon___contact___subName',
  history___icon___contact___href = 'history___icon___contact___href',
  history___icon___contact___spaceId = 'history___icon___contact___spaceId',
  history___icon___contact___createdAt = 'history___icon___contact___createdAt',
  history___icon___contact___updatedAt = 'history___icon___contact___updatedAt',
  history___icon___contact___children = 'history___icon___contact___children',
  history___icon___childrenContentfulIconSvgTextNode = 'history___icon___childrenContentfulIconSvgTextNode',
  history___icon___childrenContentfulIconSvgTextNode___id = 'history___icon___childrenContentfulIconSvgTextNode___id',
  history___icon___childrenContentfulIconSvgTextNode___children = 'history___icon___childrenContentfulIconSvgTextNode___children',
  history___icon___childrenContentfulIconSvgTextNode___svg = 'history___icon___childrenContentfulIconSvgTextNode___svg',
  history___icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark = 'history___icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark',
  history___icon___childContentfulIconSvgTextNode___id = 'history___icon___childContentfulIconSvgTextNode___id',
  history___icon___childContentfulIconSvgTextNode___children = 'history___icon___childContentfulIconSvgTextNode___children',
  history___icon___childContentfulIconSvgTextNode___svg = 'history___icon___childContentfulIconSvgTextNode___svg',
  history___icon___childContentfulIconSvgTextNode___childrenMarkdownRemark = 'history___icon___childContentfulIconSvgTextNode___childrenMarkdownRemark',
  history___icon___parent___id = 'history___icon___parent___id',
  history___icon___parent___children = 'history___icon___parent___children',
  history___icon___children = 'history___icon___children',
  history___icon___children___id = 'history___icon___children___id',
  history___icon___children___children = 'history___icon___children___children',
  history___icon___internal___content = 'history___icon___internal___content',
  history___icon___internal___contentDigest = 'history___icon___internal___contentDigest',
  history___icon___internal___description = 'history___icon___internal___description',
  history___icon___internal___fieldOwners = 'history___icon___internal___fieldOwners',
  history___icon___internal___ignoreType = 'history___icon___internal___ignoreType',
  history___icon___internal___mediaType = 'history___icon___internal___mediaType',
  history___icon___internal___owner = 'history___icon___internal___owner',
  history___icon___internal___type = 'history___icon___internal___type',
  history___spaceId = 'history___spaceId',
  history___createdAt = 'history___createdAt',
  history___updatedAt = 'history___updatedAt',
  history___sys___type = 'history___sys___type',
  history___sys___revision = 'history___sys___revision',
  history___parent___id = 'history___parent___id',
  history___parent___parent___id = 'history___parent___parent___id',
  history___parent___parent___children = 'history___parent___parent___children',
  history___parent___children = 'history___parent___children',
  history___parent___children___id = 'history___parent___children___id',
  history___parent___children___children = 'history___parent___children___children',
  history___parent___internal___content = 'history___parent___internal___content',
  history___parent___internal___contentDigest = 'history___parent___internal___contentDigest',
  history___parent___internal___description = 'history___parent___internal___description',
  history___parent___internal___fieldOwners = 'history___parent___internal___fieldOwners',
  history___parent___internal___ignoreType = 'history___parent___internal___ignoreType',
  history___parent___internal___mediaType = 'history___parent___internal___mediaType',
  history___parent___internal___owner = 'history___parent___internal___owner',
  history___parent___internal___type = 'history___parent___internal___type',
  history___children = 'history___children',
  history___children___id = 'history___children___id',
  history___children___parent___id = 'history___children___parent___id',
  history___children___parent___children = 'history___children___parent___children',
  history___children___children = 'history___children___children',
  history___children___children___id = 'history___children___children___id',
  history___children___children___children = 'history___children___children___children',
  history___children___internal___content = 'history___children___internal___content',
  history___children___internal___contentDigest = 'history___children___internal___contentDigest',
  history___children___internal___description = 'history___children___internal___description',
  history___children___internal___fieldOwners = 'history___children___internal___fieldOwners',
  history___children___internal___ignoreType = 'history___children___internal___ignoreType',
  history___children___internal___mediaType = 'history___children___internal___mediaType',
  history___children___internal___owner = 'history___children___internal___owner',
  history___children___internal___type = 'history___children___internal___type',
  history___internal___content = 'history___internal___content',
  history___internal___contentDigest = 'history___internal___contentDigest',
  history___internal___description = 'history___internal___description',
  history___internal___fieldOwners = 'history___internal___fieldOwners',
  history___internal___ignoreType = 'history___internal___ignoreType',
  history___internal___mediaType = 'history___internal___mediaType',
  history___internal___owner = 'history___internal___owner',
  history___internal___type = 'history___internal___type',
  contact = 'contact',
  contact___contentful_id = 'contact___contentful_id',
  contact___id = 'contact___id',
  contact___node_locale = 'contact___node_locale',
  contact___sortKey = 'contact___sortKey',
  contact___name = 'contact___name',
  contact___subName = 'contact___subName',
  contact___href = 'contact___href',
  contact___icon___contentful_id = 'contact___icon___contentful_id',
  contact___icon___id = 'contact___icon___id',
  contact___icon___node_locale = 'contact___icon___node_locale',
  contact___icon___name = 'contact___icon___name',
  contact___icon___what_i_can_do = 'contact___icon___what_i_can_do',
  contact___icon___what_i_can_do___contentful_id = 'contact___icon___what_i_can_do___contentful_id',
  contact___icon___what_i_can_do___id = 'contact___icon___what_i_can_do___id',
  contact___icon___what_i_can_do___node_locale = 'contact___icon___what_i_can_do___node_locale',
  contact___icon___what_i_can_do___sortKey = 'contact___icon___what_i_can_do___sortKey',
  contact___icon___what_i_can_do___name = 'contact___icon___what_i_can_do___name',
  contact___icon___what_i_can_do___subName = 'contact___icon___what_i_can_do___subName',
  contact___icon___what_i_can_do___spaceId = 'contact___icon___what_i_can_do___spaceId',
  contact___icon___what_i_can_do___createdAt = 'contact___icon___what_i_can_do___createdAt',
  contact___icon___what_i_can_do___updatedAt = 'contact___icon___what_i_can_do___updatedAt',
  contact___icon___what_i_can_do___children = 'contact___icon___what_i_can_do___children',
  contact___icon___project = 'contact___icon___project',
  contact___icon___project___contentful_id = 'contact___icon___project___contentful_id',
  contact___icon___project___id = 'contact___icon___project___id',
  contact___icon___project___node_locale = 'contact___icon___project___node_locale',
  contact___icon___project___name = 'contact___icon___project___name',
  contact___icon___project___subName = 'contact___icon___project___subName',
  contact___icon___project___startDate = 'contact___icon___project___startDate',
  contact___icon___project___endDate = 'contact___icon___project___endDate',
  contact___icon___project___tags = 'contact___icon___project___tags',
  contact___icon___project___spaceId = 'contact___icon___project___spaceId',
  contact___icon___project___createdAt = 'contact___icon___project___createdAt',
  contact___icon___project___updatedAt = 'contact___icon___project___updatedAt',
  contact___icon___project___childrenContentfulProjectDetailTextNode = 'contact___icon___project___childrenContentfulProjectDetailTextNode',
  contact___icon___project___children = 'contact___icon___project___children',
  contact___icon___oss = 'contact___icon___oss',
  contact___icon___oss___contentful_id = 'contact___icon___oss___contentful_id',
  contact___icon___oss___id = 'contact___icon___oss___id',
  contact___icon___oss___node_locale = 'contact___icon___oss___node_locale',
  contact___icon___oss___name = 'contact___icon___oss___name',
  contact___icon___oss___subName = 'contact___icon___oss___subName',
  contact___icon___oss___startDate = 'contact___icon___oss___startDate',
  contact___icon___oss___href = 'contact___icon___oss___href',
  contact___icon___oss___tags = 'contact___icon___oss___tags',
  contact___icon___oss___spaceId = 'contact___icon___oss___spaceId',
  contact___icon___oss___createdAt = 'contact___icon___oss___createdAt',
  contact___icon___oss___updatedAt = 'contact___icon___oss___updatedAt',
  contact___icon___oss___childrenContentfulOssDetailTextNode = 'contact___icon___oss___childrenContentfulOssDetailTextNode',
  contact___icon___oss___children = 'contact___icon___oss___children',
  contact___icon___svg___id = 'contact___icon___svg___id',
  contact___icon___svg___children = 'contact___icon___svg___children',
  contact___icon___svg___svg = 'contact___icon___svg___svg',
  contact___icon___svg___childrenMarkdownRemark = 'contact___icon___svg___childrenMarkdownRemark',
  contact___icon___spaceId = 'contact___icon___spaceId',
  contact___icon___createdAt = 'contact___icon___createdAt',
  contact___icon___updatedAt = 'contact___icon___updatedAt',
  contact___icon___sys___type = 'contact___icon___sys___type',
  contact___icon___sys___revision = 'contact___icon___sys___revision',
  contact___icon___history = 'contact___icon___history',
  contact___icon___history___contentful_id = 'contact___icon___history___contentful_id',
  contact___icon___history___id = 'contact___icon___history___id',
  contact___icon___history___node_locale = 'contact___icon___history___node_locale',
  contact___icon___history___name = 'contact___icon___history___name',
  contact___icon___history___date = 'contact___icon___history___date',
  contact___icon___history___subName = 'contact___icon___history___subName',
  contact___icon___history___spaceId = 'contact___icon___history___spaceId',
  contact___icon___history___createdAt = 'contact___icon___history___createdAt',
  contact___icon___history___updatedAt = 'contact___icon___history___updatedAt',
  contact___icon___history___children = 'contact___icon___history___children',
  contact___icon___contact = 'contact___icon___contact',
  contact___icon___contact___contentful_id = 'contact___icon___contact___contentful_id',
  contact___icon___contact___id = 'contact___icon___contact___id',
  contact___icon___contact___node_locale = 'contact___icon___contact___node_locale',
  contact___icon___contact___sortKey = 'contact___icon___contact___sortKey',
  contact___icon___contact___name = 'contact___icon___contact___name',
  contact___icon___contact___subName = 'contact___icon___contact___subName',
  contact___icon___contact___href = 'contact___icon___contact___href',
  contact___icon___contact___spaceId = 'contact___icon___contact___spaceId',
  contact___icon___contact___createdAt = 'contact___icon___contact___createdAt',
  contact___icon___contact___updatedAt = 'contact___icon___contact___updatedAt',
  contact___icon___contact___children = 'contact___icon___contact___children',
  contact___icon___childrenContentfulIconSvgTextNode = 'contact___icon___childrenContentfulIconSvgTextNode',
  contact___icon___childrenContentfulIconSvgTextNode___id = 'contact___icon___childrenContentfulIconSvgTextNode___id',
  contact___icon___childrenContentfulIconSvgTextNode___children = 'contact___icon___childrenContentfulIconSvgTextNode___children',
  contact___icon___childrenContentfulIconSvgTextNode___svg = 'contact___icon___childrenContentfulIconSvgTextNode___svg',
  contact___icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark = 'contact___icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark',
  contact___icon___childContentfulIconSvgTextNode___id = 'contact___icon___childContentfulIconSvgTextNode___id',
  contact___icon___childContentfulIconSvgTextNode___children = 'contact___icon___childContentfulIconSvgTextNode___children',
  contact___icon___childContentfulIconSvgTextNode___svg = 'contact___icon___childContentfulIconSvgTextNode___svg',
  contact___icon___childContentfulIconSvgTextNode___childrenMarkdownRemark = 'contact___icon___childContentfulIconSvgTextNode___childrenMarkdownRemark',
  contact___icon___parent___id = 'contact___icon___parent___id',
  contact___icon___parent___children = 'contact___icon___parent___children',
  contact___icon___children = 'contact___icon___children',
  contact___icon___children___id = 'contact___icon___children___id',
  contact___icon___children___children = 'contact___icon___children___children',
  contact___icon___internal___content = 'contact___icon___internal___content',
  contact___icon___internal___contentDigest = 'contact___icon___internal___contentDigest',
  contact___icon___internal___description = 'contact___icon___internal___description',
  contact___icon___internal___fieldOwners = 'contact___icon___internal___fieldOwners',
  contact___icon___internal___ignoreType = 'contact___icon___internal___ignoreType',
  contact___icon___internal___mediaType = 'contact___icon___internal___mediaType',
  contact___icon___internal___owner = 'contact___icon___internal___owner',
  contact___icon___internal___type = 'contact___icon___internal___type',
  contact___spaceId = 'contact___spaceId',
  contact___createdAt = 'contact___createdAt',
  contact___updatedAt = 'contact___updatedAt',
  contact___sys___type = 'contact___sys___type',
  contact___sys___revision = 'contact___sys___revision',
  contact___parent___id = 'contact___parent___id',
  contact___parent___parent___id = 'contact___parent___parent___id',
  contact___parent___parent___children = 'contact___parent___parent___children',
  contact___parent___children = 'contact___parent___children',
  contact___parent___children___id = 'contact___parent___children___id',
  contact___parent___children___children = 'contact___parent___children___children',
  contact___parent___internal___content = 'contact___parent___internal___content',
  contact___parent___internal___contentDigest = 'contact___parent___internal___contentDigest',
  contact___parent___internal___description = 'contact___parent___internal___description',
  contact___parent___internal___fieldOwners = 'contact___parent___internal___fieldOwners',
  contact___parent___internal___ignoreType = 'contact___parent___internal___ignoreType',
  contact___parent___internal___mediaType = 'contact___parent___internal___mediaType',
  contact___parent___internal___owner = 'contact___parent___internal___owner',
  contact___parent___internal___type = 'contact___parent___internal___type',
  contact___children = 'contact___children',
  contact___children___id = 'contact___children___id',
  contact___children___parent___id = 'contact___children___parent___id',
  contact___children___parent___children = 'contact___children___parent___children',
  contact___children___children = 'contact___children___children',
  contact___children___children___id = 'contact___children___children___id',
  contact___children___children___children = 'contact___children___children___children',
  contact___children___internal___content = 'contact___children___internal___content',
  contact___children___internal___contentDigest = 'contact___children___internal___contentDigest',
  contact___children___internal___description = 'contact___children___internal___description',
  contact___children___internal___fieldOwners = 'contact___children___internal___fieldOwners',
  contact___children___internal___ignoreType = 'contact___children___internal___ignoreType',
  contact___children___internal___mediaType = 'contact___children___internal___mediaType',
  contact___children___internal___owner = 'contact___children___internal___owner',
  contact___children___internal___type = 'contact___children___internal___type',
  contact___internal___content = 'contact___internal___content',
  contact___internal___contentDigest = 'contact___internal___contentDigest',
  contact___internal___description = 'contact___internal___description',
  contact___internal___fieldOwners = 'contact___internal___fieldOwners',
  contact___internal___ignoreType = 'contact___internal___ignoreType',
  contact___internal___mediaType = 'contact___internal___mediaType',
  contact___internal___owner = 'contact___internal___owner',
  contact___internal___type = 'contact___internal___type',
  childrenContentfulIconSvgTextNode = 'childrenContentfulIconSvgTextNode',
  childrenContentfulIconSvgTextNode___id = 'childrenContentfulIconSvgTextNode___id',
  childrenContentfulIconSvgTextNode___parent___id = 'childrenContentfulIconSvgTextNode___parent___id',
  childrenContentfulIconSvgTextNode___parent___parent___id = 'childrenContentfulIconSvgTextNode___parent___parent___id',
  childrenContentfulIconSvgTextNode___parent___parent___children = 'childrenContentfulIconSvgTextNode___parent___parent___children',
  childrenContentfulIconSvgTextNode___parent___children = 'childrenContentfulIconSvgTextNode___parent___children',
  childrenContentfulIconSvgTextNode___parent___children___id = 'childrenContentfulIconSvgTextNode___parent___children___id',
  childrenContentfulIconSvgTextNode___parent___children___children = 'childrenContentfulIconSvgTextNode___parent___children___children',
  childrenContentfulIconSvgTextNode___parent___internal___content = 'childrenContentfulIconSvgTextNode___parent___internal___content',
  childrenContentfulIconSvgTextNode___parent___internal___contentDigest = 'childrenContentfulIconSvgTextNode___parent___internal___contentDigest',
  childrenContentfulIconSvgTextNode___parent___internal___description = 'childrenContentfulIconSvgTextNode___parent___internal___description',
  childrenContentfulIconSvgTextNode___parent___internal___fieldOwners = 'childrenContentfulIconSvgTextNode___parent___internal___fieldOwners',
  childrenContentfulIconSvgTextNode___parent___internal___ignoreType = 'childrenContentfulIconSvgTextNode___parent___internal___ignoreType',
  childrenContentfulIconSvgTextNode___parent___internal___mediaType = 'childrenContentfulIconSvgTextNode___parent___internal___mediaType',
  childrenContentfulIconSvgTextNode___parent___internal___owner = 'childrenContentfulIconSvgTextNode___parent___internal___owner',
  childrenContentfulIconSvgTextNode___parent___internal___type = 'childrenContentfulIconSvgTextNode___parent___internal___type',
  childrenContentfulIconSvgTextNode___children = 'childrenContentfulIconSvgTextNode___children',
  childrenContentfulIconSvgTextNode___children___id = 'childrenContentfulIconSvgTextNode___children___id',
  childrenContentfulIconSvgTextNode___children___parent___id = 'childrenContentfulIconSvgTextNode___children___parent___id',
  childrenContentfulIconSvgTextNode___children___parent___children = 'childrenContentfulIconSvgTextNode___children___parent___children',
  childrenContentfulIconSvgTextNode___children___children = 'childrenContentfulIconSvgTextNode___children___children',
  childrenContentfulIconSvgTextNode___children___children___id = 'childrenContentfulIconSvgTextNode___children___children___id',
  childrenContentfulIconSvgTextNode___children___children___children = 'childrenContentfulIconSvgTextNode___children___children___children',
  childrenContentfulIconSvgTextNode___children___internal___content = 'childrenContentfulIconSvgTextNode___children___internal___content',
  childrenContentfulIconSvgTextNode___children___internal___contentDigest = 'childrenContentfulIconSvgTextNode___children___internal___contentDigest',
  childrenContentfulIconSvgTextNode___children___internal___description = 'childrenContentfulIconSvgTextNode___children___internal___description',
  childrenContentfulIconSvgTextNode___children___internal___fieldOwners = 'childrenContentfulIconSvgTextNode___children___internal___fieldOwners',
  childrenContentfulIconSvgTextNode___children___internal___ignoreType = 'childrenContentfulIconSvgTextNode___children___internal___ignoreType',
  childrenContentfulIconSvgTextNode___children___internal___mediaType = 'childrenContentfulIconSvgTextNode___children___internal___mediaType',
  childrenContentfulIconSvgTextNode___children___internal___owner = 'childrenContentfulIconSvgTextNode___children___internal___owner',
  childrenContentfulIconSvgTextNode___children___internal___type = 'childrenContentfulIconSvgTextNode___children___internal___type',
  childrenContentfulIconSvgTextNode___internal___content = 'childrenContentfulIconSvgTextNode___internal___content',
  childrenContentfulIconSvgTextNode___internal___contentDigest = 'childrenContentfulIconSvgTextNode___internal___contentDigest',
  childrenContentfulIconSvgTextNode___internal___description = 'childrenContentfulIconSvgTextNode___internal___description',
  childrenContentfulIconSvgTextNode___internal___fieldOwners = 'childrenContentfulIconSvgTextNode___internal___fieldOwners',
  childrenContentfulIconSvgTextNode___internal___ignoreType = 'childrenContentfulIconSvgTextNode___internal___ignoreType',
  childrenContentfulIconSvgTextNode___internal___mediaType = 'childrenContentfulIconSvgTextNode___internal___mediaType',
  childrenContentfulIconSvgTextNode___internal___owner = 'childrenContentfulIconSvgTextNode___internal___owner',
  childrenContentfulIconSvgTextNode___internal___type = 'childrenContentfulIconSvgTextNode___internal___type',
  childrenContentfulIconSvgTextNode___svg = 'childrenContentfulIconSvgTextNode___svg',
  childrenContentfulIconSvgTextNode___sys___type = 'childrenContentfulIconSvgTextNode___sys___type',
  childrenContentfulIconSvgTextNode___childrenMarkdownRemark = 'childrenContentfulIconSvgTextNode___childrenMarkdownRemark',
  childrenContentfulIconSvgTextNode___childrenMarkdownRemark___id = 'childrenContentfulIconSvgTextNode___childrenMarkdownRemark___id',
  childrenContentfulIconSvgTextNode___childrenMarkdownRemark___frontmatter___title = 'childrenContentfulIconSvgTextNode___childrenMarkdownRemark___frontmatter___title',
  childrenContentfulIconSvgTextNode___childrenMarkdownRemark___excerpt = 'childrenContentfulIconSvgTextNode___childrenMarkdownRemark___excerpt',
  childrenContentfulIconSvgTextNode___childrenMarkdownRemark___rawMarkdownBody = 'childrenContentfulIconSvgTextNode___childrenMarkdownRemark___rawMarkdownBody',
  childrenContentfulIconSvgTextNode___childrenMarkdownRemark___html = 'childrenContentfulIconSvgTextNode___childrenMarkdownRemark___html',
  childrenContentfulIconSvgTextNode___childrenMarkdownRemark___htmlAst = 'childrenContentfulIconSvgTextNode___childrenMarkdownRemark___htmlAst',
  childrenContentfulIconSvgTextNode___childrenMarkdownRemark___excerptAst = 'childrenContentfulIconSvgTextNode___childrenMarkdownRemark___excerptAst',
  childrenContentfulIconSvgTextNode___childrenMarkdownRemark___headings = 'childrenContentfulIconSvgTextNode___childrenMarkdownRemark___headings',
  childrenContentfulIconSvgTextNode___childrenMarkdownRemark___headings___id = 'childrenContentfulIconSvgTextNode___childrenMarkdownRemark___headings___id',
  childrenContentfulIconSvgTextNode___childrenMarkdownRemark___headings___value = 'childrenContentfulIconSvgTextNode___childrenMarkdownRemark___headings___value',
  childrenContentfulIconSvgTextNode___childrenMarkdownRemark___headings___depth = 'childrenContentfulIconSvgTextNode___childrenMarkdownRemark___headings___depth',
  childrenContentfulIconSvgTextNode___childrenMarkdownRemark___timeToRead = 'childrenContentfulIconSvgTextNode___childrenMarkdownRemark___timeToRead',
  childrenContentfulIconSvgTextNode___childrenMarkdownRemark___tableOfContents = 'childrenContentfulIconSvgTextNode___childrenMarkdownRemark___tableOfContents',
  childrenContentfulIconSvgTextNode___childrenMarkdownRemark___wordCount___paragraphs = 'childrenContentfulIconSvgTextNode___childrenMarkdownRemark___wordCount___paragraphs',
  childrenContentfulIconSvgTextNode___childrenMarkdownRemark___wordCount___sentences = 'childrenContentfulIconSvgTextNode___childrenMarkdownRemark___wordCount___sentences',
  childrenContentfulIconSvgTextNode___childrenMarkdownRemark___wordCount___words = 'childrenContentfulIconSvgTextNode___childrenMarkdownRemark___wordCount___words',
  childrenContentfulIconSvgTextNode___childrenMarkdownRemark___parent___id = 'childrenContentfulIconSvgTextNode___childrenMarkdownRemark___parent___id',
  childrenContentfulIconSvgTextNode___childrenMarkdownRemark___parent___children = 'childrenContentfulIconSvgTextNode___childrenMarkdownRemark___parent___children',
  childrenContentfulIconSvgTextNode___childrenMarkdownRemark___children = 'childrenContentfulIconSvgTextNode___childrenMarkdownRemark___children',
  childrenContentfulIconSvgTextNode___childrenMarkdownRemark___children___id = 'childrenContentfulIconSvgTextNode___childrenMarkdownRemark___children___id',
  childrenContentfulIconSvgTextNode___childrenMarkdownRemark___children___children = 'childrenContentfulIconSvgTextNode___childrenMarkdownRemark___children___children',
  childrenContentfulIconSvgTextNode___childrenMarkdownRemark___internal___content = 'childrenContentfulIconSvgTextNode___childrenMarkdownRemark___internal___content',
  childrenContentfulIconSvgTextNode___childrenMarkdownRemark___internal___contentDigest = 'childrenContentfulIconSvgTextNode___childrenMarkdownRemark___internal___contentDigest',
  childrenContentfulIconSvgTextNode___childrenMarkdownRemark___internal___description = 'childrenContentfulIconSvgTextNode___childrenMarkdownRemark___internal___description',
  childrenContentfulIconSvgTextNode___childrenMarkdownRemark___internal___fieldOwners = 'childrenContentfulIconSvgTextNode___childrenMarkdownRemark___internal___fieldOwners',
  childrenContentfulIconSvgTextNode___childrenMarkdownRemark___internal___ignoreType = 'childrenContentfulIconSvgTextNode___childrenMarkdownRemark___internal___ignoreType',
  childrenContentfulIconSvgTextNode___childrenMarkdownRemark___internal___mediaType = 'childrenContentfulIconSvgTextNode___childrenMarkdownRemark___internal___mediaType',
  childrenContentfulIconSvgTextNode___childrenMarkdownRemark___internal___owner = 'childrenContentfulIconSvgTextNode___childrenMarkdownRemark___internal___owner',
  childrenContentfulIconSvgTextNode___childrenMarkdownRemark___internal___type = 'childrenContentfulIconSvgTextNode___childrenMarkdownRemark___internal___type',
  childrenContentfulIconSvgTextNode___childMarkdownRemark___id = 'childrenContentfulIconSvgTextNode___childMarkdownRemark___id',
  childrenContentfulIconSvgTextNode___childMarkdownRemark___frontmatter___title = 'childrenContentfulIconSvgTextNode___childMarkdownRemark___frontmatter___title',
  childrenContentfulIconSvgTextNode___childMarkdownRemark___excerpt = 'childrenContentfulIconSvgTextNode___childMarkdownRemark___excerpt',
  childrenContentfulIconSvgTextNode___childMarkdownRemark___rawMarkdownBody = 'childrenContentfulIconSvgTextNode___childMarkdownRemark___rawMarkdownBody',
  childrenContentfulIconSvgTextNode___childMarkdownRemark___html = 'childrenContentfulIconSvgTextNode___childMarkdownRemark___html',
  childrenContentfulIconSvgTextNode___childMarkdownRemark___htmlAst = 'childrenContentfulIconSvgTextNode___childMarkdownRemark___htmlAst',
  childrenContentfulIconSvgTextNode___childMarkdownRemark___excerptAst = 'childrenContentfulIconSvgTextNode___childMarkdownRemark___excerptAst',
  childrenContentfulIconSvgTextNode___childMarkdownRemark___headings = 'childrenContentfulIconSvgTextNode___childMarkdownRemark___headings',
  childrenContentfulIconSvgTextNode___childMarkdownRemark___headings___id = 'childrenContentfulIconSvgTextNode___childMarkdownRemark___headings___id',
  childrenContentfulIconSvgTextNode___childMarkdownRemark___headings___value = 'childrenContentfulIconSvgTextNode___childMarkdownRemark___headings___value',
  childrenContentfulIconSvgTextNode___childMarkdownRemark___headings___depth = 'childrenContentfulIconSvgTextNode___childMarkdownRemark___headings___depth',
  childrenContentfulIconSvgTextNode___childMarkdownRemark___timeToRead = 'childrenContentfulIconSvgTextNode___childMarkdownRemark___timeToRead',
  childrenContentfulIconSvgTextNode___childMarkdownRemark___tableOfContents = 'childrenContentfulIconSvgTextNode___childMarkdownRemark___tableOfContents',
  childrenContentfulIconSvgTextNode___childMarkdownRemark___wordCount___paragraphs = 'childrenContentfulIconSvgTextNode___childMarkdownRemark___wordCount___paragraphs',
  childrenContentfulIconSvgTextNode___childMarkdownRemark___wordCount___sentences = 'childrenContentfulIconSvgTextNode___childMarkdownRemark___wordCount___sentences',
  childrenContentfulIconSvgTextNode___childMarkdownRemark___wordCount___words = 'childrenContentfulIconSvgTextNode___childMarkdownRemark___wordCount___words',
  childrenContentfulIconSvgTextNode___childMarkdownRemark___parent___id = 'childrenContentfulIconSvgTextNode___childMarkdownRemark___parent___id',
  childrenContentfulIconSvgTextNode___childMarkdownRemark___parent___children = 'childrenContentfulIconSvgTextNode___childMarkdownRemark___parent___children',
  childrenContentfulIconSvgTextNode___childMarkdownRemark___children = 'childrenContentfulIconSvgTextNode___childMarkdownRemark___children',
  childrenContentfulIconSvgTextNode___childMarkdownRemark___children___id = 'childrenContentfulIconSvgTextNode___childMarkdownRemark___children___id',
  childrenContentfulIconSvgTextNode___childMarkdownRemark___children___children = 'childrenContentfulIconSvgTextNode___childMarkdownRemark___children___children',
  childrenContentfulIconSvgTextNode___childMarkdownRemark___internal___content = 'childrenContentfulIconSvgTextNode___childMarkdownRemark___internal___content',
  childrenContentfulIconSvgTextNode___childMarkdownRemark___internal___contentDigest = 'childrenContentfulIconSvgTextNode___childMarkdownRemark___internal___contentDigest',
  childrenContentfulIconSvgTextNode___childMarkdownRemark___internal___description = 'childrenContentfulIconSvgTextNode___childMarkdownRemark___internal___description',
  childrenContentfulIconSvgTextNode___childMarkdownRemark___internal___fieldOwners = 'childrenContentfulIconSvgTextNode___childMarkdownRemark___internal___fieldOwners',
  childrenContentfulIconSvgTextNode___childMarkdownRemark___internal___ignoreType = 'childrenContentfulIconSvgTextNode___childMarkdownRemark___internal___ignoreType',
  childrenContentfulIconSvgTextNode___childMarkdownRemark___internal___mediaType = 'childrenContentfulIconSvgTextNode___childMarkdownRemark___internal___mediaType',
  childrenContentfulIconSvgTextNode___childMarkdownRemark___internal___owner = 'childrenContentfulIconSvgTextNode___childMarkdownRemark___internal___owner',
  childrenContentfulIconSvgTextNode___childMarkdownRemark___internal___type = 'childrenContentfulIconSvgTextNode___childMarkdownRemark___internal___type',
  childContentfulIconSvgTextNode___id = 'childContentfulIconSvgTextNode___id',
  childContentfulIconSvgTextNode___parent___id = 'childContentfulIconSvgTextNode___parent___id',
  childContentfulIconSvgTextNode___parent___parent___id = 'childContentfulIconSvgTextNode___parent___parent___id',
  childContentfulIconSvgTextNode___parent___parent___children = 'childContentfulIconSvgTextNode___parent___parent___children',
  childContentfulIconSvgTextNode___parent___children = 'childContentfulIconSvgTextNode___parent___children',
  childContentfulIconSvgTextNode___parent___children___id = 'childContentfulIconSvgTextNode___parent___children___id',
  childContentfulIconSvgTextNode___parent___children___children = 'childContentfulIconSvgTextNode___parent___children___children',
  childContentfulIconSvgTextNode___parent___internal___content = 'childContentfulIconSvgTextNode___parent___internal___content',
  childContentfulIconSvgTextNode___parent___internal___contentDigest = 'childContentfulIconSvgTextNode___parent___internal___contentDigest',
  childContentfulIconSvgTextNode___parent___internal___description = 'childContentfulIconSvgTextNode___parent___internal___description',
  childContentfulIconSvgTextNode___parent___internal___fieldOwners = 'childContentfulIconSvgTextNode___parent___internal___fieldOwners',
  childContentfulIconSvgTextNode___parent___internal___ignoreType = 'childContentfulIconSvgTextNode___parent___internal___ignoreType',
  childContentfulIconSvgTextNode___parent___internal___mediaType = 'childContentfulIconSvgTextNode___parent___internal___mediaType',
  childContentfulIconSvgTextNode___parent___internal___owner = 'childContentfulIconSvgTextNode___parent___internal___owner',
  childContentfulIconSvgTextNode___parent___internal___type = 'childContentfulIconSvgTextNode___parent___internal___type',
  childContentfulIconSvgTextNode___children = 'childContentfulIconSvgTextNode___children',
  childContentfulIconSvgTextNode___children___id = 'childContentfulIconSvgTextNode___children___id',
  childContentfulIconSvgTextNode___children___parent___id = 'childContentfulIconSvgTextNode___children___parent___id',
  childContentfulIconSvgTextNode___children___parent___children = 'childContentfulIconSvgTextNode___children___parent___children',
  childContentfulIconSvgTextNode___children___children = 'childContentfulIconSvgTextNode___children___children',
  childContentfulIconSvgTextNode___children___children___id = 'childContentfulIconSvgTextNode___children___children___id',
  childContentfulIconSvgTextNode___children___children___children = 'childContentfulIconSvgTextNode___children___children___children',
  childContentfulIconSvgTextNode___children___internal___content = 'childContentfulIconSvgTextNode___children___internal___content',
  childContentfulIconSvgTextNode___children___internal___contentDigest = 'childContentfulIconSvgTextNode___children___internal___contentDigest',
  childContentfulIconSvgTextNode___children___internal___description = 'childContentfulIconSvgTextNode___children___internal___description',
  childContentfulIconSvgTextNode___children___internal___fieldOwners = 'childContentfulIconSvgTextNode___children___internal___fieldOwners',
  childContentfulIconSvgTextNode___children___internal___ignoreType = 'childContentfulIconSvgTextNode___children___internal___ignoreType',
  childContentfulIconSvgTextNode___children___internal___mediaType = 'childContentfulIconSvgTextNode___children___internal___mediaType',
  childContentfulIconSvgTextNode___children___internal___owner = 'childContentfulIconSvgTextNode___children___internal___owner',
  childContentfulIconSvgTextNode___children___internal___type = 'childContentfulIconSvgTextNode___children___internal___type',
  childContentfulIconSvgTextNode___internal___content = 'childContentfulIconSvgTextNode___internal___content',
  childContentfulIconSvgTextNode___internal___contentDigest = 'childContentfulIconSvgTextNode___internal___contentDigest',
  childContentfulIconSvgTextNode___internal___description = 'childContentfulIconSvgTextNode___internal___description',
  childContentfulIconSvgTextNode___internal___fieldOwners = 'childContentfulIconSvgTextNode___internal___fieldOwners',
  childContentfulIconSvgTextNode___internal___ignoreType = 'childContentfulIconSvgTextNode___internal___ignoreType',
  childContentfulIconSvgTextNode___internal___mediaType = 'childContentfulIconSvgTextNode___internal___mediaType',
  childContentfulIconSvgTextNode___internal___owner = 'childContentfulIconSvgTextNode___internal___owner',
  childContentfulIconSvgTextNode___internal___type = 'childContentfulIconSvgTextNode___internal___type',
  childContentfulIconSvgTextNode___svg = 'childContentfulIconSvgTextNode___svg',
  childContentfulIconSvgTextNode___sys___type = 'childContentfulIconSvgTextNode___sys___type',
  childContentfulIconSvgTextNode___childrenMarkdownRemark = 'childContentfulIconSvgTextNode___childrenMarkdownRemark',
  childContentfulIconSvgTextNode___childrenMarkdownRemark___id = 'childContentfulIconSvgTextNode___childrenMarkdownRemark___id',
  childContentfulIconSvgTextNode___childrenMarkdownRemark___frontmatter___title = 'childContentfulIconSvgTextNode___childrenMarkdownRemark___frontmatter___title',
  childContentfulIconSvgTextNode___childrenMarkdownRemark___excerpt = 'childContentfulIconSvgTextNode___childrenMarkdownRemark___excerpt',
  childContentfulIconSvgTextNode___childrenMarkdownRemark___rawMarkdownBody = 'childContentfulIconSvgTextNode___childrenMarkdownRemark___rawMarkdownBody',
  childContentfulIconSvgTextNode___childrenMarkdownRemark___html = 'childContentfulIconSvgTextNode___childrenMarkdownRemark___html',
  childContentfulIconSvgTextNode___childrenMarkdownRemark___htmlAst = 'childContentfulIconSvgTextNode___childrenMarkdownRemark___htmlAst',
  childContentfulIconSvgTextNode___childrenMarkdownRemark___excerptAst = 'childContentfulIconSvgTextNode___childrenMarkdownRemark___excerptAst',
  childContentfulIconSvgTextNode___childrenMarkdownRemark___headings = 'childContentfulIconSvgTextNode___childrenMarkdownRemark___headings',
  childContentfulIconSvgTextNode___childrenMarkdownRemark___headings___id = 'childContentfulIconSvgTextNode___childrenMarkdownRemark___headings___id',
  childContentfulIconSvgTextNode___childrenMarkdownRemark___headings___value = 'childContentfulIconSvgTextNode___childrenMarkdownRemark___headings___value',
  childContentfulIconSvgTextNode___childrenMarkdownRemark___headings___depth = 'childContentfulIconSvgTextNode___childrenMarkdownRemark___headings___depth',
  childContentfulIconSvgTextNode___childrenMarkdownRemark___timeToRead = 'childContentfulIconSvgTextNode___childrenMarkdownRemark___timeToRead',
  childContentfulIconSvgTextNode___childrenMarkdownRemark___tableOfContents = 'childContentfulIconSvgTextNode___childrenMarkdownRemark___tableOfContents',
  childContentfulIconSvgTextNode___childrenMarkdownRemark___wordCount___paragraphs = 'childContentfulIconSvgTextNode___childrenMarkdownRemark___wordCount___paragraphs',
  childContentfulIconSvgTextNode___childrenMarkdownRemark___wordCount___sentences = 'childContentfulIconSvgTextNode___childrenMarkdownRemark___wordCount___sentences',
  childContentfulIconSvgTextNode___childrenMarkdownRemark___wordCount___words = 'childContentfulIconSvgTextNode___childrenMarkdownRemark___wordCount___words',
  childContentfulIconSvgTextNode___childrenMarkdownRemark___parent___id = 'childContentfulIconSvgTextNode___childrenMarkdownRemark___parent___id',
  childContentfulIconSvgTextNode___childrenMarkdownRemark___parent___children = 'childContentfulIconSvgTextNode___childrenMarkdownRemark___parent___children',
  childContentfulIconSvgTextNode___childrenMarkdownRemark___children = 'childContentfulIconSvgTextNode___childrenMarkdownRemark___children',
  childContentfulIconSvgTextNode___childrenMarkdownRemark___children___id = 'childContentfulIconSvgTextNode___childrenMarkdownRemark___children___id',
  childContentfulIconSvgTextNode___childrenMarkdownRemark___children___children = 'childContentfulIconSvgTextNode___childrenMarkdownRemark___children___children',
  childContentfulIconSvgTextNode___childrenMarkdownRemark___internal___content = 'childContentfulIconSvgTextNode___childrenMarkdownRemark___internal___content',
  childContentfulIconSvgTextNode___childrenMarkdownRemark___internal___contentDigest = 'childContentfulIconSvgTextNode___childrenMarkdownRemark___internal___contentDigest',
  childContentfulIconSvgTextNode___childrenMarkdownRemark___internal___description = 'childContentfulIconSvgTextNode___childrenMarkdownRemark___internal___description',
  childContentfulIconSvgTextNode___childrenMarkdownRemark___internal___fieldOwners = 'childContentfulIconSvgTextNode___childrenMarkdownRemark___internal___fieldOwners',
  childContentfulIconSvgTextNode___childrenMarkdownRemark___internal___ignoreType = 'childContentfulIconSvgTextNode___childrenMarkdownRemark___internal___ignoreType',
  childContentfulIconSvgTextNode___childrenMarkdownRemark___internal___mediaType = 'childContentfulIconSvgTextNode___childrenMarkdownRemark___internal___mediaType',
  childContentfulIconSvgTextNode___childrenMarkdownRemark___internal___owner = 'childContentfulIconSvgTextNode___childrenMarkdownRemark___internal___owner',
  childContentfulIconSvgTextNode___childrenMarkdownRemark___internal___type = 'childContentfulIconSvgTextNode___childrenMarkdownRemark___internal___type',
  childContentfulIconSvgTextNode___childMarkdownRemark___id = 'childContentfulIconSvgTextNode___childMarkdownRemark___id',
  childContentfulIconSvgTextNode___childMarkdownRemark___frontmatter___title = 'childContentfulIconSvgTextNode___childMarkdownRemark___frontmatter___title',
  childContentfulIconSvgTextNode___childMarkdownRemark___excerpt = 'childContentfulIconSvgTextNode___childMarkdownRemark___excerpt',
  childContentfulIconSvgTextNode___childMarkdownRemark___rawMarkdownBody = 'childContentfulIconSvgTextNode___childMarkdownRemark___rawMarkdownBody',
  childContentfulIconSvgTextNode___childMarkdownRemark___html = 'childContentfulIconSvgTextNode___childMarkdownRemark___html',
  childContentfulIconSvgTextNode___childMarkdownRemark___htmlAst = 'childContentfulIconSvgTextNode___childMarkdownRemark___htmlAst',
  childContentfulIconSvgTextNode___childMarkdownRemark___excerptAst = 'childContentfulIconSvgTextNode___childMarkdownRemark___excerptAst',
  childContentfulIconSvgTextNode___childMarkdownRemark___headings = 'childContentfulIconSvgTextNode___childMarkdownRemark___headings',
  childContentfulIconSvgTextNode___childMarkdownRemark___headings___id = 'childContentfulIconSvgTextNode___childMarkdownRemark___headings___id',
  childContentfulIconSvgTextNode___childMarkdownRemark___headings___value = 'childContentfulIconSvgTextNode___childMarkdownRemark___headings___value',
  childContentfulIconSvgTextNode___childMarkdownRemark___headings___depth = 'childContentfulIconSvgTextNode___childMarkdownRemark___headings___depth',
  childContentfulIconSvgTextNode___childMarkdownRemark___timeToRead = 'childContentfulIconSvgTextNode___childMarkdownRemark___timeToRead',
  childContentfulIconSvgTextNode___childMarkdownRemark___tableOfContents = 'childContentfulIconSvgTextNode___childMarkdownRemark___tableOfContents',
  childContentfulIconSvgTextNode___childMarkdownRemark___wordCount___paragraphs = 'childContentfulIconSvgTextNode___childMarkdownRemark___wordCount___paragraphs',
  childContentfulIconSvgTextNode___childMarkdownRemark___wordCount___sentences = 'childContentfulIconSvgTextNode___childMarkdownRemark___wordCount___sentences',
  childContentfulIconSvgTextNode___childMarkdownRemark___wordCount___words = 'childContentfulIconSvgTextNode___childMarkdownRemark___wordCount___words',
  childContentfulIconSvgTextNode___childMarkdownRemark___parent___id = 'childContentfulIconSvgTextNode___childMarkdownRemark___parent___id',
  childContentfulIconSvgTextNode___childMarkdownRemark___parent___children = 'childContentfulIconSvgTextNode___childMarkdownRemark___parent___children',
  childContentfulIconSvgTextNode___childMarkdownRemark___children = 'childContentfulIconSvgTextNode___childMarkdownRemark___children',
  childContentfulIconSvgTextNode___childMarkdownRemark___children___id = 'childContentfulIconSvgTextNode___childMarkdownRemark___children___id',
  childContentfulIconSvgTextNode___childMarkdownRemark___children___children = 'childContentfulIconSvgTextNode___childMarkdownRemark___children___children',
  childContentfulIconSvgTextNode___childMarkdownRemark___internal___content = 'childContentfulIconSvgTextNode___childMarkdownRemark___internal___content',
  childContentfulIconSvgTextNode___childMarkdownRemark___internal___contentDigest = 'childContentfulIconSvgTextNode___childMarkdownRemark___internal___contentDigest',
  childContentfulIconSvgTextNode___childMarkdownRemark___internal___description = 'childContentfulIconSvgTextNode___childMarkdownRemark___internal___description',
  childContentfulIconSvgTextNode___childMarkdownRemark___internal___fieldOwners = 'childContentfulIconSvgTextNode___childMarkdownRemark___internal___fieldOwners',
  childContentfulIconSvgTextNode___childMarkdownRemark___internal___ignoreType = 'childContentfulIconSvgTextNode___childMarkdownRemark___internal___ignoreType',
  childContentfulIconSvgTextNode___childMarkdownRemark___internal___mediaType = 'childContentfulIconSvgTextNode___childMarkdownRemark___internal___mediaType',
  childContentfulIconSvgTextNode___childMarkdownRemark___internal___owner = 'childContentfulIconSvgTextNode___childMarkdownRemark___internal___owner',
  childContentfulIconSvgTextNode___childMarkdownRemark___internal___type = 'childContentfulIconSvgTextNode___childMarkdownRemark___internal___type',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type'
}

export type ContentfulIconFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  what_i_can_do?: Maybe<ContentfulWhatICanDoFilterListInput>;
  project?: Maybe<ContentfulProjectFilterListInput>;
  oss?: Maybe<ContentfulOssFilterListInput>;
  svg?: Maybe<ContentfulIconSvgTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulIconSysFilterInput>;
  history?: Maybe<ContentfulHistoryFilterListInput>;
  contact?: Maybe<ContentfulContactFilterListInput>;
  childrenContentfulIconSvgTextNode?: Maybe<ContentfulIconSvgTextNodeFilterListInput>;
  childContentfulIconSvgTextNode?: Maybe<ContentfulIconSvgTextNodeFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ContentfulIconGroupConnection = {
  __typename?: 'ContentfulIconGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulIconEdge>;
  nodes: Array<ContentfulIcon>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulIconSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulIconFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulIconSvgTextNode = Node & {
  __typename?: 'contentfulIconSvgTextNode';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  svg?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulIconSvgTextNodeSys>;
  /** Returns all children nodes filtered by type MarkdownRemark */
  childrenMarkdownRemark?: Maybe<Array<Maybe<MarkdownRemark>>>;
  /** Returns the first child node of type MarkdownRemark or null if there are no children of given type on this node */
  childMarkdownRemark?: Maybe<MarkdownRemark>;
};

export type ContentfulIconSvgTextNodeConnection = {
  __typename?: 'contentfulIconSvgTextNodeConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulIconSvgTextNodeEdge>;
  nodes: Array<ContentfulIconSvgTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulIconSvgTextNodeGroupConnection>;
};


export type ContentfulIconSvgTextNodeConnectionDistinctArgs = {
  field: ContentfulIconSvgTextNodeFieldsEnum;
};


export type ContentfulIconSvgTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulIconSvgTextNodeFieldsEnum;
};

export type ContentfulIconSvgTextNodeEdge = {
  __typename?: 'contentfulIconSvgTextNodeEdge';
  next?: Maybe<ContentfulIconSvgTextNode>;
  node: ContentfulIconSvgTextNode;
  previous?: Maybe<ContentfulIconSvgTextNode>;
};

export enum ContentfulIconSvgTextNodeFieldsEnum {
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  svg = 'svg',
  sys___type = 'sys___type',
  childrenMarkdownRemark = 'childrenMarkdownRemark',
  childrenMarkdownRemark___id = 'childrenMarkdownRemark___id',
  childrenMarkdownRemark___frontmatter___title = 'childrenMarkdownRemark___frontmatter___title',
  childrenMarkdownRemark___excerpt = 'childrenMarkdownRemark___excerpt',
  childrenMarkdownRemark___rawMarkdownBody = 'childrenMarkdownRemark___rawMarkdownBody',
  childrenMarkdownRemark___html = 'childrenMarkdownRemark___html',
  childrenMarkdownRemark___htmlAst = 'childrenMarkdownRemark___htmlAst',
  childrenMarkdownRemark___excerptAst = 'childrenMarkdownRemark___excerptAst',
  childrenMarkdownRemark___headings = 'childrenMarkdownRemark___headings',
  childrenMarkdownRemark___headings___id = 'childrenMarkdownRemark___headings___id',
  childrenMarkdownRemark___headings___value = 'childrenMarkdownRemark___headings___value',
  childrenMarkdownRemark___headings___depth = 'childrenMarkdownRemark___headings___depth',
  childrenMarkdownRemark___timeToRead = 'childrenMarkdownRemark___timeToRead',
  childrenMarkdownRemark___tableOfContents = 'childrenMarkdownRemark___tableOfContents',
  childrenMarkdownRemark___wordCount___paragraphs = 'childrenMarkdownRemark___wordCount___paragraphs',
  childrenMarkdownRemark___wordCount___sentences = 'childrenMarkdownRemark___wordCount___sentences',
  childrenMarkdownRemark___wordCount___words = 'childrenMarkdownRemark___wordCount___words',
  childrenMarkdownRemark___parent___id = 'childrenMarkdownRemark___parent___id',
  childrenMarkdownRemark___parent___parent___id = 'childrenMarkdownRemark___parent___parent___id',
  childrenMarkdownRemark___parent___parent___children = 'childrenMarkdownRemark___parent___parent___children',
  childrenMarkdownRemark___parent___children = 'childrenMarkdownRemark___parent___children',
  childrenMarkdownRemark___parent___children___id = 'childrenMarkdownRemark___parent___children___id',
  childrenMarkdownRemark___parent___children___children = 'childrenMarkdownRemark___parent___children___children',
  childrenMarkdownRemark___parent___internal___content = 'childrenMarkdownRemark___parent___internal___content',
  childrenMarkdownRemark___parent___internal___contentDigest = 'childrenMarkdownRemark___parent___internal___contentDigest',
  childrenMarkdownRemark___parent___internal___description = 'childrenMarkdownRemark___parent___internal___description',
  childrenMarkdownRemark___parent___internal___fieldOwners = 'childrenMarkdownRemark___parent___internal___fieldOwners',
  childrenMarkdownRemark___parent___internal___ignoreType = 'childrenMarkdownRemark___parent___internal___ignoreType',
  childrenMarkdownRemark___parent___internal___mediaType = 'childrenMarkdownRemark___parent___internal___mediaType',
  childrenMarkdownRemark___parent___internal___owner = 'childrenMarkdownRemark___parent___internal___owner',
  childrenMarkdownRemark___parent___internal___type = 'childrenMarkdownRemark___parent___internal___type',
  childrenMarkdownRemark___children = 'childrenMarkdownRemark___children',
  childrenMarkdownRemark___children___id = 'childrenMarkdownRemark___children___id',
  childrenMarkdownRemark___children___parent___id = 'childrenMarkdownRemark___children___parent___id',
  childrenMarkdownRemark___children___parent___children = 'childrenMarkdownRemark___children___parent___children',
  childrenMarkdownRemark___children___children = 'childrenMarkdownRemark___children___children',
  childrenMarkdownRemark___children___children___id = 'childrenMarkdownRemark___children___children___id',
  childrenMarkdownRemark___children___children___children = 'childrenMarkdownRemark___children___children___children',
  childrenMarkdownRemark___children___internal___content = 'childrenMarkdownRemark___children___internal___content',
  childrenMarkdownRemark___children___internal___contentDigest = 'childrenMarkdownRemark___children___internal___contentDigest',
  childrenMarkdownRemark___children___internal___description = 'childrenMarkdownRemark___children___internal___description',
  childrenMarkdownRemark___children___internal___fieldOwners = 'childrenMarkdownRemark___children___internal___fieldOwners',
  childrenMarkdownRemark___children___internal___ignoreType = 'childrenMarkdownRemark___children___internal___ignoreType',
  childrenMarkdownRemark___children___internal___mediaType = 'childrenMarkdownRemark___children___internal___mediaType',
  childrenMarkdownRemark___children___internal___owner = 'childrenMarkdownRemark___children___internal___owner',
  childrenMarkdownRemark___children___internal___type = 'childrenMarkdownRemark___children___internal___type',
  childrenMarkdownRemark___internal___content = 'childrenMarkdownRemark___internal___content',
  childrenMarkdownRemark___internal___contentDigest = 'childrenMarkdownRemark___internal___contentDigest',
  childrenMarkdownRemark___internal___description = 'childrenMarkdownRemark___internal___description',
  childrenMarkdownRemark___internal___fieldOwners = 'childrenMarkdownRemark___internal___fieldOwners',
  childrenMarkdownRemark___internal___ignoreType = 'childrenMarkdownRemark___internal___ignoreType',
  childrenMarkdownRemark___internal___mediaType = 'childrenMarkdownRemark___internal___mediaType',
  childrenMarkdownRemark___internal___owner = 'childrenMarkdownRemark___internal___owner',
  childrenMarkdownRemark___internal___type = 'childrenMarkdownRemark___internal___type',
  childMarkdownRemark___id = 'childMarkdownRemark___id',
  childMarkdownRemark___frontmatter___title = 'childMarkdownRemark___frontmatter___title',
  childMarkdownRemark___excerpt = 'childMarkdownRemark___excerpt',
  childMarkdownRemark___rawMarkdownBody = 'childMarkdownRemark___rawMarkdownBody',
  childMarkdownRemark___html = 'childMarkdownRemark___html',
  childMarkdownRemark___htmlAst = 'childMarkdownRemark___htmlAst',
  childMarkdownRemark___excerptAst = 'childMarkdownRemark___excerptAst',
  childMarkdownRemark___headings = 'childMarkdownRemark___headings',
  childMarkdownRemark___headings___id = 'childMarkdownRemark___headings___id',
  childMarkdownRemark___headings___value = 'childMarkdownRemark___headings___value',
  childMarkdownRemark___headings___depth = 'childMarkdownRemark___headings___depth',
  childMarkdownRemark___timeToRead = 'childMarkdownRemark___timeToRead',
  childMarkdownRemark___tableOfContents = 'childMarkdownRemark___tableOfContents',
  childMarkdownRemark___wordCount___paragraphs = 'childMarkdownRemark___wordCount___paragraphs',
  childMarkdownRemark___wordCount___sentences = 'childMarkdownRemark___wordCount___sentences',
  childMarkdownRemark___wordCount___words = 'childMarkdownRemark___wordCount___words',
  childMarkdownRemark___parent___id = 'childMarkdownRemark___parent___id',
  childMarkdownRemark___parent___parent___id = 'childMarkdownRemark___parent___parent___id',
  childMarkdownRemark___parent___parent___children = 'childMarkdownRemark___parent___parent___children',
  childMarkdownRemark___parent___children = 'childMarkdownRemark___parent___children',
  childMarkdownRemark___parent___children___id = 'childMarkdownRemark___parent___children___id',
  childMarkdownRemark___parent___children___children = 'childMarkdownRemark___parent___children___children',
  childMarkdownRemark___parent___internal___content = 'childMarkdownRemark___parent___internal___content',
  childMarkdownRemark___parent___internal___contentDigest = 'childMarkdownRemark___parent___internal___contentDigest',
  childMarkdownRemark___parent___internal___description = 'childMarkdownRemark___parent___internal___description',
  childMarkdownRemark___parent___internal___fieldOwners = 'childMarkdownRemark___parent___internal___fieldOwners',
  childMarkdownRemark___parent___internal___ignoreType = 'childMarkdownRemark___parent___internal___ignoreType',
  childMarkdownRemark___parent___internal___mediaType = 'childMarkdownRemark___parent___internal___mediaType',
  childMarkdownRemark___parent___internal___owner = 'childMarkdownRemark___parent___internal___owner',
  childMarkdownRemark___parent___internal___type = 'childMarkdownRemark___parent___internal___type',
  childMarkdownRemark___children = 'childMarkdownRemark___children',
  childMarkdownRemark___children___id = 'childMarkdownRemark___children___id',
  childMarkdownRemark___children___parent___id = 'childMarkdownRemark___children___parent___id',
  childMarkdownRemark___children___parent___children = 'childMarkdownRemark___children___parent___children',
  childMarkdownRemark___children___children = 'childMarkdownRemark___children___children',
  childMarkdownRemark___children___children___id = 'childMarkdownRemark___children___children___id',
  childMarkdownRemark___children___children___children = 'childMarkdownRemark___children___children___children',
  childMarkdownRemark___children___internal___content = 'childMarkdownRemark___children___internal___content',
  childMarkdownRemark___children___internal___contentDigest = 'childMarkdownRemark___children___internal___contentDigest',
  childMarkdownRemark___children___internal___description = 'childMarkdownRemark___children___internal___description',
  childMarkdownRemark___children___internal___fieldOwners = 'childMarkdownRemark___children___internal___fieldOwners',
  childMarkdownRemark___children___internal___ignoreType = 'childMarkdownRemark___children___internal___ignoreType',
  childMarkdownRemark___children___internal___mediaType = 'childMarkdownRemark___children___internal___mediaType',
  childMarkdownRemark___children___internal___owner = 'childMarkdownRemark___children___internal___owner',
  childMarkdownRemark___children___internal___type = 'childMarkdownRemark___children___internal___type',
  childMarkdownRemark___internal___content = 'childMarkdownRemark___internal___content',
  childMarkdownRemark___internal___contentDigest = 'childMarkdownRemark___internal___contentDigest',
  childMarkdownRemark___internal___description = 'childMarkdownRemark___internal___description',
  childMarkdownRemark___internal___fieldOwners = 'childMarkdownRemark___internal___fieldOwners',
  childMarkdownRemark___internal___ignoreType = 'childMarkdownRemark___internal___ignoreType',
  childMarkdownRemark___internal___mediaType = 'childMarkdownRemark___internal___mediaType',
  childMarkdownRemark___internal___owner = 'childMarkdownRemark___internal___owner',
  childMarkdownRemark___internal___type = 'childMarkdownRemark___internal___type'
}

export type ContentfulIconSvgTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  svg?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulIconSvgTextNodeSysFilterInput>;
  childrenMarkdownRemark?: Maybe<MarkdownRemarkFilterListInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
};

export type ContentfulIconSvgTextNodeFilterListInput = {
  elemMatch?: Maybe<ContentfulIconSvgTextNodeFilterInput>;
};

export type ContentfulIconSvgTextNodeGroupConnection = {
  __typename?: 'contentfulIconSvgTextNodeGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulIconSvgTextNodeEdge>;
  nodes: Array<ContentfulIconSvgTextNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulIconSvgTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulIconSvgTextNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulIconSvgTextNodeSys = {
  __typename?: 'contentfulIconSvgTextNodeSys';
  type?: Maybe<Scalars['String']>;
};

export type ContentfulIconSvgTextNodeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulIconSys = {
  __typename?: 'ContentfulIconSys';
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulIconSysContentType>;
};

export type ContentfulIconSysContentType = {
  __typename?: 'ContentfulIconSysContentType';
  sys?: Maybe<ContentfulIconSysContentTypeSys>;
};

export type ContentfulIconSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulIconSysContentTypeSysFilterInput>;
};

export type ContentfulIconSysContentTypeSys = {
  __typename?: 'ContentfulIconSysContentTypeSys';
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulIconSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulIconSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulIconSysContentTypeFilterInput>;
};

export enum ContentfulImageCropFocus {
  TOP = 'TOP',
  TOP_LEFT = 'TOP_LEFT',
  TOP_RIGHT = 'TOP_RIGHT',
  BOTTOM = 'BOTTOM',
  BOTTOM_RIGHT = 'BOTTOM_RIGHT',
  BOTTOM_LEFT = 'BOTTOM_LEFT',
  RIGHT = 'RIGHT',
  LEFT = 'LEFT',
  FACE = 'FACE',
  FACES = 'FACES',
  CENTER = 'CENTER'
}

export enum ContentfulImageFormat {
  NO_CHANGE = 'NO_CHANGE',
  AUTO = 'AUTO',
  JPG = 'JPG',
  PNG = 'PNG',
  WEBP = 'WEBP'
}

export type ContentfulOss = ContentfulReference & ContentfulEntry & Node & {
  __typename?: 'ContentfulOss';
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  subName?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['Date']>;
  href?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<ContentfulTag>>>;
  icon?: Maybe<ContentfulIcon>;
  image?: Maybe<ContentfulAsset>;
  detail?: Maybe<ContentfulOssDetailTextNode>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulOssSys>;
  /** Returns all children nodes filtered by type contentfulOssDetailTextNode */
  childrenContentfulOssDetailTextNode?: Maybe<Array<Maybe<ContentfulOssDetailTextNode>>>;
  /**
   * Returns the first child node of type contentfulOssDetailTextNode or null if
   * there are no children of given type on this node
   */
  childContentfulOssDetailTextNode?: Maybe<ContentfulOssDetailTextNode>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulOssStartDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulOssCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulOssUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulOssConnection = {
  __typename?: 'ContentfulOssConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulOssEdge>;
  nodes: Array<ContentfulOss>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulOssGroupConnection>;
};


export type ContentfulOssConnectionDistinctArgs = {
  field: ContentfulOssFieldsEnum;
};


export type ContentfulOssConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulOssFieldsEnum;
};

export type ContentfulOssDetailTextNode = Node & {
  __typename?: 'contentfulOssDetailTextNode';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  detail?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulOssDetailTextNodeSys>;
  /** Returns all children nodes filtered by type MarkdownRemark */
  childrenMarkdownRemark?: Maybe<Array<Maybe<MarkdownRemark>>>;
  /** Returns the first child node of type MarkdownRemark or null if there are no children of given type on this node */
  childMarkdownRemark?: Maybe<MarkdownRemark>;
};

export type ContentfulOssDetailTextNodeConnection = {
  __typename?: 'contentfulOssDetailTextNodeConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulOssDetailTextNodeEdge>;
  nodes: Array<ContentfulOssDetailTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulOssDetailTextNodeGroupConnection>;
};


export type ContentfulOssDetailTextNodeConnectionDistinctArgs = {
  field: ContentfulOssDetailTextNodeFieldsEnum;
};


export type ContentfulOssDetailTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulOssDetailTextNodeFieldsEnum;
};

export type ContentfulOssDetailTextNodeEdge = {
  __typename?: 'contentfulOssDetailTextNodeEdge';
  next?: Maybe<ContentfulOssDetailTextNode>;
  node: ContentfulOssDetailTextNode;
  previous?: Maybe<ContentfulOssDetailTextNode>;
};

export enum ContentfulOssDetailTextNodeFieldsEnum {
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  detail = 'detail',
  sys___type = 'sys___type',
  childrenMarkdownRemark = 'childrenMarkdownRemark',
  childrenMarkdownRemark___id = 'childrenMarkdownRemark___id',
  childrenMarkdownRemark___frontmatter___title = 'childrenMarkdownRemark___frontmatter___title',
  childrenMarkdownRemark___excerpt = 'childrenMarkdownRemark___excerpt',
  childrenMarkdownRemark___rawMarkdownBody = 'childrenMarkdownRemark___rawMarkdownBody',
  childrenMarkdownRemark___html = 'childrenMarkdownRemark___html',
  childrenMarkdownRemark___htmlAst = 'childrenMarkdownRemark___htmlAst',
  childrenMarkdownRemark___excerptAst = 'childrenMarkdownRemark___excerptAst',
  childrenMarkdownRemark___headings = 'childrenMarkdownRemark___headings',
  childrenMarkdownRemark___headings___id = 'childrenMarkdownRemark___headings___id',
  childrenMarkdownRemark___headings___value = 'childrenMarkdownRemark___headings___value',
  childrenMarkdownRemark___headings___depth = 'childrenMarkdownRemark___headings___depth',
  childrenMarkdownRemark___timeToRead = 'childrenMarkdownRemark___timeToRead',
  childrenMarkdownRemark___tableOfContents = 'childrenMarkdownRemark___tableOfContents',
  childrenMarkdownRemark___wordCount___paragraphs = 'childrenMarkdownRemark___wordCount___paragraphs',
  childrenMarkdownRemark___wordCount___sentences = 'childrenMarkdownRemark___wordCount___sentences',
  childrenMarkdownRemark___wordCount___words = 'childrenMarkdownRemark___wordCount___words',
  childrenMarkdownRemark___parent___id = 'childrenMarkdownRemark___parent___id',
  childrenMarkdownRemark___parent___parent___id = 'childrenMarkdownRemark___parent___parent___id',
  childrenMarkdownRemark___parent___parent___children = 'childrenMarkdownRemark___parent___parent___children',
  childrenMarkdownRemark___parent___children = 'childrenMarkdownRemark___parent___children',
  childrenMarkdownRemark___parent___children___id = 'childrenMarkdownRemark___parent___children___id',
  childrenMarkdownRemark___parent___children___children = 'childrenMarkdownRemark___parent___children___children',
  childrenMarkdownRemark___parent___internal___content = 'childrenMarkdownRemark___parent___internal___content',
  childrenMarkdownRemark___parent___internal___contentDigest = 'childrenMarkdownRemark___parent___internal___contentDigest',
  childrenMarkdownRemark___parent___internal___description = 'childrenMarkdownRemark___parent___internal___description',
  childrenMarkdownRemark___parent___internal___fieldOwners = 'childrenMarkdownRemark___parent___internal___fieldOwners',
  childrenMarkdownRemark___parent___internal___ignoreType = 'childrenMarkdownRemark___parent___internal___ignoreType',
  childrenMarkdownRemark___parent___internal___mediaType = 'childrenMarkdownRemark___parent___internal___mediaType',
  childrenMarkdownRemark___parent___internal___owner = 'childrenMarkdownRemark___parent___internal___owner',
  childrenMarkdownRemark___parent___internal___type = 'childrenMarkdownRemark___parent___internal___type',
  childrenMarkdownRemark___children = 'childrenMarkdownRemark___children',
  childrenMarkdownRemark___children___id = 'childrenMarkdownRemark___children___id',
  childrenMarkdownRemark___children___parent___id = 'childrenMarkdownRemark___children___parent___id',
  childrenMarkdownRemark___children___parent___children = 'childrenMarkdownRemark___children___parent___children',
  childrenMarkdownRemark___children___children = 'childrenMarkdownRemark___children___children',
  childrenMarkdownRemark___children___children___id = 'childrenMarkdownRemark___children___children___id',
  childrenMarkdownRemark___children___children___children = 'childrenMarkdownRemark___children___children___children',
  childrenMarkdownRemark___children___internal___content = 'childrenMarkdownRemark___children___internal___content',
  childrenMarkdownRemark___children___internal___contentDigest = 'childrenMarkdownRemark___children___internal___contentDigest',
  childrenMarkdownRemark___children___internal___description = 'childrenMarkdownRemark___children___internal___description',
  childrenMarkdownRemark___children___internal___fieldOwners = 'childrenMarkdownRemark___children___internal___fieldOwners',
  childrenMarkdownRemark___children___internal___ignoreType = 'childrenMarkdownRemark___children___internal___ignoreType',
  childrenMarkdownRemark___children___internal___mediaType = 'childrenMarkdownRemark___children___internal___mediaType',
  childrenMarkdownRemark___children___internal___owner = 'childrenMarkdownRemark___children___internal___owner',
  childrenMarkdownRemark___children___internal___type = 'childrenMarkdownRemark___children___internal___type',
  childrenMarkdownRemark___internal___content = 'childrenMarkdownRemark___internal___content',
  childrenMarkdownRemark___internal___contentDigest = 'childrenMarkdownRemark___internal___contentDigest',
  childrenMarkdownRemark___internal___description = 'childrenMarkdownRemark___internal___description',
  childrenMarkdownRemark___internal___fieldOwners = 'childrenMarkdownRemark___internal___fieldOwners',
  childrenMarkdownRemark___internal___ignoreType = 'childrenMarkdownRemark___internal___ignoreType',
  childrenMarkdownRemark___internal___mediaType = 'childrenMarkdownRemark___internal___mediaType',
  childrenMarkdownRemark___internal___owner = 'childrenMarkdownRemark___internal___owner',
  childrenMarkdownRemark___internal___type = 'childrenMarkdownRemark___internal___type',
  childMarkdownRemark___id = 'childMarkdownRemark___id',
  childMarkdownRemark___frontmatter___title = 'childMarkdownRemark___frontmatter___title',
  childMarkdownRemark___excerpt = 'childMarkdownRemark___excerpt',
  childMarkdownRemark___rawMarkdownBody = 'childMarkdownRemark___rawMarkdownBody',
  childMarkdownRemark___html = 'childMarkdownRemark___html',
  childMarkdownRemark___htmlAst = 'childMarkdownRemark___htmlAst',
  childMarkdownRemark___excerptAst = 'childMarkdownRemark___excerptAst',
  childMarkdownRemark___headings = 'childMarkdownRemark___headings',
  childMarkdownRemark___headings___id = 'childMarkdownRemark___headings___id',
  childMarkdownRemark___headings___value = 'childMarkdownRemark___headings___value',
  childMarkdownRemark___headings___depth = 'childMarkdownRemark___headings___depth',
  childMarkdownRemark___timeToRead = 'childMarkdownRemark___timeToRead',
  childMarkdownRemark___tableOfContents = 'childMarkdownRemark___tableOfContents',
  childMarkdownRemark___wordCount___paragraphs = 'childMarkdownRemark___wordCount___paragraphs',
  childMarkdownRemark___wordCount___sentences = 'childMarkdownRemark___wordCount___sentences',
  childMarkdownRemark___wordCount___words = 'childMarkdownRemark___wordCount___words',
  childMarkdownRemark___parent___id = 'childMarkdownRemark___parent___id',
  childMarkdownRemark___parent___parent___id = 'childMarkdownRemark___parent___parent___id',
  childMarkdownRemark___parent___parent___children = 'childMarkdownRemark___parent___parent___children',
  childMarkdownRemark___parent___children = 'childMarkdownRemark___parent___children',
  childMarkdownRemark___parent___children___id = 'childMarkdownRemark___parent___children___id',
  childMarkdownRemark___parent___children___children = 'childMarkdownRemark___parent___children___children',
  childMarkdownRemark___parent___internal___content = 'childMarkdownRemark___parent___internal___content',
  childMarkdownRemark___parent___internal___contentDigest = 'childMarkdownRemark___parent___internal___contentDigest',
  childMarkdownRemark___parent___internal___description = 'childMarkdownRemark___parent___internal___description',
  childMarkdownRemark___parent___internal___fieldOwners = 'childMarkdownRemark___parent___internal___fieldOwners',
  childMarkdownRemark___parent___internal___ignoreType = 'childMarkdownRemark___parent___internal___ignoreType',
  childMarkdownRemark___parent___internal___mediaType = 'childMarkdownRemark___parent___internal___mediaType',
  childMarkdownRemark___parent___internal___owner = 'childMarkdownRemark___parent___internal___owner',
  childMarkdownRemark___parent___internal___type = 'childMarkdownRemark___parent___internal___type',
  childMarkdownRemark___children = 'childMarkdownRemark___children',
  childMarkdownRemark___children___id = 'childMarkdownRemark___children___id',
  childMarkdownRemark___children___parent___id = 'childMarkdownRemark___children___parent___id',
  childMarkdownRemark___children___parent___children = 'childMarkdownRemark___children___parent___children',
  childMarkdownRemark___children___children = 'childMarkdownRemark___children___children',
  childMarkdownRemark___children___children___id = 'childMarkdownRemark___children___children___id',
  childMarkdownRemark___children___children___children = 'childMarkdownRemark___children___children___children',
  childMarkdownRemark___children___internal___content = 'childMarkdownRemark___children___internal___content',
  childMarkdownRemark___children___internal___contentDigest = 'childMarkdownRemark___children___internal___contentDigest',
  childMarkdownRemark___children___internal___description = 'childMarkdownRemark___children___internal___description',
  childMarkdownRemark___children___internal___fieldOwners = 'childMarkdownRemark___children___internal___fieldOwners',
  childMarkdownRemark___children___internal___ignoreType = 'childMarkdownRemark___children___internal___ignoreType',
  childMarkdownRemark___children___internal___mediaType = 'childMarkdownRemark___children___internal___mediaType',
  childMarkdownRemark___children___internal___owner = 'childMarkdownRemark___children___internal___owner',
  childMarkdownRemark___children___internal___type = 'childMarkdownRemark___children___internal___type',
  childMarkdownRemark___internal___content = 'childMarkdownRemark___internal___content',
  childMarkdownRemark___internal___contentDigest = 'childMarkdownRemark___internal___contentDigest',
  childMarkdownRemark___internal___description = 'childMarkdownRemark___internal___description',
  childMarkdownRemark___internal___fieldOwners = 'childMarkdownRemark___internal___fieldOwners',
  childMarkdownRemark___internal___ignoreType = 'childMarkdownRemark___internal___ignoreType',
  childMarkdownRemark___internal___mediaType = 'childMarkdownRemark___internal___mediaType',
  childMarkdownRemark___internal___owner = 'childMarkdownRemark___internal___owner',
  childMarkdownRemark___internal___type = 'childMarkdownRemark___internal___type'
}

export type ContentfulOssDetailTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  detail?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulOssDetailTextNodeSysFilterInput>;
  childrenMarkdownRemark?: Maybe<MarkdownRemarkFilterListInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
};

export type ContentfulOssDetailTextNodeFilterListInput = {
  elemMatch?: Maybe<ContentfulOssDetailTextNodeFilterInput>;
};

export type ContentfulOssDetailTextNodeGroupConnection = {
  __typename?: 'contentfulOssDetailTextNodeGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulOssDetailTextNodeEdge>;
  nodes: Array<ContentfulOssDetailTextNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulOssDetailTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulOssDetailTextNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulOssDetailTextNodeSys = {
  __typename?: 'contentfulOssDetailTextNodeSys';
  type?: Maybe<Scalars['String']>;
};

export type ContentfulOssDetailTextNodeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulOssEdge = {
  __typename?: 'ContentfulOssEdge';
  next?: Maybe<ContentfulOss>;
  node: ContentfulOss;
  previous?: Maybe<ContentfulOss>;
};

export enum ContentfulOssFieldsEnum {
  contentful_id = 'contentful_id',
  id = 'id',
  node_locale = 'node_locale',
  name = 'name',
  subName = 'subName',
  startDate = 'startDate',
  href = 'href',
  tags = 'tags',
  tags___contentful_id = 'tags___contentful_id',
  tags___id = 'tags___id',
  tags___node_locale = 'tags___node_locale',
  tags___name = 'tags___name',
  tags___level = 'tags___level',
  tags___skill_map = 'tags___skill_map',
  tags___skill_map___contentful_id = 'tags___skill_map___contentful_id',
  tags___skill_map___id = 'tags___skill_map___id',
  tags___skill_map___node_locale = 'tags___skill_map___node_locale',
  tags___skill_map___sortKey = 'tags___skill_map___sortKey',
  tags___skill_map___name = 'tags___skill_map___name',
  tags___skill_map___expanded = 'tags___skill_map___expanded',
  tags___skill_map___skills = 'tags___skill_map___skills',
  tags___skill_map___skills___contentful_id = 'tags___skill_map___skills___contentful_id',
  tags___skill_map___skills___id = 'tags___skill_map___skills___id',
  tags___skill_map___skills___node_locale = 'tags___skill_map___skills___node_locale',
  tags___skill_map___skills___name = 'tags___skill_map___skills___name',
  tags___skill_map___skills___level = 'tags___skill_map___skills___level',
  tags___skill_map___skills___skill_map = 'tags___skill_map___skills___skill_map',
  tags___skill_map___skills___project = 'tags___skill_map___skills___project',
  tags___skill_map___skills___spaceId = 'tags___skill_map___skills___spaceId',
  tags___skill_map___skills___createdAt = 'tags___skill_map___skills___createdAt',
  tags___skill_map___skills___updatedAt = 'tags___skill_map___skills___updatedAt',
  tags___skill_map___skills___oss = 'tags___skill_map___skills___oss',
  tags___skill_map___skills___children = 'tags___skill_map___skills___children',
  tags___skill_map___spaceId = 'tags___skill_map___spaceId',
  tags___skill_map___createdAt = 'tags___skill_map___createdAt',
  tags___skill_map___updatedAt = 'tags___skill_map___updatedAt',
  tags___skill_map___sys___type = 'tags___skill_map___sys___type',
  tags___skill_map___sys___revision = 'tags___skill_map___sys___revision',
  tags___skill_map___parent___id = 'tags___skill_map___parent___id',
  tags___skill_map___parent___children = 'tags___skill_map___parent___children',
  tags___skill_map___children = 'tags___skill_map___children',
  tags___skill_map___children___id = 'tags___skill_map___children___id',
  tags___skill_map___children___children = 'tags___skill_map___children___children',
  tags___skill_map___internal___content = 'tags___skill_map___internal___content',
  tags___skill_map___internal___contentDigest = 'tags___skill_map___internal___contentDigest',
  tags___skill_map___internal___description = 'tags___skill_map___internal___description',
  tags___skill_map___internal___fieldOwners = 'tags___skill_map___internal___fieldOwners',
  tags___skill_map___internal___ignoreType = 'tags___skill_map___internal___ignoreType',
  tags___skill_map___internal___mediaType = 'tags___skill_map___internal___mediaType',
  tags___skill_map___internal___owner = 'tags___skill_map___internal___owner',
  tags___skill_map___internal___type = 'tags___skill_map___internal___type',
  tags___project = 'tags___project',
  tags___project___contentful_id = 'tags___project___contentful_id',
  tags___project___id = 'tags___project___id',
  tags___project___node_locale = 'tags___project___node_locale',
  tags___project___name = 'tags___project___name',
  tags___project___subName = 'tags___project___subName',
  tags___project___startDate = 'tags___project___startDate',
  tags___project___endDate = 'tags___project___endDate',
  tags___project___tags = 'tags___project___tags',
  tags___project___tags___contentful_id = 'tags___project___tags___contentful_id',
  tags___project___tags___id = 'tags___project___tags___id',
  tags___project___tags___node_locale = 'tags___project___tags___node_locale',
  tags___project___tags___name = 'tags___project___tags___name',
  tags___project___tags___level = 'tags___project___tags___level',
  tags___project___tags___skill_map = 'tags___project___tags___skill_map',
  tags___project___tags___project = 'tags___project___tags___project',
  tags___project___tags___spaceId = 'tags___project___tags___spaceId',
  tags___project___tags___createdAt = 'tags___project___tags___createdAt',
  tags___project___tags___updatedAt = 'tags___project___tags___updatedAt',
  tags___project___tags___oss = 'tags___project___tags___oss',
  tags___project___tags___children = 'tags___project___tags___children',
  tags___project___icon___contentful_id = 'tags___project___icon___contentful_id',
  tags___project___icon___id = 'tags___project___icon___id',
  tags___project___icon___node_locale = 'tags___project___icon___node_locale',
  tags___project___icon___name = 'tags___project___icon___name',
  tags___project___icon___what_i_can_do = 'tags___project___icon___what_i_can_do',
  tags___project___icon___project = 'tags___project___icon___project',
  tags___project___icon___oss = 'tags___project___icon___oss',
  tags___project___icon___spaceId = 'tags___project___icon___spaceId',
  tags___project___icon___createdAt = 'tags___project___icon___createdAt',
  tags___project___icon___updatedAt = 'tags___project___icon___updatedAt',
  tags___project___icon___history = 'tags___project___icon___history',
  tags___project___icon___contact = 'tags___project___icon___contact',
  tags___project___icon___childrenContentfulIconSvgTextNode = 'tags___project___icon___childrenContentfulIconSvgTextNode',
  tags___project___icon___children = 'tags___project___icon___children',
  tags___project___detail___id = 'tags___project___detail___id',
  tags___project___detail___children = 'tags___project___detail___children',
  tags___project___detail___detail = 'tags___project___detail___detail',
  tags___project___detail___childrenMarkdownRemark = 'tags___project___detail___childrenMarkdownRemark',
  tags___project___spaceId = 'tags___project___spaceId',
  tags___project___createdAt = 'tags___project___createdAt',
  tags___project___updatedAt = 'tags___project___updatedAt',
  tags___project___sys___type = 'tags___project___sys___type',
  tags___project___sys___revision = 'tags___project___sys___revision',
  tags___project___childrenContentfulProjectDetailTextNode = 'tags___project___childrenContentfulProjectDetailTextNode',
  tags___project___childrenContentfulProjectDetailTextNode___id = 'tags___project___childrenContentfulProjectDetailTextNode___id',
  tags___project___childrenContentfulProjectDetailTextNode___children = 'tags___project___childrenContentfulProjectDetailTextNode___children',
  tags___project___childrenContentfulProjectDetailTextNode___detail = 'tags___project___childrenContentfulProjectDetailTextNode___detail',
  tags___project___childrenContentfulProjectDetailTextNode___childrenMarkdownRemark = 'tags___project___childrenContentfulProjectDetailTextNode___childrenMarkdownRemark',
  tags___project___childContentfulProjectDetailTextNode___id = 'tags___project___childContentfulProjectDetailTextNode___id',
  tags___project___childContentfulProjectDetailTextNode___children = 'tags___project___childContentfulProjectDetailTextNode___children',
  tags___project___childContentfulProjectDetailTextNode___detail = 'tags___project___childContentfulProjectDetailTextNode___detail',
  tags___project___childContentfulProjectDetailTextNode___childrenMarkdownRemark = 'tags___project___childContentfulProjectDetailTextNode___childrenMarkdownRemark',
  tags___project___parent___id = 'tags___project___parent___id',
  tags___project___parent___children = 'tags___project___parent___children',
  tags___project___children = 'tags___project___children',
  tags___project___children___id = 'tags___project___children___id',
  tags___project___children___children = 'tags___project___children___children',
  tags___project___internal___content = 'tags___project___internal___content',
  tags___project___internal___contentDigest = 'tags___project___internal___contentDigest',
  tags___project___internal___description = 'tags___project___internal___description',
  tags___project___internal___fieldOwners = 'tags___project___internal___fieldOwners',
  tags___project___internal___ignoreType = 'tags___project___internal___ignoreType',
  tags___project___internal___mediaType = 'tags___project___internal___mediaType',
  tags___project___internal___owner = 'tags___project___internal___owner',
  tags___project___internal___type = 'tags___project___internal___type',
  tags___spaceId = 'tags___spaceId',
  tags___createdAt = 'tags___createdAt',
  tags___updatedAt = 'tags___updatedAt',
  tags___sys___type = 'tags___sys___type',
  tags___sys___revision = 'tags___sys___revision',
  tags___oss = 'tags___oss',
  tags___oss___contentful_id = 'tags___oss___contentful_id',
  tags___oss___id = 'tags___oss___id',
  tags___oss___node_locale = 'tags___oss___node_locale',
  tags___oss___name = 'tags___oss___name',
  tags___oss___subName = 'tags___oss___subName',
  tags___oss___startDate = 'tags___oss___startDate',
  tags___oss___href = 'tags___oss___href',
  tags___oss___tags = 'tags___oss___tags',
  tags___oss___tags___contentful_id = 'tags___oss___tags___contentful_id',
  tags___oss___tags___id = 'tags___oss___tags___id',
  tags___oss___tags___node_locale = 'tags___oss___tags___node_locale',
  tags___oss___tags___name = 'tags___oss___tags___name',
  tags___oss___tags___level = 'tags___oss___tags___level',
  tags___oss___tags___skill_map = 'tags___oss___tags___skill_map',
  tags___oss___tags___project = 'tags___oss___tags___project',
  tags___oss___tags___spaceId = 'tags___oss___tags___spaceId',
  tags___oss___tags___createdAt = 'tags___oss___tags___createdAt',
  tags___oss___tags___updatedAt = 'tags___oss___tags___updatedAt',
  tags___oss___tags___oss = 'tags___oss___tags___oss',
  tags___oss___tags___children = 'tags___oss___tags___children',
  tags___oss___icon___contentful_id = 'tags___oss___icon___contentful_id',
  tags___oss___icon___id = 'tags___oss___icon___id',
  tags___oss___icon___node_locale = 'tags___oss___icon___node_locale',
  tags___oss___icon___name = 'tags___oss___icon___name',
  tags___oss___icon___what_i_can_do = 'tags___oss___icon___what_i_can_do',
  tags___oss___icon___project = 'tags___oss___icon___project',
  tags___oss___icon___oss = 'tags___oss___icon___oss',
  tags___oss___icon___spaceId = 'tags___oss___icon___spaceId',
  tags___oss___icon___createdAt = 'tags___oss___icon___createdAt',
  tags___oss___icon___updatedAt = 'tags___oss___icon___updatedAt',
  tags___oss___icon___history = 'tags___oss___icon___history',
  tags___oss___icon___contact = 'tags___oss___icon___contact',
  tags___oss___icon___childrenContentfulIconSvgTextNode = 'tags___oss___icon___childrenContentfulIconSvgTextNode',
  tags___oss___icon___children = 'tags___oss___icon___children',
  tags___oss___image___contentful_id = 'tags___oss___image___contentful_id',
  tags___oss___image___id = 'tags___oss___image___id',
  tags___oss___image___spaceId = 'tags___oss___image___spaceId',
  tags___oss___image___createdAt = 'tags___oss___image___createdAt',
  tags___oss___image___updatedAt = 'tags___oss___image___updatedAt',
  tags___oss___image___title = 'tags___oss___image___title',
  tags___oss___image___description = 'tags___oss___image___description',
  tags___oss___image___node_locale = 'tags___oss___image___node_locale',
  tags___oss___image___gatsbyImageData = 'tags___oss___image___gatsbyImageData',
  tags___oss___image___children = 'tags___oss___image___children',
  tags___oss___detail___id = 'tags___oss___detail___id',
  tags___oss___detail___children = 'tags___oss___detail___children',
  tags___oss___detail___detail = 'tags___oss___detail___detail',
  tags___oss___detail___childrenMarkdownRemark = 'tags___oss___detail___childrenMarkdownRemark',
  tags___oss___spaceId = 'tags___oss___spaceId',
  tags___oss___createdAt = 'tags___oss___createdAt',
  tags___oss___updatedAt = 'tags___oss___updatedAt',
  tags___oss___sys___type = 'tags___oss___sys___type',
  tags___oss___sys___revision = 'tags___oss___sys___revision',
  tags___oss___childrenContentfulOssDetailTextNode = 'tags___oss___childrenContentfulOssDetailTextNode',
  tags___oss___childrenContentfulOssDetailTextNode___id = 'tags___oss___childrenContentfulOssDetailTextNode___id',
  tags___oss___childrenContentfulOssDetailTextNode___children = 'tags___oss___childrenContentfulOssDetailTextNode___children',
  tags___oss___childrenContentfulOssDetailTextNode___detail = 'tags___oss___childrenContentfulOssDetailTextNode___detail',
  tags___oss___childrenContentfulOssDetailTextNode___childrenMarkdownRemark = 'tags___oss___childrenContentfulOssDetailTextNode___childrenMarkdownRemark',
  tags___oss___childContentfulOssDetailTextNode___id = 'tags___oss___childContentfulOssDetailTextNode___id',
  tags___oss___childContentfulOssDetailTextNode___children = 'tags___oss___childContentfulOssDetailTextNode___children',
  tags___oss___childContentfulOssDetailTextNode___detail = 'tags___oss___childContentfulOssDetailTextNode___detail',
  tags___oss___childContentfulOssDetailTextNode___childrenMarkdownRemark = 'tags___oss___childContentfulOssDetailTextNode___childrenMarkdownRemark',
  tags___oss___parent___id = 'tags___oss___parent___id',
  tags___oss___parent___children = 'tags___oss___parent___children',
  tags___oss___children = 'tags___oss___children',
  tags___oss___children___id = 'tags___oss___children___id',
  tags___oss___children___children = 'tags___oss___children___children',
  tags___oss___internal___content = 'tags___oss___internal___content',
  tags___oss___internal___contentDigest = 'tags___oss___internal___contentDigest',
  tags___oss___internal___description = 'tags___oss___internal___description',
  tags___oss___internal___fieldOwners = 'tags___oss___internal___fieldOwners',
  tags___oss___internal___ignoreType = 'tags___oss___internal___ignoreType',
  tags___oss___internal___mediaType = 'tags___oss___internal___mediaType',
  tags___oss___internal___owner = 'tags___oss___internal___owner',
  tags___oss___internal___type = 'tags___oss___internal___type',
  tags___parent___id = 'tags___parent___id',
  tags___parent___parent___id = 'tags___parent___parent___id',
  tags___parent___parent___children = 'tags___parent___parent___children',
  tags___parent___children = 'tags___parent___children',
  tags___parent___children___id = 'tags___parent___children___id',
  tags___parent___children___children = 'tags___parent___children___children',
  tags___parent___internal___content = 'tags___parent___internal___content',
  tags___parent___internal___contentDigest = 'tags___parent___internal___contentDigest',
  tags___parent___internal___description = 'tags___parent___internal___description',
  tags___parent___internal___fieldOwners = 'tags___parent___internal___fieldOwners',
  tags___parent___internal___ignoreType = 'tags___parent___internal___ignoreType',
  tags___parent___internal___mediaType = 'tags___parent___internal___mediaType',
  tags___parent___internal___owner = 'tags___parent___internal___owner',
  tags___parent___internal___type = 'tags___parent___internal___type',
  tags___children = 'tags___children',
  tags___children___id = 'tags___children___id',
  tags___children___parent___id = 'tags___children___parent___id',
  tags___children___parent___children = 'tags___children___parent___children',
  tags___children___children = 'tags___children___children',
  tags___children___children___id = 'tags___children___children___id',
  tags___children___children___children = 'tags___children___children___children',
  tags___children___internal___content = 'tags___children___internal___content',
  tags___children___internal___contentDigest = 'tags___children___internal___contentDigest',
  tags___children___internal___description = 'tags___children___internal___description',
  tags___children___internal___fieldOwners = 'tags___children___internal___fieldOwners',
  tags___children___internal___ignoreType = 'tags___children___internal___ignoreType',
  tags___children___internal___mediaType = 'tags___children___internal___mediaType',
  tags___children___internal___owner = 'tags___children___internal___owner',
  tags___children___internal___type = 'tags___children___internal___type',
  tags___internal___content = 'tags___internal___content',
  tags___internal___contentDigest = 'tags___internal___contentDigest',
  tags___internal___description = 'tags___internal___description',
  tags___internal___fieldOwners = 'tags___internal___fieldOwners',
  tags___internal___ignoreType = 'tags___internal___ignoreType',
  tags___internal___mediaType = 'tags___internal___mediaType',
  tags___internal___owner = 'tags___internal___owner',
  tags___internal___type = 'tags___internal___type',
  icon___contentful_id = 'icon___contentful_id',
  icon___id = 'icon___id',
  icon___node_locale = 'icon___node_locale',
  icon___name = 'icon___name',
  icon___what_i_can_do = 'icon___what_i_can_do',
  icon___what_i_can_do___contentful_id = 'icon___what_i_can_do___contentful_id',
  icon___what_i_can_do___id = 'icon___what_i_can_do___id',
  icon___what_i_can_do___node_locale = 'icon___what_i_can_do___node_locale',
  icon___what_i_can_do___sortKey = 'icon___what_i_can_do___sortKey',
  icon___what_i_can_do___name = 'icon___what_i_can_do___name',
  icon___what_i_can_do___subName = 'icon___what_i_can_do___subName',
  icon___what_i_can_do___icon___contentful_id = 'icon___what_i_can_do___icon___contentful_id',
  icon___what_i_can_do___icon___id = 'icon___what_i_can_do___icon___id',
  icon___what_i_can_do___icon___node_locale = 'icon___what_i_can_do___icon___node_locale',
  icon___what_i_can_do___icon___name = 'icon___what_i_can_do___icon___name',
  icon___what_i_can_do___icon___what_i_can_do = 'icon___what_i_can_do___icon___what_i_can_do',
  icon___what_i_can_do___icon___project = 'icon___what_i_can_do___icon___project',
  icon___what_i_can_do___icon___oss = 'icon___what_i_can_do___icon___oss',
  icon___what_i_can_do___icon___spaceId = 'icon___what_i_can_do___icon___spaceId',
  icon___what_i_can_do___icon___createdAt = 'icon___what_i_can_do___icon___createdAt',
  icon___what_i_can_do___icon___updatedAt = 'icon___what_i_can_do___icon___updatedAt',
  icon___what_i_can_do___icon___history = 'icon___what_i_can_do___icon___history',
  icon___what_i_can_do___icon___contact = 'icon___what_i_can_do___icon___contact',
  icon___what_i_can_do___icon___childrenContentfulIconSvgTextNode = 'icon___what_i_can_do___icon___childrenContentfulIconSvgTextNode',
  icon___what_i_can_do___icon___children = 'icon___what_i_can_do___icon___children',
  icon___what_i_can_do___spaceId = 'icon___what_i_can_do___spaceId',
  icon___what_i_can_do___createdAt = 'icon___what_i_can_do___createdAt',
  icon___what_i_can_do___updatedAt = 'icon___what_i_can_do___updatedAt',
  icon___what_i_can_do___sys___type = 'icon___what_i_can_do___sys___type',
  icon___what_i_can_do___sys___revision = 'icon___what_i_can_do___sys___revision',
  icon___what_i_can_do___parent___id = 'icon___what_i_can_do___parent___id',
  icon___what_i_can_do___parent___children = 'icon___what_i_can_do___parent___children',
  icon___what_i_can_do___children = 'icon___what_i_can_do___children',
  icon___what_i_can_do___children___id = 'icon___what_i_can_do___children___id',
  icon___what_i_can_do___children___children = 'icon___what_i_can_do___children___children',
  icon___what_i_can_do___internal___content = 'icon___what_i_can_do___internal___content',
  icon___what_i_can_do___internal___contentDigest = 'icon___what_i_can_do___internal___contentDigest',
  icon___what_i_can_do___internal___description = 'icon___what_i_can_do___internal___description',
  icon___what_i_can_do___internal___fieldOwners = 'icon___what_i_can_do___internal___fieldOwners',
  icon___what_i_can_do___internal___ignoreType = 'icon___what_i_can_do___internal___ignoreType',
  icon___what_i_can_do___internal___mediaType = 'icon___what_i_can_do___internal___mediaType',
  icon___what_i_can_do___internal___owner = 'icon___what_i_can_do___internal___owner',
  icon___what_i_can_do___internal___type = 'icon___what_i_can_do___internal___type',
  icon___project = 'icon___project',
  icon___project___contentful_id = 'icon___project___contentful_id',
  icon___project___id = 'icon___project___id',
  icon___project___node_locale = 'icon___project___node_locale',
  icon___project___name = 'icon___project___name',
  icon___project___subName = 'icon___project___subName',
  icon___project___startDate = 'icon___project___startDate',
  icon___project___endDate = 'icon___project___endDate',
  icon___project___tags = 'icon___project___tags',
  icon___project___tags___contentful_id = 'icon___project___tags___contentful_id',
  icon___project___tags___id = 'icon___project___tags___id',
  icon___project___tags___node_locale = 'icon___project___tags___node_locale',
  icon___project___tags___name = 'icon___project___tags___name',
  icon___project___tags___level = 'icon___project___tags___level',
  icon___project___tags___skill_map = 'icon___project___tags___skill_map',
  icon___project___tags___project = 'icon___project___tags___project',
  icon___project___tags___spaceId = 'icon___project___tags___spaceId',
  icon___project___tags___createdAt = 'icon___project___tags___createdAt',
  icon___project___tags___updatedAt = 'icon___project___tags___updatedAt',
  icon___project___tags___oss = 'icon___project___tags___oss',
  icon___project___tags___children = 'icon___project___tags___children',
  icon___project___icon___contentful_id = 'icon___project___icon___contentful_id',
  icon___project___icon___id = 'icon___project___icon___id',
  icon___project___icon___node_locale = 'icon___project___icon___node_locale',
  icon___project___icon___name = 'icon___project___icon___name',
  icon___project___icon___what_i_can_do = 'icon___project___icon___what_i_can_do',
  icon___project___icon___project = 'icon___project___icon___project',
  icon___project___icon___oss = 'icon___project___icon___oss',
  icon___project___icon___spaceId = 'icon___project___icon___spaceId',
  icon___project___icon___createdAt = 'icon___project___icon___createdAt',
  icon___project___icon___updatedAt = 'icon___project___icon___updatedAt',
  icon___project___icon___history = 'icon___project___icon___history',
  icon___project___icon___contact = 'icon___project___icon___contact',
  icon___project___icon___childrenContentfulIconSvgTextNode = 'icon___project___icon___childrenContentfulIconSvgTextNode',
  icon___project___icon___children = 'icon___project___icon___children',
  icon___project___detail___id = 'icon___project___detail___id',
  icon___project___detail___children = 'icon___project___detail___children',
  icon___project___detail___detail = 'icon___project___detail___detail',
  icon___project___detail___childrenMarkdownRemark = 'icon___project___detail___childrenMarkdownRemark',
  icon___project___spaceId = 'icon___project___spaceId',
  icon___project___createdAt = 'icon___project___createdAt',
  icon___project___updatedAt = 'icon___project___updatedAt',
  icon___project___sys___type = 'icon___project___sys___type',
  icon___project___sys___revision = 'icon___project___sys___revision',
  icon___project___childrenContentfulProjectDetailTextNode = 'icon___project___childrenContentfulProjectDetailTextNode',
  icon___project___childrenContentfulProjectDetailTextNode___id = 'icon___project___childrenContentfulProjectDetailTextNode___id',
  icon___project___childrenContentfulProjectDetailTextNode___children = 'icon___project___childrenContentfulProjectDetailTextNode___children',
  icon___project___childrenContentfulProjectDetailTextNode___detail = 'icon___project___childrenContentfulProjectDetailTextNode___detail',
  icon___project___childrenContentfulProjectDetailTextNode___childrenMarkdownRemark = 'icon___project___childrenContentfulProjectDetailTextNode___childrenMarkdownRemark',
  icon___project___childContentfulProjectDetailTextNode___id = 'icon___project___childContentfulProjectDetailTextNode___id',
  icon___project___childContentfulProjectDetailTextNode___children = 'icon___project___childContentfulProjectDetailTextNode___children',
  icon___project___childContentfulProjectDetailTextNode___detail = 'icon___project___childContentfulProjectDetailTextNode___detail',
  icon___project___childContentfulProjectDetailTextNode___childrenMarkdownRemark = 'icon___project___childContentfulProjectDetailTextNode___childrenMarkdownRemark',
  icon___project___parent___id = 'icon___project___parent___id',
  icon___project___parent___children = 'icon___project___parent___children',
  icon___project___children = 'icon___project___children',
  icon___project___children___id = 'icon___project___children___id',
  icon___project___children___children = 'icon___project___children___children',
  icon___project___internal___content = 'icon___project___internal___content',
  icon___project___internal___contentDigest = 'icon___project___internal___contentDigest',
  icon___project___internal___description = 'icon___project___internal___description',
  icon___project___internal___fieldOwners = 'icon___project___internal___fieldOwners',
  icon___project___internal___ignoreType = 'icon___project___internal___ignoreType',
  icon___project___internal___mediaType = 'icon___project___internal___mediaType',
  icon___project___internal___owner = 'icon___project___internal___owner',
  icon___project___internal___type = 'icon___project___internal___type',
  icon___oss = 'icon___oss',
  icon___oss___contentful_id = 'icon___oss___contentful_id',
  icon___oss___id = 'icon___oss___id',
  icon___oss___node_locale = 'icon___oss___node_locale',
  icon___oss___name = 'icon___oss___name',
  icon___oss___subName = 'icon___oss___subName',
  icon___oss___startDate = 'icon___oss___startDate',
  icon___oss___href = 'icon___oss___href',
  icon___oss___tags = 'icon___oss___tags',
  icon___oss___tags___contentful_id = 'icon___oss___tags___contentful_id',
  icon___oss___tags___id = 'icon___oss___tags___id',
  icon___oss___tags___node_locale = 'icon___oss___tags___node_locale',
  icon___oss___tags___name = 'icon___oss___tags___name',
  icon___oss___tags___level = 'icon___oss___tags___level',
  icon___oss___tags___skill_map = 'icon___oss___tags___skill_map',
  icon___oss___tags___project = 'icon___oss___tags___project',
  icon___oss___tags___spaceId = 'icon___oss___tags___spaceId',
  icon___oss___tags___createdAt = 'icon___oss___tags___createdAt',
  icon___oss___tags___updatedAt = 'icon___oss___tags___updatedAt',
  icon___oss___tags___oss = 'icon___oss___tags___oss',
  icon___oss___tags___children = 'icon___oss___tags___children',
  icon___oss___icon___contentful_id = 'icon___oss___icon___contentful_id',
  icon___oss___icon___id = 'icon___oss___icon___id',
  icon___oss___icon___node_locale = 'icon___oss___icon___node_locale',
  icon___oss___icon___name = 'icon___oss___icon___name',
  icon___oss___icon___what_i_can_do = 'icon___oss___icon___what_i_can_do',
  icon___oss___icon___project = 'icon___oss___icon___project',
  icon___oss___icon___oss = 'icon___oss___icon___oss',
  icon___oss___icon___spaceId = 'icon___oss___icon___spaceId',
  icon___oss___icon___createdAt = 'icon___oss___icon___createdAt',
  icon___oss___icon___updatedAt = 'icon___oss___icon___updatedAt',
  icon___oss___icon___history = 'icon___oss___icon___history',
  icon___oss___icon___contact = 'icon___oss___icon___contact',
  icon___oss___icon___childrenContentfulIconSvgTextNode = 'icon___oss___icon___childrenContentfulIconSvgTextNode',
  icon___oss___icon___children = 'icon___oss___icon___children',
  icon___oss___image___contentful_id = 'icon___oss___image___contentful_id',
  icon___oss___image___id = 'icon___oss___image___id',
  icon___oss___image___spaceId = 'icon___oss___image___spaceId',
  icon___oss___image___createdAt = 'icon___oss___image___createdAt',
  icon___oss___image___updatedAt = 'icon___oss___image___updatedAt',
  icon___oss___image___title = 'icon___oss___image___title',
  icon___oss___image___description = 'icon___oss___image___description',
  icon___oss___image___node_locale = 'icon___oss___image___node_locale',
  icon___oss___image___gatsbyImageData = 'icon___oss___image___gatsbyImageData',
  icon___oss___image___children = 'icon___oss___image___children',
  icon___oss___detail___id = 'icon___oss___detail___id',
  icon___oss___detail___children = 'icon___oss___detail___children',
  icon___oss___detail___detail = 'icon___oss___detail___detail',
  icon___oss___detail___childrenMarkdownRemark = 'icon___oss___detail___childrenMarkdownRemark',
  icon___oss___spaceId = 'icon___oss___spaceId',
  icon___oss___createdAt = 'icon___oss___createdAt',
  icon___oss___updatedAt = 'icon___oss___updatedAt',
  icon___oss___sys___type = 'icon___oss___sys___type',
  icon___oss___sys___revision = 'icon___oss___sys___revision',
  icon___oss___childrenContentfulOssDetailTextNode = 'icon___oss___childrenContentfulOssDetailTextNode',
  icon___oss___childrenContentfulOssDetailTextNode___id = 'icon___oss___childrenContentfulOssDetailTextNode___id',
  icon___oss___childrenContentfulOssDetailTextNode___children = 'icon___oss___childrenContentfulOssDetailTextNode___children',
  icon___oss___childrenContentfulOssDetailTextNode___detail = 'icon___oss___childrenContentfulOssDetailTextNode___detail',
  icon___oss___childrenContentfulOssDetailTextNode___childrenMarkdownRemark = 'icon___oss___childrenContentfulOssDetailTextNode___childrenMarkdownRemark',
  icon___oss___childContentfulOssDetailTextNode___id = 'icon___oss___childContentfulOssDetailTextNode___id',
  icon___oss___childContentfulOssDetailTextNode___children = 'icon___oss___childContentfulOssDetailTextNode___children',
  icon___oss___childContentfulOssDetailTextNode___detail = 'icon___oss___childContentfulOssDetailTextNode___detail',
  icon___oss___childContentfulOssDetailTextNode___childrenMarkdownRemark = 'icon___oss___childContentfulOssDetailTextNode___childrenMarkdownRemark',
  icon___oss___parent___id = 'icon___oss___parent___id',
  icon___oss___parent___children = 'icon___oss___parent___children',
  icon___oss___children = 'icon___oss___children',
  icon___oss___children___id = 'icon___oss___children___id',
  icon___oss___children___children = 'icon___oss___children___children',
  icon___oss___internal___content = 'icon___oss___internal___content',
  icon___oss___internal___contentDigest = 'icon___oss___internal___contentDigest',
  icon___oss___internal___description = 'icon___oss___internal___description',
  icon___oss___internal___fieldOwners = 'icon___oss___internal___fieldOwners',
  icon___oss___internal___ignoreType = 'icon___oss___internal___ignoreType',
  icon___oss___internal___mediaType = 'icon___oss___internal___mediaType',
  icon___oss___internal___owner = 'icon___oss___internal___owner',
  icon___oss___internal___type = 'icon___oss___internal___type',
  icon___svg___id = 'icon___svg___id',
  icon___svg___parent___id = 'icon___svg___parent___id',
  icon___svg___parent___children = 'icon___svg___parent___children',
  icon___svg___children = 'icon___svg___children',
  icon___svg___children___id = 'icon___svg___children___id',
  icon___svg___children___children = 'icon___svg___children___children',
  icon___svg___internal___content = 'icon___svg___internal___content',
  icon___svg___internal___contentDigest = 'icon___svg___internal___contentDigest',
  icon___svg___internal___description = 'icon___svg___internal___description',
  icon___svg___internal___fieldOwners = 'icon___svg___internal___fieldOwners',
  icon___svg___internal___ignoreType = 'icon___svg___internal___ignoreType',
  icon___svg___internal___mediaType = 'icon___svg___internal___mediaType',
  icon___svg___internal___owner = 'icon___svg___internal___owner',
  icon___svg___internal___type = 'icon___svg___internal___type',
  icon___svg___svg = 'icon___svg___svg',
  icon___svg___sys___type = 'icon___svg___sys___type',
  icon___svg___childrenMarkdownRemark = 'icon___svg___childrenMarkdownRemark',
  icon___svg___childrenMarkdownRemark___id = 'icon___svg___childrenMarkdownRemark___id',
  icon___svg___childrenMarkdownRemark___excerpt = 'icon___svg___childrenMarkdownRemark___excerpt',
  icon___svg___childrenMarkdownRemark___rawMarkdownBody = 'icon___svg___childrenMarkdownRemark___rawMarkdownBody',
  icon___svg___childrenMarkdownRemark___html = 'icon___svg___childrenMarkdownRemark___html',
  icon___svg___childrenMarkdownRemark___htmlAst = 'icon___svg___childrenMarkdownRemark___htmlAst',
  icon___svg___childrenMarkdownRemark___excerptAst = 'icon___svg___childrenMarkdownRemark___excerptAst',
  icon___svg___childrenMarkdownRemark___headings = 'icon___svg___childrenMarkdownRemark___headings',
  icon___svg___childrenMarkdownRemark___timeToRead = 'icon___svg___childrenMarkdownRemark___timeToRead',
  icon___svg___childrenMarkdownRemark___tableOfContents = 'icon___svg___childrenMarkdownRemark___tableOfContents',
  icon___svg___childrenMarkdownRemark___children = 'icon___svg___childrenMarkdownRemark___children',
  icon___svg___childMarkdownRemark___id = 'icon___svg___childMarkdownRemark___id',
  icon___svg___childMarkdownRemark___excerpt = 'icon___svg___childMarkdownRemark___excerpt',
  icon___svg___childMarkdownRemark___rawMarkdownBody = 'icon___svg___childMarkdownRemark___rawMarkdownBody',
  icon___svg___childMarkdownRemark___html = 'icon___svg___childMarkdownRemark___html',
  icon___svg___childMarkdownRemark___htmlAst = 'icon___svg___childMarkdownRemark___htmlAst',
  icon___svg___childMarkdownRemark___excerptAst = 'icon___svg___childMarkdownRemark___excerptAst',
  icon___svg___childMarkdownRemark___headings = 'icon___svg___childMarkdownRemark___headings',
  icon___svg___childMarkdownRemark___timeToRead = 'icon___svg___childMarkdownRemark___timeToRead',
  icon___svg___childMarkdownRemark___tableOfContents = 'icon___svg___childMarkdownRemark___tableOfContents',
  icon___svg___childMarkdownRemark___children = 'icon___svg___childMarkdownRemark___children',
  icon___spaceId = 'icon___spaceId',
  icon___createdAt = 'icon___createdAt',
  icon___updatedAt = 'icon___updatedAt',
  icon___sys___type = 'icon___sys___type',
  icon___sys___revision = 'icon___sys___revision',
  icon___history = 'icon___history',
  icon___history___contentful_id = 'icon___history___contentful_id',
  icon___history___id = 'icon___history___id',
  icon___history___node_locale = 'icon___history___node_locale',
  icon___history___name = 'icon___history___name',
  icon___history___date = 'icon___history___date',
  icon___history___subName = 'icon___history___subName',
  icon___history___icon___contentful_id = 'icon___history___icon___contentful_id',
  icon___history___icon___id = 'icon___history___icon___id',
  icon___history___icon___node_locale = 'icon___history___icon___node_locale',
  icon___history___icon___name = 'icon___history___icon___name',
  icon___history___icon___what_i_can_do = 'icon___history___icon___what_i_can_do',
  icon___history___icon___project = 'icon___history___icon___project',
  icon___history___icon___oss = 'icon___history___icon___oss',
  icon___history___icon___spaceId = 'icon___history___icon___spaceId',
  icon___history___icon___createdAt = 'icon___history___icon___createdAt',
  icon___history___icon___updatedAt = 'icon___history___icon___updatedAt',
  icon___history___icon___history = 'icon___history___icon___history',
  icon___history___icon___contact = 'icon___history___icon___contact',
  icon___history___icon___childrenContentfulIconSvgTextNode = 'icon___history___icon___childrenContentfulIconSvgTextNode',
  icon___history___icon___children = 'icon___history___icon___children',
  icon___history___spaceId = 'icon___history___spaceId',
  icon___history___createdAt = 'icon___history___createdAt',
  icon___history___updatedAt = 'icon___history___updatedAt',
  icon___history___sys___type = 'icon___history___sys___type',
  icon___history___sys___revision = 'icon___history___sys___revision',
  icon___history___parent___id = 'icon___history___parent___id',
  icon___history___parent___children = 'icon___history___parent___children',
  icon___history___children = 'icon___history___children',
  icon___history___children___id = 'icon___history___children___id',
  icon___history___children___children = 'icon___history___children___children',
  icon___history___internal___content = 'icon___history___internal___content',
  icon___history___internal___contentDigest = 'icon___history___internal___contentDigest',
  icon___history___internal___description = 'icon___history___internal___description',
  icon___history___internal___fieldOwners = 'icon___history___internal___fieldOwners',
  icon___history___internal___ignoreType = 'icon___history___internal___ignoreType',
  icon___history___internal___mediaType = 'icon___history___internal___mediaType',
  icon___history___internal___owner = 'icon___history___internal___owner',
  icon___history___internal___type = 'icon___history___internal___type',
  icon___contact = 'icon___contact',
  icon___contact___contentful_id = 'icon___contact___contentful_id',
  icon___contact___id = 'icon___contact___id',
  icon___contact___node_locale = 'icon___contact___node_locale',
  icon___contact___sortKey = 'icon___contact___sortKey',
  icon___contact___name = 'icon___contact___name',
  icon___contact___subName = 'icon___contact___subName',
  icon___contact___href = 'icon___contact___href',
  icon___contact___icon___contentful_id = 'icon___contact___icon___contentful_id',
  icon___contact___icon___id = 'icon___contact___icon___id',
  icon___contact___icon___node_locale = 'icon___contact___icon___node_locale',
  icon___contact___icon___name = 'icon___contact___icon___name',
  icon___contact___icon___what_i_can_do = 'icon___contact___icon___what_i_can_do',
  icon___contact___icon___project = 'icon___contact___icon___project',
  icon___contact___icon___oss = 'icon___contact___icon___oss',
  icon___contact___icon___spaceId = 'icon___contact___icon___spaceId',
  icon___contact___icon___createdAt = 'icon___contact___icon___createdAt',
  icon___contact___icon___updatedAt = 'icon___contact___icon___updatedAt',
  icon___contact___icon___history = 'icon___contact___icon___history',
  icon___contact___icon___contact = 'icon___contact___icon___contact',
  icon___contact___icon___childrenContentfulIconSvgTextNode = 'icon___contact___icon___childrenContentfulIconSvgTextNode',
  icon___contact___icon___children = 'icon___contact___icon___children',
  icon___contact___spaceId = 'icon___contact___spaceId',
  icon___contact___createdAt = 'icon___contact___createdAt',
  icon___contact___updatedAt = 'icon___contact___updatedAt',
  icon___contact___sys___type = 'icon___contact___sys___type',
  icon___contact___sys___revision = 'icon___contact___sys___revision',
  icon___contact___parent___id = 'icon___contact___parent___id',
  icon___contact___parent___children = 'icon___contact___parent___children',
  icon___contact___children = 'icon___contact___children',
  icon___contact___children___id = 'icon___contact___children___id',
  icon___contact___children___children = 'icon___contact___children___children',
  icon___contact___internal___content = 'icon___contact___internal___content',
  icon___contact___internal___contentDigest = 'icon___contact___internal___contentDigest',
  icon___contact___internal___description = 'icon___contact___internal___description',
  icon___contact___internal___fieldOwners = 'icon___contact___internal___fieldOwners',
  icon___contact___internal___ignoreType = 'icon___contact___internal___ignoreType',
  icon___contact___internal___mediaType = 'icon___contact___internal___mediaType',
  icon___contact___internal___owner = 'icon___contact___internal___owner',
  icon___contact___internal___type = 'icon___contact___internal___type',
  icon___childrenContentfulIconSvgTextNode = 'icon___childrenContentfulIconSvgTextNode',
  icon___childrenContentfulIconSvgTextNode___id = 'icon___childrenContentfulIconSvgTextNode___id',
  icon___childrenContentfulIconSvgTextNode___parent___id = 'icon___childrenContentfulIconSvgTextNode___parent___id',
  icon___childrenContentfulIconSvgTextNode___parent___children = 'icon___childrenContentfulIconSvgTextNode___parent___children',
  icon___childrenContentfulIconSvgTextNode___children = 'icon___childrenContentfulIconSvgTextNode___children',
  icon___childrenContentfulIconSvgTextNode___children___id = 'icon___childrenContentfulIconSvgTextNode___children___id',
  icon___childrenContentfulIconSvgTextNode___children___children = 'icon___childrenContentfulIconSvgTextNode___children___children',
  icon___childrenContentfulIconSvgTextNode___internal___content = 'icon___childrenContentfulIconSvgTextNode___internal___content',
  icon___childrenContentfulIconSvgTextNode___internal___contentDigest = 'icon___childrenContentfulIconSvgTextNode___internal___contentDigest',
  icon___childrenContentfulIconSvgTextNode___internal___description = 'icon___childrenContentfulIconSvgTextNode___internal___description',
  icon___childrenContentfulIconSvgTextNode___internal___fieldOwners = 'icon___childrenContentfulIconSvgTextNode___internal___fieldOwners',
  icon___childrenContentfulIconSvgTextNode___internal___ignoreType = 'icon___childrenContentfulIconSvgTextNode___internal___ignoreType',
  icon___childrenContentfulIconSvgTextNode___internal___mediaType = 'icon___childrenContentfulIconSvgTextNode___internal___mediaType',
  icon___childrenContentfulIconSvgTextNode___internal___owner = 'icon___childrenContentfulIconSvgTextNode___internal___owner',
  icon___childrenContentfulIconSvgTextNode___internal___type = 'icon___childrenContentfulIconSvgTextNode___internal___type',
  icon___childrenContentfulIconSvgTextNode___svg = 'icon___childrenContentfulIconSvgTextNode___svg',
  icon___childrenContentfulIconSvgTextNode___sys___type = 'icon___childrenContentfulIconSvgTextNode___sys___type',
  icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark = 'icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark',
  icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___id = 'icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___id',
  icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___excerpt = 'icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___excerpt',
  icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___rawMarkdownBody = 'icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___rawMarkdownBody',
  icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___html = 'icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___html',
  icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___htmlAst = 'icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___htmlAst',
  icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___excerptAst = 'icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___excerptAst',
  icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___headings = 'icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___headings',
  icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___timeToRead = 'icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___timeToRead',
  icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___tableOfContents = 'icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___tableOfContents',
  icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___children = 'icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___children',
  icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___id = 'icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___id',
  icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___excerpt = 'icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___excerpt',
  icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___rawMarkdownBody = 'icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___rawMarkdownBody',
  icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___html = 'icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___html',
  icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___htmlAst = 'icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___htmlAst',
  icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___excerptAst = 'icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___excerptAst',
  icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___headings = 'icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___headings',
  icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___timeToRead = 'icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___timeToRead',
  icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___tableOfContents = 'icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___tableOfContents',
  icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___children = 'icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___children',
  icon___childContentfulIconSvgTextNode___id = 'icon___childContentfulIconSvgTextNode___id',
  icon___childContentfulIconSvgTextNode___parent___id = 'icon___childContentfulIconSvgTextNode___parent___id',
  icon___childContentfulIconSvgTextNode___parent___children = 'icon___childContentfulIconSvgTextNode___parent___children',
  icon___childContentfulIconSvgTextNode___children = 'icon___childContentfulIconSvgTextNode___children',
  icon___childContentfulIconSvgTextNode___children___id = 'icon___childContentfulIconSvgTextNode___children___id',
  icon___childContentfulIconSvgTextNode___children___children = 'icon___childContentfulIconSvgTextNode___children___children',
  icon___childContentfulIconSvgTextNode___internal___content = 'icon___childContentfulIconSvgTextNode___internal___content',
  icon___childContentfulIconSvgTextNode___internal___contentDigest = 'icon___childContentfulIconSvgTextNode___internal___contentDigest',
  icon___childContentfulIconSvgTextNode___internal___description = 'icon___childContentfulIconSvgTextNode___internal___description',
  icon___childContentfulIconSvgTextNode___internal___fieldOwners = 'icon___childContentfulIconSvgTextNode___internal___fieldOwners',
  icon___childContentfulIconSvgTextNode___internal___ignoreType = 'icon___childContentfulIconSvgTextNode___internal___ignoreType',
  icon___childContentfulIconSvgTextNode___internal___mediaType = 'icon___childContentfulIconSvgTextNode___internal___mediaType',
  icon___childContentfulIconSvgTextNode___internal___owner = 'icon___childContentfulIconSvgTextNode___internal___owner',
  icon___childContentfulIconSvgTextNode___internal___type = 'icon___childContentfulIconSvgTextNode___internal___type',
  icon___childContentfulIconSvgTextNode___svg = 'icon___childContentfulIconSvgTextNode___svg',
  icon___childContentfulIconSvgTextNode___sys___type = 'icon___childContentfulIconSvgTextNode___sys___type',
  icon___childContentfulIconSvgTextNode___childrenMarkdownRemark = 'icon___childContentfulIconSvgTextNode___childrenMarkdownRemark',
  icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___id = 'icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___id',
  icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___excerpt = 'icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___excerpt',
  icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___rawMarkdownBody = 'icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___rawMarkdownBody',
  icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___html = 'icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___html',
  icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___htmlAst = 'icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___htmlAst',
  icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___excerptAst = 'icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___excerptAst',
  icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___headings = 'icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___headings',
  icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___timeToRead = 'icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___timeToRead',
  icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___tableOfContents = 'icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___tableOfContents',
  icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___children = 'icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___children',
  icon___childContentfulIconSvgTextNode___childMarkdownRemark___id = 'icon___childContentfulIconSvgTextNode___childMarkdownRemark___id',
  icon___childContentfulIconSvgTextNode___childMarkdownRemark___excerpt = 'icon___childContentfulIconSvgTextNode___childMarkdownRemark___excerpt',
  icon___childContentfulIconSvgTextNode___childMarkdownRemark___rawMarkdownBody = 'icon___childContentfulIconSvgTextNode___childMarkdownRemark___rawMarkdownBody',
  icon___childContentfulIconSvgTextNode___childMarkdownRemark___html = 'icon___childContentfulIconSvgTextNode___childMarkdownRemark___html',
  icon___childContentfulIconSvgTextNode___childMarkdownRemark___htmlAst = 'icon___childContentfulIconSvgTextNode___childMarkdownRemark___htmlAst',
  icon___childContentfulIconSvgTextNode___childMarkdownRemark___excerptAst = 'icon___childContentfulIconSvgTextNode___childMarkdownRemark___excerptAst',
  icon___childContentfulIconSvgTextNode___childMarkdownRemark___headings = 'icon___childContentfulIconSvgTextNode___childMarkdownRemark___headings',
  icon___childContentfulIconSvgTextNode___childMarkdownRemark___timeToRead = 'icon___childContentfulIconSvgTextNode___childMarkdownRemark___timeToRead',
  icon___childContentfulIconSvgTextNode___childMarkdownRemark___tableOfContents = 'icon___childContentfulIconSvgTextNode___childMarkdownRemark___tableOfContents',
  icon___childContentfulIconSvgTextNode___childMarkdownRemark___children = 'icon___childContentfulIconSvgTextNode___childMarkdownRemark___children',
  icon___parent___id = 'icon___parent___id',
  icon___parent___parent___id = 'icon___parent___parent___id',
  icon___parent___parent___children = 'icon___parent___parent___children',
  icon___parent___children = 'icon___parent___children',
  icon___parent___children___id = 'icon___parent___children___id',
  icon___parent___children___children = 'icon___parent___children___children',
  icon___parent___internal___content = 'icon___parent___internal___content',
  icon___parent___internal___contentDigest = 'icon___parent___internal___contentDigest',
  icon___parent___internal___description = 'icon___parent___internal___description',
  icon___parent___internal___fieldOwners = 'icon___parent___internal___fieldOwners',
  icon___parent___internal___ignoreType = 'icon___parent___internal___ignoreType',
  icon___parent___internal___mediaType = 'icon___parent___internal___mediaType',
  icon___parent___internal___owner = 'icon___parent___internal___owner',
  icon___parent___internal___type = 'icon___parent___internal___type',
  icon___children = 'icon___children',
  icon___children___id = 'icon___children___id',
  icon___children___parent___id = 'icon___children___parent___id',
  icon___children___parent___children = 'icon___children___parent___children',
  icon___children___children = 'icon___children___children',
  icon___children___children___id = 'icon___children___children___id',
  icon___children___children___children = 'icon___children___children___children',
  icon___children___internal___content = 'icon___children___internal___content',
  icon___children___internal___contentDigest = 'icon___children___internal___contentDigest',
  icon___children___internal___description = 'icon___children___internal___description',
  icon___children___internal___fieldOwners = 'icon___children___internal___fieldOwners',
  icon___children___internal___ignoreType = 'icon___children___internal___ignoreType',
  icon___children___internal___mediaType = 'icon___children___internal___mediaType',
  icon___children___internal___owner = 'icon___children___internal___owner',
  icon___children___internal___type = 'icon___children___internal___type',
  icon___internal___content = 'icon___internal___content',
  icon___internal___contentDigest = 'icon___internal___contentDigest',
  icon___internal___description = 'icon___internal___description',
  icon___internal___fieldOwners = 'icon___internal___fieldOwners',
  icon___internal___ignoreType = 'icon___internal___ignoreType',
  icon___internal___mediaType = 'icon___internal___mediaType',
  icon___internal___owner = 'icon___internal___owner',
  icon___internal___type = 'icon___internal___type',
  image___contentful_id = 'image___contentful_id',
  image___id = 'image___id',
  image___spaceId = 'image___spaceId',
  image___createdAt = 'image___createdAt',
  image___updatedAt = 'image___updatedAt',
  image___file___url = 'image___file___url',
  image___file___details___size = 'image___file___details___size',
  image___file___fileName = 'image___file___fileName',
  image___file___contentType = 'image___file___contentType',
  image___title = 'image___title',
  image___description = 'image___description',
  image___node_locale = 'image___node_locale',
  image___sys___type = 'image___sys___type',
  image___sys___revision = 'image___sys___revision',
  image___localFile___sourceInstanceName = 'image___localFile___sourceInstanceName',
  image___localFile___absolutePath = 'image___localFile___absolutePath',
  image___localFile___relativePath = 'image___localFile___relativePath',
  image___localFile___extension = 'image___localFile___extension',
  image___localFile___size = 'image___localFile___size',
  image___localFile___prettySize = 'image___localFile___prettySize',
  image___localFile___modifiedTime = 'image___localFile___modifiedTime',
  image___localFile___accessTime = 'image___localFile___accessTime',
  image___localFile___changeTime = 'image___localFile___changeTime',
  image___localFile___birthTime = 'image___localFile___birthTime',
  image___localFile___root = 'image___localFile___root',
  image___localFile___dir = 'image___localFile___dir',
  image___localFile___base = 'image___localFile___base',
  image___localFile___ext = 'image___localFile___ext',
  image___localFile___name = 'image___localFile___name',
  image___localFile___relativeDirectory = 'image___localFile___relativeDirectory',
  image___localFile___dev = 'image___localFile___dev',
  image___localFile___mode = 'image___localFile___mode',
  image___localFile___nlink = 'image___localFile___nlink',
  image___localFile___uid = 'image___localFile___uid',
  image___localFile___gid = 'image___localFile___gid',
  image___localFile___rdev = 'image___localFile___rdev',
  image___localFile___ino = 'image___localFile___ino',
  image___localFile___atimeMs = 'image___localFile___atimeMs',
  image___localFile___mtimeMs = 'image___localFile___mtimeMs',
  image___localFile___ctimeMs = 'image___localFile___ctimeMs',
  image___localFile___atime = 'image___localFile___atime',
  image___localFile___mtime = 'image___localFile___mtime',
  image___localFile___ctime = 'image___localFile___ctime',
  image___localFile___birthtime = 'image___localFile___birthtime',
  image___localFile___birthtimeMs = 'image___localFile___birthtimeMs',
  image___localFile___blksize = 'image___localFile___blksize',
  image___localFile___blocks = 'image___localFile___blocks',
  image___localFile___url = 'image___localFile___url',
  image___localFile___publicURL = 'image___localFile___publicURL',
  image___localFile___childrenImageSharp = 'image___localFile___childrenImageSharp',
  image___localFile___childrenImageSharp___gatsbyImageData = 'image___localFile___childrenImageSharp___gatsbyImageData',
  image___localFile___childrenImageSharp___id = 'image___localFile___childrenImageSharp___id',
  image___localFile___childrenImageSharp___children = 'image___localFile___childrenImageSharp___children',
  image___localFile___childImageSharp___gatsbyImageData = 'image___localFile___childImageSharp___gatsbyImageData',
  image___localFile___childImageSharp___id = 'image___localFile___childImageSharp___id',
  image___localFile___childImageSharp___children = 'image___localFile___childImageSharp___children',
  image___localFile___childrenLocale = 'image___localFile___childrenLocale',
  image___localFile___childrenLocale___id = 'image___localFile___childrenLocale___id',
  image___localFile___childrenLocale___children = 'image___localFile___childrenLocale___children',
  image___localFile___childrenLocale___language = 'image___localFile___childrenLocale___language',
  image___localFile___childrenLocale___ns = 'image___localFile___childrenLocale___ns',
  image___localFile___childrenLocale___data = 'image___localFile___childrenLocale___data',
  image___localFile___childrenLocale___fileAbsolutePath = 'image___localFile___childrenLocale___fileAbsolutePath',
  image___localFile___childLocale___id = 'image___localFile___childLocale___id',
  image___localFile___childLocale___children = 'image___localFile___childLocale___children',
  image___localFile___childLocale___language = 'image___localFile___childLocale___language',
  image___localFile___childLocale___ns = 'image___localFile___childLocale___ns',
  image___localFile___childLocale___data = 'image___localFile___childLocale___data',
  image___localFile___childLocale___fileAbsolutePath = 'image___localFile___childLocale___fileAbsolutePath',
  image___localFile___id = 'image___localFile___id',
  image___localFile___parent___id = 'image___localFile___parent___id',
  image___localFile___parent___children = 'image___localFile___parent___children',
  image___localFile___children = 'image___localFile___children',
  image___localFile___children___id = 'image___localFile___children___id',
  image___localFile___children___children = 'image___localFile___children___children',
  image___localFile___internal___content = 'image___localFile___internal___content',
  image___localFile___internal___contentDigest = 'image___localFile___internal___contentDigest',
  image___localFile___internal___description = 'image___localFile___internal___description',
  image___localFile___internal___fieldOwners = 'image___localFile___internal___fieldOwners',
  image___localFile___internal___ignoreType = 'image___localFile___internal___ignoreType',
  image___localFile___internal___mediaType = 'image___localFile___internal___mediaType',
  image___localFile___internal___owner = 'image___localFile___internal___owner',
  image___localFile___internal___type = 'image___localFile___internal___type',
  image___fixed___base64 = 'image___fixed___base64',
  image___fixed___tracedSVG = 'image___fixed___tracedSVG',
  image___fixed___aspectRatio = 'image___fixed___aspectRatio',
  image___fixed___width = 'image___fixed___width',
  image___fixed___height = 'image___fixed___height',
  image___fixed___src = 'image___fixed___src',
  image___fixed___srcSet = 'image___fixed___srcSet',
  image___fixed___srcWebp = 'image___fixed___srcWebp',
  image___fixed___srcSetWebp = 'image___fixed___srcSetWebp',
  image___fluid___base64 = 'image___fluid___base64',
  image___fluid___tracedSVG = 'image___fluid___tracedSVG',
  image___fluid___aspectRatio = 'image___fluid___aspectRatio',
  image___fluid___src = 'image___fluid___src',
  image___fluid___srcSet = 'image___fluid___srcSet',
  image___fluid___srcWebp = 'image___fluid___srcWebp',
  image___fluid___srcSetWebp = 'image___fluid___srcSetWebp',
  image___fluid___sizes = 'image___fluid___sizes',
  image___gatsbyImageData = 'image___gatsbyImageData',
  image___resize___base64 = 'image___resize___base64',
  image___resize___tracedSVG = 'image___resize___tracedSVG',
  image___resize___src = 'image___resize___src',
  image___resize___width = 'image___resize___width',
  image___resize___height = 'image___resize___height',
  image___resize___aspectRatio = 'image___resize___aspectRatio',
  image___parent___id = 'image___parent___id',
  image___parent___parent___id = 'image___parent___parent___id',
  image___parent___parent___children = 'image___parent___parent___children',
  image___parent___children = 'image___parent___children',
  image___parent___children___id = 'image___parent___children___id',
  image___parent___children___children = 'image___parent___children___children',
  image___parent___internal___content = 'image___parent___internal___content',
  image___parent___internal___contentDigest = 'image___parent___internal___contentDigest',
  image___parent___internal___description = 'image___parent___internal___description',
  image___parent___internal___fieldOwners = 'image___parent___internal___fieldOwners',
  image___parent___internal___ignoreType = 'image___parent___internal___ignoreType',
  image___parent___internal___mediaType = 'image___parent___internal___mediaType',
  image___parent___internal___owner = 'image___parent___internal___owner',
  image___parent___internal___type = 'image___parent___internal___type',
  image___children = 'image___children',
  image___children___id = 'image___children___id',
  image___children___parent___id = 'image___children___parent___id',
  image___children___parent___children = 'image___children___parent___children',
  image___children___children = 'image___children___children',
  image___children___children___id = 'image___children___children___id',
  image___children___children___children = 'image___children___children___children',
  image___children___internal___content = 'image___children___internal___content',
  image___children___internal___contentDigest = 'image___children___internal___contentDigest',
  image___children___internal___description = 'image___children___internal___description',
  image___children___internal___fieldOwners = 'image___children___internal___fieldOwners',
  image___children___internal___ignoreType = 'image___children___internal___ignoreType',
  image___children___internal___mediaType = 'image___children___internal___mediaType',
  image___children___internal___owner = 'image___children___internal___owner',
  image___children___internal___type = 'image___children___internal___type',
  image___internal___content = 'image___internal___content',
  image___internal___contentDigest = 'image___internal___contentDigest',
  image___internal___description = 'image___internal___description',
  image___internal___fieldOwners = 'image___internal___fieldOwners',
  image___internal___ignoreType = 'image___internal___ignoreType',
  image___internal___mediaType = 'image___internal___mediaType',
  image___internal___owner = 'image___internal___owner',
  image___internal___type = 'image___internal___type',
  detail___id = 'detail___id',
  detail___parent___id = 'detail___parent___id',
  detail___parent___parent___id = 'detail___parent___parent___id',
  detail___parent___parent___children = 'detail___parent___parent___children',
  detail___parent___children = 'detail___parent___children',
  detail___parent___children___id = 'detail___parent___children___id',
  detail___parent___children___children = 'detail___parent___children___children',
  detail___parent___internal___content = 'detail___parent___internal___content',
  detail___parent___internal___contentDigest = 'detail___parent___internal___contentDigest',
  detail___parent___internal___description = 'detail___parent___internal___description',
  detail___parent___internal___fieldOwners = 'detail___parent___internal___fieldOwners',
  detail___parent___internal___ignoreType = 'detail___parent___internal___ignoreType',
  detail___parent___internal___mediaType = 'detail___parent___internal___mediaType',
  detail___parent___internal___owner = 'detail___parent___internal___owner',
  detail___parent___internal___type = 'detail___parent___internal___type',
  detail___children = 'detail___children',
  detail___children___id = 'detail___children___id',
  detail___children___parent___id = 'detail___children___parent___id',
  detail___children___parent___children = 'detail___children___parent___children',
  detail___children___children = 'detail___children___children',
  detail___children___children___id = 'detail___children___children___id',
  detail___children___children___children = 'detail___children___children___children',
  detail___children___internal___content = 'detail___children___internal___content',
  detail___children___internal___contentDigest = 'detail___children___internal___contentDigest',
  detail___children___internal___description = 'detail___children___internal___description',
  detail___children___internal___fieldOwners = 'detail___children___internal___fieldOwners',
  detail___children___internal___ignoreType = 'detail___children___internal___ignoreType',
  detail___children___internal___mediaType = 'detail___children___internal___mediaType',
  detail___children___internal___owner = 'detail___children___internal___owner',
  detail___children___internal___type = 'detail___children___internal___type',
  detail___internal___content = 'detail___internal___content',
  detail___internal___contentDigest = 'detail___internal___contentDigest',
  detail___internal___description = 'detail___internal___description',
  detail___internal___fieldOwners = 'detail___internal___fieldOwners',
  detail___internal___ignoreType = 'detail___internal___ignoreType',
  detail___internal___mediaType = 'detail___internal___mediaType',
  detail___internal___owner = 'detail___internal___owner',
  detail___internal___type = 'detail___internal___type',
  detail___detail = 'detail___detail',
  detail___sys___type = 'detail___sys___type',
  detail___childrenMarkdownRemark = 'detail___childrenMarkdownRemark',
  detail___childrenMarkdownRemark___id = 'detail___childrenMarkdownRemark___id',
  detail___childrenMarkdownRemark___frontmatter___title = 'detail___childrenMarkdownRemark___frontmatter___title',
  detail___childrenMarkdownRemark___excerpt = 'detail___childrenMarkdownRemark___excerpt',
  detail___childrenMarkdownRemark___rawMarkdownBody = 'detail___childrenMarkdownRemark___rawMarkdownBody',
  detail___childrenMarkdownRemark___html = 'detail___childrenMarkdownRemark___html',
  detail___childrenMarkdownRemark___htmlAst = 'detail___childrenMarkdownRemark___htmlAst',
  detail___childrenMarkdownRemark___excerptAst = 'detail___childrenMarkdownRemark___excerptAst',
  detail___childrenMarkdownRemark___headings = 'detail___childrenMarkdownRemark___headings',
  detail___childrenMarkdownRemark___headings___id = 'detail___childrenMarkdownRemark___headings___id',
  detail___childrenMarkdownRemark___headings___value = 'detail___childrenMarkdownRemark___headings___value',
  detail___childrenMarkdownRemark___headings___depth = 'detail___childrenMarkdownRemark___headings___depth',
  detail___childrenMarkdownRemark___timeToRead = 'detail___childrenMarkdownRemark___timeToRead',
  detail___childrenMarkdownRemark___tableOfContents = 'detail___childrenMarkdownRemark___tableOfContents',
  detail___childrenMarkdownRemark___wordCount___paragraphs = 'detail___childrenMarkdownRemark___wordCount___paragraphs',
  detail___childrenMarkdownRemark___wordCount___sentences = 'detail___childrenMarkdownRemark___wordCount___sentences',
  detail___childrenMarkdownRemark___wordCount___words = 'detail___childrenMarkdownRemark___wordCount___words',
  detail___childrenMarkdownRemark___parent___id = 'detail___childrenMarkdownRemark___parent___id',
  detail___childrenMarkdownRemark___parent___children = 'detail___childrenMarkdownRemark___parent___children',
  detail___childrenMarkdownRemark___children = 'detail___childrenMarkdownRemark___children',
  detail___childrenMarkdownRemark___children___id = 'detail___childrenMarkdownRemark___children___id',
  detail___childrenMarkdownRemark___children___children = 'detail___childrenMarkdownRemark___children___children',
  detail___childrenMarkdownRemark___internal___content = 'detail___childrenMarkdownRemark___internal___content',
  detail___childrenMarkdownRemark___internal___contentDigest = 'detail___childrenMarkdownRemark___internal___contentDigest',
  detail___childrenMarkdownRemark___internal___description = 'detail___childrenMarkdownRemark___internal___description',
  detail___childrenMarkdownRemark___internal___fieldOwners = 'detail___childrenMarkdownRemark___internal___fieldOwners',
  detail___childrenMarkdownRemark___internal___ignoreType = 'detail___childrenMarkdownRemark___internal___ignoreType',
  detail___childrenMarkdownRemark___internal___mediaType = 'detail___childrenMarkdownRemark___internal___mediaType',
  detail___childrenMarkdownRemark___internal___owner = 'detail___childrenMarkdownRemark___internal___owner',
  detail___childrenMarkdownRemark___internal___type = 'detail___childrenMarkdownRemark___internal___type',
  detail___childMarkdownRemark___id = 'detail___childMarkdownRemark___id',
  detail___childMarkdownRemark___frontmatter___title = 'detail___childMarkdownRemark___frontmatter___title',
  detail___childMarkdownRemark___excerpt = 'detail___childMarkdownRemark___excerpt',
  detail___childMarkdownRemark___rawMarkdownBody = 'detail___childMarkdownRemark___rawMarkdownBody',
  detail___childMarkdownRemark___html = 'detail___childMarkdownRemark___html',
  detail___childMarkdownRemark___htmlAst = 'detail___childMarkdownRemark___htmlAst',
  detail___childMarkdownRemark___excerptAst = 'detail___childMarkdownRemark___excerptAst',
  detail___childMarkdownRemark___headings = 'detail___childMarkdownRemark___headings',
  detail___childMarkdownRemark___headings___id = 'detail___childMarkdownRemark___headings___id',
  detail___childMarkdownRemark___headings___value = 'detail___childMarkdownRemark___headings___value',
  detail___childMarkdownRemark___headings___depth = 'detail___childMarkdownRemark___headings___depth',
  detail___childMarkdownRemark___timeToRead = 'detail___childMarkdownRemark___timeToRead',
  detail___childMarkdownRemark___tableOfContents = 'detail___childMarkdownRemark___tableOfContents',
  detail___childMarkdownRemark___wordCount___paragraphs = 'detail___childMarkdownRemark___wordCount___paragraphs',
  detail___childMarkdownRemark___wordCount___sentences = 'detail___childMarkdownRemark___wordCount___sentences',
  detail___childMarkdownRemark___wordCount___words = 'detail___childMarkdownRemark___wordCount___words',
  detail___childMarkdownRemark___parent___id = 'detail___childMarkdownRemark___parent___id',
  detail___childMarkdownRemark___parent___children = 'detail___childMarkdownRemark___parent___children',
  detail___childMarkdownRemark___children = 'detail___childMarkdownRemark___children',
  detail___childMarkdownRemark___children___id = 'detail___childMarkdownRemark___children___id',
  detail___childMarkdownRemark___children___children = 'detail___childMarkdownRemark___children___children',
  detail___childMarkdownRemark___internal___content = 'detail___childMarkdownRemark___internal___content',
  detail___childMarkdownRemark___internal___contentDigest = 'detail___childMarkdownRemark___internal___contentDigest',
  detail___childMarkdownRemark___internal___description = 'detail___childMarkdownRemark___internal___description',
  detail___childMarkdownRemark___internal___fieldOwners = 'detail___childMarkdownRemark___internal___fieldOwners',
  detail___childMarkdownRemark___internal___ignoreType = 'detail___childMarkdownRemark___internal___ignoreType',
  detail___childMarkdownRemark___internal___mediaType = 'detail___childMarkdownRemark___internal___mediaType',
  detail___childMarkdownRemark___internal___owner = 'detail___childMarkdownRemark___internal___owner',
  detail___childMarkdownRemark___internal___type = 'detail___childMarkdownRemark___internal___type',
  spaceId = 'spaceId',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  sys___type = 'sys___type',
  sys___revision = 'sys___revision',
  sys___contentType___sys___type = 'sys___contentType___sys___type',
  sys___contentType___sys___linkType = 'sys___contentType___sys___linkType',
  sys___contentType___sys___id = 'sys___contentType___sys___id',
  childrenContentfulOssDetailTextNode = 'childrenContentfulOssDetailTextNode',
  childrenContentfulOssDetailTextNode___id = 'childrenContentfulOssDetailTextNode___id',
  childrenContentfulOssDetailTextNode___parent___id = 'childrenContentfulOssDetailTextNode___parent___id',
  childrenContentfulOssDetailTextNode___parent___parent___id = 'childrenContentfulOssDetailTextNode___parent___parent___id',
  childrenContentfulOssDetailTextNode___parent___parent___children = 'childrenContentfulOssDetailTextNode___parent___parent___children',
  childrenContentfulOssDetailTextNode___parent___children = 'childrenContentfulOssDetailTextNode___parent___children',
  childrenContentfulOssDetailTextNode___parent___children___id = 'childrenContentfulOssDetailTextNode___parent___children___id',
  childrenContentfulOssDetailTextNode___parent___children___children = 'childrenContentfulOssDetailTextNode___parent___children___children',
  childrenContentfulOssDetailTextNode___parent___internal___content = 'childrenContentfulOssDetailTextNode___parent___internal___content',
  childrenContentfulOssDetailTextNode___parent___internal___contentDigest = 'childrenContentfulOssDetailTextNode___parent___internal___contentDigest',
  childrenContentfulOssDetailTextNode___parent___internal___description = 'childrenContentfulOssDetailTextNode___parent___internal___description',
  childrenContentfulOssDetailTextNode___parent___internal___fieldOwners = 'childrenContentfulOssDetailTextNode___parent___internal___fieldOwners',
  childrenContentfulOssDetailTextNode___parent___internal___ignoreType = 'childrenContentfulOssDetailTextNode___parent___internal___ignoreType',
  childrenContentfulOssDetailTextNode___parent___internal___mediaType = 'childrenContentfulOssDetailTextNode___parent___internal___mediaType',
  childrenContentfulOssDetailTextNode___parent___internal___owner = 'childrenContentfulOssDetailTextNode___parent___internal___owner',
  childrenContentfulOssDetailTextNode___parent___internal___type = 'childrenContentfulOssDetailTextNode___parent___internal___type',
  childrenContentfulOssDetailTextNode___children = 'childrenContentfulOssDetailTextNode___children',
  childrenContentfulOssDetailTextNode___children___id = 'childrenContentfulOssDetailTextNode___children___id',
  childrenContentfulOssDetailTextNode___children___parent___id = 'childrenContentfulOssDetailTextNode___children___parent___id',
  childrenContentfulOssDetailTextNode___children___parent___children = 'childrenContentfulOssDetailTextNode___children___parent___children',
  childrenContentfulOssDetailTextNode___children___children = 'childrenContentfulOssDetailTextNode___children___children',
  childrenContentfulOssDetailTextNode___children___children___id = 'childrenContentfulOssDetailTextNode___children___children___id',
  childrenContentfulOssDetailTextNode___children___children___children = 'childrenContentfulOssDetailTextNode___children___children___children',
  childrenContentfulOssDetailTextNode___children___internal___content = 'childrenContentfulOssDetailTextNode___children___internal___content',
  childrenContentfulOssDetailTextNode___children___internal___contentDigest = 'childrenContentfulOssDetailTextNode___children___internal___contentDigest',
  childrenContentfulOssDetailTextNode___children___internal___description = 'childrenContentfulOssDetailTextNode___children___internal___description',
  childrenContentfulOssDetailTextNode___children___internal___fieldOwners = 'childrenContentfulOssDetailTextNode___children___internal___fieldOwners',
  childrenContentfulOssDetailTextNode___children___internal___ignoreType = 'childrenContentfulOssDetailTextNode___children___internal___ignoreType',
  childrenContentfulOssDetailTextNode___children___internal___mediaType = 'childrenContentfulOssDetailTextNode___children___internal___mediaType',
  childrenContentfulOssDetailTextNode___children___internal___owner = 'childrenContentfulOssDetailTextNode___children___internal___owner',
  childrenContentfulOssDetailTextNode___children___internal___type = 'childrenContentfulOssDetailTextNode___children___internal___type',
  childrenContentfulOssDetailTextNode___internal___content = 'childrenContentfulOssDetailTextNode___internal___content',
  childrenContentfulOssDetailTextNode___internal___contentDigest = 'childrenContentfulOssDetailTextNode___internal___contentDigest',
  childrenContentfulOssDetailTextNode___internal___description = 'childrenContentfulOssDetailTextNode___internal___description',
  childrenContentfulOssDetailTextNode___internal___fieldOwners = 'childrenContentfulOssDetailTextNode___internal___fieldOwners',
  childrenContentfulOssDetailTextNode___internal___ignoreType = 'childrenContentfulOssDetailTextNode___internal___ignoreType',
  childrenContentfulOssDetailTextNode___internal___mediaType = 'childrenContentfulOssDetailTextNode___internal___mediaType',
  childrenContentfulOssDetailTextNode___internal___owner = 'childrenContentfulOssDetailTextNode___internal___owner',
  childrenContentfulOssDetailTextNode___internal___type = 'childrenContentfulOssDetailTextNode___internal___type',
  childrenContentfulOssDetailTextNode___detail = 'childrenContentfulOssDetailTextNode___detail',
  childrenContentfulOssDetailTextNode___sys___type = 'childrenContentfulOssDetailTextNode___sys___type',
  childrenContentfulOssDetailTextNode___childrenMarkdownRemark = 'childrenContentfulOssDetailTextNode___childrenMarkdownRemark',
  childrenContentfulOssDetailTextNode___childrenMarkdownRemark___id = 'childrenContentfulOssDetailTextNode___childrenMarkdownRemark___id',
  childrenContentfulOssDetailTextNode___childrenMarkdownRemark___frontmatter___title = 'childrenContentfulOssDetailTextNode___childrenMarkdownRemark___frontmatter___title',
  childrenContentfulOssDetailTextNode___childrenMarkdownRemark___excerpt = 'childrenContentfulOssDetailTextNode___childrenMarkdownRemark___excerpt',
  childrenContentfulOssDetailTextNode___childrenMarkdownRemark___rawMarkdownBody = 'childrenContentfulOssDetailTextNode___childrenMarkdownRemark___rawMarkdownBody',
  childrenContentfulOssDetailTextNode___childrenMarkdownRemark___html = 'childrenContentfulOssDetailTextNode___childrenMarkdownRemark___html',
  childrenContentfulOssDetailTextNode___childrenMarkdownRemark___htmlAst = 'childrenContentfulOssDetailTextNode___childrenMarkdownRemark___htmlAst',
  childrenContentfulOssDetailTextNode___childrenMarkdownRemark___excerptAst = 'childrenContentfulOssDetailTextNode___childrenMarkdownRemark___excerptAst',
  childrenContentfulOssDetailTextNode___childrenMarkdownRemark___headings = 'childrenContentfulOssDetailTextNode___childrenMarkdownRemark___headings',
  childrenContentfulOssDetailTextNode___childrenMarkdownRemark___headings___id = 'childrenContentfulOssDetailTextNode___childrenMarkdownRemark___headings___id',
  childrenContentfulOssDetailTextNode___childrenMarkdownRemark___headings___value = 'childrenContentfulOssDetailTextNode___childrenMarkdownRemark___headings___value',
  childrenContentfulOssDetailTextNode___childrenMarkdownRemark___headings___depth = 'childrenContentfulOssDetailTextNode___childrenMarkdownRemark___headings___depth',
  childrenContentfulOssDetailTextNode___childrenMarkdownRemark___timeToRead = 'childrenContentfulOssDetailTextNode___childrenMarkdownRemark___timeToRead',
  childrenContentfulOssDetailTextNode___childrenMarkdownRemark___tableOfContents = 'childrenContentfulOssDetailTextNode___childrenMarkdownRemark___tableOfContents',
  childrenContentfulOssDetailTextNode___childrenMarkdownRemark___wordCount___paragraphs = 'childrenContentfulOssDetailTextNode___childrenMarkdownRemark___wordCount___paragraphs',
  childrenContentfulOssDetailTextNode___childrenMarkdownRemark___wordCount___sentences = 'childrenContentfulOssDetailTextNode___childrenMarkdownRemark___wordCount___sentences',
  childrenContentfulOssDetailTextNode___childrenMarkdownRemark___wordCount___words = 'childrenContentfulOssDetailTextNode___childrenMarkdownRemark___wordCount___words',
  childrenContentfulOssDetailTextNode___childrenMarkdownRemark___parent___id = 'childrenContentfulOssDetailTextNode___childrenMarkdownRemark___parent___id',
  childrenContentfulOssDetailTextNode___childrenMarkdownRemark___parent___children = 'childrenContentfulOssDetailTextNode___childrenMarkdownRemark___parent___children',
  childrenContentfulOssDetailTextNode___childrenMarkdownRemark___children = 'childrenContentfulOssDetailTextNode___childrenMarkdownRemark___children',
  childrenContentfulOssDetailTextNode___childrenMarkdownRemark___children___id = 'childrenContentfulOssDetailTextNode___childrenMarkdownRemark___children___id',
  childrenContentfulOssDetailTextNode___childrenMarkdownRemark___children___children = 'childrenContentfulOssDetailTextNode___childrenMarkdownRemark___children___children',
  childrenContentfulOssDetailTextNode___childrenMarkdownRemark___internal___content = 'childrenContentfulOssDetailTextNode___childrenMarkdownRemark___internal___content',
  childrenContentfulOssDetailTextNode___childrenMarkdownRemark___internal___contentDigest = 'childrenContentfulOssDetailTextNode___childrenMarkdownRemark___internal___contentDigest',
  childrenContentfulOssDetailTextNode___childrenMarkdownRemark___internal___description = 'childrenContentfulOssDetailTextNode___childrenMarkdownRemark___internal___description',
  childrenContentfulOssDetailTextNode___childrenMarkdownRemark___internal___fieldOwners = 'childrenContentfulOssDetailTextNode___childrenMarkdownRemark___internal___fieldOwners',
  childrenContentfulOssDetailTextNode___childrenMarkdownRemark___internal___ignoreType = 'childrenContentfulOssDetailTextNode___childrenMarkdownRemark___internal___ignoreType',
  childrenContentfulOssDetailTextNode___childrenMarkdownRemark___internal___mediaType = 'childrenContentfulOssDetailTextNode___childrenMarkdownRemark___internal___mediaType',
  childrenContentfulOssDetailTextNode___childrenMarkdownRemark___internal___owner = 'childrenContentfulOssDetailTextNode___childrenMarkdownRemark___internal___owner',
  childrenContentfulOssDetailTextNode___childrenMarkdownRemark___internal___type = 'childrenContentfulOssDetailTextNode___childrenMarkdownRemark___internal___type',
  childrenContentfulOssDetailTextNode___childMarkdownRemark___id = 'childrenContentfulOssDetailTextNode___childMarkdownRemark___id',
  childrenContentfulOssDetailTextNode___childMarkdownRemark___frontmatter___title = 'childrenContentfulOssDetailTextNode___childMarkdownRemark___frontmatter___title',
  childrenContentfulOssDetailTextNode___childMarkdownRemark___excerpt = 'childrenContentfulOssDetailTextNode___childMarkdownRemark___excerpt',
  childrenContentfulOssDetailTextNode___childMarkdownRemark___rawMarkdownBody = 'childrenContentfulOssDetailTextNode___childMarkdownRemark___rawMarkdownBody',
  childrenContentfulOssDetailTextNode___childMarkdownRemark___html = 'childrenContentfulOssDetailTextNode___childMarkdownRemark___html',
  childrenContentfulOssDetailTextNode___childMarkdownRemark___htmlAst = 'childrenContentfulOssDetailTextNode___childMarkdownRemark___htmlAst',
  childrenContentfulOssDetailTextNode___childMarkdownRemark___excerptAst = 'childrenContentfulOssDetailTextNode___childMarkdownRemark___excerptAst',
  childrenContentfulOssDetailTextNode___childMarkdownRemark___headings = 'childrenContentfulOssDetailTextNode___childMarkdownRemark___headings',
  childrenContentfulOssDetailTextNode___childMarkdownRemark___headings___id = 'childrenContentfulOssDetailTextNode___childMarkdownRemark___headings___id',
  childrenContentfulOssDetailTextNode___childMarkdownRemark___headings___value = 'childrenContentfulOssDetailTextNode___childMarkdownRemark___headings___value',
  childrenContentfulOssDetailTextNode___childMarkdownRemark___headings___depth = 'childrenContentfulOssDetailTextNode___childMarkdownRemark___headings___depth',
  childrenContentfulOssDetailTextNode___childMarkdownRemark___timeToRead = 'childrenContentfulOssDetailTextNode___childMarkdownRemark___timeToRead',
  childrenContentfulOssDetailTextNode___childMarkdownRemark___tableOfContents = 'childrenContentfulOssDetailTextNode___childMarkdownRemark___tableOfContents',
  childrenContentfulOssDetailTextNode___childMarkdownRemark___wordCount___paragraphs = 'childrenContentfulOssDetailTextNode___childMarkdownRemark___wordCount___paragraphs',
  childrenContentfulOssDetailTextNode___childMarkdownRemark___wordCount___sentences = 'childrenContentfulOssDetailTextNode___childMarkdownRemark___wordCount___sentences',
  childrenContentfulOssDetailTextNode___childMarkdownRemark___wordCount___words = 'childrenContentfulOssDetailTextNode___childMarkdownRemark___wordCount___words',
  childrenContentfulOssDetailTextNode___childMarkdownRemark___parent___id = 'childrenContentfulOssDetailTextNode___childMarkdownRemark___parent___id',
  childrenContentfulOssDetailTextNode___childMarkdownRemark___parent___children = 'childrenContentfulOssDetailTextNode___childMarkdownRemark___parent___children',
  childrenContentfulOssDetailTextNode___childMarkdownRemark___children = 'childrenContentfulOssDetailTextNode___childMarkdownRemark___children',
  childrenContentfulOssDetailTextNode___childMarkdownRemark___children___id = 'childrenContentfulOssDetailTextNode___childMarkdownRemark___children___id',
  childrenContentfulOssDetailTextNode___childMarkdownRemark___children___children = 'childrenContentfulOssDetailTextNode___childMarkdownRemark___children___children',
  childrenContentfulOssDetailTextNode___childMarkdownRemark___internal___content = 'childrenContentfulOssDetailTextNode___childMarkdownRemark___internal___content',
  childrenContentfulOssDetailTextNode___childMarkdownRemark___internal___contentDigest = 'childrenContentfulOssDetailTextNode___childMarkdownRemark___internal___contentDigest',
  childrenContentfulOssDetailTextNode___childMarkdownRemark___internal___description = 'childrenContentfulOssDetailTextNode___childMarkdownRemark___internal___description',
  childrenContentfulOssDetailTextNode___childMarkdownRemark___internal___fieldOwners = 'childrenContentfulOssDetailTextNode___childMarkdownRemark___internal___fieldOwners',
  childrenContentfulOssDetailTextNode___childMarkdownRemark___internal___ignoreType = 'childrenContentfulOssDetailTextNode___childMarkdownRemark___internal___ignoreType',
  childrenContentfulOssDetailTextNode___childMarkdownRemark___internal___mediaType = 'childrenContentfulOssDetailTextNode___childMarkdownRemark___internal___mediaType',
  childrenContentfulOssDetailTextNode___childMarkdownRemark___internal___owner = 'childrenContentfulOssDetailTextNode___childMarkdownRemark___internal___owner',
  childrenContentfulOssDetailTextNode___childMarkdownRemark___internal___type = 'childrenContentfulOssDetailTextNode___childMarkdownRemark___internal___type',
  childContentfulOssDetailTextNode___id = 'childContentfulOssDetailTextNode___id',
  childContentfulOssDetailTextNode___parent___id = 'childContentfulOssDetailTextNode___parent___id',
  childContentfulOssDetailTextNode___parent___parent___id = 'childContentfulOssDetailTextNode___parent___parent___id',
  childContentfulOssDetailTextNode___parent___parent___children = 'childContentfulOssDetailTextNode___parent___parent___children',
  childContentfulOssDetailTextNode___parent___children = 'childContentfulOssDetailTextNode___parent___children',
  childContentfulOssDetailTextNode___parent___children___id = 'childContentfulOssDetailTextNode___parent___children___id',
  childContentfulOssDetailTextNode___parent___children___children = 'childContentfulOssDetailTextNode___parent___children___children',
  childContentfulOssDetailTextNode___parent___internal___content = 'childContentfulOssDetailTextNode___parent___internal___content',
  childContentfulOssDetailTextNode___parent___internal___contentDigest = 'childContentfulOssDetailTextNode___parent___internal___contentDigest',
  childContentfulOssDetailTextNode___parent___internal___description = 'childContentfulOssDetailTextNode___parent___internal___description',
  childContentfulOssDetailTextNode___parent___internal___fieldOwners = 'childContentfulOssDetailTextNode___parent___internal___fieldOwners',
  childContentfulOssDetailTextNode___parent___internal___ignoreType = 'childContentfulOssDetailTextNode___parent___internal___ignoreType',
  childContentfulOssDetailTextNode___parent___internal___mediaType = 'childContentfulOssDetailTextNode___parent___internal___mediaType',
  childContentfulOssDetailTextNode___parent___internal___owner = 'childContentfulOssDetailTextNode___parent___internal___owner',
  childContentfulOssDetailTextNode___parent___internal___type = 'childContentfulOssDetailTextNode___parent___internal___type',
  childContentfulOssDetailTextNode___children = 'childContentfulOssDetailTextNode___children',
  childContentfulOssDetailTextNode___children___id = 'childContentfulOssDetailTextNode___children___id',
  childContentfulOssDetailTextNode___children___parent___id = 'childContentfulOssDetailTextNode___children___parent___id',
  childContentfulOssDetailTextNode___children___parent___children = 'childContentfulOssDetailTextNode___children___parent___children',
  childContentfulOssDetailTextNode___children___children = 'childContentfulOssDetailTextNode___children___children',
  childContentfulOssDetailTextNode___children___children___id = 'childContentfulOssDetailTextNode___children___children___id',
  childContentfulOssDetailTextNode___children___children___children = 'childContentfulOssDetailTextNode___children___children___children',
  childContentfulOssDetailTextNode___children___internal___content = 'childContentfulOssDetailTextNode___children___internal___content',
  childContentfulOssDetailTextNode___children___internal___contentDigest = 'childContentfulOssDetailTextNode___children___internal___contentDigest',
  childContentfulOssDetailTextNode___children___internal___description = 'childContentfulOssDetailTextNode___children___internal___description',
  childContentfulOssDetailTextNode___children___internal___fieldOwners = 'childContentfulOssDetailTextNode___children___internal___fieldOwners',
  childContentfulOssDetailTextNode___children___internal___ignoreType = 'childContentfulOssDetailTextNode___children___internal___ignoreType',
  childContentfulOssDetailTextNode___children___internal___mediaType = 'childContentfulOssDetailTextNode___children___internal___mediaType',
  childContentfulOssDetailTextNode___children___internal___owner = 'childContentfulOssDetailTextNode___children___internal___owner',
  childContentfulOssDetailTextNode___children___internal___type = 'childContentfulOssDetailTextNode___children___internal___type',
  childContentfulOssDetailTextNode___internal___content = 'childContentfulOssDetailTextNode___internal___content',
  childContentfulOssDetailTextNode___internal___contentDigest = 'childContentfulOssDetailTextNode___internal___contentDigest',
  childContentfulOssDetailTextNode___internal___description = 'childContentfulOssDetailTextNode___internal___description',
  childContentfulOssDetailTextNode___internal___fieldOwners = 'childContentfulOssDetailTextNode___internal___fieldOwners',
  childContentfulOssDetailTextNode___internal___ignoreType = 'childContentfulOssDetailTextNode___internal___ignoreType',
  childContentfulOssDetailTextNode___internal___mediaType = 'childContentfulOssDetailTextNode___internal___mediaType',
  childContentfulOssDetailTextNode___internal___owner = 'childContentfulOssDetailTextNode___internal___owner',
  childContentfulOssDetailTextNode___internal___type = 'childContentfulOssDetailTextNode___internal___type',
  childContentfulOssDetailTextNode___detail = 'childContentfulOssDetailTextNode___detail',
  childContentfulOssDetailTextNode___sys___type = 'childContentfulOssDetailTextNode___sys___type',
  childContentfulOssDetailTextNode___childrenMarkdownRemark = 'childContentfulOssDetailTextNode___childrenMarkdownRemark',
  childContentfulOssDetailTextNode___childrenMarkdownRemark___id = 'childContentfulOssDetailTextNode___childrenMarkdownRemark___id',
  childContentfulOssDetailTextNode___childrenMarkdownRemark___frontmatter___title = 'childContentfulOssDetailTextNode___childrenMarkdownRemark___frontmatter___title',
  childContentfulOssDetailTextNode___childrenMarkdownRemark___excerpt = 'childContentfulOssDetailTextNode___childrenMarkdownRemark___excerpt',
  childContentfulOssDetailTextNode___childrenMarkdownRemark___rawMarkdownBody = 'childContentfulOssDetailTextNode___childrenMarkdownRemark___rawMarkdownBody',
  childContentfulOssDetailTextNode___childrenMarkdownRemark___html = 'childContentfulOssDetailTextNode___childrenMarkdownRemark___html',
  childContentfulOssDetailTextNode___childrenMarkdownRemark___htmlAst = 'childContentfulOssDetailTextNode___childrenMarkdownRemark___htmlAst',
  childContentfulOssDetailTextNode___childrenMarkdownRemark___excerptAst = 'childContentfulOssDetailTextNode___childrenMarkdownRemark___excerptAst',
  childContentfulOssDetailTextNode___childrenMarkdownRemark___headings = 'childContentfulOssDetailTextNode___childrenMarkdownRemark___headings',
  childContentfulOssDetailTextNode___childrenMarkdownRemark___headings___id = 'childContentfulOssDetailTextNode___childrenMarkdownRemark___headings___id',
  childContentfulOssDetailTextNode___childrenMarkdownRemark___headings___value = 'childContentfulOssDetailTextNode___childrenMarkdownRemark___headings___value',
  childContentfulOssDetailTextNode___childrenMarkdownRemark___headings___depth = 'childContentfulOssDetailTextNode___childrenMarkdownRemark___headings___depth',
  childContentfulOssDetailTextNode___childrenMarkdownRemark___timeToRead = 'childContentfulOssDetailTextNode___childrenMarkdownRemark___timeToRead',
  childContentfulOssDetailTextNode___childrenMarkdownRemark___tableOfContents = 'childContentfulOssDetailTextNode___childrenMarkdownRemark___tableOfContents',
  childContentfulOssDetailTextNode___childrenMarkdownRemark___wordCount___paragraphs = 'childContentfulOssDetailTextNode___childrenMarkdownRemark___wordCount___paragraphs',
  childContentfulOssDetailTextNode___childrenMarkdownRemark___wordCount___sentences = 'childContentfulOssDetailTextNode___childrenMarkdownRemark___wordCount___sentences',
  childContentfulOssDetailTextNode___childrenMarkdownRemark___wordCount___words = 'childContentfulOssDetailTextNode___childrenMarkdownRemark___wordCount___words',
  childContentfulOssDetailTextNode___childrenMarkdownRemark___parent___id = 'childContentfulOssDetailTextNode___childrenMarkdownRemark___parent___id',
  childContentfulOssDetailTextNode___childrenMarkdownRemark___parent___children = 'childContentfulOssDetailTextNode___childrenMarkdownRemark___parent___children',
  childContentfulOssDetailTextNode___childrenMarkdownRemark___children = 'childContentfulOssDetailTextNode___childrenMarkdownRemark___children',
  childContentfulOssDetailTextNode___childrenMarkdownRemark___children___id = 'childContentfulOssDetailTextNode___childrenMarkdownRemark___children___id',
  childContentfulOssDetailTextNode___childrenMarkdownRemark___children___children = 'childContentfulOssDetailTextNode___childrenMarkdownRemark___children___children',
  childContentfulOssDetailTextNode___childrenMarkdownRemark___internal___content = 'childContentfulOssDetailTextNode___childrenMarkdownRemark___internal___content',
  childContentfulOssDetailTextNode___childrenMarkdownRemark___internal___contentDigest = 'childContentfulOssDetailTextNode___childrenMarkdownRemark___internal___contentDigest',
  childContentfulOssDetailTextNode___childrenMarkdownRemark___internal___description = 'childContentfulOssDetailTextNode___childrenMarkdownRemark___internal___description',
  childContentfulOssDetailTextNode___childrenMarkdownRemark___internal___fieldOwners = 'childContentfulOssDetailTextNode___childrenMarkdownRemark___internal___fieldOwners',
  childContentfulOssDetailTextNode___childrenMarkdownRemark___internal___ignoreType = 'childContentfulOssDetailTextNode___childrenMarkdownRemark___internal___ignoreType',
  childContentfulOssDetailTextNode___childrenMarkdownRemark___internal___mediaType = 'childContentfulOssDetailTextNode___childrenMarkdownRemark___internal___mediaType',
  childContentfulOssDetailTextNode___childrenMarkdownRemark___internal___owner = 'childContentfulOssDetailTextNode___childrenMarkdownRemark___internal___owner',
  childContentfulOssDetailTextNode___childrenMarkdownRemark___internal___type = 'childContentfulOssDetailTextNode___childrenMarkdownRemark___internal___type',
  childContentfulOssDetailTextNode___childMarkdownRemark___id = 'childContentfulOssDetailTextNode___childMarkdownRemark___id',
  childContentfulOssDetailTextNode___childMarkdownRemark___frontmatter___title = 'childContentfulOssDetailTextNode___childMarkdownRemark___frontmatter___title',
  childContentfulOssDetailTextNode___childMarkdownRemark___excerpt = 'childContentfulOssDetailTextNode___childMarkdownRemark___excerpt',
  childContentfulOssDetailTextNode___childMarkdownRemark___rawMarkdownBody = 'childContentfulOssDetailTextNode___childMarkdownRemark___rawMarkdownBody',
  childContentfulOssDetailTextNode___childMarkdownRemark___html = 'childContentfulOssDetailTextNode___childMarkdownRemark___html',
  childContentfulOssDetailTextNode___childMarkdownRemark___htmlAst = 'childContentfulOssDetailTextNode___childMarkdownRemark___htmlAst',
  childContentfulOssDetailTextNode___childMarkdownRemark___excerptAst = 'childContentfulOssDetailTextNode___childMarkdownRemark___excerptAst',
  childContentfulOssDetailTextNode___childMarkdownRemark___headings = 'childContentfulOssDetailTextNode___childMarkdownRemark___headings',
  childContentfulOssDetailTextNode___childMarkdownRemark___headings___id = 'childContentfulOssDetailTextNode___childMarkdownRemark___headings___id',
  childContentfulOssDetailTextNode___childMarkdownRemark___headings___value = 'childContentfulOssDetailTextNode___childMarkdownRemark___headings___value',
  childContentfulOssDetailTextNode___childMarkdownRemark___headings___depth = 'childContentfulOssDetailTextNode___childMarkdownRemark___headings___depth',
  childContentfulOssDetailTextNode___childMarkdownRemark___timeToRead = 'childContentfulOssDetailTextNode___childMarkdownRemark___timeToRead',
  childContentfulOssDetailTextNode___childMarkdownRemark___tableOfContents = 'childContentfulOssDetailTextNode___childMarkdownRemark___tableOfContents',
  childContentfulOssDetailTextNode___childMarkdownRemark___wordCount___paragraphs = 'childContentfulOssDetailTextNode___childMarkdownRemark___wordCount___paragraphs',
  childContentfulOssDetailTextNode___childMarkdownRemark___wordCount___sentences = 'childContentfulOssDetailTextNode___childMarkdownRemark___wordCount___sentences',
  childContentfulOssDetailTextNode___childMarkdownRemark___wordCount___words = 'childContentfulOssDetailTextNode___childMarkdownRemark___wordCount___words',
  childContentfulOssDetailTextNode___childMarkdownRemark___parent___id = 'childContentfulOssDetailTextNode___childMarkdownRemark___parent___id',
  childContentfulOssDetailTextNode___childMarkdownRemark___parent___children = 'childContentfulOssDetailTextNode___childMarkdownRemark___parent___children',
  childContentfulOssDetailTextNode___childMarkdownRemark___children = 'childContentfulOssDetailTextNode___childMarkdownRemark___children',
  childContentfulOssDetailTextNode___childMarkdownRemark___children___id = 'childContentfulOssDetailTextNode___childMarkdownRemark___children___id',
  childContentfulOssDetailTextNode___childMarkdownRemark___children___children = 'childContentfulOssDetailTextNode___childMarkdownRemark___children___children',
  childContentfulOssDetailTextNode___childMarkdownRemark___internal___content = 'childContentfulOssDetailTextNode___childMarkdownRemark___internal___content',
  childContentfulOssDetailTextNode___childMarkdownRemark___internal___contentDigest = 'childContentfulOssDetailTextNode___childMarkdownRemark___internal___contentDigest',
  childContentfulOssDetailTextNode___childMarkdownRemark___internal___description = 'childContentfulOssDetailTextNode___childMarkdownRemark___internal___description',
  childContentfulOssDetailTextNode___childMarkdownRemark___internal___fieldOwners = 'childContentfulOssDetailTextNode___childMarkdownRemark___internal___fieldOwners',
  childContentfulOssDetailTextNode___childMarkdownRemark___internal___ignoreType = 'childContentfulOssDetailTextNode___childMarkdownRemark___internal___ignoreType',
  childContentfulOssDetailTextNode___childMarkdownRemark___internal___mediaType = 'childContentfulOssDetailTextNode___childMarkdownRemark___internal___mediaType',
  childContentfulOssDetailTextNode___childMarkdownRemark___internal___owner = 'childContentfulOssDetailTextNode___childMarkdownRemark___internal___owner',
  childContentfulOssDetailTextNode___childMarkdownRemark___internal___type = 'childContentfulOssDetailTextNode___childMarkdownRemark___internal___type',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type'
}

export type ContentfulOssFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  subName?: Maybe<StringQueryOperatorInput>;
  startDate?: Maybe<DateQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
  tags?: Maybe<ContentfulTagFilterListInput>;
  icon?: Maybe<ContentfulIconFilterInput>;
  image?: Maybe<ContentfulAssetFilterInput>;
  detail?: Maybe<ContentfulOssDetailTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulOssSysFilterInput>;
  childrenContentfulOssDetailTextNode?: Maybe<ContentfulOssDetailTextNodeFilterListInput>;
  childContentfulOssDetailTextNode?: Maybe<ContentfulOssDetailTextNodeFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ContentfulOssFilterListInput = {
  elemMatch?: Maybe<ContentfulOssFilterInput>;
};

export type ContentfulOssGroupConnection = {
  __typename?: 'ContentfulOssGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulOssEdge>;
  nodes: Array<ContentfulOss>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulOssSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulOssFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulOssSys = {
  __typename?: 'ContentfulOssSys';
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulOssSysContentType>;
};

export type ContentfulOssSysContentType = {
  __typename?: 'ContentfulOssSysContentType';
  sys?: Maybe<ContentfulOssSysContentTypeSys>;
};

export type ContentfulOssSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulOssSysContentTypeSysFilterInput>;
};

export type ContentfulOssSysContentTypeSys = {
  __typename?: 'ContentfulOssSysContentTypeSys';
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulOssSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulOssSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulOssSysContentTypeFilterInput>;
};

export type ContentfulProject = ContentfulReference & ContentfulEntry & Node & {
  __typename?: 'ContentfulProject';
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  subName?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['Date']>;
  endDate?: Maybe<Scalars['Date']>;
  tags?: Maybe<Array<Maybe<ContentfulTag>>>;
  icon?: Maybe<ContentfulIcon>;
  detail?: Maybe<ContentfulProjectDetailTextNode>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulProjectSys>;
  /** Returns all children nodes filtered by type contentfulProjectDetailTextNode */
  childrenContentfulProjectDetailTextNode?: Maybe<Array<Maybe<ContentfulProjectDetailTextNode>>>;
  /**
   * Returns the first child node of type contentfulProjectDetailTextNode or null
   * if there are no children of given type on this node
   */
  childContentfulProjectDetailTextNode?: Maybe<ContentfulProjectDetailTextNode>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulProjectStartDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulProjectEndDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulProjectCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulProjectUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulProjectConnection = {
  __typename?: 'ContentfulProjectConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulProjectEdge>;
  nodes: Array<ContentfulProject>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulProjectGroupConnection>;
};


export type ContentfulProjectConnectionDistinctArgs = {
  field: ContentfulProjectFieldsEnum;
};


export type ContentfulProjectConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulProjectFieldsEnum;
};

export type ContentfulProjectDetailTextNode = Node & {
  __typename?: 'contentfulProjectDetailTextNode';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  detail?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulProjectDetailTextNodeSys>;
  /** Returns all children nodes filtered by type MarkdownRemark */
  childrenMarkdownRemark?: Maybe<Array<Maybe<MarkdownRemark>>>;
  /** Returns the first child node of type MarkdownRemark or null if there are no children of given type on this node */
  childMarkdownRemark?: Maybe<MarkdownRemark>;
};

export type ContentfulProjectDetailTextNodeConnection = {
  __typename?: 'contentfulProjectDetailTextNodeConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulProjectDetailTextNodeEdge>;
  nodes: Array<ContentfulProjectDetailTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulProjectDetailTextNodeGroupConnection>;
};


export type ContentfulProjectDetailTextNodeConnectionDistinctArgs = {
  field: ContentfulProjectDetailTextNodeFieldsEnum;
};


export type ContentfulProjectDetailTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulProjectDetailTextNodeFieldsEnum;
};

export type ContentfulProjectDetailTextNodeEdge = {
  __typename?: 'contentfulProjectDetailTextNodeEdge';
  next?: Maybe<ContentfulProjectDetailTextNode>;
  node: ContentfulProjectDetailTextNode;
  previous?: Maybe<ContentfulProjectDetailTextNode>;
};

export enum ContentfulProjectDetailTextNodeFieldsEnum {
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  detail = 'detail',
  sys___type = 'sys___type',
  childrenMarkdownRemark = 'childrenMarkdownRemark',
  childrenMarkdownRemark___id = 'childrenMarkdownRemark___id',
  childrenMarkdownRemark___frontmatter___title = 'childrenMarkdownRemark___frontmatter___title',
  childrenMarkdownRemark___excerpt = 'childrenMarkdownRemark___excerpt',
  childrenMarkdownRemark___rawMarkdownBody = 'childrenMarkdownRemark___rawMarkdownBody',
  childrenMarkdownRemark___html = 'childrenMarkdownRemark___html',
  childrenMarkdownRemark___htmlAst = 'childrenMarkdownRemark___htmlAst',
  childrenMarkdownRemark___excerptAst = 'childrenMarkdownRemark___excerptAst',
  childrenMarkdownRemark___headings = 'childrenMarkdownRemark___headings',
  childrenMarkdownRemark___headings___id = 'childrenMarkdownRemark___headings___id',
  childrenMarkdownRemark___headings___value = 'childrenMarkdownRemark___headings___value',
  childrenMarkdownRemark___headings___depth = 'childrenMarkdownRemark___headings___depth',
  childrenMarkdownRemark___timeToRead = 'childrenMarkdownRemark___timeToRead',
  childrenMarkdownRemark___tableOfContents = 'childrenMarkdownRemark___tableOfContents',
  childrenMarkdownRemark___wordCount___paragraphs = 'childrenMarkdownRemark___wordCount___paragraphs',
  childrenMarkdownRemark___wordCount___sentences = 'childrenMarkdownRemark___wordCount___sentences',
  childrenMarkdownRemark___wordCount___words = 'childrenMarkdownRemark___wordCount___words',
  childrenMarkdownRemark___parent___id = 'childrenMarkdownRemark___parent___id',
  childrenMarkdownRemark___parent___parent___id = 'childrenMarkdownRemark___parent___parent___id',
  childrenMarkdownRemark___parent___parent___children = 'childrenMarkdownRemark___parent___parent___children',
  childrenMarkdownRemark___parent___children = 'childrenMarkdownRemark___parent___children',
  childrenMarkdownRemark___parent___children___id = 'childrenMarkdownRemark___parent___children___id',
  childrenMarkdownRemark___parent___children___children = 'childrenMarkdownRemark___parent___children___children',
  childrenMarkdownRemark___parent___internal___content = 'childrenMarkdownRemark___parent___internal___content',
  childrenMarkdownRemark___parent___internal___contentDigest = 'childrenMarkdownRemark___parent___internal___contentDigest',
  childrenMarkdownRemark___parent___internal___description = 'childrenMarkdownRemark___parent___internal___description',
  childrenMarkdownRemark___parent___internal___fieldOwners = 'childrenMarkdownRemark___parent___internal___fieldOwners',
  childrenMarkdownRemark___parent___internal___ignoreType = 'childrenMarkdownRemark___parent___internal___ignoreType',
  childrenMarkdownRemark___parent___internal___mediaType = 'childrenMarkdownRemark___parent___internal___mediaType',
  childrenMarkdownRemark___parent___internal___owner = 'childrenMarkdownRemark___parent___internal___owner',
  childrenMarkdownRemark___parent___internal___type = 'childrenMarkdownRemark___parent___internal___type',
  childrenMarkdownRemark___children = 'childrenMarkdownRemark___children',
  childrenMarkdownRemark___children___id = 'childrenMarkdownRemark___children___id',
  childrenMarkdownRemark___children___parent___id = 'childrenMarkdownRemark___children___parent___id',
  childrenMarkdownRemark___children___parent___children = 'childrenMarkdownRemark___children___parent___children',
  childrenMarkdownRemark___children___children = 'childrenMarkdownRemark___children___children',
  childrenMarkdownRemark___children___children___id = 'childrenMarkdownRemark___children___children___id',
  childrenMarkdownRemark___children___children___children = 'childrenMarkdownRemark___children___children___children',
  childrenMarkdownRemark___children___internal___content = 'childrenMarkdownRemark___children___internal___content',
  childrenMarkdownRemark___children___internal___contentDigest = 'childrenMarkdownRemark___children___internal___contentDigest',
  childrenMarkdownRemark___children___internal___description = 'childrenMarkdownRemark___children___internal___description',
  childrenMarkdownRemark___children___internal___fieldOwners = 'childrenMarkdownRemark___children___internal___fieldOwners',
  childrenMarkdownRemark___children___internal___ignoreType = 'childrenMarkdownRemark___children___internal___ignoreType',
  childrenMarkdownRemark___children___internal___mediaType = 'childrenMarkdownRemark___children___internal___mediaType',
  childrenMarkdownRemark___children___internal___owner = 'childrenMarkdownRemark___children___internal___owner',
  childrenMarkdownRemark___children___internal___type = 'childrenMarkdownRemark___children___internal___type',
  childrenMarkdownRemark___internal___content = 'childrenMarkdownRemark___internal___content',
  childrenMarkdownRemark___internal___contentDigest = 'childrenMarkdownRemark___internal___contentDigest',
  childrenMarkdownRemark___internal___description = 'childrenMarkdownRemark___internal___description',
  childrenMarkdownRemark___internal___fieldOwners = 'childrenMarkdownRemark___internal___fieldOwners',
  childrenMarkdownRemark___internal___ignoreType = 'childrenMarkdownRemark___internal___ignoreType',
  childrenMarkdownRemark___internal___mediaType = 'childrenMarkdownRemark___internal___mediaType',
  childrenMarkdownRemark___internal___owner = 'childrenMarkdownRemark___internal___owner',
  childrenMarkdownRemark___internal___type = 'childrenMarkdownRemark___internal___type',
  childMarkdownRemark___id = 'childMarkdownRemark___id',
  childMarkdownRemark___frontmatter___title = 'childMarkdownRemark___frontmatter___title',
  childMarkdownRemark___excerpt = 'childMarkdownRemark___excerpt',
  childMarkdownRemark___rawMarkdownBody = 'childMarkdownRemark___rawMarkdownBody',
  childMarkdownRemark___html = 'childMarkdownRemark___html',
  childMarkdownRemark___htmlAst = 'childMarkdownRemark___htmlAst',
  childMarkdownRemark___excerptAst = 'childMarkdownRemark___excerptAst',
  childMarkdownRemark___headings = 'childMarkdownRemark___headings',
  childMarkdownRemark___headings___id = 'childMarkdownRemark___headings___id',
  childMarkdownRemark___headings___value = 'childMarkdownRemark___headings___value',
  childMarkdownRemark___headings___depth = 'childMarkdownRemark___headings___depth',
  childMarkdownRemark___timeToRead = 'childMarkdownRemark___timeToRead',
  childMarkdownRemark___tableOfContents = 'childMarkdownRemark___tableOfContents',
  childMarkdownRemark___wordCount___paragraphs = 'childMarkdownRemark___wordCount___paragraphs',
  childMarkdownRemark___wordCount___sentences = 'childMarkdownRemark___wordCount___sentences',
  childMarkdownRemark___wordCount___words = 'childMarkdownRemark___wordCount___words',
  childMarkdownRemark___parent___id = 'childMarkdownRemark___parent___id',
  childMarkdownRemark___parent___parent___id = 'childMarkdownRemark___parent___parent___id',
  childMarkdownRemark___parent___parent___children = 'childMarkdownRemark___parent___parent___children',
  childMarkdownRemark___parent___children = 'childMarkdownRemark___parent___children',
  childMarkdownRemark___parent___children___id = 'childMarkdownRemark___parent___children___id',
  childMarkdownRemark___parent___children___children = 'childMarkdownRemark___parent___children___children',
  childMarkdownRemark___parent___internal___content = 'childMarkdownRemark___parent___internal___content',
  childMarkdownRemark___parent___internal___contentDigest = 'childMarkdownRemark___parent___internal___contentDigest',
  childMarkdownRemark___parent___internal___description = 'childMarkdownRemark___parent___internal___description',
  childMarkdownRemark___parent___internal___fieldOwners = 'childMarkdownRemark___parent___internal___fieldOwners',
  childMarkdownRemark___parent___internal___ignoreType = 'childMarkdownRemark___parent___internal___ignoreType',
  childMarkdownRemark___parent___internal___mediaType = 'childMarkdownRemark___parent___internal___mediaType',
  childMarkdownRemark___parent___internal___owner = 'childMarkdownRemark___parent___internal___owner',
  childMarkdownRemark___parent___internal___type = 'childMarkdownRemark___parent___internal___type',
  childMarkdownRemark___children = 'childMarkdownRemark___children',
  childMarkdownRemark___children___id = 'childMarkdownRemark___children___id',
  childMarkdownRemark___children___parent___id = 'childMarkdownRemark___children___parent___id',
  childMarkdownRemark___children___parent___children = 'childMarkdownRemark___children___parent___children',
  childMarkdownRemark___children___children = 'childMarkdownRemark___children___children',
  childMarkdownRemark___children___children___id = 'childMarkdownRemark___children___children___id',
  childMarkdownRemark___children___children___children = 'childMarkdownRemark___children___children___children',
  childMarkdownRemark___children___internal___content = 'childMarkdownRemark___children___internal___content',
  childMarkdownRemark___children___internal___contentDigest = 'childMarkdownRemark___children___internal___contentDigest',
  childMarkdownRemark___children___internal___description = 'childMarkdownRemark___children___internal___description',
  childMarkdownRemark___children___internal___fieldOwners = 'childMarkdownRemark___children___internal___fieldOwners',
  childMarkdownRemark___children___internal___ignoreType = 'childMarkdownRemark___children___internal___ignoreType',
  childMarkdownRemark___children___internal___mediaType = 'childMarkdownRemark___children___internal___mediaType',
  childMarkdownRemark___children___internal___owner = 'childMarkdownRemark___children___internal___owner',
  childMarkdownRemark___children___internal___type = 'childMarkdownRemark___children___internal___type',
  childMarkdownRemark___internal___content = 'childMarkdownRemark___internal___content',
  childMarkdownRemark___internal___contentDigest = 'childMarkdownRemark___internal___contentDigest',
  childMarkdownRemark___internal___description = 'childMarkdownRemark___internal___description',
  childMarkdownRemark___internal___fieldOwners = 'childMarkdownRemark___internal___fieldOwners',
  childMarkdownRemark___internal___ignoreType = 'childMarkdownRemark___internal___ignoreType',
  childMarkdownRemark___internal___mediaType = 'childMarkdownRemark___internal___mediaType',
  childMarkdownRemark___internal___owner = 'childMarkdownRemark___internal___owner',
  childMarkdownRemark___internal___type = 'childMarkdownRemark___internal___type'
}

export type ContentfulProjectDetailTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  detail?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulProjectDetailTextNodeSysFilterInput>;
  childrenMarkdownRemark?: Maybe<MarkdownRemarkFilterListInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
};

export type ContentfulProjectDetailTextNodeFilterListInput = {
  elemMatch?: Maybe<ContentfulProjectDetailTextNodeFilterInput>;
};

export type ContentfulProjectDetailTextNodeGroupConnection = {
  __typename?: 'contentfulProjectDetailTextNodeGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulProjectDetailTextNodeEdge>;
  nodes: Array<ContentfulProjectDetailTextNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulProjectDetailTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulProjectDetailTextNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulProjectDetailTextNodeSys = {
  __typename?: 'contentfulProjectDetailTextNodeSys';
  type?: Maybe<Scalars['String']>;
};

export type ContentfulProjectDetailTextNodeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulProjectEdge = {
  __typename?: 'ContentfulProjectEdge';
  next?: Maybe<ContentfulProject>;
  node: ContentfulProject;
  previous?: Maybe<ContentfulProject>;
};

export enum ContentfulProjectFieldsEnum {
  contentful_id = 'contentful_id',
  id = 'id',
  node_locale = 'node_locale',
  name = 'name',
  subName = 'subName',
  startDate = 'startDate',
  endDate = 'endDate',
  tags = 'tags',
  tags___contentful_id = 'tags___contentful_id',
  tags___id = 'tags___id',
  tags___node_locale = 'tags___node_locale',
  tags___name = 'tags___name',
  tags___level = 'tags___level',
  tags___skill_map = 'tags___skill_map',
  tags___skill_map___contentful_id = 'tags___skill_map___contentful_id',
  tags___skill_map___id = 'tags___skill_map___id',
  tags___skill_map___node_locale = 'tags___skill_map___node_locale',
  tags___skill_map___sortKey = 'tags___skill_map___sortKey',
  tags___skill_map___name = 'tags___skill_map___name',
  tags___skill_map___expanded = 'tags___skill_map___expanded',
  tags___skill_map___skills = 'tags___skill_map___skills',
  tags___skill_map___skills___contentful_id = 'tags___skill_map___skills___contentful_id',
  tags___skill_map___skills___id = 'tags___skill_map___skills___id',
  tags___skill_map___skills___node_locale = 'tags___skill_map___skills___node_locale',
  tags___skill_map___skills___name = 'tags___skill_map___skills___name',
  tags___skill_map___skills___level = 'tags___skill_map___skills___level',
  tags___skill_map___skills___skill_map = 'tags___skill_map___skills___skill_map',
  tags___skill_map___skills___project = 'tags___skill_map___skills___project',
  tags___skill_map___skills___spaceId = 'tags___skill_map___skills___spaceId',
  tags___skill_map___skills___createdAt = 'tags___skill_map___skills___createdAt',
  tags___skill_map___skills___updatedAt = 'tags___skill_map___skills___updatedAt',
  tags___skill_map___skills___oss = 'tags___skill_map___skills___oss',
  tags___skill_map___skills___children = 'tags___skill_map___skills___children',
  tags___skill_map___spaceId = 'tags___skill_map___spaceId',
  tags___skill_map___createdAt = 'tags___skill_map___createdAt',
  tags___skill_map___updatedAt = 'tags___skill_map___updatedAt',
  tags___skill_map___sys___type = 'tags___skill_map___sys___type',
  tags___skill_map___sys___revision = 'tags___skill_map___sys___revision',
  tags___skill_map___parent___id = 'tags___skill_map___parent___id',
  tags___skill_map___parent___children = 'tags___skill_map___parent___children',
  tags___skill_map___children = 'tags___skill_map___children',
  tags___skill_map___children___id = 'tags___skill_map___children___id',
  tags___skill_map___children___children = 'tags___skill_map___children___children',
  tags___skill_map___internal___content = 'tags___skill_map___internal___content',
  tags___skill_map___internal___contentDigest = 'tags___skill_map___internal___contentDigest',
  tags___skill_map___internal___description = 'tags___skill_map___internal___description',
  tags___skill_map___internal___fieldOwners = 'tags___skill_map___internal___fieldOwners',
  tags___skill_map___internal___ignoreType = 'tags___skill_map___internal___ignoreType',
  tags___skill_map___internal___mediaType = 'tags___skill_map___internal___mediaType',
  tags___skill_map___internal___owner = 'tags___skill_map___internal___owner',
  tags___skill_map___internal___type = 'tags___skill_map___internal___type',
  tags___project = 'tags___project',
  tags___project___contentful_id = 'tags___project___contentful_id',
  tags___project___id = 'tags___project___id',
  tags___project___node_locale = 'tags___project___node_locale',
  tags___project___name = 'tags___project___name',
  tags___project___subName = 'tags___project___subName',
  tags___project___startDate = 'tags___project___startDate',
  tags___project___endDate = 'tags___project___endDate',
  tags___project___tags = 'tags___project___tags',
  tags___project___tags___contentful_id = 'tags___project___tags___contentful_id',
  tags___project___tags___id = 'tags___project___tags___id',
  tags___project___tags___node_locale = 'tags___project___tags___node_locale',
  tags___project___tags___name = 'tags___project___tags___name',
  tags___project___tags___level = 'tags___project___tags___level',
  tags___project___tags___skill_map = 'tags___project___tags___skill_map',
  tags___project___tags___project = 'tags___project___tags___project',
  tags___project___tags___spaceId = 'tags___project___tags___spaceId',
  tags___project___tags___createdAt = 'tags___project___tags___createdAt',
  tags___project___tags___updatedAt = 'tags___project___tags___updatedAt',
  tags___project___tags___oss = 'tags___project___tags___oss',
  tags___project___tags___children = 'tags___project___tags___children',
  tags___project___icon___contentful_id = 'tags___project___icon___contentful_id',
  tags___project___icon___id = 'tags___project___icon___id',
  tags___project___icon___node_locale = 'tags___project___icon___node_locale',
  tags___project___icon___name = 'tags___project___icon___name',
  tags___project___icon___what_i_can_do = 'tags___project___icon___what_i_can_do',
  tags___project___icon___project = 'tags___project___icon___project',
  tags___project___icon___oss = 'tags___project___icon___oss',
  tags___project___icon___spaceId = 'tags___project___icon___spaceId',
  tags___project___icon___createdAt = 'tags___project___icon___createdAt',
  tags___project___icon___updatedAt = 'tags___project___icon___updatedAt',
  tags___project___icon___history = 'tags___project___icon___history',
  tags___project___icon___contact = 'tags___project___icon___contact',
  tags___project___icon___childrenContentfulIconSvgTextNode = 'tags___project___icon___childrenContentfulIconSvgTextNode',
  tags___project___icon___children = 'tags___project___icon___children',
  tags___project___detail___id = 'tags___project___detail___id',
  tags___project___detail___children = 'tags___project___detail___children',
  tags___project___detail___detail = 'tags___project___detail___detail',
  tags___project___detail___childrenMarkdownRemark = 'tags___project___detail___childrenMarkdownRemark',
  tags___project___spaceId = 'tags___project___spaceId',
  tags___project___createdAt = 'tags___project___createdAt',
  tags___project___updatedAt = 'tags___project___updatedAt',
  tags___project___sys___type = 'tags___project___sys___type',
  tags___project___sys___revision = 'tags___project___sys___revision',
  tags___project___childrenContentfulProjectDetailTextNode = 'tags___project___childrenContentfulProjectDetailTextNode',
  tags___project___childrenContentfulProjectDetailTextNode___id = 'tags___project___childrenContentfulProjectDetailTextNode___id',
  tags___project___childrenContentfulProjectDetailTextNode___children = 'tags___project___childrenContentfulProjectDetailTextNode___children',
  tags___project___childrenContentfulProjectDetailTextNode___detail = 'tags___project___childrenContentfulProjectDetailTextNode___detail',
  tags___project___childrenContentfulProjectDetailTextNode___childrenMarkdownRemark = 'tags___project___childrenContentfulProjectDetailTextNode___childrenMarkdownRemark',
  tags___project___childContentfulProjectDetailTextNode___id = 'tags___project___childContentfulProjectDetailTextNode___id',
  tags___project___childContentfulProjectDetailTextNode___children = 'tags___project___childContentfulProjectDetailTextNode___children',
  tags___project___childContentfulProjectDetailTextNode___detail = 'tags___project___childContentfulProjectDetailTextNode___detail',
  tags___project___childContentfulProjectDetailTextNode___childrenMarkdownRemark = 'tags___project___childContentfulProjectDetailTextNode___childrenMarkdownRemark',
  tags___project___parent___id = 'tags___project___parent___id',
  tags___project___parent___children = 'tags___project___parent___children',
  tags___project___children = 'tags___project___children',
  tags___project___children___id = 'tags___project___children___id',
  tags___project___children___children = 'tags___project___children___children',
  tags___project___internal___content = 'tags___project___internal___content',
  tags___project___internal___contentDigest = 'tags___project___internal___contentDigest',
  tags___project___internal___description = 'tags___project___internal___description',
  tags___project___internal___fieldOwners = 'tags___project___internal___fieldOwners',
  tags___project___internal___ignoreType = 'tags___project___internal___ignoreType',
  tags___project___internal___mediaType = 'tags___project___internal___mediaType',
  tags___project___internal___owner = 'tags___project___internal___owner',
  tags___project___internal___type = 'tags___project___internal___type',
  tags___spaceId = 'tags___spaceId',
  tags___createdAt = 'tags___createdAt',
  tags___updatedAt = 'tags___updatedAt',
  tags___sys___type = 'tags___sys___type',
  tags___sys___revision = 'tags___sys___revision',
  tags___oss = 'tags___oss',
  tags___oss___contentful_id = 'tags___oss___contentful_id',
  tags___oss___id = 'tags___oss___id',
  tags___oss___node_locale = 'tags___oss___node_locale',
  tags___oss___name = 'tags___oss___name',
  tags___oss___subName = 'tags___oss___subName',
  tags___oss___startDate = 'tags___oss___startDate',
  tags___oss___href = 'tags___oss___href',
  tags___oss___tags = 'tags___oss___tags',
  tags___oss___tags___contentful_id = 'tags___oss___tags___contentful_id',
  tags___oss___tags___id = 'tags___oss___tags___id',
  tags___oss___tags___node_locale = 'tags___oss___tags___node_locale',
  tags___oss___tags___name = 'tags___oss___tags___name',
  tags___oss___tags___level = 'tags___oss___tags___level',
  tags___oss___tags___skill_map = 'tags___oss___tags___skill_map',
  tags___oss___tags___project = 'tags___oss___tags___project',
  tags___oss___tags___spaceId = 'tags___oss___tags___spaceId',
  tags___oss___tags___createdAt = 'tags___oss___tags___createdAt',
  tags___oss___tags___updatedAt = 'tags___oss___tags___updatedAt',
  tags___oss___tags___oss = 'tags___oss___tags___oss',
  tags___oss___tags___children = 'tags___oss___tags___children',
  tags___oss___icon___contentful_id = 'tags___oss___icon___contentful_id',
  tags___oss___icon___id = 'tags___oss___icon___id',
  tags___oss___icon___node_locale = 'tags___oss___icon___node_locale',
  tags___oss___icon___name = 'tags___oss___icon___name',
  tags___oss___icon___what_i_can_do = 'tags___oss___icon___what_i_can_do',
  tags___oss___icon___project = 'tags___oss___icon___project',
  tags___oss___icon___oss = 'tags___oss___icon___oss',
  tags___oss___icon___spaceId = 'tags___oss___icon___spaceId',
  tags___oss___icon___createdAt = 'tags___oss___icon___createdAt',
  tags___oss___icon___updatedAt = 'tags___oss___icon___updatedAt',
  tags___oss___icon___history = 'tags___oss___icon___history',
  tags___oss___icon___contact = 'tags___oss___icon___contact',
  tags___oss___icon___childrenContentfulIconSvgTextNode = 'tags___oss___icon___childrenContentfulIconSvgTextNode',
  tags___oss___icon___children = 'tags___oss___icon___children',
  tags___oss___image___contentful_id = 'tags___oss___image___contentful_id',
  tags___oss___image___id = 'tags___oss___image___id',
  tags___oss___image___spaceId = 'tags___oss___image___spaceId',
  tags___oss___image___createdAt = 'tags___oss___image___createdAt',
  tags___oss___image___updatedAt = 'tags___oss___image___updatedAt',
  tags___oss___image___title = 'tags___oss___image___title',
  tags___oss___image___description = 'tags___oss___image___description',
  tags___oss___image___node_locale = 'tags___oss___image___node_locale',
  tags___oss___image___gatsbyImageData = 'tags___oss___image___gatsbyImageData',
  tags___oss___image___children = 'tags___oss___image___children',
  tags___oss___detail___id = 'tags___oss___detail___id',
  tags___oss___detail___children = 'tags___oss___detail___children',
  tags___oss___detail___detail = 'tags___oss___detail___detail',
  tags___oss___detail___childrenMarkdownRemark = 'tags___oss___detail___childrenMarkdownRemark',
  tags___oss___spaceId = 'tags___oss___spaceId',
  tags___oss___createdAt = 'tags___oss___createdAt',
  tags___oss___updatedAt = 'tags___oss___updatedAt',
  tags___oss___sys___type = 'tags___oss___sys___type',
  tags___oss___sys___revision = 'tags___oss___sys___revision',
  tags___oss___childrenContentfulOssDetailTextNode = 'tags___oss___childrenContentfulOssDetailTextNode',
  tags___oss___childrenContentfulOssDetailTextNode___id = 'tags___oss___childrenContentfulOssDetailTextNode___id',
  tags___oss___childrenContentfulOssDetailTextNode___children = 'tags___oss___childrenContentfulOssDetailTextNode___children',
  tags___oss___childrenContentfulOssDetailTextNode___detail = 'tags___oss___childrenContentfulOssDetailTextNode___detail',
  tags___oss___childrenContentfulOssDetailTextNode___childrenMarkdownRemark = 'tags___oss___childrenContentfulOssDetailTextNode___childrenMarkdownRemark',
  tags___oss___childContentfulOssDetailTextNode___id = 'tags___oss___childContentfulOssDetailTextNode___id',
  tags___oss___childContentfulOssDetailTextNode___children = 'tags___oss___childContentfulOssDetailTextNode___children',
  tags___oss___childContentfulOssDetailTextNode___detail = 'tags___oss___childContentfulOssDetailTextNode___detail',
  tags___oss___childContentfulOssDetailTextNode___childrenMarkdownRemark = 'tags___oss___childContentfulOssDetailTextNode___childrenMarkdownRemark',
  tags___oss___parent___id = 'tags___oss___parent___id',
  tags___oss___parent___children = 'tags___oss___parent___children',
  tags___oss___children = 'tags___oss___children',
  tags___oss___children___id = 'tags___oss___children___id',
  tags___oss___children___children = 'tags___oss___children___children',
  tags___oss___internal___content = 'tags___oss___internal___content',
  tags___oss___internal___contentDigest = 'tags___oss___internal___contentDigest',
  tags___oss___internal___description = 'tags___oss___internal___description',
  tags___oss___internal___fieldOwners = 'tags___oss___internal___fieldOwners',
  tags___oss___internal___ignoreType = 'tags___oss___internal___ignoreType',
  tags___oss___internal___mediaType = 'tags___oss___internal___mediaType',
  tags___oss___internal___owner = 'tags___oss___internal___owner',
  tags___oss___internal___type = 'tags___oss___internal___type',
  tags___parent___id = 'tags___parent___id',
  tags___parent___parent___id = 'tags___parent___parent___id',
  tags___parent___parent___children = 'tags___parent___parent___children',
  tags___parent___children = 'tags___parent___children',
  tags___parent___children___id = 'tags___parent___children___id',
  tags___parent___children___children = 'tags___parent___children___children',
  tags___parent___internal___content = 'tags___parent___internal___content',
  tags___parent___internal___contentDigest = 'tags___parent___internal___contentDigest',
  tags___parent___internal___description = 'tags___parent___internal___description',
  tags___parent___internal___fieldOwners = 'tags___parent___internal___fieldOwners',
  tags___parent___internal___ignoreType = 'tags___parent___internal___ignoreType',
  tags___parent___internal___mediaType = 'tags___parent___internal___mediaType',
  tags___parent___internal___owner = 'tags___parent___internal___owner',
  tags___parent___internal___type = 'tags___parent___internal___type',
  tags___children = 'tags___children',
  tags___children___id = 'tags___children___id',
  tags___children___parent___id = 'tags___children___parent___id',
  tags___children___parent___children = 'tags___children___parent___children',
  tags___children___children = 'tags___children___children',
  tags___children___children___id = 'tags___children___children___id',
  tags___children___children___children = 'tags___children___children___children',
  tags___children___internal___content = 'tags___children___internal___content',
  tags___children___internal___contentDigest = 'tags___children___internal___contentDigest',
  tags___children___internal___description = 'tags___children___internal___description',
  tags___children___internal___fieldOwners = 'tags___children___internal___fieldOwners',
  tags___children___internal___ignoreType = 'tags___children___internal___ignoreType',
  tags___children___internal___mediaType = 'tags___children___internal___mediaType',
  tags___children___internal___owner = 'tags___children___internal___owner',
  tags___children___internal___type = 'tags___children___internal___type',
  tags___internal___content = 'tags___internal___content',
  tags___internal___contentDigest = 'tags___internal___contentDigest',
  tags___internal___description = 'tags___internal___description',
  tags___internal___fieldOwners = 'tags___internal___fieldOwners',
  tags___internal___ignoreType = 'tags___internal___ignoreType',
  tags___internal___mediaType = 'tags___internal___mediaType',
  tags___internal___owner = 'tags___internal___owner',
  tags___internal___type = 'tags___internal___type',
  icon___contentful_id = 'icon___contentful_id',
  icon___id = 'icon___id',
  icon___node_locale = 'icon___node_locale',
  icon___name = 'icon___name',
  icon___what_i_can_do = 'icon___what_i_can_do',
  icon___what_i_can_do___contentful_id = 'icon___what_i_can_do___contentful_id',
  icon___what_i_can_do___id = 'icon___what_i_can_do___id',
  icon___what_i_can_do___node_locale = 'icon___what_i_can_do___node_locale',
  icon___what_i_can_do___sortKey = 'icon___what_i_can_do___sortKey',
  icon___what_i_can_do___name = 'icon___what_i_can_do___name',
  icon___what_i_can_do___subName = 'icon___what_i_can_do___subName',
  icon___what_i_can_do___icon___contentful_id = 'icon___what_i_can_do___icon___contentful_id',
  icon___what_i_can_do___icon___id = 'icon___what_i_can_do___icon___id',
  icon___what_i_can_do___icon___node_locale = 'icon___what_i_can_do___icon___node_locale',
  icon___what_i_can_do___icon___name = 'icon___what_i_can_do___icon___name',
  icon___what_i_can_do___icon___what_i_can_do = 'icon___what_i_can_do___icon___what_i_can_do',
  icon___what_i_can_do___icon___project = 'icon___what_i_can_do___icon___project',
  icon___what_i_can_do___icon___oss = 'icon___what_i_can_do___icon___oss',
  icon___what_i_can_do___icon___spaceId = 'icon___what_i_can_do___icon___spaceId',
  icon___what_i_can_do___icon___createdAt = 'icon___what_i_can_do___icon___createdAt',
  icon___what_i_can_do___icon___updatedAt = 'icon___what_i_can_do___icon___updatedAt',
  icon___what_i_can_do___icon___history = 'icon___what_i_can_do___icon___history',
  icon___what_i_can_do___icon___contact = 'icon___what_i_can_do___icon___contact',
  icon___what_i_can_do___icon___childrenContentfulIconSvgTextNode = 'icon___what_i_can_do___icon___childrenContentfulIconSvgTextNode',
  icon___what_i_can_do___icon___children = 'icon___what_i_can_do___icon___children',
  icon___what_i_can_do___spaceId = 'icon___what_i_can_do___spaceId',
  icon___what_i_can_do___createdAt = 'icon___what_i_can_do___createdAt',
  icon___what_i_can_do___updatedAt = 'icon___what_i_can_do___updatedAt',
  icon___what_i_can_do___sys___type = 'icon___what_i_can_do___sys___type',
  icon___what_i_can_do___sys___revision = 'icon___what_i_can_do___sys___revision',
  icon___what_i_can_do___parent___id = 'icon___what_i_can_do___parent___id',
  icon___what_i_can_do___parent___children = 'icon___what_i_can_do___parent___children',
  icon___what_i_can_do___children = 'icon___what_i_can_do___children',
  icon___what_i_can_do___children___id = 'icon___what_i_can_do___children___id',
  icon___what_i_can_do___children___children = 'icon___what_i_can_do___children___children',
  icon___what_i_can_do___internal___content = 'icon___what_i_can_do___internal___content',
  icon___what_i_can_do___internal___contentDigest = 'icon___what_i_can_do___internal___contentDigest',
  icon___what_i_can_do___internal___description = 'icon___what_i_can_do___internal___description',
  icon___what_i_can_do___internal___fieldOwners = 'icon___what_i_can_do___internal___fieldOwners',
  icon___what_i_can_do___internal___ignoreType = 'icon___what_i_can_do___internal___ignoreType',
  icon___what_i_can_do___internal___mediaType = 'icon___what_i_can_do___internal___mediaType',
  icon___what_i_can_do___internal___owner = 'icon___what_i_can_do___internal___owner',
  icon___what_i_can_do___internal___type = 'icon___what_i_can_do___internal___type',
  icon___project = 'icon___project',
  icon___project___contentful_id = 'icon___project___contentful_id',
  icon___project___id = 'icon___project___id',
  icon___project___node_locale = 'icon___project___node_locale',
  icon___project___name = 'icon___project___name',
  icon___project___subName = 'icon___project___subName',
  icon___project___startDate = 'icon___project___startDate',
  icon___project___endDate = 'icon___project___endDate',
  icon___project___tags = 'icon___project___tags',
  icon___project___tags___contentful_id = 'icon___project___tags___contentful_id',
  icon___project___tags___id = 'icon___project___tags___id',
  icon___project___tags___node_locale = 'icon___project___tags___node_locale',
  icon___project___tags___name = 'icon___project___tags___name',
  icon___project___tags___level = 'icon___project___tags___level',
  icon___project___tags___skill_map = 'icon___project___tags___skill_map',
  icon___project___tags___project = 'icon___project___tags___project',
  icon___project___tags___spaceId = 'icon___project___tags___spaceId',
  icon___project___tags___createdAt = 'icon___project___tags___createdAt',
  icon___project___tags___updatedAt = 'icon___project___tags___updatedAt',
  icon___project___tags___oss = 'icon___project___tags___oss',
  icon___project___tags___children = 'icon___project___tags___children',
  icon___project___icon___contentful_id = 'icon___project___icon___contentful_id',
  icon___project___icon___id = 'icon___project___icon___id',
  icon___project___icon___node_locale = 'icon___project___icon___node_locale',
  icon___project___icon___name = 'icon___project___icon___name',
  icon___project___icon___what_i_can_do = 'icon___project___icon___what_i_can_do',
  icon___project___icon___project = 'icon___project___icon___project',
  icon___project___icon___oss = 'icon___project___icon___oss',
  icon___project___icon___spaceId = 'icon___project___icon___spaceId',
  icon___project___icon___createdAt = 'icon___project___icon___createdAt',
  icon___project___icon___updatedAt = 'icon___project___icon___updatedAt',
  icon___project___icon___history = 'icon___project___icon___history',
  icon___project___icon___contact = 'icon___project___icon___contact',
  icon___project___icon___childrenContentfulIconSvgTextNode = 'icon___project___icon___childrenContentfulIconSvgTextNode',
  icon___project___icon___children = 'icon___project___icon___children',
  icon___project___detail___id = 'icon___project___detail___id',
  icon___project___detail___children = 'icon___project___detail___children',
  icon___project___detail___detail = 'icon___project___detail___detail',
  icon___project___detail___childrenMarkdownRemark = 'icon___project___detail___childrenMarkdownRemark',
  icon___project___spaceId = 'icon___project___spaceId',
  icon___project___createdAt = 'icon___project___createdAt',
  icon___project___updatedAt = 'icon___project___updatedAt',
  icon___project___sys___type = 'icon___project___sys___type',
  icon___project___sys___revision = 'icon___project___sys___revision',
  icon___project___childrenContentfulProjectDetailTextNode = 'icon___project___childrenContentfulProjectDetailTextNode',
  icon___project___childrenContentfulProjectDetailTextNode___id = 'icon___project___childrenContentfulProjectDetailTextNode___id',
  icon___project___childrenContentfulProjectDetailTextNode___children = 'icon___project___childrenContentfulProjectDetailTextNode___children',
  icon___project___childrenContentfulProjectDetailTextNode___detail = 'icon___project___childrenContentfulProjectDetailTextNode___detail',
  icon___project___childrenContentfulProjectDetailTextNode___childrenMarkdownRemark = 'icon___project___childrenContentfulProjectDetailTextNode___childrenMarkdownRemark',
  icon___project___childContentfulProjectDetailTextNode___id = 'icon___project___childContentfulProjectDetailTextNode___id',
  icon___project___childContentfulProjectDetailTextNode___children = 'icon___project___childContentfulProjectDetailTextNode___children',
  icon___project___childContentfulProjectDetailTextNode___detail = 'icon___project___childContentfulProjectDetailTextNode___detail',
  icon___project___childContentfulProjectDetailTextNode___childrenMarkdownRemark = 'icon___project___childContentfulProjectDetailTextNode___childrenMarkdownRemark',
  icon___project___parent___id = 'icon___project___parent___id',
  icon___project___parent___children = 'icon___project___parent___children',
  icon___project___children = 'icon___project___children',
  icon___project___children___id = 'icon___project___children___id',
  icon___project___children___children = 'icon___project___children___children',
  icon___project___internal___content = 'icon___project___internal___content',
  icon___project___internal___contentDigest = 'icon___project___internal___contentDigest',
  icon___project___internal___description = 'icon___project___internal___description',
  icon___project___internal___fieldOwners = 'icon___project___internal___fieldOwners',
  icon___project___internal___ignoreType = 'icon___project___internal___ignoreType',
  icon___project___internal___mediaType = 'icon___project___internal___mediaType',
  icon___project___internal___owner = 'icon___project___internal___owner',
  icon___project___internal___type = 'icon___project___internal___type',
  icon___oss = 'icon___oss',
  icon___oss___contentful_id = 'icon___oss___contentful_id',
  icon___oss___id = 'icon___oss___id',
  icon___oss___node_locale = 'icon___oss___node_locale',
  icon___oss___name = 'icon___oss___name',
  icon___oss___subName = 'icon___oss___subName',
  icon___oss___startDate = 'icon___oss___startDate',
  icon___oss___href = 'icon___oss___href',
  icon___oss___tags = 'icon___oss___tags',
  icon___oss___tags___contentful_id = 'icon___oss___tags___contentful_id',
  icon___oss___tags___id = 'icon___oss___tags___id',
  icon___oss___tags___node_locale = 'icon___oss___tags___node_locale',
  icon___oss___tags___name = 'icon___oss___tags___name',
  icon___oss___tags___level = 'icon___oss___tags___level',
  icon___oss___tags___skill_map = 'icon___oss___tags___skill_map',
  icon___oss___tags___project = 'icon___oss___tags___project',
  icon___oss___tags___spaceId = 'icon___oss___tags___spaceId',
  icon___oss___tags___createdAt = 'icon___oss___tags___createdAt',
  icon___oss___tags___updatedAt = 'icon___oss___tags___updatedAt',
  icon___oss___tags___oss = 'icon___oss___tags___oss',
  icon___oss___tags___children = 'icon___oss___tags___children',
  icon___oss___icon___contentful_id = 'icon___oss___icon___contentful_id',
  icon___oss___icon___id = 'icon___oss___icon___id',
  icon___oss___icon___node_locale = 'icon___oss___icon___node_locale',
  icon___oss___icon___name = 'icon___oss___icon___name',
  icon___oss___icon___what_i_can_do = 'icon___oss___icon___what_i_can_do',
  icon___oss___icon___project = 'icon___oss___icon___project',
  icon___oss___icon___oss = 'icon___oss___icon___oss',
  icon___oss___icon___spaceId = 'icon___oss___icon___spaceId',
  icon___oss___icon___createdAt = 'icon___oss___icon___createdAt',
  icon___oss___icon___updatedAt = 'icon___oss___icon___updatedAt',
  icon___oss___icon___history = 'icon___oss___icon___history',
  icon___oss___icon___contact = 'icon___oss___icon___contact',
  icon___oss___icon___childrenContentfulIconSvgTextNode = 'icon___oss___icon___childrenContentfulIconSvgTextNode',
  icon___oss___icon___children = 'icon___oss___icon___children',
  icon___oss___image___contentful_id = 'icon___oss___image___contentful_id',
  icon___oss___image___id = 'icon___oss___image___id',
  icon___oss___image___spaceId = 'icon___oss___image___spaceId',
  icon___oss___image___createdAt = 'icon___oss___image___createdAt',
  icon___oss___image___updatedAt = 'icon___oss___image___updatedAt',
  icon___oss___image___title = 'icon___oss___image___title',
  icon___oss___image___description = 'icon___oss___image___description',
  icon___oss___image___node_locale = 'icon___oss___image___node_locale',
  icon___oss___image___gatsbyImageData = 'icon___oss___image___gatsbyImageData',
  icon___oss___image___children = 'icon___oss___image___children',
  icon___oss___detail___id = 'icon___oss___detail___id',
  icon___oss___detail___children = 'icon___oss___detail___children',
  icon___oss___detail___detail = 'icon___oss___detail___detail',
  icon___oss___detail___childrenMarkdownRemark = 'icon___oss___detail___childrenMarkdownRemark',
  icon___oss___spaceId = 'icon___oss___spaceId',
  icon___oss___createdAt = 'icon___oss___createdAt',
  icon___oss___updatedAt = 'icon___oss___updatedAt',
  icon___oss___sys___type = 'icon___oss___sys___type',
  icon___oss___sys___revision = 'icon___oss___sys___revision',
  icon___oss___childrenContentfulOssDetailTextNode = 'icon___oss___childrenContentfulOssDetailTextNode',
  icon___oss___childrenContentfulOssDetailTextNode___id = 'icon___oss___childrenContentfulOssDetailTextNode___id',
  icon___oss___childrenContentfulOssDetailTextNode___children = 'icon___oss___childrenContentfulOssDetailTextNode___children',
  icon___oss___childrenContentfulOssDetailTextNode___detail = 'icon___oss___childrenContentfulOssDetailTextNode___detail',
  icon___oss___childrenContentfulOssDetailTextNode___childrenMarkdownRemark = 'icon___oss___childrenContentfulOssDetailTextNode___childrenMarkdownRemark',
  icon___oss___childContentfulOssDetailTextNode___id = 'icon___oss___childContentfulOssDetailTextNode___id',
  icon___oss___childContentfulOssDetailTextNode___children = 'icon___oss___childContentfulOssDetailTextNode___children',
  icon___oss___childContentfulOssDetailTextNode___detail = 'icon___oss___childContentfulOssDetailTextNode___detail',
  icon___oss___childContentfulOssDetailTextNode___childrenMarkdownRemark = 'icon___oss___childContentfulOssDetailTextNode___childrenMarkdownRemark',
  icon___oss___parent___id = 'icon___oss___parent___id',
  icon___oss___parent___children = 'icon___oss___parent___children',
  icon___oss___children = 'icon___oss___children',
  icon___oss___children___id = 'icon___oss___children___id',
  icon___oss___children___children = 'icon___oss___children___children',
  icon___oss___internal___content = 'icon___oss___internal___content',
  icon___oss___internal___contentDigest = 'icon___oss___internal___contentDigest',
  icon___oss___internal___description = 'icon___oss___internal___description',
  icon___oss___internal___fieldOwners = 'icon___oss___internal___fieldOwners',
  icon___oss___internal___ignoreType = 'icon___oss___internal___ignoreType',
  icon___oss___internal___mediaType = 'icon___oss___internal___mediaType',
  icon___oss___internal___owner = 'icon___oss___internal___owner',
  icon___oss___internal___type = 'icon___oss___internal___type',
  icon___svg___id = 'icon___svg___id',
  icon___svg___parent___id = 'icon___svg___parent___id',
  icon___svg___parent___children = 'icon___svg___parent___children',
  icon___svg___children = 'icon___svg___children',
  icon___svg___children___id = 'icon___svg___children___id',
  icon___svg___children___children = 'icon___svg___children___children',
  icon___svg___internal___content = 'icon___svg___internal___content',
  icon___svg___internal___contentDigest = 'icon___svg___internal___contentDigest',
  icon___svg___internal___description = 'icon___svg___internal___description',
  icon___svg___internal___fieldOwners = 'icon___svg___internal___fieldOwners',
  icon___svg___internal___ignoreType = 'icon___svg___internal___ignoreType',
  icon___svg___internal___mediaType = 'icon___svg___internal___mediaType',
  icon___svg___internal___owner = 'icon___svg___internal___owner',
  icon___svg___internal___type = 'icon___svg___internal___type',
  icon___svg___svg = 'icon___svg___svg',
  icon___svg___sys___type = 'icon___svg___sys___type',
  icon___svg___childrenMarkdownRemark = 'icon___svg___childrenMarkdownRemark',
  icon___svg___childrenMarkdownRemark___id = 'icon___svg___childrenMarkdownRemark___id',
  icon___svg___childrenMarkdownRemark___excerpt = 'icon___svg___childrenMarkdownRemark___excerpt',
  icon___svg___childrenMarkdownRemark___rawMarkdownBody = 'icon___svg___childrenMarkdownRemark___rawMarkdownBody',
  icon___svg___childrenMarkdownRemark___html = 'icon___svg___childrenMarkdownRemark___html',
  icon___svg___childrenMarkdownRemark___htmlAst = 'icon___svg___childrenMarkdownRemark___htmlAst',
  icon___svg___childrenMarkdownRemark___excerptAst = 'icon___svg___childrenMarkdownRemark___excerptAst',
  icon___svg___childrenMarkdownRemark___headings = 'icon___svg___childrenMarkdownRemark___headings',
  icon___svg___childrenMarkdownRemark___timeToRead = 'icon___svg___childrenMarkdownRemark___timeToRead',
  icon___svg___childrenMarkdownRemark___tableOfContents = 'icon___svg___childrenMarkdownRemark___tableOfContents',
  icon___svg___childrenMarkdownRemark___children = 'icon___svg___childrenMarkdownRemark___children',
  icon___svg___childMarkdownRemark___id = 'icon___svg___childMarkdownRemark___id',
  icon___svg___childMarkdownRemark___excerpt = 'icon___svg___childMarkdownRemark___excerpt',
  icon___svg___childMarkdownRemark___rawMarkdownBody = 'icon___svg___childMarkdownRemark___rawMarkdownBody',
  icon___svg___childMarkdownRemark___html = 'icon___svg___childMarkdownRemark___html',
  icon___svg___childMarkdownRemark___htmlAst = 'icon___svg___childMarkdownRemark___htmlAst',
  icon___svg___childMarkdownRemark___excerptAst = 'icon___svg___childMarkdownRemark___excerptAst',
  icon___svg___childMarkdownRemark___headings = 'icon___svg___childMarkdownRemark___headings',
  icon___svg___childMarkdownRemark___timeToRead = 'icon___svg___childMarkdownRemark___timeToRead',
  icon___svg___childMarkdownRemark___tableOfContents = 'icon___svg___childMarkdownRemark___tableOfContents',
  icon___svg___childMarkdownRemark___children = 'icon___svg___childMarkdownRemark___children',
  icon___spaceId = 'icon___spaceId',
  icon___createdAt = 'icon___createdAt',
  icon___updatedAt = 'icon___updatedAt',
  icon___sys___type = 'icon___sys___type',
  icon___sys___revision = 'icon___sys___revision',
  icon___history = 'icon___history',
  icon___history___contentful_id = 'icon___history___contentful_id',
  icon___history___id = 'icon___history___id',
  icon___history___node_locale = 'icon___history___node_locale',
  icon___history___name = 'icon___history___name',
  icon___history___date = 'icon___history___date',
  icon___history___subName = 'icon___history___subName',
  icon___history___icon___contentful_id = 'icon___history___icon___contentful_id',
  icon___history___icon___id = 'icon___history___icon___id',
  icon___history___icon___node_locale = 'icon___history___icon___node_locale',
  icon___history___icon___name = 'icon___history___icon___name',
  icon___history___icon___what_i_can_do = 'icon___history___icon___what_i_can_do',
  icon___history___icon___project = 'icon___history___icon___project',
  icon___history___icon___oss = 'icon___history___icon___oss',
  icon___history___icon___spaceId = 'icon___history___icon___spaceId',
  icon___history___icon___createdAt = 'icon___history___icon___createdAt',
  icon___history___icon___updatedAt = 'icon___history___icon___updatedAt',
  icon___history___icon___history = 'icon___history___icon___history',
  icon___history___icon___contact = 'icon___history___icon___contact',
  icon___history___icon___childrenContentfulIconSvgTextNode = 'icon___history___icon___childrenContentfulIconSvgTextNode',
  icon___history___icon___children = 'icon___history___icon___children',
  icon___history___spaceId = 'icon___history___spaceId',
  icon___history___createdAt = 'icon___history___createdAt',
  icon___history___updatedAt = 'icon___history___updatedAt',
  icon___history___sys___type = 'icon___history___sys___type',
  icon___history___sys___revision = 'icon___history___sys___revision',
  icon___history___parent___id = 'icon___history___parent___id',
  icon___history___parent___children = 'icon___history___parent___children',
  icon___history___children = 'icon___history___children',
  icon___history___children___id = 'icon___history___children___id',
  icon___history___children___children = 'icon___history___children___children',
  icon___history___internal___content = 'icon___history___internal___content',
  icon___history___internal___contentDigest = 'icon___history___internal___contentDigest',
  icon___history___internal___description = 'icon___history___internal___description',
  icon___history___internal___fieldOwners = 'icon___history___internal___fieldOwners',
  icon___history___internal___ignoreType = 'icon___history___internal___ignoreType',
  icon___history___internal___mediaType = 'icon___history___internal___mediaType',
  icon___history___internal___owner = 'icon___history___internal___owner',
  icon___history___internal___type = 'icon___history___internal___type',
  icon___contact = 'icon___contact',
  icon___contact___contentful_id = 'icon___contact___contentful_id',
  icon___contact___id = 'icon___contact___id',
  icon___contact___node_locale = 'icon___contact___node_locale',
  icon___contact___sortKey = 'icon___contact___sortKey',
  icon___contact___name = 'icon___contact___name',
  icon___contact___subName = 'icon___contact___subName',
  icon___contact___href = 'icon___contact___href',
  icon___contact___icon___contentful_id = 'icon___contact___icon___contentful_id',
  icon___contact___icon___id = 'icon___contact___icon___id',
  icon___contact___icon___node_locale = 'icon___contact___icon___node_locale',
  icon___contact___icon___name = 'icon___contact___icon___name',
  icon___contact___icon___what_i_can_do = 'icon___contact___icon___what_i_can_do',
  icon___contact___icon___project = 'icon___contact___icon___project',
  icon___contact___icon___oss = 'icon___contact___icon___oss',
  icon___contact___icon___spaceId = 'icon___contact___icon___spaceId',
  icon___contact___icon___createdAt = 'icon___contact___icon___createdAt',
  icon___contact___icon___updatedAt = 'icon___contact___icon___updatedAt',
  icon___contact___icon___history = 'icon___contact___icon___history',
  icon___contact___icon___contact = 'icon___contact___icon___contact',
  icon___contact___icon___childrenContentfulIconSvgTextNode = 'icon___contact___icon___childrenContentfulIconSvgTextNode',
  icon___contact___icon___children = 'icon___contact___icon___children',
  icon___contact___spaceId = 'icon___contact___spaceId',
  icon___contact___createdAt = 'icon___contact___createdAt',
  icon___contact___updatedAt = 'icon___contact___updatedAt',
  icon___contact___sys___type = 'icon___contact___sys___type',
  icon___contact___sys___revision = 'icon___contact___sys___revision',
  icon___contact___parent___id = 'icon___contact___parent___id',
  icon___contact___parent___children = 'icon___contact___parent___children',
  icon___contact___children = 'icon___contact___children',
  icon___contact___children___id = 'icon___contact___children___id',
  icon___contact___children___children = 'icon___contact___children___children',
  icon___contact___internal___content = 'icon___contact___internal___content',
  icon___contact___internal___contentDigest = 'icon___contact___internal___contentDigest',
  icon___contact___internal___description = 'icon___contact___internal___description',
  icon___contact___internal___fieldOwners = 'icon___contact___internal___fieldOwners',
  icon___contact___internal___ignoreType = 'icon___contact___internal___ignoreType',
  icon___contact___internal___mediaType = 'icon___contact___internal___mediaType',
  icon___contact___internal___owner = 'icon___contact___internal___owner',
  icon___contact___internal___type = 'icon___contact___internal___type',
  icon___childrenContentfulIconSvgTextNode = 'icon___childrenContentfulIconSvgTextNode',
  icon___childrenContentfulIconSvgTextNode___id = 'icon___childrenContentfulIconSvgTextNode___id',
  icon___childrenContentfulIconSvgTextNode___parent___id = 'icon___childrenContentfulIconSvgTextNode___parent___id',
  icon___childrenContentfulIconSvgTextNode___parent___children = 'icon___childrenContentfulIconSvgTextNode___parent___children',
  icon___childrenContentfulIconSvgTextNode___children = 'icon___childrenContentfulIconSvgTextNode___children',
  icon___childrenContentfulIconSvgTextNode___children___id = 'icon___childrenContentfulIconSvgTextNode___children___id',
  icon___childrenContentfulIconSvgTextNode___children___children = 'icon___childrenContentfulIconSvgTextNode___children___children',
  icon___childrenContentfulIconSvgTextNode___internal___content = 'icon___childrenContentfulIconSvgTextNode___internal___content',
  icon___childrenContentfulIconSvgTextNode___internal___contentDigest = 'icon___childrenContentfulIconSvgTextNode___internal___contentDigest',
  icon___childrenContentfulIconSvgTextNode___internal___description = 'icon___childrenContentfulIconSvgTextNode___internal___description',
  icon___childrenContentfulIconSvgTextNode___internal___fieldOwners = 'icon___childrenContentfulIconSvgTextNode___internal___fieldOwners',
  icon___childrenContentfulIconSvgTextNode___internal___ignoreType = 'icon___childrenContentfulIconSvgTextNode___internal___ignoreType',
  icon___childrenContentfulIconSvgTextNode___internal___mediaType = 'icon___childrenContentfulIconSvgTextNode___internal___mediaType',
  icon___childrenContentfulIconSvgTextNode___internal___owner = 'icon___childrenContentfulIconSvgTextNode___internal___owner',
  icon___childrenContentfulIconSvgTextNode___internal___type = 'icon___childrenContentfulIconSvgTextNode___internal___type',
  icon___childrenContentfulIconSvgTextNode___svg = 'icon___childrenContentfulIconSvgTextNode___svg',
  icon___childrenContentfulIconSvgTextNode___sys___type = 'icon___childrenContentfulIconSvgTextNode___sys___type',
  icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark = 'icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark',
  icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___id = 'icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___id',
  icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___excerpt = 'icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___excerpt',
  icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___rawMarkdownBody = 'icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___rawMarkdownBody',
  icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___html = 'icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___html',
  icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___htmlAst = 'icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___htmlAst',
  icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___excerptAst = 'icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___excerptAst',
  icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___headings = 'icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___headings',
  icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___timeToRead = 'icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___timeToRead',
  icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___tableOfContents = 'icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___tableOfContents',
  icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___children = 'icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___children',
  icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___id = 'icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___id',
  icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___excerpt = 'icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___excerpt',
  icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___rawMarkdownBody = 'icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___rawMarkdownBody',
  icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___html = 'icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___html',
  icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___htmlAst = 'icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___htmlAst',
  icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___excerptAst = 'icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___excerptAst',
  icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___headings = 'icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___headings',
  icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___timeToRead = 'icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___timeToRead',
  icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___tableOfContents = 'icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___tableOfContents',
  icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___children = 'icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___children',
  icon___childContentfulIconSvgTextNode___id = 'icon___childContentfulIconSvgTextNode___id',
  icon___childContentfulIconSvgTextNode___parent___id = 'icon___childContentfulIconSvgTextNode___parent___id',
  icon___childContentfulIconSvgTextNode___parent___children = 'icon___childContentfulIconSvgTextNode___parent___children',
  icon___childContentfulIconSvgTextNode___children = 'icon___childContentfulIconSvgTextNode___children',
  icon___childContentfulIconSvgTextNode___children___id = 'icon___childContentfulIconSvgTextNode___children___id',
  icon___childContentfulIconSvgTextNode___children___children = 'icon___childContentfulIconSvgTextNode___children___children',
  icon___childContentfulIconSvgTextNode___internal___content = 'icon___childContentfulIconSvgTextNode___internal___content',
  icon___childContentfulIconSvgTextNode___internal___contentDigest = 'icon___childContentfulIconSvgTextNode___internal___contentDigest',
  icon___childContentfulIconSvgTextNode___internal___description = 'icon___childContentfulIconSvgTextNode___internal___description',
  icon___childContentfulIconSvgTextNode___internal___fieldOwners = 'icon___childContentfulIconSvgTextNode___internal___fieldOwners',
  icon___childContentfulIconSvgTextNode___internal___ignoreType = 'icon___childContentfulIconSvgTextNode___internal___ignoreType',
  icon___childContentfulIconSvgTextNode___internal___mediaType = 'icon___childContentfulIconSvgTextNode___internal___mediaType',
  icon___childContentfulIconSvgTextNode___internal___owner = 'icon___childContentfulIconSvgTextNode___internal___owner',
  icon___childContentfulIconSvgTextNode___internal___type = 'icon___childContentfulIconSvgTextNode___internal___type',
  icon___childContentfulIconSvgTextNode___svg = 'icon___childContentfulIconSvgTextNode___svg',
  icon___childContentfulIconSvgTextNode___sys___type = 'icon___childContentfulIconSvgTextNode___sys___type',
  icon___childContentfulIconSvgTextNode___childrenMarkdownRemark = 'icon___childContentfulIconSvgTextNode___childrenMarkdownRemark',
  icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___id = 'icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___id',
  icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___excerpt = 'icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___excerpt',
  icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___rawMarkdownBody = 'icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___rawMarkdownBody',
  icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___html = 'icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___html',
  icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___htmlAst = 'icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___htmlAst',
  icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___excerptAst = 'icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___excerptAst',
  icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___headings = 'icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___headings',
  icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___timeToRead = 'icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___timeToRead',
  icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___tableOfContents = 'icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___tableOfContents',
  icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___children = 'icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___children',
  icon___childContentfulIconSvgTextNode___childMarkdownRemark___id = 'icon___childContentfulIconSvgTextNode___childMarkdownRemark___id',
  icon___childContentfulIconSvgTextNode___childMarkdownRemark___excerpt = 'icon___childContentfulIconSvgTextNode___childMarkdownRemark___excerpt',
  icon___childContentfulIconSvgTextNode___childMarkdownRemark___rawMarkdownBody = 'icon___childContentfulIconSvgTextNode___childMarkdownRemark___rawMarkdownBody',
  icon___childContentfulIconSvgTextNode___childMarkdownRemark___html = 'icon___childContentfulIconSvgTextNode___childMarkdownRemark___html',
  icon___childContentfulIconSvgTextNode___childMarkdownRemark___htmlAst = 'icon___childContentfulIconSvgTextNode___childMarkdownRemark___htmlAst',
  icon___childContentfulIconSvgTextNode___childMarkdownRemark___excerptAst = 'icon___childContentfulIconSvgTextNode___childMarkdownRemark___excerptAst',
  icon___childContentfulIconSvgTextNode___childMarkdownRemark___headings = 'icon___childContentfulIconSvgTextNode___childMarkdownRemark___headings',
  icon___childContentfulIconSvgTextNode___childMarkdownRemark___timeToRead = 'icon___childContentfulIconSvgTextNode___childMarkdownRemark___timeToRead',
  icon___childContentfulIconSvgTextNode___childMarkdownRemark___tableOfContents = 'icon___childContentfulIconSvgTextNode___childMarkdownRemark___tableOfContents',
  icon___childContentfulIconSvgTextNode___childMarkdownRemark___children = 'icon___childContentfulIconSvgTextNode___childMarkdownRemark___children',
  icon___parent___id = 'icon___parent___id',
  icon___parent___parent___id = 'icon___parent___parent___id',
  icon___parent___parent___children = 'icon___parent___parent___children',
  icon___parent___children = 'icon___parent___children',
  icon___parent___children___id = 'icon___parent___children___id',
  icon___parent___children___children = 'icon___parent___children___children',
  icon___parent___internal___content = 'icon___parent___internal___content',
  icon___parent___internal___contentDigest = 'icon___parent___internal___contentDigest',
  icon___parent___internal___description = 'icon___parent___internal___description',
  icon___parent___internal___fieldOwners = 'icon___parent___internal___fieldOwners',
  icon___parent___internal___ignoreType = 'icon___parent___internal___ignoreType',
  icon___parent___internal___mediaType = 'icon___parent___internal___mediaType',
  icon___parent___internal___owner = 'icon___parent___internal___owner',
  icon___parent___internal___type = 'icon___parent___internal___type',
  icon___children = 'icon___children',
  icon___children___id = 'icon___children___id',
  icon___children___parent___id = 'icon___children___parent___id',
  icon___children___parent___children = 'icon___children___parent___children',
  icon___children___children = 'icon___children___children',
  icon___children___children___id = 'icon___children___children___id',
  icon___children___children___children = 'icon___children___children___children',
  icon___children___internal___content = 'icon___children___internal___content',
  icon___children___internal___contentDigest = 'icon___children___internal___contentDigest',
  icon___children___internal___description = 'icon___children___internal___description',
  icon___children___internal___fieldOwners = 'icon___children___internal___fieldOwners',
  icon___children___internal___ignoreType = 'icon___children___internal___ignoreType',
  icon___children___internal___mediaType = 'icon___children___internal___mediaType',
  icon___children___internal___owner = 'icon___children___internal___owner',
  icon___children___internal___type = 'icon___children___internal___type',
  icon___internal___content = 'icon___internal___content',
  icon___internal___contentDigest = 'icon___internal___contentDigest',
  icon___internal___description = 'icon___internal___description',
  icon___internal___fieldOwners = 'icon___internal___fieldOwners',
  icon___internal___ignoreType = 'icon___internal___ignoreType',
  icon___internal___mediaType = 'icon___internal___mediaType',
  icon___internal___owner = 'icon___internal___owner',
  icon___internal___type = 'icon___internal___type',
  detail___id = 'detail___id',
  detail___parent___id = 'detail___parent___id',
  detail___parent___parent___id = 'detail___parent___parent___id',
  detail___parent___parent___children = 'detail___parent___parent___children',
  detail___parent___children = 'detail___parent___children',
  detail___parent___children___id = 'detail___parent___children___id',
  detail___parent___children___children = 'detail___parent___children___children',
  detail___parent___internal___content = 'detail___parent___internal___content',
  detail___parent___internal___contentDigest = 'detail___parent___internal___contentDigest',
  detail___parent___internal___description = 'detail___parent___internal___description',
  detail___parent___internal___fieldOwners = 'detail___parent___internal___fieldOwners',
  detail___parent___internal___ignoreType = 'detail___parent___internal___ignoreType',
  detail___parent___internal___mediaType = 'detail___parent___internal___mediaType',
  detail___parent___internal___owner = 'detail___parent___internal___owner',
  detail___parent___internal___type = 'detail___parent___internal___type',
  detail___children = 'detail___children',
  detail___children___id = 'detail___children___id',
  detail___children___parent___id = 'detail___children___parent___id',
  detail___children___parent___children = 'detail___children___parent___children',
  detail___children___children = 'detail___children___children',
  detail___children___children___id = 'detail___children___children___id',
  detail___children___children___children = 'detail___children___children___children',
  detail___children___internal___content = 'detail___children___internal___content',
  detail___children___internal___contentDigest = 'detail___children___internal___contentDigest',
  detail___children___internal___description = 'detail___children___internal___description',
  detail___children___internal___fieldOwners = 'detail___children___internal___fieldOwners',
  detail___children___internal___ignoreType = 'detail___children___internal___ignoreType',
  detail___children___internal___mediaType = 'detail___children___internal___mediaType',
  detail___children___internal___owner = 'detail___children___internal___owner',
  detail___children___internal___type = 'detail___children___internal___type',
  detail___internal___content = 'detail___internal___content',
  detail___internal___contentDigest = 'detail___internal___contentDigest',
  detail___internal___description = 'detail___internal___description',
  detail___internal___fieldOwners = 'detail___internal___fieldOwners',
  detail___internal___ignoreType = 'detail___internal___ignoreType',
  detail___internal___mediaType = 'detail___internal___mediaType',
  detail___internal___owner = 'detail___internal___owner',
  detail___internal___type = 'detail___internal___type',
  detail___detail = 'detail___detail',
  detail___sys___type = 'detail___sys___type',
  detail___childrenMarkdownRemark = 'detail___childrenMarkdownRemark',
  detail___childrenMarkdownRemark___id = 'detail___childrenMarkdownRemark___id',
  detail___childrenMarkdownRemark___frontmatter___title = 'detail___childrenMarkdownRemark___frontmatter___title',
  detail___childrenMarkdownRemark___excerpt = 'detail___childrenMarkdownRemark___excerpt',
  detail___childrenMarkdownRemark___rawMarkdownBody = 'detail___childrenMarkdownRemark___rawMarkdownBody',
  detail___childrenMarkdownRemark___html = 'detail___childrenMarkdownRemark___html',
  detail___childrenMarkdownRemark___htmlAst = 'detail___childrenMarkdownRemark___htmlAst',
  detail___childrenMarkdownRemark___excerptAst = 'detail___childrenMarkdownRemark___excerptAst',
  detail___childrenMarkdownRemark___headings = 'detail___childrenMarkdownRemark___headings',
  detail___childrenMarkdownRemark___headings___id = 'detail___childrenMarkdownRemark___headings___id',
  detail___childrenMarkdownRemark___headings___value = 'detail___childrenMarkdownRemark___headings___value',
  detail___childrenMarkdownRemark___headings___depth = 'detail___childrenMarkdownRemark___headings___depth',
  detail___childrenMarkdownRemark___timeToRead = 'detail___childrenMarkdownRemark___timeToRead',
  detail___childrenMarkdownRemark___tableOfContents = 'detail___childrenMarkdownRemark___tableOfContents',
  detail___childrenMarkdownRemark___wordCount___paragraphs = 'detail___childrenMarkdownRemark___wordCount___paragraphs',
  detail___childrenMarkdownRemark___wordCount___sentences = 'detail___childrenMarkdownRemark___wordCount___sentences',
  detail___childrenMarkdownRemark___wordCount___words = 'detail___childrenMarkdownRemark___wordCount___words',
  detail___childrenMarkdownRemark___parent___id = 'detail___childrenMarkdownRemark___parent___id',
  detail___childrenMarkdownRemark___parent___children = 'detail___childrenMarkdownRemark___parent___children',
  detail___childrenMarkdownRemark___children = 'detail___childrenMarkdownRemark___children',
  detail___childrenMarkdownRemark___children___id = 'detail___childrenMarkdownRemark___children___id',
  detail___childrenMarkdownRemark___children___children = 'detail___childrenMarkdownRemark___children___children',
  detail___childrenMarkdownRemark___internal___content = 'detail___childrenMarkdownRemark___internal___content',
  detail___childrenMarkdownRemark___internal___contentDigest = 'detail___childrenMarkdownRemark___internal___contentDigest',
  detail___childrenMarkdownRemark___internal___description = 'detail___childrenMarkdownRemark___internal___description',
  detail___childrenMarkdownRemark___internal___fieldOwners = 'detail___childrenMarkdownRemark___internal___fieldOwners',
  detail___childrenMarkdownRemark___internal___ignoreType = 'detail___childrenMarkdownRemark___internal___ignoreType',
  detail___childrenMarkdownRemark___internal___mediaType = 'detail___childrenMarkdownRemark___internal___mediaType',
  detail___childrenMarkdownRemark___internal___owner = 'detail___childrenMarkdownRemark___internal___owner',
  detail___childrenMarkdownRemark___internal___type = 'detail___childrenMarkdownRemark___internal___type',
  detail___childMarkdownRemark___id = 'detail___childMarkdownRemark___id',
  detail___childMarkdownRemark___frontmatter___title = 'detail___childMarkdownRemark___frontmatter___title',
  detail___childMarkdownRemark___excerpt = 'detail___childMarkdownRemark___excerpt',
  detail___childMarkdownRemark___rawMarkdownBody = 'detail___childMarkdownRemark___rawMarkdownBody',
  detail___childMarkdownRemark___html = 'detail___childMarkdownRemark___html',
  detail___childMarkdownRemark___htmlAst = 'detail___childMarkdownRemark___htmlAst',
  detail___childMarkdownRemark___excerptAst = 'detail___childMarkdownRemark___excerptAst',
  detail___childMarkdownRemark___headings = 'detail___childMarkdownRemark___headings',
  detail___childMarkdownRemark___headings___id = 'detail___childMarkdownRemark___headings___id',
  detail___childMarkdownRemark___headings___value = 'detail___childMarkdownRemark___headings___value',
  detail___childMarkdownRemark___headings___depth = 'detail___childMarkdownRemark___headings___depth',
  detail___childMarkdownRemark___timeToRead = 'detail___childMarkdownRemark___timeToRead',
  detail___childMarkdownRemark___tableOfContents = 'detail___childMarkdownRemark___tableOfContents',
  detail___childMarkdownRemark___wordCount___paragraphs = 'detail___childMarkdownRemark___wordCount___paragraphs',
  detail___childMarkdownRemark___wordCount___sentences = 'detail___childMarkdownRemark___wordCount___sentences',
  detail___childMarkdownRemark___wordCount___words = 'detail___childMarkdownRemark___wordCount___words',
  detail___childMarkdownRemark___parent___id = 'detail___childMarkdownRemark___parent___id',
  detail___childMarkdownRemark___parent___children = 'detail___childMarkdownRemark___parent___children',
  detail___childMarkdownRemark___children = 'detail___childMarkdownRemark___children',
  detail___childMarkdownRemark___children___id = 'detail___childMarkdownRemark___children___id',
  detail___childMarkdownRemark___children___children = 'detail___childMarkdownRemark___children___children',
  detail___childMarkdownRemark___internal___content = 'detail___childMarkdownRemark___internal___content',
  detail___childMarkdownRemark___internal___contentDigest = 'detail___childMarkdownRemark___internal___contentDigest',
  detail___childMarkdownRemark___internal___description = 'detail___childMarkdownRemark___internal___description',
  detail___childMarkdownRemark___internal___fieldOwners = 'detail___childMarkdownRemark___internal___fieldOwners',
  detail___childMarkdownRemark___internal___ignoreType = 'detail___childMarkdownRemark___internal___ignoreType',
  detail___childMarkdownRemark___internal___mediaType = 'detail___childMarkdownRemark___internal___mediaType',
  detail___childMarkdownRemark___internal___owner = 'detail___childMarkdownRemark___internal___owner',
  detail___childMarkdownRemark___internal___type = 'detail___childMarkdownRemark___internal___type',
  spaceId = 'spaceId',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  sys___type = 'sys___type',
  sys___revision = 'sys___revision',
  sys___contentType___sys___type = 'sys___contentType___sys___type',
  sys___contentType___sys___linkType = 'sys___contentType___sys___linkType',
  sys___contentType___sys___id = 'sys___contentType___sys___id',
  childrenContentfulProjectDetailTextNode = 'childrenContentfulProjectDetailTextNode',
  childrenContentfulProjectDetailTextNode___id = 'childrenContentfulProjectDetailTextNode___id',
  childrenContentfulProjectDetailTextNode___parent___id = 'childrenContentfulProjectDetailTextNode___parent___id',
  childrenContentfulProjectDetailTextNode___parent___parent___id = 'childrenContentfulProjectDetailTextNode___parent___parent___id',
  childrenContentfulProjectDetailTextNode___parent___parent___children = 'childrenContentfulProjectDetailTextNode___parent___parent___children',
  childrenContentfulProjectDetailTextNode___parent___children = 'childrenContentfulProjectDetailTextNode___parent___children',
  childrenContentfulProjectDetailTextNode___parent___children___id = 'childrenContentfulProjectDetailTextNode___parent___children___id',
  childrenContentfulProjectDetailTextNode___parent___children___children = 'childrenContentfulProjectDetailTextNode___parent___children___children',
  childrenContentfulProjectDetailTextNode___parent___internal___content = 'childrenContentfulProjectDetailTextNode___parent___internal___content',
  childrenContentfulProjectDetailTextNode___parent___internal___contentDigest = 'childrenContentfulProjectDetailTextNode___parent___internal___contentDigest',
  childrenContentfulProjectDetailTextNode___parent___internal___description = 'childrenContentfulProjectDetailTextNode___parent___internal___description',
  childrenContentfulProjectDetailTextNode___parent___internal___fieldOwners = 'childrenContentfulProjectDetailTextNode___parent___internal___fieldOwners',
  childrenContentfulProjectDetailTextNode___parent___internal___ignoreType = 'childrenContentfulProjectDetailTextNode___parent___internal___ignoreType',
  childrenContentfulProjectDetailTextNode___parent___internal___mediaType = 'childrenContentfulProjectDetailTextNode___parent___internal___mediaType',
  childrenContentfulProjectDetailTextNode___parent___internal___owner = 'childrenContentfulProjectDetailTextNode___parent___internal___owner',
  childrenContentfulProjectDetailTextNode___parent___internal___type = 'childrenContentfulProjectDetailTextNode___parent___internal___type',
  childrenContentfulProjectDetailTextNode___children = 'childrenContentfulProjectDetailTextNode___children',
  childrenContentfulProjectDetailTextNode___children___id = 'childrenContentfulProjectDetailTextNode___children___id',
  childrenContentfulProjectDetailTextNode___children___parent___id = 'childrenContentfulProjectDetailTextNode___children___parent___id',
  childrenContentfulProjectDetailTextNode___children___parent___children = 'childrenContentfulProjectDetailTextNode___children___parent___children',
  childrenContentfulProjectDetailTextNode___children___children = 'childrenContentfulProjectDetailTextNode___children___children',
  childrenContentfulProjectDetailTextNode___children___children___id = 'childrenContentfulProjectDetailTextNode___children___children___id',
  childrenContentfulProjectDetailTextNode___children___children___children = 'childrenContentfulProjectDetailTextNode___children___children___children',
  childrenContentfulProjectDetailTextNode___children___internal___content = 'childrenContentfulProjectDetailTextNode___children___internal___content',
  childrenContentfulProjectDetailTextNode___children___internal___contentDigest = 'childrenContentfulProjectDetailTextNode___children___internal___contentDigest',
  childrenContentfulProjectDetailTextNode___children___internal___description = 'childrenContentfulProjectDetailTextNode___children___internal___description',
  childrenContentfulProjectDetailTextNode___children___internal___fieldOwners = 'childrenContentfulProjectDetailTextNode___children___internal___fieldOwners',
  childrenContentfulProjectDetailTextNode___children___internal___ignoreType = 'childrenContentfulProjectDetailTextNode___children___internal___ignoreType',
  childrenContentfulProjectDetailTextNode___children___internal___mediaType = 'childrenContentfulProjectDetailTextNode___children___internal___mediaType',
  childrenContentfulProjectDetailTextNode___children___internal___owner = 'childrenContentfulProjectDetailTextNode___children___internal___owner',
  childrenContentfulProjectDetailTextNode___children___internal___type = 'childrenContentfulProjectDetailTextNode___children___internal___type',
  childrenContentfulProjectDetailTextNode___internal___content = 'childrenContentfulProjectDetailTextNode___internal___content',
  childrenContentfulProjectDetailTextNode___internal___contentDigest = 'childrenContentfulProjectDetailTextNode___internal___contentDigest',
  childrenContentfulProjectDetailTextNode___internal___description = 'childrenContentfulProjectDetailTextNode___internal___description',
  childrenContentfulProjectDetailTextNode___internal___fieldOwners = 'childrenContentfulProjectDetailTextNode___internal___fieldOwners',
  childrenContentfulProjectDetailTextNode___internal___ignoreType = 'childrenContentfulProjectDetailTextNode___internal___ignoreType',
  childrenContentfulProjectDetailTextNode___internal___mediaType = 'childrenContentfulProjectDetailTextNode___internal___mediaType',
  childrenContentfulProjectDetailTextNode___internal___owner = 'childrenContentfulProjectDetailTextNode___internal___owner',
  childrenContentfulProjectDetailTextNode___internal___type = 'childrenContentfulProjectDetailTextNode___internal___type',
  childrenContentfulProjectDetailTextNode___detail = 'childrenContentfulProjectDetailTextNode___detail',
  childrenContentfulProjectDetailTextNode___sys___type = 'childrenContentfulProjectDetailTextNode___sys___type',
  childrenContentfulProjectDetailTextNode___childrenMarkdownRemark = 'childrenContentfulProjectDetailTextNode___childrenMarkdownRemark',
  childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___id = 'childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___id',
  childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___frontmatter___title = 'childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___frontmatter___title',
  childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___excerpt = 'childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___excerpt',
  childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___rawMarkdownBody = 'childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___rawMarkdownBody',
  childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___html = 'childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___html',
  childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___htmlAst = 'childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___htmlAst',
  childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___excerptAst = 'childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___excerptAst',
  childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___headings = 'childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___headings',
  childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___headings___id = 'childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___headings___id',
  childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___headings___value = 'childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___headings___value',
  childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___headings___depth = 'childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___headings___depth',
  childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___timeToRead = 'childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___timeToRead',
  childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___tableOfContents = 'childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___tableOfContents',
  childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___wordCount___paragraphs = 'childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___wordCount___paragraphs',
  childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___wordCount___sentences = 'childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___wordCount___sentences',
  childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___wordCount___words = 'childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___wordCount___words',
  childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___parent___id = 'childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___parent___id',
  childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___parent___children = 'childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___parent___children',
  childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___children = 'childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___children',
  childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___children___id = 'childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___children___id',
  childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___children___children = 'childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___children___children',
  childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___internal___content = 'childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___internal___content',
  childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___internal___contentDigest = 'childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___internal___contentDigest',
  childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___internal___description = 'childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___internal___description',
  childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___internal___fieldOwners = 'childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___internal___fieldOwners',
  childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___internal___ignoreType = 'childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___internal___ignoreType',
  childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___internal___mediaType = 'childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___internal___mediaType',
  childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___internal___owner = 'childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___internal___owner',
  childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___internal___type = 'childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___internal___type',
  childrenContentfulProjectDetailTextNode___childMarkdownRemark___id = 'childrenContentfulProjectDetailTextNode___childMarkdownRemark___id',
  childrenContentfulProjectDetailTextNode___childMarkdownRemark___frontmatter___title = 'childrenContentfulProjectDetailTextNode___childMarkdownRemark___frontmatter___title',
  childrenContentfulProjectDetailTextNode___childMarkdownRemark___excerpt = 'childrenContentfulProjectDetailTextNode___childMarkdownRemark___excerpt',
  childrenContentfulProjectDetailTextNode___childMarkdownRemark___rawMarkdownBody = 'childrenContentfulProjectDetailTextNode___childMarkdownRemark___rawMarkdownBody',
  childrenContentfulProjectDetailTextNode___childMarkdownRemark___html = 'childrenContentfulProjectDetailTextNode___childMarkdownRemark___html',
  childrenContentfulProjectDetailTextNode___childMarkdownRemark___htmlAst = 'childrenContentfulProjectDetailTextNode___childMarkdownRemark___htmlAst',
  childrenContentfulProjectDetailTextNode___childMarkdownRemark___excerptAst = 'childrenContentfulProjectDetailTextNode___childMarkdownRemark___excerptAst',
  childrenContentfulProjectDetailTextNode___childMarkdownRemark___headings = 'childrenContentfulProjectDetailTextNode___childMarkdownRemark___headings',
  childrenContentfulProjectDetailTextNode___childMarkdownRemark___headings___id = 'childrenContentfulProjectDetailTextNode___childMarkdownRemark___headings___id',
  childrenContentfulProjectDetailTextNode___childMarkdownRemark___headings___value = 'childrenContentfulProjectDetailTextNode___childMarkdownRemark___headings___value',
  childrenContentfulProjectDetailTextNode___childMarkdownRemark___headings___depth = 'childrenContentfulProjectDetailTextNode___childMarkdownRemark___headings___depth',
  childrenContentfulProjectDetailTextNode___childMarkdownRemark___timeToRead = 'childrenContentfulProjectDetailTextNode___childMarkdownRemark___timeToRead',
  childrenContentfulProjectDetailTextNode___childMarkdownRemark___tableOfContents = 'childrenContentfulProjectDetailTextNode___childMarkdownRemark___tableOfContents',
  childrenContentfulProjectDetailTextNode___childMarkdownRemark___wordCount___paragraphs = 'childrenContentfulProjectDetailTextNode___childMarkdownRemark___wordCount___paragraphs',
  childrenContentfulProjectDetailTextNode___childMarkdownRemark___wordCount___sentences = 'childrenContentfulProjectDetailTextNode___childMarkdownRemark___wordCount___sentences',
  childrenContentfulProjectDetailTextNode___childMarkdownRemark___wordCount___words = 'childrenContentfulProjectDetailTextNode___childMarkdownRemark___wordCount___words',
  childrenContentfulProjectDetailTextNode___childMarkdownRemark___parent___id = 'childrenContentfulProjectDetailTextNode___childMarkdownRemark___parent___id',
  childrenContentfulProjectDetailTextNode___childMarkdownRemark___parent___children = 'childrenContentfulProjectDetailTextNode___childMarkdownRemark___parent___children',
  childrenContentfulProjectDetailTextNode___childMarkdownRemark___children = 'childrenContentfulProjectDetailTextNode___childMarkdownRemark___children',
  childrenContentfulProjectDetailTextNode___childMarkdownRemark___children___id = 'childrenContentfulProjectDetailTextNode___childMarkdownRemark___children___id',
  childrenContentfulProjectDetailTextNode___childMarkdownRemark___children___children = 'childrenContentfulProjectDetailTextNode___childMarkdownRemark___children___children',
  childrenContentfulProjectDetailTextNode___childMarkdownRemark___internal___content = 'childrenContentfulProjectDetailTextNode___childMarkdownRemark___internal___content',
  childrenContentfulProjectDetailTextNode___childMarkdownRemark___internal___contentDigest = 'childrenContentfulProjectDetailTextNode___childMarkdownRemark___internal___contentDigest',
  childrenContentfulProjectDetailTextNode___childMarkdownRemark___internal___description = 'childrenContentfulProjectDetailTextNode___childMarkdownRemark___internal___description',
  childrenContentfulProjectDetailTextNode___childMarkdownRemark___internal___fieldOwners = 'childrenContentfulProjectDetailTextNode___childMarkdownRemark___internal___fieldOwners',
  childrenContentfulProjectDetailTextNode___childMarkdownRemark___internal___ignoreType = 'childrenContentfulProjectDetailTextNode___childMarkdownRemark___internal___ignoreType',
  childrenContentfulProjectDetailTextNode___childMarkdownRemark___internal___mediaType = 'childrenContentfulProjectDetailTextNode___childMarkdownRemark___internal___mediaType',
  childrenContentfulProjectDetailTextNode___childMarkdownRemark___internal___owner = 'childrenContentfulProjectDetailTextNode___childMarkdownRemark___internal___owner',
  childrenContentfulProjectDetailTextNode___childMarkdownRemark___internal___type = 'childrenContentfulProjectDetailTextNode___childMarkdownRemark___internal___type',
  childContentfulProjectDetailTextNode___id = 'childContentfulProjectDetailTextNode___id',
  childContentfulProjectDetailTextNode___parent___id = 'childContentfulProjectDetailTextNode___parent___id',
  childContentfulProjectDetailTextNode___parent___parent___id = 'childContentfulProjectDetailTextNode___parent___parent___id',
  childContentfulProjectDetailTextNode___parent___parent___children = 'childContentfulProjectDetailTextNode___parent___parent___children',
  childContentfulProjectDetailTextNode___parent___children = 'childContentfulProjectDetailTextNode___parent___children',
  childContentfulProjectDetailTextNode___parent___children___id = 'childContentfulProjectDetailTextNode___parent___children___id',
  childContentfulProjectDetailTextNode___parent___children___children = 'childContentfulProjectDetailTextNode___parent___children___children',
  childContentfulProjectDetailTextNode___parent___internal___content = 'childContentfulProjectDetailTextNode___parent___internal___content',
  childContentfulProjectDetailTextNode___parent___internal___contentDigest = 'childContentfulProjectDetailTextNode___parent___internal___contentDigest',
  childContentfulProjectDetailTextNode___parent___internal___description = 'childContentfulProjectDetailTextNode___parent___internal___description',
  childContentfulProjectDetailTextNode___parent___internal___fieldOwners = 'childContentfulProjectDetailTextNode___parent___internal___fieldOwners',
  childContentfulProjectDetailTextNode___parent___internal___ignoreType = 'childContentfulProjectDetailTextNode___parent___internal___ignoreType',
  childContentfulProjectDetailTextNode___parent___internal___mediaType = 'childContentfulProjectDetailTextNode___parent___internal___mediaType',
  childContentfulProjectDetailTextNode___parent___internal___owner = 'childContentfulProjectDetailTextNode___parent___internal___owner',
  childContentfulProjectDetailTextNode___parent___internal___type = 'childContentfulProjectDetailTextNode___parent___internal___type',
  childContentfulProjectDetailTextNode___children = 'childContentfulProjectDetailTextNode___children',
  childContentfulProjectDetailTextNode___children___id = 'childContentfulProjectDetailTextNode___children___id',
  childContentfulProjectDetailTextNode___children___parent___id = 'childContentfulProjectDetailTextNode___children___parent___id',
  childContentfulProjectDetailTextNode___children___parent___children = 'childContentfulProjectDetailTextNode___children___parent___children',
  childContentfulProjectDetailTextNode___children___children = 'childContentfulProjectDetailTextNode___children___children',
  childContentfulProjectDetailTextNode___children___children___id = 'childContentfulProjectDetailTextNode___children___children___id',
  childContentfulProjectDetailTextNode___children___children___children = 'childContentfulProjectDetailTextNode___children___children___children',
  childContentfulProjectDetailTextNode___children___internal___content = 'childContentfulProjectDetailTextNode___children___internal___content',
  childContentfulProjectDetailTextNode___children___internal___contentDigest = 'childContentfulProjectDetailTextNode___children___internal___contentDigest',
  childContentfulProjectDetailTextNode___children___internal___description = 'childContentfulProjectDetailTextNode___children___internal___description',
  childContentfulProjectDetailTextNode___children___internal___fieldOwners = 'childContentfulProjectDetailTextNode___children___internal___fieldOwners',
  childContentfulProjectDetailTextNode___children___internal___ignoreType = 'childContentfulProjectDetailTextNode___children___internal___ignoreType',
  childContentfulProjectDetailTextNode___children___internal___mediaType = 'childContentfulProjectDetailTextNode___children___internal___mediaType',
  childContentfulProjectDetailTextNode___children___internal___owner = 'childContentfulProjectDetailTextNode___children___internal___owner',
  childContentfulProjectDetailTextNode___children___internal___type = 'childContentfulProjectDetailTextNode___children___internal___type',
  childContentfulProjectDetailTextNode___internal___content = 'childContentfulProjectDetailTextNode___internal___content',
  childContentfulProjectDetailTextNode___internal___contentDigest = 'childContentfulProjectDetailTextNode___internal___contentDigest',
  childContentfulProjectDetailTextNode___internal___description = 'childContentfulProjectDetailTextNode___internal___description',
  childContentfulProjectDetailTextNode___internal___fieldOwners = 'childContentfulProjectDetailTextNode___internal___fieldOwners',
  childContentfulProjectDetailTextNode___internal___ignoreType = 'childContentfulProjectDetailTextNode___internal___ignoreType',
  childContentfulProjectDetailTextNode___internal___mediaType = 'childContentfulProjectDetailTextNode___internal___mediaType',
  childContentfulProjectDetailTextNode___internal___owner = 'childContentfulProjectDetailTextNode___internal___owner',
  childContentfulProjectDetailTextNode___internal___type = 'childContentfulProjectDetailTextNode___internal___type',
  childContentfulProjectDetailTextNode___detail = 'childContentfulProjectDetailTextNode___detail',
  childContentfulProjectDetailTextNode___sys___type = 'childContentfulProjectDetailTextNode___sys___type',
  childContentfulProjectDetailTextNode___childrenMarkdownRemark = 'childContentfulProjectDetailTextNode___childrenMarkdownRemark',
  childContentfulProjectDetailTextNode___childrenMarkdownRemark___id = 'childContentfulProjectDetailTextNode___childrenMarkdownRemark___id',
  childContentfulProjectDetailTextNode___childrenMarkdownRemark___frontmatter___title = 'childContentfulProjectDetailTextNode___childrenMarkdownRemark___frontmatter___title',
  childContentfulProjectDetailTextNode___childrenMarkdownRemark___excerpt = 'childContentfulProjectDetailTextNode___childrenMarkdownRemark___excerpt',
  childContentfulProjectDetailTextNode___childrenMarkdownRemark___rawMarkdownBody = 'childContentfulProjectDetailTextNode___childrenMarkdownRemark___rawMarkdownBody',
  childContentfulProjectDetailTextNode___childrenMarkdownRemark___html = 'childContentfulProjectDetailTextNode___childrenMarkdownRemark___html',
  childContentfulProjectDetailTextNode___childrenMarkdownRemark___htmlAst = 'childContentfulProjectDetailTextNode___childrenMarkdownRemark___htmlAst',
  childContentfulProjectDetailTextNode___childrenMarkdownRemark___excerptAst = 'childContentfulProjectDetailTextNode___childrenMarkdownRemark___excerptAst',
  childContentfulProjectDetailTextNode___childrenMarkdownRemark___headings = 'childContentfulProjectDetailTextNode___childrenMarkdownRemark___headings',
  childContentfulProjectDetailTextNode___childrenMarkdownRemark___headings___id = 'childContentfulProjectDetailTextNode___childrenMarkdownRemark___headings___id',
  childContentfulProjectDetailTextNode___childrenMarkdownRemark___headings___value = 'childContentfulProjectDetailTextNode___childrenMarkdownRemark___headings___value',
  childContentfulProjectDetailTextNode___childrenMarkdownRemark___headings___depth = 'childContentfulProjectDetailTextNode___childrenMarkdownRemark___headings___depth',
  childContentfulProjectDetailTextNode___childrenMarkdownRemark___timeToRead = 'childContentfulProjectDetailTextNode___childrenMarkdownRemark___timeToRead',
  childContentfulProjectDetailTextNode___childrenMarkdownRemark___tableOfContents = 'childContentfulProjectDetailTextNode___childrenMarkdownRemark___tableOfContents',
  childContentfulProjectDetailTextNode___childrenMarkdownRemark___wordCount___paragraphs = 'childContentfulProjectDetailTextNode___childrenMarkdownRemark___wordCount___paragraphs',
  childContentfulProjectDetailTextNode___childrenMarkdownRemark___wordCount___sentences = 'childContentfulProjectDetailTextNode___childrenMarkdownRemark___wordCount___sentences',
  childContentfulProjectDetailTextNode___childrenMarkdownRemark___wordCount___words = 'childContentfulProjectDetailTextNode___childrenMarkdownRemark___wordCount___words',
  childContentfulProjectDetailTextNode___childrenMarkdownRemark___parent___id = 'childContentfulProjectDetailTextNode___childrenMarkdownRemark___parent___id',
  childContentfulProjectDetailTextNode___childrenMarkdownRemark___parent___children = 'childContentfulProjectDetailTextNode___childrenMarkdownRemark___parent___children',
  childContentfulProjectDetailTextNode___childrenMarkdownRemark___children = 'childContentfulProjectDetailTextNode___childrenMarkdownRemark___children',
  childContentfulProjectDetailTextNode___childrenMarkdownRemark___children___id = 'childContentfulProjectDetailTextNode___childrenMarkdownRemark___children___id',
  childContentfulProjectDetailTextNode___childrenMarkdownRemark___children___children = 'childContentfulProjectDetailTextNode___childrenMarkdownRemark___children___children',
  childContentfulProjectDetailTextNode___childrenMarkdownRemark___internal___content = 'childContentfulProjectDetailTextNode___childrenMarkdownRemark___internal___content',
  childContentfulProjectDetailTextNode___childrenMarkdownRemark___internal___contentDigest = 'childContentfulProjectDetailTextNode___childrenMarkdownRemark___internal___contentDigest',
  childContentfulProjectDetailTextNode___childrenMarkdownRemark___internal___description = 'childContentfulProjectDetailTextNode___childrenMarkdownRemark___internal___description',
  childContentfulProjectDetailTextNode___childrenMarkdownRemark___internal___fieldOwners = 'childContentfulProjectDetailTextNode___childrenMarkdownRemark___internal___fieldOwners',
  childContentfulProjectDetailTextNode___childrenMarkdownRemark___internal___ignoreType = 'childContentfulProjectDetailTextNode___childrenMarkdownRemark___internal___ignoreType',
  childContentfulProjectDetailTextNode___childrenMarkdownRemark___internal___mediaType = 'childContentfulProjectDetailTextNode___childrenMarkdownRemark___internal___mediaType',
  childContentfulProjectDetailTextNode___childrenMarkdownRemark___internal___owner = 'childContentfulProjectDetailTextNode___childrenMarkdownRemark___internal___owner',
  childContentfulProjectDetailTextNode___childrenMarkdownRemark___internal___type = 'childContentfulProjectDetailTextNode___childrenMarkdownRemark___internal___type',
  childContentfulProjectDetailTextNode___childMarkdownRemark___id = 'childContentfulProjectDetailTextNode___childMarkdownRemark___id',
  childContentfulProjectDetailTextNode___childMarkdownRemark___frontmatter___title = 'childContentfulProjectDetailTextNode___childMarkdownRemark___frontmatter___title',
  childContentfulProjectDetailTextNode___childMarkdownRemark___excerpt = 'childContentfulProjectDetailTextNode___childMarkdownRemark___excerpt',
  childContentfulProjectDetailTextNode___childMarkdownRemark___rawMarkdownBody = 'childContentfulProjectDetailTextNode___childMarkdownRemark___rawMarkdownBody',
  childContentfulProjectDetailTextNode___childMarkdownRemark___html = 'childContentfulProjectDetailTextNode___childMarkdownRemark___html',
  childContentfulProjectDetailTextNode___childMarkdownRemark___htmlAst = 'childContentfulProjectDetailTextNode___childMarkdownRemark___htmlAst',
  childContentfulProjectDetailTextNode___childMarkdownRemark___excerptAst = 'childContentfulProjectDetailTextNode___childMarkdownRemark___excerptAst',
  childContentfulProjectDetailTextNode___childMarkdownRemark___headings = 'childContentfulProjectDetailTextNode___childMarkdownRemark___headings',
  childContentfulProjectDetailTextNode___childMarkdownRemark___headings___id = 'childContentfulProjectDetailTextNode___childMarkdownRemark___headings___id',
  childContentfulProjectDetailTextNode___childMarkdownRemark___headings___value = 'childContentfulProjectDetailTextNode___childMarkdownRemark___headings___value',
  childContentfulProjectDetailTextNode___childMarkdownRemark___headings___depth = 'childContentfulProjectDetailTextNode___childMarkdownRemark___headings___depth',
  childContentfulProjectDetailTextNode___childMarkdownRemark___timeToRead = 'childContentfulProjectDetailTextNode___childMarkdownRemark___timeToRead',
  childContentfulProjectDetailTextNode___childMarkdownRemark___tableOfContents = 'childContentfulProjectDetailTextNode___childMarkdownRemark___tableOfContents',
  childContentfulProjectDetailTextNode___childMarkdownRemark___wordCount___paragraphs = 'childContentfulProjectDetailTextNode___childMarkdownRemark___wordCount___paragraphs',
  childContentfulProjectDetailTextNode___childMarkdownRemark___wordCount___sentences = 'childContentfulProjectDetailTextNode___childMarkdownRemark___wordCount___sentences',
  childContentfulProjectDetailTextNode___childMarkdownRemark___wordCount___words = 'childContentfulProjectDetailTextNode___childMarkdownRemark___wordCount___words',
  childContentfulProjectDetailTextNode___childMarkdownRemark___parent___id = 'childContentfulProjectDetailTextNode___childMarkdownRemark___parent___id',
  childContentfulProjectDetailTextNode___childMarkdownRemark___parent___children = 'childContentfulProjectDetailTextNode___childMarkdownRemark___parent___children',
  childContentfulProjectDetailTextNode___childMarkdownRemark___children = 'childContentfulProjectDetailTextNode___childMarkdownRemark___children',
  childContentfulProjectDetailTextNode___childMarkdownRemark___children___id = 'childContentfulProjectDetailTextNode___childMarkdownRemark___children___id',
  childContentfulProjectDetailTextNode___childMarkdownRemark___children___children = 'childContentfulProjectDetailTextNode___childMarkdownRemark___children___children',
  childContentfulProjectDetailTextNode___childMarkdownRemark___internal___content = 'childContentfulProjectDetailTextNode___childMarkdownRemark___internal___content',
  childContentfulProjectDetailTextNode___childMarkdownRemark___internal___contentDigest = 'childContentfulProjectDetailTextNode___childMarkdownRemark___internal___contentDigest',
  childContentfulProjectDetailTextNode___childMarkdownRemark___internal___description = 'childContentfulProjectDetailTextNode___childMarkdownRemark___internal___description',
  childContentfulProjectDetailTextNode___childMarkdownRemark___internal___fieldOwners = 'childContentfulProjectDetailTextNode___childMarkdownRemark___internal___fieldOwners',
  childContentfulProjectDetailTextNode___childMarkdownRemark___internal___ignoreType = 'childContentfulProjectDetailTextNode___childMarkdownRemark___internal___ignoreType',
  childContentfulProjectDetailTextNode___childMarkdownRemark___internal___mediaType = 'childContentfulProjectDetailTextNode___childMarkdownRemark___internal___mediaType',
  childContentfulProjectDetailTextNode___childMarkdownRemark___internal___owner = 'childContentfulProjectDetailTextNode___childMarkdownRemark___internal___owner',
  childContentfulProjectDetailTextNode___childMarkdownRemark___internal___type = 'childContentfulProjectDetailTextNode___childMarkdownRemark___internal___type',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type'
}

export type ContentfulProjectFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  subName?: Maybe<StringQueryOperatorInput>;
  startDate?: Maybe<DateQueryOperatorInput>;
  endDate?: Maybe<DateQueryOperatorInput>;
  tags?: Maybe<ContentfulTagFilterListInput>;
  icon?: Maybe<ContentfulIconFilterInput>;
  detail?: Maybe<ContentfulProjectDetailTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulProjectSysFilterInput>;
  childrenContentfulProjectDetailTextNode?: Maybe<ContentfulProjectDetailTextNodeFilterListInput>;
  childContentfulProjectDetailTextNode?: Maybe<ContentfulProjectDetailTextNodeFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ContentfulProjectFilterListInput = {
  elemMatch?: Maybe<ContentfulProjectFilterInput>;
};

export type ContentfulProjectGroupConnection = {
  __typename?: 'ContentfulProjectGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulProjectEdge>;
  nodes: Array<ContentfulProject>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulProjectSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulProjectFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulProjectSys = {
  __typename?: 'ContentfulProjectSys';
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulProjectSysContentType>;
};

export type ContentfulProjectSysContentType = {
  __typename?: 'ContentfulProjectSysContentType';
  sys?: Maybe<ContentfulProjectSysContentTypeSys>;
};

export type ContentfulProjectSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulProjectSysContentTypeSysFilterInput>;
};

export type ContentfulProjectSysContentTypeSys = {
  __typename?: 'ContentfulProjectSysContentTypeSys';
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulProjectSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulProjectSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulProjectSysContentTypeFilterInput>;
};

export type ContentfulQualification = ContentfulReference & ContentfulEntry & Node & {
  __typename?: 'ContentfulQualification';
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  qualification_map?: Maybe<Array<Maybe<ContentfulQualificationMap>>>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulQualificationSys>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulQualificationDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulQualificationCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulQualificationUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulQualificationConnection = {
  __typename?: 'ContentfulQualificationConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulQualificationEdge>;
  nodes: Array<ContentfulQualification>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulQualificationGroupConnection>;
};


export type ContentfulQualificationConnectionDistinctArgs = {
  field: ContentfulQualificationFieldsEnum;
};


export type ContentfulQualificationConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulQualificationFieldsEnum;
};

export type ContentfulQualificationEdge = {
  __typename?: 'ContentfulQualificationEdge';
  next?: Maybe<ContentfulQualification>;
  node: ContentfulQualification;
  previous?: Maybe<ContentfulQualification>;
};

export enum ContentfulQualificationFieldsEnum {
  contentful_id = 'contentful_id',
  id = 'id',
  node_locale = 'node_locale',
  name = 'name',
  date = 'date',
  qualification_map = 'qualification_map',
  qualification_map___contentful_id = 'qualification_map___contentful_id',
  qualification_map___id = 'qualification_map___id',
  qualification_map___node_locale = 'qualification_map___node_locale',
  qualification_map___sortKey = 'qualification_map___sortKey',
  qualification_map___name = 'qualification_map___name',
  qualification_map___expanded = 'qualification_map___expanded',
  qualification_map___qualifications = 'qualification_map___qualifications',
  qualification_map___qualifications___contentful_id = 'qualification_map___qualifications___contentful_id',
  qualification_map___qualifications___id = 'qualification_map___qualifications___id',
  qualification_map___qualifications___node_locale = 'qualification_map___qualifications___node_locale',
  qualification_map___qualifications___name = 'qualification_map___qualifications___name',
  qualification_map___qualifications___date = 'qualification_map___qualifications___date',
  qualification_map___qualifications___qualification_map = 'qualification_map___qualifications___qualification_map',
  qualification_map___qualifications___qualification_map___contentful_id = 'qualification_map___qualifications___qualification_map___contentful_id',
  qualification_map___qualifications___qualification_map___id = 'qualification_map___qualifications___qualification_map___id',
  qualification_map___qualifications___qualification_map___node_locale = 'qualification_map___qualifications___qualification_map___node_locale',
  qualification_map___qualifications___qualification_map___sortKey = 'qualification_map___qualifications___qualification_map___sortKey',
  qualification_map___qualifications___qualification_map___name = 'qualification_map___qualifications___qualification_map___name',
  qualification_map___qualifications___qualification_map___expanded = 'qualification_map___qualifications___qualification_map___expanded',
  qualification_map___qualifications___qualification_map___qualifications = 'qualification_map___qualifications___qualification_map___qualifications',
  qualification_map___qualifications___qualification_map___spaceId = 'qualification_map___qualifications___qualification_map___spaceId',
  qualification_map___qualifications___qualification_map___createdAt = 'qualification_map___qualifications___qualification_map___createdAt',
  qualification_map___qualifications___qualification_map___updatedAt = 'qualification_map___qualifications___qualification_map___updatedAt',
  qualification_map___qualifications___qualification_map___children = 'qualification_map___qualifications___qualification_map___children',
  qualification_map___qualifications___spaceId = 'qualification_map___qualifications___spaceId',
  qualification_map___qualifications___createdAt = 'qualification_map___qualifications___createdAt',
  qualification_map___qualifications___updatedAt = 'qualification_map___qualifications___updatedAt',
  qualification_map___qualifications___sys___type = 'qualification_map___qualifications___sys___type',
  qualification_map___qualifications___sys___revision = 'qualification_map___qualifications___sys___revision',
  qualification_map___qualifications___parent___id = 'qualification_map___qualifications___parent___id',
  qualification_map___qualifications___parent___children = 'qualification_map___qualifications___parent___children',
  qualification_map___qualifications___children = 'qualification_map___qualifications___children',
  qualification_map___qualifications___children___id = 'qualification_map___qualifications___children___id',
  qualification_map___qualifications___children___children = 'qualification_map___qualifications___children___children',
  qualification_map___qualifications___internal___content = 'qualification_map___qualifications___internal___content',
  qualification_map___qualifications___internal___contentDigest = 'qualification_map___qualifications___internal___contentDigest',
  qualification_map___qualifications___internal___description = 'qualification_map___qualifications___internal___description',
  qualification_map___qualifications___internal___fieldOwners = 'qualification_map___qualifications___internal___fieldOwners',
  qualification_map___qualifications___internal___ignoreType = 'qualification_map___qualifications___internal___ignoreType',
  qualification_map___qualifications___internal___mediaType = 'qualification_map___qualifications___internal___mediaType',
  qualification_map___qualifications___internal___owner = 'qualification_map___qualifications___internal___owner',
  qualification_map___qualifications___internal___type = 'qualification_map___qualifications___internal___type',
  qualification_map___spaceId = 'qualification_map___spaceId',
  qualification_map___createdAt = 'qualification_map___createdAt',
  qualification_map___updatedAt = 'qualification_map___updatedAt',
  qualification_map___sys___type = 'qualification_map___sys___type',
  qualification_map___sys___revision = 'qualification_map___sys___revision',
  qualification_map___parent___id = 'qualification_map___parent___id',
  qualification_map___parent___parent___id = 'qualification_map___parent___parent___id',
  qualification_map___parent___parent___children = 'qualification_map___parent___parent___children',
  qualification_map___parent___children = 'qualification_map___parent___children',
  qualification_map___parent___children___id = 'qualification_map___parent___children___id',
  qualification_map___parent___children___children = 'qualification_map___parent___children___children',
  qualification_map___parent___internal___content = 'qualification_map___parent___internal___content',
  qualification_map___parent___internal___contentDigest = 'qualification_map___parent___internal___contentDigest',
  qualification_map___parent___internal___description = 'qualification_map___parent___internal___description',
  qualification_map___parent___internal___fieldOwners = 'qualification_map___parent___internal___fieldOwners',
  qualification_map___parent___internal___ignoreType = 'qualification_map___parent___internal___ignoreType',
  qualification_map___parent___internal___mediaType = 'qualification_map___parent___internal___mediaType',
  qualification_map___parent___internal___owner = 'qualification_map___parent___internal___owner',
  qualification_map___parent___internal___type = 'qualification_map___parent___internal___type',
  qualification_map___children = 'qualification_map___children',
  qualification_map___children___id = 'qualification_map___children___id',
  qualification_map___children___parent___id = 'qualification_map___children___parent___id',
  qualification_map___children___parent___children = 'qualification_map___children___parent___children',
  qualification_map___children___children = 'qualification_map___children___children',
  qualification_map___children___children___id = 'qualification_map___children___children___id',
  qualification_map___children___children___children = 'qualification_map___children___children___children',
  qualification_map___children___internal___content = 'qualification_map___children___internal___content',
  qualification_map___children___internal___contentDigest = 'qualification_map___children___internal___contentDigest',
  qualification_map___children___internal___description = 'qualification_map___children___internal___description',
  qualification_map___children___internal___fieldOwners = 'qualification_map___children___internal___fieldOwners',
  qualification_map___children___internal___ignoreType = 'qualification_map___children___internal___ignoreType',
  qualification_map___children___internal___mediaType = 'qualification_map___children___internal___mediaType',
  qualification_map___children___internal___owner = 'qualification_map___children___internal___owner',
  qualification_map___children___internal___type = 'qualification_map___children___internal___type',
  qualification_map___internal___content = 'qualification_map___internal___content',
  qualification_map___internal___contentDigest = 'qualification_map___internal___contentDigest',
  qualification_map___internal___description = 'qualification_map___internal___description',
  qualification_map___internal___fieldOwners = 'qualification_map___internal___fieldOwners',
  qualification_map___internal___ignoreType = 'qualification_map___internal___ignoreType',
  qualification_map___internal___mediaType = 'qualification_map___internal___mediaType',
  qualification_map___internal___owner = 'qualification_map___internal___owner',
  qualification_map___internal___type = 'qualification_map___internal___type',
  spaceId = 'spaceId',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  sys___type = 'sys___type',
  sys___revision = 'sys___revision',
  sys___contentType___sys___type = 'sys___contentType___sys___type',
  sys___contentType___sys___linkType = 'sys___contentType___sys___linkType',
  sys___contentType___sys___id = 'sys___contentType___sys___id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type'
}

export type ContentfulQualificationFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  qualification_map?: Maybe<ContentfulQualificationMapFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulQualificationSysFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ContentfulQualificationFilterListInput = {
  elemMatch?: Maybe<ContentfulQualificationFilterInput>;
};

export type ContentfulQualificationGroupConnection = {
  __typename?: 'ContentfulQualificationGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulQualificationEdge>;
  nodes: Array<ContentfulQualification>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulQualificationMap = ContentfulReference & ContentfulEntry & Node & {
  __typename?: 'ContentfulQualificationMap';
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  sortKey?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  expanded?: Maybe<Scalars['Boolean']>;
  qualifications?: Maybe<Array<Maybe<ContentfulQualification>>>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulQualificationMapSys>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulQualificationMapCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulQualificationMapUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulQualificationMapConnection = {
  __typename?: 'ContentfulQualificationMapConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulQualificationMapEdge>;
  nodes: Array<ContentfulQualificationMap>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulQualificationMapGroupConnection>;
};


export type ContentfulQualificationMapConnectionDistinctArgs = {
  field: ContentfulQualificationMapFieldsEnum;
};


export type ContentfulQualificationMapConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulQualificationMapFieldsEnum;
};

export type ContentfulQualificationMapEdge = {
  __typename?: 'ContentfulQualificationMapEdge';
  next?: Maybe<ContentfulQualificationMap>;
  node: ContentfulQualificationMap;
  previous?: Maybe<ContentfulQualificationMap>;
};

export enum ContentfulQualificationMapFieldsEnum {
  contentful_id = 'contentful_id',
  id = 'id',
  node_locale = 'node_locale',
  sortKey = 'sortKey',
  name = 'name',
  expanded = 'expanded',
  qualifications = 'qualifications',
  qualifications___contentful_id = 'qualifications___contentful_id',
  qualifications___id = 'qualifications___id',
  qualifications___node_locale = 'qualifications___node_locale',
  qualifications___name = 'qualifications___name',
  qualifications___date = 'qualifications___date',
  qualifications___qualification_map = 'qualifications___qualification_map',
  qualifications___qualification_map___contentful_id = 'qualifications___qualification_map___contentful_id',
  qualifications___qualification_map___id = 'qualifications___qualification_map___id',
  qualifications___qualification_map___node_locale = 'qualifications___qualification_map___node_locale',
  qualifications___qualification_map___sortKey = 'qualifications___qualification_map___sortKey',
  qualifications___qualification_map___name = 'qualifications___qualification_map___name',
  qualifications___qualification_map___expanded = 'qualifications___qualification_map___expanded',
  qualifications___qualification_map___qualifications = 'qualifications___qualification_map___qualifications',
  qualifications___qualification_map___qualifications___contentful_id = 'qualifications___qualification_map___qualifications___contentful_id',
  qualifications___qualification_map___qualifications___id = 'qualifications___qualification_map___qualifications___id',
  qualifications___qualification_map___qualifications___node_locale = 'qualifications___qualification_map___qualifications___node_locale',
  qualifications___qualification_map___qualifications___name = 'qualifications___qualification_map___qualifications___name',
  qualifications___qualification_map___qualifications___date = 'qualifications___qualification_map___qualifications___date',
  qualifications___qualification_map___qualifications___qualification_map = 'qualifications___qualification_map___qualifications___qualification_map',
  qualifications___qualification_map___qualifications___spaceId = 'qualifications___qualification_map___qualifications___spaceId',
  qualifications___qualification_map___qualifications___createdAt = 'qualifications___qualification_map___qualifications___createdAt',
  qualifications___qualification_map___qualifications___updatedAt = 'qualifications___qualification_map___qualifications___updatedAt',
  qualifications___qualification_map___qualifications___children = 'qualifications___qualification_map___qualifications___children',
  qualifications___qualification_map___spaceId = 'qualifications___qualification_map___spaceId',
  qualifications___qualification_map___createdAt = 'qualifications___qualification_map___createdAt',
  qualifications___qualification_map___updatedAt = 'qualifications___qualification_map___updatedAt',
  qualifications___qualification_map___sys___type = 'qualifications___qualification_map___sys___type',
  qualifications___qualification_map___sys___revision = 'qualifications___qualification_map___sys___revision',
  qualifications___qualification_map___parent___id = 'qualifications___qualification_map___parent___id',
  qualifications___qualification_map___parent___children = 'qualifications___qualification_map___parent___children',
  qualifications___qualification_map___children = 'qualifications___qualification_map___children',
  qualifications___qualification_map___children___id = 'qualifications___qualification_map___children___id',
  qualifications___qualification_map___children___children = 'qualifications___qualification_map___children___children',
  qualifications___qualification_map___internal___content = 'qualifications___qualification_map___internal___content',
  qualifications___qualification_map___internal___contentDigest = 'qualifications___qualification_map___internal___contentDigest',
  qualifications___qualification_map___internal___description = 'qualifications___qualification_map___internal___description',
  qualifications___qualification_map___internal___fieldOwners = 'qualifications___qualification_map___internal___fieldOwners',
  qualifications___qualification_map___internal___ignoreType = 'qualifications___qualification_map___internal___ignoreType',
  qualifications___qualification_map___internal___mediaType = 'qualifications___qualification_map___internal___mediaType',
  qualifications___qualification_map___internal___owner = 'qualifications___qualification_map___internal___owner',
  qualifications___qualification_map___internal___type = 'qualifications___qualification_map___internal___type',
  qualifications___spaceId = 'qualifications___spaceId',
  qualifications___createdAt = 'qualifications___createdAt',
  qualifications___updatedAt = 'qualifications___updatedAt',
  qualifications___sys___type = 'qualifications___sys___type',
  qualifications___sys___revision = 'qualifications___sys___revision',
  qualifications___parent___id = 'qualifications___parent___id',
  qualifications___parent___parent___id = 'qualifications___parent___parent___id',
  qualifications___parent___parent___children = 'qualifications___parent___parent___children',
  qualifications___parent___children = 'qualifications___parent___children',
  qualifications___parent___children___id = 'qualifications___parent___children___id',
  qualifications___parent___children___children = 'qualifications___parent___children___children',
  qualifications___parent___internal___content = 'qualifications___parent___internal___content',
  qualifications___parent___internal___contentDigest = 'qualifications___parent___internal___contentDigest',
  qualifications___parent___internal___description = 'qualifications___parent___internal___description',
  qualifications___parent___internal___fieldOwners = 'qualifications___parent___internal___fieldOwners',
  qualifications___parent___internal___ignoreType = 'qualifications___parent___internal___ignoreType',
  qualifications___parent___internal___mediaType = 'qualifications___parent___internal___mediaType',
  qualifications___parent___internal___owner = 'qualifications___parent___internal___owner',
  qualifications___parent___internal___type = 'qualifications___parent___internal___type',
  qualifications___children = 'qualifications___children',
  qualifications___children___id = 'qualifications___children___id',
  qualifications___children___parent___id = 'qualifications___children___parent___id',
  qualifications___children___parent___children = 'qualifications___children___parent___children',
  qualifications___children___children = 'qualifications___children___children',
  qualifications___children___children___id = 'qualifications___children___children___id',
  qualifications___children___children___children = 'qualifications___children___children___children',
  qualifications___children___internal___content = 'qualifications___children___internal___content',
  qualifications___children___internal___contentDigest = 'qualifications___children___internal___contentDigest',
  qualifications___children___internal___description = 'qualifications___children___internal___description',
  qualifications___children___internal___fieldOwners = 'qualifications___children___internal___fieldOwners',
  qualifications___children___internal___ignoreType = 'qualifications___children___internal___ignoreType',
  qualifications___children___internal___mediaType = 'qualifications___children___internal___mediaType',
  qualifications___children___internal___owner = 'qualifications___children___internal___owner',
  qualifications___children___internal___type = 'qualifications___children___internal___type',
  qualifications___internal___content = 'qualifications___internal___content',
  qualifications___internal___contentDigest = 'qualifications___internal___contentDigest',
  qualifications___internal___description = 'qualifications___internal___description',
  qualifications___internal___fieldOwners = 'qualifications___internal___fieldOwners',
  qualifications___internal___ignoreType = 'qualifications___internal___ignoreType',
  qualifications___internal___mediaType = 'qualifications___internal___mediaType',
  qualifications___internal___owner = 'qualifications___internal___owner',
  qualifications___internal___type = 'qualifications___internal___type',
  spaceId = 'spaceId',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  sys___type = 'sys___type',
  sys___revision = 'sys___revision',
  sys___contentType___sys___type = 'sys___contentType___sys___type',
  sys___contentType___sys___linkType = 'sys___contentType___sys___linkType',
  sys___contentType___sys___id = 'sys___contentType___sys___id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type'
}

export type ContentfulQualificationMapFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  sortKey?: Maybe<IntQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  expanded?: Maybe<BooleanQueryOperatorInput>;
  qualifications?: Maybe<ContentfulQualificationFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulQualificationMapSysFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ContentfulQualificationMapFilterListInput = {
  elemMatch?: Maybe<ContentfulQualificationMapFilterInput>;
};

export type ContentfulQualificationMapGroupConnection = {
  __typename?: 'ContentfulQualificationMapGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulQualificationMapEdge>;
  nodes: Array<ContentfulQualificationMap>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulQualificationMapSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulQualificationMapFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulQualificationMapSys = {
  __typename?: 'ContentfulQualificationMapSys';
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulQualificationMapSysContentType>;
};

export type ContentfulQualificationMapSysContentType = {
  __typename?: 'ContentfulQualificationMapSysContentType';
  sys?: Maybe<ContentfulQualificationMapSysContentTypeSys>;
};

export type ContentfulQualificationMapSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulQualificationMapSysContentTypeSysFilterInput>;
};

export type ContentfulQualificationMapSysContentTypeSys = {
  __typename?: 'ContentfulQualificationMapSysContentTypeSys';
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulQualificationMapSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulQualificationMapSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulQualificationMapSysContentTypeFilterInput>;
};

export type ContentfulQualificationSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulQualificationFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulQualificationSys = {
  __typename?: 'ContentfulQualificationSys';
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulQualificationSysContentType>;
};

export type ContentfulQualificationSysContentType = {
  __typename?: 'ContentfulQualificationSysContentType';
  sys?: Maybe<ContentfulQualificationSysContentTypeSys>;
};

export type ContentfulQualificationSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulQualificationSysContentTypeSysFilterInput>;
};

export type ContentfulQualificationSysContentTypeSys = {
  __typename?: 'ContentfulQualificationSysContentTypeSys';
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulQualificationSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulQualificationSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulQualificationSysContentTypeFilterInput>;
};

export type ContentfulReference = {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
};

export type ContentfulResize = {
  __typename?: 'ContentfulResize';
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  src?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
};

export type ContentfulResizeFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
};

export type ContentfulSkillMap = ContentfulReference & ContentfulEntry & Node & {
  __typename?: 'ContentfulSkillMap';
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  sortKey?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  expanded?: Maybe<Scalars['Boolean']>;
  skills?: Maybe<Array<Maybe<ContentfulTag>>>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulSkillMapSys>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulSkillMapCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulSkillMapUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulSkillMapConnection = {
  __typename?: 'ContentfulSkillMapConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulSkillMapEdge>;
  nodes: Array<ContentfulSkillMap>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulSkillMapGroupConnection>;
};


export type ContentfulSkillMapConnectionDistinctArgs = {
  field: ContentfulSkillMapFieldsEnum;
};


export type ContentfulSkillMapConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulSkillMapFieldsEnum;
};

export type ContentfulSkillMapEdge = {
  __typename?: 'ContentfulSkillMapEdge';
  next?: Maybe<ContentfulSkillMap>;
  node: ContentfulSkillMap;
  previous?: Maybe<ContentfulSkillMap>;
};

export enum ContentfulSkillMapFieldsEnum {
  contentful_id = 'contentful_id',
  id = 'id',
  node_locale = 'node_locale',
  sortKey = 'sortKey',
  name = 'name',
  expanded = 'expanded',
  skills = 'skills',
  skills___contentful_id = 'skills___contentful_id',
  skills___id = 'skills___id',
  skills___node_locale = 'skills___node_locale',
  skills___name = 'skills___name',
  skills___level = 'skills___level',
  skills___skill_map = 'skills___skill_map',
  skills___skill_map___contentful_id = 'skills___skill_map___contentful_id',
  skills___skill_map___id = 'skills___skill_map___id',
  skills___skill_map___node_locale = 'skills___skill_map___node_locale',
  skills___skill_map___sortKey = 'skills___skill_map___sortKey',
  skills___skill_map___name = 'skills___skill_map___name',
  skills___skill_map___expanded = 'skills___skill_map___expanded',
  skills___skill_map___skills = 'skills___skill_map___skills',
  skills___skill_map___skills___contentful_id = 'skills___skill_map___skills___contentful_id',
  skills___skill_map___skills___id = 'skills___skill_map___skills___id',
  skills___skill_map___skills___node_locale = 'skills___skill_map___skills___node_locale',
  skills___skill_map___skills___name = 'skills___skill_map___skills___name',
  skills___skill_map___skills___level = 'skills___skill_map___skills___level',
  skills___skill_map___skills___skill_map = 'skills___skill_map___skills___skill_map',
  skills___skill_map___skills___project = 'skills___skill_map___skills___project',
  skills___skill_map___skills___spaceId = 'skills___skill_map___skills___spaceId',
  skills___skill_map___skills___createdAt = 'skills___skill_map___skills___createdAt',
  skills___skill_map___skills___updatedAt = 'skills___skill_map___skills___updatedAt',
  skills___skill_map___skills___oss = 'skills___skill_map___skills___oss',
  skills___skill_map___skills___children = 'skills___skill_map___skills___children',
  skills___skill_map___spaceId = 'skills___skill_map___spaceId',
  skills___skill_map___createdAt = 'skills___skill_map___createdAt',
  skills___skill_map___updatedAt = 'skills___skill_map___updatedAt',
  skills___skill_map___sys___type = 'skills___skill_map___sys___type',
  skills___skill_map___sys___revision = 'skills___skill_map___sys___revision',
  skills___skill_map___parent___id = 'skills___skill_map___parent___id',
  skills___skill_map___parent___children = 'skills___skill_map___parent___children',
  skills___skill_map___children = 'skills___skill_map___children',
  skills___skill_map___children___id = 'skills___skill_map___children___id',
  skills___skill_map___children___children = 'skills___skill_map___children___children',
  skills___skill_map___internal___content = 'skills___skill_map___internal___content',
  skills___skill_map___internal___contentDigest = 'skills___skill_map___internal___contentDigest',
  skills___skill_map___internal___description = 'skills___skill_map___internal___description',
  skills___skill_map___internal___fieldOwners = 'skills___skill_map___internal___fieldOwners',
  skills___skill_map___internal___ignoreType = 'skills___skill_map___internal___ignoreType',
  skills___skill_map___internal___mediaType = 'skills___skill_map___internal___mediaType',
  skills___skill_map___internal___owner = 'skills___skill_map___internal___owner',
  skills___skill_map___internal___type = 'skills___skill_map___internal___type',
  skills___project = 'skills___project',
  skills___project___contentful_id = 'skills___project___contentful_id',
  skills___project___id = 'skills___project___id',
  skills___project___node_locale = 'skills___project___node_locale',
  skills___project___name = 'skills___project___name',
  skills___project___subName = 'skills___project___subName',
  skills___project___startDate = 'skills___project___startDate',
  skills___project___endDate = 'skills___project___endDate',
  skills___project___tags = 'skills___project___tags',
  skills___project___tags___contentful_id = 'skills___project___tags___contentful_id',
  skills___project___tags___id = 'skills___project___tags___id',
  skills___project___tags___node_locale = 'skills___project___tags___node_locale',
  skills___project___tags___name = 'skills___project___tags___name',
  skills___project___tags___level = 'skills___project___tags___level',
  skills___project___tags___skill_map = 'skills___project___tags___skill_map',
  skills___project___tags___project = 'skills___project___tags___project',
  skills___project___tags___spaceId = 'skills___project___tags___spaceId',
  skills___project___tags___createdAt = 'skills___project___tags___createdAt',
  skills___project___tags___updatedAt = 'skills___project___tags___updatedAt',
  skills___project___tags___oss = 'skills___project___tags___oss',
  skills___project___tags___children = 'skills___project___tags___children',
  skills___project___icon___contentful_id = 'skills___project___icon___contentful_id',
  skills___project___icon___id = 'skills___project___icon___id',
  skills___project___icon___node_locale = 'skills___project___icon___node_locale',
  skills___project___icon___name = 'skills___project___icon___name',
  skills___project___icon___what_i_can_do = 'skills___project___icon___what_i_can_do',
  skills___project___icon___project = 'skills___project___icon___project',
  skills___project___icon___oss = 'skills___project___icon___oss',
  skills___project___icon___spaceId = 'skills___project___icon___spaceId',
  skills___project___icon___createdAt = 'skills___project___icon___createdAt',
  skills___project___icon___updatedAt = 'skills___project___icon___updatedAt',
  skills___project___icon___history = 'skills___project___icon___history',
  skills___project___icon___contact = 'skills___project___icon___contact',
  skills___project___icon___childrenContentfulIconSvgTextNode = 'skills___project___icon___childrenContentfulIconSvgTextNode',
  skills___project___icon___children = 'skills___project___icon___children',
  skills___project___detail___id = 'skills___project___detail___id',
  skills___project___detail___children = 'skills___project___detail___children',
  skills___project___detail___detail = 'skills___project___detail___detail',
  skills___project___detail___childrenMarkdownRemark = 'skills___project___detail___childrenMarkdownRemark',
  skills___project___spaceId = 'skills___project___spaceId',
  skills___project___createdAt = 'skills___project___createdAt',
  skills___project___updatedAt = 'skills___project___updatedAt',
  skills___project___sys___type = 'skills___project___sys___type',
  skills___project___sys___revision = 'skills___project___sys___revision',
  skills___project___childrenContentfulProjectDetailTextNode = 'skills___project___childrenContentfulProjectDetailTextNode',
  skills___project___childrenContentfulProjectDetailTextNode___id = 'skills___project___childrenContentfulProjectDetailTextNode___id',
  skills___project___childrenContentfulProjectDetailTextNode___children = 'skills___project___childrenContentfulProjectDetailTextNode___children',
  skills___project___childrenContentfulProjectDetailTextNode___detail = 'skills___project___childrenContentfulProjectDetailTextNode___detail',
  skills___project___childrenContentfulProjectDetailTextNode___childrenMarkdownRemark = 'skills___project___childrenContentfulProjectDetailTextNode___childrenMarkdownRemark',
  skills___project___childContentfulProjectDetailTextNode___id = 'skills___project___childContentfulProjectDetailTextNode___id',
  skills___project___childContentfulProjectDetailTextNode___children = 'skills___project___childContentfulProjectDetailTextNode___children',
  skills___project___childContentfulProjectDetailTextNode___detail = 'skills___project___childContentfulProjectDetailTextNode___detail',
  skills___project___childContentfulProjectDetailTextNode___childrenMarkdownRemark = 'skills___project___childContentfulProjectDetailTextNode___childrenMarkdownRemark',
  skills___project___parent___id = 'skills___project___parent___id',
  skills___project___parent___children = 'skills___project___parent___children',
  skills___project___children = 'skills___project___children',
  skills___project___children___id = 'skills___project___children___id',
  skills___project___children___children = 'skills___project___children___children',
  skills___project___internal___content = 'skills___project___internal___content',
  skills___project___internal___contentDigest = 'skills___project___internal___contentDigest',
  skills___project___internal___description = 'skills___project___internal___description',
  skills___project___internal___fieldOwners = 'skills___project___internal___fieldOwners',
  skills___project___internal___ignoreType = 'skills___project___internal___ignoreType',
  skills___project___internal___mediaType = 'skills___project___internal___mediaType',
  skills___project___internal___owner = 'skills___project___internal___owner',
  skills___project___internal___type = 'skills___project___internal___type',
  skills___spaceId = 'skills___spaceId',
  skills___createdAt = 'skills___createdAt',
  skills___updatedAt = 'skills___updatedAt',
  skills___sys___type = 'skills___sys___type',
  skills___sys___revision = 'skills___sys___revision',
  skills___oss = 'skills___oss',
  skills___oss___contentful_id = 'skills___oss___contentful_id',
  skills___oss___id = 'skills___oss___id',
  skills___oss___node_locale = 'skills___oss___node_locale',
  skills___oss___name = 'skills___oss___name',
  skills___oss___subName = 'skills___oss___subName',
  skills___oss___startDate = 'skills___oss___startDate',
  skills___oss___href = 'skills___oss___href',
  skills___oss___tags = 'skills___oss___tags',
  skills___oss___tags___contentful_id = 'skills___oss___tags___contentful_id',
  skills___oss___tags___id = 'skills___oss___tags___id',
  skills___oss___tags___node_locale = 'skills___oss___tags___node_locale',
  skills___oss___tags___name = 'skills___oss___tags___name',
  skills___oss___tags___level = 'skills___oss___tags___level',
  skills___oss___tags___skill_map = 'skills___oss___tags___skill_map',
  skills___oss___tags___project = 'skills___oss___tags___project',
  skills___oss___tags___spaceId = 'skills___oss___tags___spaceId',
  skills___oss___tags___createdAt = 'skills___oss___tags___createdAt',
  skills___oss___tags___updatedAt = 'skills___oss___tags___updatedAt',
  skills___oss___tags___oss = 'skills___oss___tags___oss',
  skills___oss___tags___children = 'skills___oss___tags___children',
  skills___oss___icon___contentful_id = 'skills___oss___icon___contentful_id',
  skills___oss___icon___id = 'skills___oss___icon___id',
  skills___oss___icon___node_locale = 'skills___oss___icon___node_locale',
  skills___oss___icon___name = 'skills___oss___icon___name',
  skills___oss___icon___what_i_can_do = 'skills___oss___icon___what_i_can_do',
  skills___oss___icon___project = 'skills___oss___icon___project',
  skills___oss___icon___oss = 'skills___oss___icon___oss',
  skills___oss___icon___spaceId = 'skills___oss___icon___spaceId',
  skills___oss___icon___createdAt = 'skills___oss___icon___createdAt',
  skills___oss___icon___updatedAt = 'skills___oss___icon___updatedAt',
  skills___oss___icon___history = 'skills___oss___icon___history',
  skills___oss___icon___contact = 'skills___oss___icon___contact',
  skills___oss___icon___childrenContentfulIconSvgTextNode = 'skills___oss___icon___childrenContentfulIconSvgTextNode',
  skills___oss___icon___children = 'skills___oss___icon___children',
  skills___oss___image___contentful_id = 'skills___oss___image___contentful_id',
  skills___oss___image___id = 'skills___oss___image___id',
  skills___oss___image___spaceId = 'skills___oss___image___spaceId',
  skills___oss___image___createdAt = 'skills___oss___image___createdAt',
  skills___oss___image___updatedAt = 'skills___oss___image___updatedAt',
  skills___oss___image___title = 'skills___oss___image___title',
  skills___oss___image___description = 'skills___oss___image___description',
  skills___oss___image___node_locale = 'skills___oss___image___node_locale',
  skills___oss___image___gatsbyImageData = 'skills___oss___image___gatsbyImageData',
  skills___oss___image___children = 'skills___oss___image___children',
  skills___oss___detail___id = 'skills___oss___detail___id',
  skills___oss___detail___children = 'skills___oss___detail___children',
  skills___oss___detail___detail = 'skills___oss___detail___detail',
  skills___oss___detail___childrenMarkdownRemark = 'skills___oss___detail___childrenMarkdownRemark',
  skills___oss___spaceId = 'skills___oss___spaceId',
  skills___oss___createdAt = 'skills___oss___createdAt',
  skills___oss___updatedAt = 'skills___oss___updatedAt',
  skills___oss___sys___type = 'skills___oss___sys___type',
  skills___oss___sys___revision = 'skills___oss___sys___revision',
  skills___oss___childrenContentfulOssDetailTextNode = 'skills___oss___childrenContentfulOssDetailTextNode',
  skills___oss___childrenContentfulOssDetailTextNode___id = 'skills___oss___childrenContentfulOssDetailTextNode___id',
  skills___oss___childrenContentfulOssDetailTextNode___children = 'skills___oss___childrenContentfulOssDetailTextNode___children',
  skills___oss___childrenContentfulOssDetailTextNode___detail = 'skills___oss___childrenContentfulOssDetailTextNode___detail',
  skills___oss___childrenContentfulOssDetailTextNode___childrenMarkdownRemark = 'skills___oss___childrenContentfulOssDetailTextNode___childrenMarkdownRemark',
  skills___oss___childContentfulOssDetailTextNode___id = 'skills___oss___childContentfulOssDetailTextNode___id',
  skills___oss___childContentfulOssDetailTextNode___children = 'skills___oss___childContentfulOssDetailTextNode___children',
  skills___oss___childContentfulOssDetailTextNode___detail = 'skills___oss___childContentfulOssDetailTextNode___detail',
  skills___oss___childContentfulOssDetailTextNode___childrenMarkdownRemark = 'skills___oss___childContentfulOssDetailTextNode___childrenMarkdownRemark',
  skills___oss___parent___id = 'skills___oss___parent___id',
  skills___oss___parent___children = 'skills___oss___parent___children',
  skills___oss___children = 'skills___oss___children',
  skills___oss___children___id = 'skills___oss___children___id',
  skills___oss___children___children = 'skills___oss___children___children',
  skills___oss___internal___content = 'skills___oss___internal___content',
  skills___oss___internal___contentDigest = 'skills___oss___internal___contentDigest',
  skills___oss___internal___description = 'skills___oss___internal___description',
  skills___oss___internal___fieldOwners = 'skills___oss___internal___fieldOwners',
  skills___oss___internal___ignoreType = 'skills___oss___internal___ignoreType',
  skills___oss___internal___mediaType = 'skills___oss___internal___mediaType',
  skills___oss___internal___owner = 'skills___oss___internal___owner',
  skills___oss___internal___type = 'skills___oss___internal___type',
  skills___parent___id = 'skills___parent___id',
  skills___parent___parent___id = 'skills___parent___parent___id',
  skills___parent___parent___children = 'skills___parent___parent___children',
  skills___parent___children = 'skills___parent___children',
  skills___parent___children___id = 'skills___parent___children___id',
  skills___parent___children___children = 'skills___parent___children___children',
  skills___parent___internal___content = 'skills___parent___internal___content',
  skills___parent___internal___contentDigest = 'skills___parent___internal___contentDigest',
  skills___parent___internal___description = 'skills___parent___internal___description',
  skills___parent___internal___fieldOwners = 'skills___parent___internal___fieldOwners',
  skills___parent___internal___ignoreType = 'skills___parent___internal___ignoreType',
  skills___parent___internal___mediaType = 'skills___parent___internal___mediaType',
  skills___parent___internal___owner = 'skills___parent___internal___owner',
  skills___parent___internal___type = 'skills___parent___internal___type',
  skills___children = 'skills___children',
  skills___children___id = 'skills___children___id',
  skills___children___parent___id = 'skills___children___parent___id',
  skills___children___parent___children = 'skills___children___parent___children',
  skills___children___children = 'skills___children___children',
  skills___children___children___id = 'skills___children___children___id',
  skills___children___children___children = 'skills___children___children___children',
  skills___children___internal___content = 'skills___children___internal___content',
  skills___children___internal___contentDigest = 'skills___children___internal___contentDigest',
  skills___children___internal___description = 'skills___children___internal___description',
  skills___children___internal___fieldOwners = 'skills___children___internal___fieldOwners',
  skills___children___internal___ignoreType = 'skills___children___internal___ignoreType',
  skills___children___internal___mediaType = 'skills___children___internal___mediaType',
  skills___children___internal___owner = 'skills___children___internal___owner',
  skills___children___internal___type = 'skills___children___internal___type',
  skills___internal___content = 'skills___internal___content',
  skills___internal___contentDigest = 'skills___internal___contentDigest',
  skills___internal___description = 'skills___internal___description',
  skills___internal___fieldOwners = 'skills___internal___fieldOwners',
  skills___internal___ignoreType = 'skills___internal___ignoreType',
  skills___internal___mediaType = 'skills___internal___mediaType',
  skills___internal___owner = 'skills___internal___owner',
  skills___internal___type = 'skills___internal___type',
  spaceId = 'spaceId',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  sys___type = 'sys___type',
  sys___revision = 'sys___revision',
  sys___contentType___sys___type = 'sys___contentType___sys___type',
  sys___contentType___sys___linkType = 'sys___contentType___sys___linkType',
  sys___contentType___sys___id = 'sys___contentType___sys___id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type'
}

export type ContentfulSkillMapFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  sortKey?: Maybe<IntQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  expanded?: Maybe<BooleanQueryOperatorInput>;
  skills?: Maybe<ContentfulTagFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulSkillMapSysFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ContentfulSkillMapFilterListInput = {
  elemMatch?: Maybe<ContentfulSkillMapFilterInput>;
};

export type ContentfulSkillMapGroupConnection = {
  __typename?: 'ContentfulSkillMapGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulSkillMapEdge>;
  nodes: Array<ContentfulSkillMap>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulSkillMapSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulSkillMapFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulSkillMapSys = {
  __typename?: 'ContentfulSkillMapSys';
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulSkillMapSysContentType>;
};

export type ContentfulSkillMapSysContentType = {
  __typename?: 'ContentfulSkillMapSysContentType';
  sys?: Maybe<ContentfulSkillMapSysContentTypeSys>;
};

export type ContentfulSkillMapSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulSkillMapSysContentTypeSysFilterInput>;
};

export type ContentfulSkillMapSysContentTypeSys = {
  __typename?: 'ContentfulSkillMapSysContentTypeSys';
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulSkillMapSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulSkillMapSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulSkillMapSysContentTypeFilterInput>;
};

export type ContentfulTag = ContentfulReference & ContentfulEntry & Node & {
  __typename?: 'ContentfulTag';
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  level?: Maybe<Scalars['Int']>;
  skill_map?: Maybe<Array<Maybe<ContentfulSkillMap>>>;
  project?: Maybe<Array<Maybe<ContentfulProject>>>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulTagSys>;
  oss?: Maybe<Array<Maybe<ContentfulOss>>>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulTagCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulTagUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulTagConnection = {
  __typename?: 'ContentfulTagConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulTagEdge>;
  nodes: Array<ContentfulTag>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulTagGroupConnection>;
};


export type ContentfulTagConnectionDistinctArgs = {
  field: ContentfulTagFieldsEnum;
};


export type ContentfulTagConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulTagFieldsEnum;
};

export type ContentfulTagEdge = {
  __typename?: 'ContentfulTagEdge';
  next?: Maybe<ContentfulTag>;
  node: ContentfulTag;
  previous?: Maybe<ContentfulTag>;
};

export enum ContentfulTagFieldsEnum {
  contentful_id = 'contentful_id',
  id = 'id',
  node_locale = 'node_locale',
  name = 'name',
  level = 'level',
  skill_map = 'skill_map',
  skill_map___contentful_id = 'skill_map___contentful_id',
  skill_map___id = 'skill_map___id',
  skill_map___node_locale = 'skill_map___node_locale',
  skill_map___sortKey = 'skill_map___sortKey',
  skill_map___name = 'skill_map___name',
  skill_map___expanded = 'skill_map___expanded',
  skill_map___skills = 'skill_map___skills',
  skill_map___skills___contentful_id = 'skill_map___skills___contentful_id',
  skill_map___skills___id = 'skill_map___skills___id',
  skill_map___skills___node_locale = 'skill_map___skills___node_locale',
  skill_map___skills___name = 'skill_map___skills___name',
  skill_map___skills___level = 'skill_map___skills___level',
  skill_map___skills___skill_map = 'skill_map___skills___skill_map',
  skill_map___skills___skill_map___contentful_id = 'skill_map___skills___skill_map___contentful_id',
  skill_map___skills___skill_map___id = 'skill_map___skills___skill_map___id',
  skill_map___skills___skill_map___node_locale = 'skill_map___skills___skill_map___node_locale',
  skill_map___skills___skill_map___sortKey = 'skill_map___skills___skill_map___sortKey',
  skill_map___skills___skill_map___name = 'skill_map___skills___skill_map___name',
  skill_map___skills___skill_map___expanded = 'skill_map___skills___skill_map___expanded',
  skill_map___skills___skill_map___skills = 'skill_map___skills___skill_map___skills',
  skill_map___skills___skill_map___spaceId = 'skill_map___skills___skill_map___spaceId',
  skill_map___skills___skill_map___createdAt = 'skill_map___skills___skill_map___createdAt',
  skill_map___skills___skill_map___updatedAt = 'skill_map___skills___skill_map___updatedAt',
  skill_map___skills___skill_map___children = 'skill_map___skills___skill_map___children',
  skill_map___skills___project = 'skill_map___skills___project',
  skill_map___skills___project___contentful_id = 'skill_map___skills___project___contentful_id',
  skill_map___skills___project___id = 'skill_map___skills___project___id',
  skill_map___skills___project___node_locale = 'skill_map___skills___project___node_locale',
  skill_map___skills___project___name = 'skill_map___skills___project___name',
  skill_map___skills___project___subName = 'skill_map___skills___project___subName',
  skill_map___skills___project___startDate = 'skill_map___skills___project___startDate',
  skill_map___skills___project___endDate = 'skill_map___skills___project___endDate',
  skill_map___skills___project___tags = 'skill_map___skills___project___tags',
  skill_map___skills___project___spaceId = 'skill_map___skills___project___spaceId',
  skill_map___skills___project___createdAt = 'skill_map___skills___project___createdAt',
  skill_map___skills___project___updatedAt = 'skill_map___skills___project___updatedAt',
  skill_map___skills___project___childrenContentfulProjectDetailTextNode = 'skill_map___skills___project___childrenContentfulProjectDetailTextNode',
  skill_map___skills___project___children = 'skill_map___skills___project___children',
  skill_map___skills___spaceId = 'skill_map___skills___spaceId',
  skill_map___skills___createdAt = 'skill_map___skills___createdAt',
  skill_map___skills___updatedAt = 'skill_map___skills___updatedAt',
  skill_map___skills___sys___type = 'skill_map___skills___sys___type',
  skill_map___skills___sys___revision = 'skill_map___skills___sys___revision',
  skill_map___skills___oss = 'skill_map___skills___oss',
  skill_map___skills___oss___contentful_id = 'skill_map___skills___oss___contentful_id',
  skill_map___skills___oss___id = 'skill_map___skills___oss___id',
  skill_map___skills___oss___node_locale = 'skill_map___skills___oss___node_locale',
  skill_map___skills___oss___name = 'skill_map___skills___oss___name',
  skill_map___skills___oss___subName = 'skill_map___skills___oss___subName',
  skill_map___skills___oss___startDate = 'skill_map___skills___oss___startDate',
  skill_map___skills___oss___href = 'skill_map___skills___oss___href',
  skill_map___skills___oss___tags = 'skill_map___skills___oss___tags',
  skill_map___skills___oss___spaceId = 'skill_map___skills___oss___spaceId',
  skill_map___skills___oss___createdAt = 'skill_map___skills___oss___createdAt',
  skill_map___skills___oss___updatedAt = 'skill_map___skills___oss___updatedAt',
  skill_map___skills___oss___childrenContentfulOssDetailTextNode = 'skill_map___skills___oss___childrenContentfulOssDetailTextNode',
  skill_map___skills___oss___children = 'skill_map___skills___oss___children',
  skill_map___skills___parent___id = 'skill_map___skills___parent___id',
  skill_map___skills___parent___children = 'skill_map___skills___parent___children',
  skill_map___skills___children = 'skill_map___skills___children',
  skill_map___skills___children___id = 'skill_map___skills___children___id',
  skill_map___skills___children___children = 'skill_map___skills___children___children',
  skill_map___skills___internal___content = 'skill_map___skills___internal___content',
  skill_map___skills___internal___contentDigest = 'skill_map___skills___internal___contentDigest',
  skill_map___skills___internal___description = 'skill_map___skills___internal___description',
  skill_map___skills___internal___fieldOwners = 'skill_map___skills___internal___fieldOwners',
  skill_map___skills___internal___ignoreType = 'skill_map___skills___internal___ignoreType',
  skill_map___skills___internal___mediaType = 'skill_map___skills___internal___mediaType',
  skill_map___skills___internal___owner = 'skill_map___skills___internal___owner',
  skill_map___skills___internal___type = 'skill_map___skills___internal___type',
  skill_map___spaceId = 'skill_map___spaceId',
  skill_map___createdAt = 'skill_map___createdAt',
  skill_map___updatedAt = 'skill_map___updatedAt',
  skill_map___sys___type = 'skill_map___sys___type',
  skill_map___sys___revision = 'skill_map___sys___revision',
  skill_map___parent___id = 'skill_map___parent___id',
  skill_map___parent___parent___id = 'skill_map___parent___parent___id',
  skill_map___parent___parent___children = 'skill_map___parent___parent___children',
  skill_map___parent___children = 'skill_map___parent___children',
  skill_map___parent___children___id = 'skill_map___parent___children___id',
  skill_map___parent___children___children = 'skill_map___parent___children___children',
  skill_map___parent___internal___content = 'skill_map___parent___internal___content',
  skill_map___parent___internal___contentDigest = 'skill_map___parent___internal___contentDigest',
  skill_map___parent___internal___description = 'skill_map___parent___internal___description',
  skill_map___parent___internal___fieldOwners = 'skill_map___parent___internal___fieldOwners',
  skill_map___parent___internal___ignoreType = 'skill_map___parent___internal___ignoreType',
  skill_map___parent___internal___mediaType = 'skill_map___parent___internal___mediaType',
  skill_map___parent___internal___owner = 'skill_map___parent___internal___owner',
  skill_map___parent___internal___type = 'skill_map___parent___internal___type',
  skill_map___children = 'skill_map___children',
  skill_map___children___id = 'skill_map___children___id',
  skill_map___children___parent___id = 'skill_map___children___parent___id',
  skill_map___children___parent___children = 'skill_map___children___parent___children',
  skill_map___children___children = 'skill_map___children___children',
  skill_map___children___children___id = 'skill_map___children___children___id',
  skill_map___children___children___children = 'skill_map___children___children___children',
  skill_map___children___internal___content = 'skill_map___children___internal___content',
  skill_map___children___internal___contentDigest = 'skill_map___children___internal___contentDigest',
  skill_map___children___internal___description = 'skill_map___children___internal___description',
  skill_map___children___internal___fieldOwners = 'skill_map___children___internal___fieldOwners',
  skill_map___children___internal___ignoreType = 'skill_map___children___internal___ignoreType',
  skill_map___children___internal___mediaType = 'skill_map___children___internal___mediaType',
  skill_map___children___internal___owner = 'skill_map___children___internal___owner',
  skill_map___children___internal___type = 'skill_map___children___internal___type',
  skill_map___internal___content = 'skill_map___internal___content',
  skill_map___internal___contentDigest = 'skill_map___internal___contentDigest',
  skill_map___internal___description = 'skill_map___internal___description',
  skill_map___internal___fieldOwners = 'skill_map___internal___fieldOwners',
  skill_map___internal___ignoreType = 'skill_map___internal___ignoreType',
  skill_map___internal___mediaType = 'skill_map___internal___mediaType',
  skill_map___internal___owner = 'skill_map___internal___owner',
  skill_map___internal___type = 'skill_map___internal___type',
  project = 'project',
  project___contentful_id = 'project___contentful_id',
  project___id = 'project___id',
  project___node_locale = 'project___node_locale',
  project___name = 'project___name',
  project___subName = 'project___subName',
  project___startDate = 'project___startDate',
  project___endDate = 'project___endDate',
  project___tags = 'project___tags',
  project___tags___contentful_id = 'project___tags___contentful_id',
  project___tags___id = 'project___tags___id',
  project___tags___node_locale = 'project___tags___node_locale',
  project___tags___name = 'project___tags___name',
  project___tags___level = 'project___tags___level',
  project___tags___skill_map = 'project___tags___skill_map',
  project___tags___skill_map___contentful_id = 'project___tags___skill_map___contentful_id',
  project___tags___skill_map___id = 'project___tags___skill_map___id',
  project___tags___skill_map___node_locale = 'project___tags___skill_map___node_locale',
  project___tags___skill_map___sortKey = 'project___tags___skill_map___sortKey',
  project___tags___skill_map___name = 'project___tags___skill_map___name',
  project___tags___skill_map___expanded = 'project___tags___skill_map___expanded',
  project___tags___skill_map___skills = 'project___tags___skill_map___skills',
  project___tags___skill_map___spaceId = 'project___tags___skill_map___spaceId',
  project___tags___skill_map___createdAt = 'project___tags___skill_map___createdAt',
  project___tags___skill_map___updatedAt = 'project___tags___skill_map___updatedAt',
  project___tags___skill_map___children = 'project___tags___skill_map___children',
  project___tags___project = 'project___tags___project',
  project___tags___project___contentful_id = 'project___tags___project___contentful_id',
  project___tags___project___id = 'project___tags___project___id',
  project___tags___project___node_locale = 'project___tags___project___node_locale',
  project___tags___project___name = 'project___tags___project___name',
  project___tags___project___subName = 'project___tags___project___subName',
  project___tags___project___startDate = 'project___tags___project___startDate',
  project___tags___project___endDate = 'project___tags___project___endDate',
  project___tags___project___tags = 'project___tags___project___tags',
  project___tags___project___spaceId = 'project___tags___project___spaceId',
  project___tags___project___createdAt = 'project___tags___project___createdAt',
  project___tags___project___updatedAt = 'project___tags___project___updatedAt',
  project___tags___project___childrenContentfulProjectDetailTextNode = 'project___tags___project___childrenContentfulProjectDetailTextNode',
  project___tags___project___children = 'project___tags___project___children',
  project___tags___spaceId = 'project___tags___spaceId',
  project___tags___createdAt = 'project___tags___createdAt',
  project___tags___updatedAt = 'project___tags___updatedAt',
  project___tags___sys___type = 'project___tags___sys___type',
  project___tags___sys___revision = 'project___tags___sys___revision',
  project___tags___oss = 'project___tags___oss',
  project___tags___oss___contentful_id = 'project___tags___oss___contentful_id',
  project___tags___oss___id = 'project___tags___oss___id',
  project___tags___oss___node_locale = 'project___tags___oss___node_locale',
  project___tags___oss___name = 'project___tags___oss___name',
  project___tags___oss___subName = 'project___tags___oss___subName',
  project___tags___oss___startDate = 'project___tags___oss___startDate',
  project___tags___oss___href = 'project___tags___oss___href',
  project___tags___oss___tags = 'project___tags___oss___tags',
  project___tags___oss___spaceId = 'project___tags___oss___spaceId',
  project___tags___oss___createdAt = 'project___tags___oss___createdAt',
  project___tags___oss___updatedAt = 'project___tags___oss___updatedAt',
  project___tags___oss___childrenContentfulOssDetailTextNode = 'project___tags___oss___childrenContentfulOssDetailTextNode',
  project___tags___oss___children = 'project___tags___oss___children',
  project___tags___parent___id = 'project___tags___parent___id',
  project___tags___parent___children = 'project___tags___parent___children',
  project___tags___children = 'project___tags___children',
  project___tags___children___id = 'project___tags___children___id',
  project___tags___children___children = 'project___tags___children___children',
  project___tags___internal___content = 'project___tags___internal___content',
  project___tags___internal___contentDigest = 'project___tags___internal___contentDigest',
  project___tags___internal___description = 'project___tags___internal___description',
  project___tags___internal___fieldOwners = 'project___tags___internal___fieldOwners',
  project___tags___internal___ignoreType = 'project___tags___internal___ignoreType',
  project___tags___internal___mediaType = 'project___tags___internal___mediaType',
  project___tags___internal___owner = 'project___tags___internal___owner',
  project___tags___internal___type = 'project___tags___internal___type',
  project___icon___contentful_id = 'project___icon___contentful_id',
  project___icon___id = 'project___icon___id',
  project___icon___node_locale = 'project___icon___node_locale',
  project___icon___name = 'project___icon___name',
  project___icon___what_i_can_do = 'project___icon___what_i_can_do',
  project___icon___what_i_can_do___contentful_id = 'project___icon___what_i_can_do___contentful_id',
  project___icon___what_i_can_do___id = 'project___icon___what_i_can_do___id',
  project___icon___what_i_can_do___node_locale = 'project___icon___what_i_can_do___node_locale',
  project___icon___what_i_can_do___sortKey = 'project___icon___what_i_can_do___sortKey',
  project___icon___what_i_can_do___name = 'project___icon___what_i_can_do___name',
  project___icon___what_i_can_do___subName = 'project___icon___what_i_can_do___subName',
  project___icon___what_i_can_do___spaceId = 'project___icon___what_i_can_do___spaceId',
  project___icon___what_i_can_do___createdAt = 'project___icon___what_i_can_do___createdAt',
  project___icon___what_i_can_do___updatedAt = 'project___icon___what_i_can_do___updatedAt',
  project___icon___what_i_can_do___children = 'project___icon___what_i_can_do___children',
  project___icon___project = 'project___icon___project',
  project___icon___project___contentful_id = 'project___icon___project___contentful_id',
  project___icon___project___id = 'project___icon___project___id',
  project___icon___project___node_locale = 'project___icon___project___node_locale',
  project___icon___project___name = 'project___icon___project___name',
  project___icon___project___subName = 'project___icon___project___subName',
  project___icon___project___startDate = 'project___icon___project___startDate',
  project___icon___project___endDate = 'project___icon___project___endDate',
  project___icon___project___tags = 'project___icon___project___tags',
  project___icon___project___spaceId = 'project___icon___project___spaceId',
  project___icon___project___createdAt = 'project___icon___project___createdAt',
  project___icon___project___updatedAt = 'project___icon___project___updatedAt',
  project___icon___project___childrenContentfulProjectDetailTextNode = 'project___icon___project___childrenContentfulProjectDetailTextNode',
  project___icon___project___children = 'project___icon___project___children',
  project___icon___oss = 'project___icon___oss',
  project___icon___oss___contentful_id = 'project___icon___oss___contentful_id',
  project___icon___oss___id = 'project___icon___oss___id',
  project___icon___oss___node_locale = 'project___icon___oss___node_locale',
  project___icon___oss___name = 'project___icon___oss___name',
  project___icon___oss___subName = 'project___icon___oss___subName',
  project___icon___oss___startDate = 'project___icon___oss___startDate',
  project___icon___oss___href = 'project___icon___oss___href',
  project___icon___oss___tags = 'project___icon___oss___tags',
  project___icon___oss___spaceId = 'project___icon___oss___spaceId',
  project___icon___oss___createdAt = 'project___icon___oss___createdAt',
  project___icon___oss___updatedAt = 'project___icon___oss___updatedAt',
  project___icon___oss___childrenContentfulOssDetailTextNode = 'project___icon___oss___childrenContentfulOssDetailTextNode',
  project___icon___oss___children = 'project___icon___oss___children',
  project___icon___svg___id = 'project___icon___svg___id',
  project___icon___svg___children = 'project___icon___svg___children',
  project___icon___svg___svg = 'project___icon___svg___svg',
  project___icon___svg___childrenMarkdownRemark = 'project___icon___svg___childrenMarkdownRemark',
  project___icon___spaceId = 'project___icon___spaceId',
  project___icon___createdAt = 'project___icon___createdAt',
  project___icon___updatedAt = 'project___icon___updatedAt',
  project___icon___sys___type = 'project___icon___sys___type',
  project___icon___sys___revision = 'project___icon___sys___revision',
  project___icon___history = 'project___icon___history',
  project___icon___history___contentful_id = 'project___icon___history___contentful_id',
  project___icon___history___id = 'project___icon___history___id',
  project___icon___history___node_locale = 'project___icon___history___node_locale',
  project___icon___history___name = 'project___icon___history___name',
  project___icon___history___date = 'project___icon___history___date',
  project___icon___history___subName = 'project___icon___history___subName',
  project___icon___history___spaceId = 'project___icon___history___spaceId',
  project___icon___history___createdAt = 'project___icon___history___createdAt',
  project___icon___history___updatedAt = 'project___icon___history___updatedAt',
  project___icon___history___children = 'project___icon___history___children',
  project___icon___contact = 'project___icon___contact',
  project___icon___contact___contentful_id = 'project___icon___contact___contentful_id',
  project___icon___contact___id = 'project___icon___contact___id',
  project___icon___contact___node_locale = 'project___icon___contact___node_locale',
  project___icon___contact___sortKey = 'project___icon___contact___sortKey',
  project___icon___contact___name = 'project___icon___contact___name',
  project___icon___contact___subName = 'project___icon___contact___subName',
  project___icon___contact___href = 'project___icon___contact___href',
  project___icon___contact___spaceId = 'project___icon___contact___spaceId',
  project___icon___contact___createdAt = 'project___icon___contact___createdAt',
  project___icon___contact___updatedAt = 'project___icon___contact___updatedAt',
  project___icon___contact___children = 'project___icon___contact___children',
  project___icon___childrenContentfulIconSvgTextNode = 'project___icon___childrenContentfulIconSvgTextNode',
  project___icon___childrenContentfulIconSvgTextNode___id = 'project___icon___childrenContentfulIconSvgTextNode___id',
  project___icon___childrenContentfulIconSvgTextNode___children = 'project___icon___childrenContentfulIconSvgTextNode___children',
  project___icon___childrenContentfulIconSvgTextNode___svg = 'project___icon___childrenContentfulIconSvgTextNode___svg',
  project___icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark = 'project___icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark',
  project___icon___childContentfulIconSvgTextNode___id = 'project___icon___childContentfulIconSvgTextNode___id',
  project___icon___childContentfulIconSvgTextNode___children = 'project___icon___childContentfulIconSvgTextNode___children',
  project___icon___childContentfulIconSvgTextNode___svg = 'project___icon___childContentfulIconSvgTextNode___svg',
  project___icon___childContentfulIconSvgTextNode___childrenMarkdownRemark = 'project___icon___childContentfulIconSvgTextNode___childrenMarkdownRemark',
  project___icon___parent___id = 'project___icon___parent___id',
  project___icon___parent___children = 'project___icon___parent___children',
  project___icon___children = 'project___icon___children',
  project___icon___children___id = 'project___icon___children___id',
  project___icon___children___children = 'project___icon___children___children',
  project___icon___internal___content = 'project___icon___internal___content',
  project___icon___internal___contentDigest = 'project___icon___internal___contentDigest',
  project___icon___internal___description = 'project___icon___internal___description',
  project___icon___internal___fieldOwners = 'project___icon___internal___fieldOwners',
  project___icon___internal___ignoreType = 'project___icon___internal___ignoreType',
  project___icon___internal___mediaType = 'project___icon___internal___mediaType',
  project___icon___internal___owner = 'project___icon___internal___owner',
  project___icon___internal___type = 'project___icon___internal___type',
  project___detail___id = 'project___detail___id',
  project___detail___parent___id = 'project___detail___parent___id',
  project___detail___parent___children = 'project___detail___parent___children',
  project___detail___children = 'project___detail___children',
  project___detail___children___id = 'project___detail___children___id',
  project___detail___children___children = 'project___detail___children___children',
  project___detail___internal___content = 'project___detail___internal___content',
  project___detail___internal___contentDigest = 'project___detail___internal___contentDigest',
  project___detail___internal___description = 'project___detail___internal___description',
  project___detail___internal___fieldOwners = 'project___detail___internal___fieldOwners',
  project___detail___internal___ignoreType = 'project___detail___internal___ignoreType',
  project___detail___internal___mediaType = 'project___detail___internal___mediaType',
  project___detail___internal___owner = 'project___detail___internal___owner',
  project___detail___internal___type = 'project___detail___internal___type',
  project___detail___detail = 'project___detail___detail',
  project___detail___sys___type = 'project___detail___sys___type',
  project___detail___childrenMarkdownRemark = 'project___detail___childrenMarkdownRemark',
  project___detail___childrenMarkdownRemark___id = 'project___detail___childrenMarkdownRemark___id',
  project___detail___childrenMarkdownRemark___excerpt = 'project___detail___childrenMarkdownRemark___excerpt',
  project___detail___childrenMarkdownRemark___rawMarkdownBody = 'project___detail___childrenMarkdownRemark___rawMarkdownBody',
  project___detail___childrenMarkdownRemark___html = 'project___detail___childrenMarkdownRemark___html',
  project___detail___childrenMarkdownRemark___htmlAst = 'project___detail___childrenMarkdownRemark___htmlAst',
  project___detail___childrenMarkdownRemark___excerptAst = 'project___detail___childrenMarkdownRemark___excerptAst',
  project___detail___childrenMarkdownRemark___headings = 'project___detail___childrenMarkdownRemark___headings',
  project___detail___childrenMarkdownRemark___timeToRead = 'project___detail___childrenMarkdownRemark___timeToRead',
  project___detail___childrenMarkdownRemark___tableOfContents = 'project___detail___childrenMarkdownRemark___tableOfContents',
  project___detail___childrenMarkdownRemark___children = 'project___detail___childrenMarkdownRemark___children',
  project___detail___childMarkdownRemark___id = 'project___detail___childMarkdownRemark___id',
  project___detail___childMarkdownRemark___excerpt = 'project___detail___childMarkdownRemark___excerpt',
  project___detail___childMarkdownRemark___rawMarkdownBody = 'project___detail___childMarkdownRemark___rawMarkdownBody',
  project___detail___childMarkdownRemark___html = 'project___detail___childMarkdownRemark___html',
  project___detail___childMarkdownRemark___htmlAst = 'project___detail___childMarkdownRemark___htmlAst',
  project___detail___childMarkdownRemark___excerptAst = 'project___detail___childMarkdownRemark___excerptAst',
  project___detail___childMarkdownRemark___headings = 'project___detail___childMarkdownRemark___headings',
  project___detail___childMarkdownRemark___timeToRead = 'project___detail___childMarkdownRemark___timeToRead',
  project___detail___childMarkdownRemark___tableOfContents = 'project___detail___childMarkdownRemark___tableOfContents',
  project___detail___childMarkdownRemark___children = 'project___detail___childMarkdownRemark___children',
  project___spaceId = 'project___spaceId',
  project___createdAt = 'project___createdAt',
  project___updatedAt = 'project___updatedAt',
  project___sys___type = 'project___sys___type',
  project___sys___revision = 'project___sys___revision',
  project___childrenContentfulProjectDetailTextNode = 'project___childrenContentfulProjectDetailTextNode',
  project___childrenContentfulProjectDetailTextNode___id = 'project___childrenContentfulProjectDetailTextNode___id',
  project___childrenContentfulProjectDetailTextNode___parent___id = 'project___childrenContentfulProjectDetailTextNode___parent___id',
  project___childrenContentfulProjectDetailTextNode___parent___children = 'project___childrenContentfulProjectDetailTextNode___parent___children',
  project___childrenContentfulProjectDetailTextNode___children = 'project___childrenContentfulProjectDetailTextNode___children',
  project___childrenContentfulProjectDetailTextNode___children___id = 'project___childrenContentfulProjectDetailTextNode___children___id',
  project___childrenContentfulProjectDetailTextNode___children___children = 'project___childrenContentfulProjectDetailTextNode___children___children',
  project___childrenContentfulProjectDetailTextNode___internal___content = 'project___childrenContentfulProjectDetailTextNode___internal___content',
  project___childrenContentfulProjectDetailTextNode___internal___contentDigest = 'project___childrenContentfulProjectDetailTextNode___internal___contentDigest',
  project___childrenContentfulProjectDetailTextNode___internal___description = 'project___childrenContentfulProjectDetailTextNode___internal___description',
  project___childrenContentfulProjectDetailTextNode___internal___fieldOwners = 'project___childrenContentfulProjectDetailTextNode___internal___fieldOwners',
  project___childrenContentfulProjectDetailTextNode___internal___ignoreType = 'project___childrenContentfulProjectDetailTextNode___internal___ignoreType',
  project___childrenContentfulProjectDetailTextNode___internal___mediaType = 'project___childrenContentfulProjectDetailTextNode___internal___mediaType',
  project___childrenContentfulProjectDetailTextNode___internal___owner = 'project___childrenContentfulProjectDetailTextNode___internal___owner',
  project___childrenContentfulProjectDetailTextNode___internal___type = 'project___childrenContentfulProjectDetailTextNode___internal___type',
  project___childrenContentfulProjectDetailTextNode___detail = 'project___childrenContentfulProjectDetailTextNode___detail',
  project___childrenContentfulProjectDetailTextNode___sys___type = 'project___childrenContentfulProjectDetailTextNode___sys___type',
  project___childrenContentfulProjectDetailTextNode___childrenMarkdownRemark = 'project___childrenContentfulProjectDetailTextNode___childrenMarkdownRemark',
  project___childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___id = 'project___childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___id',
  project___childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___excerpt = 'project___childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___excerpt',
  project___childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___rawMarkdownBody = 'project___childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___rawMarkdownBody',
  project___childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___html = 'project___childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___html',
  project___childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___htmlAst = 'project___childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___htmlAst',
  project___childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___excerptAst = 'project___childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___excerptAst',
  project___childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___headings = 'project___childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___headings',
  project___childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___timeToRead = 'project___childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___timeToRead',
  project___childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___tableOfContents = 'project___childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___tableOfContents',
  project___childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___children = 'project___childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___children',
  project___childrenContentfulProjectDetailTextNode___childMarkdownRemark___id = 'project___childrenContentfulProjectDetailTextNode___childMarkdownRemark___id',
  project___childrenContentfulProjectDetailTextNode___childMarkdownRemark___excerpt = 'project___childrenContentfulProjectDetailTextNode___childMarkdownRemark___excerpt',
  project___childrenContentfulProjectDetailTextNode___childMarkdownRemark___rawMarkdownBody = 'project___childrenContentfulProjectDetailTextNode___childMarkdownRemark___rawMarkdownBody',
  project___childrenContentfulProjectDetailTextNode___childMarkdownRemark___html = 'project___childrenContentfulProjectDetailTextNode___childMarkdownRemark___html',
  project___childrenContentfulProjectDetailTextNode___childMarkdownRemark___htmlAst = 'project___childrenContentfulProjectDetailTextNode___childMarkdownRemark___htmlAst',
  project___childrenContentfulProjectDetailTextNode___childMarkdownRemark___excerptAst = 'project___childrenContentfulProjectDetailTextNode___childMarkdownRemark___excerptAst',
  project___childrenContentfulProjectDetailTextNode___childMarkdownRemark___headings = 'project___childrenContentfulProjectDetailTextNode___childMarkdownRemark___headings',
  project___childrenContentfulProjectDetailTextNode___childMarkdownRemark___timeToRead = 'project___childrenContentfulProjectDetailTextNode___childMarkdownRemark___timeToRead',
  project___childrenContentfulProjectDetailTextNode___childMarkdownRemark___tableOfContents = 'project___childrenContentfulProjectDetailTextNode___childMarkdownRemark___tableOfContents',
  project___childrenContentfulProjectDetailTextNode___childMarkdownRemark___children = 'project___childrenContentfulProjectDetailTextNode___childMarkdownRemark___children',
  project___childContentfulProjectDetailTextNode___id = 'project___childContentfulProjectDetailTextNode___id',
  project___childContentfulProjectDetailTextNode___parent___id = 'project___childContentfulProjectDetailTextNode___parent___id',
  project___childContentfulProjectDetailTextNode___parent___children = 'project___childContentfulProjectDetailTextNode___parent___children',
  project___childContentfulProjectDetailTextNode___children = 'project___childContentfulProjectDetailTextNode___children',
  project___childContentfulProjectDetailTextNode___children___id = 'project___childContentfulProjectDetailTextNode___children___id',
  project___childContentfulProjectDetailTextNode___children___children = 'project___childContentfulProjectDetailTextNode___children___children',
  project___childContentfulProjectDetailTextNode___internal___content = 'project___childContentfulProjectDetailTextNode___internal___content',
  project___childContentfulProjectDetailTextNode___internal___contentDigest = 'project___childContentfulProjectDetailTextNode___internal___contentDigest',
  project___childContentfulProjectDetailTextNode___internal___description = 'project___childContentfulProjectDetailTextNode___internal___description',
  project___childContentfulProjectDetailTextNode___internal___fieldOwners = 'project___childContentfulProjectDetailTextNode___internal___fieldOwners',
  project___childContentfulProjectDetailTextNode___internal___ignoreType = 'project___childContentfulProjectDetailTextNode___internal___ignoreType',
  project___childContentfulProjectDetailTextNode___internal___mediaType = 'project___childContentfulProjectDetailTextNode___internal___mediaType',
  project___childContentfulProjectDetailTextNode___internal___owner = 'project___childContentfulProjectDetailTextNode___internal___owner',
  project___childContentfulProjectDetailTextNode___internal___type = 'project___childContentfulProjectDetailTextNode___internal___type',
  project___childContentfulProjectDetailTextNode___detail = 'project___childContentfulProjectDetailTextNode___detail',
  project___childContentfulProjectDetailTextNode___sys___type = 'project___childContentfulProjectDetailTextNode___sys___type',
  project___childContentfulProjectDetailTextNode___childrenMarkdownRemark = 'project___childContentfulProjectDetailTextNode___childrenMarkdownRemark',
  project___childContentfulProjectDetailTextNode___childrenMarkdownRemark___id = 'project___childContentfulProjectDetailTextNode___childrenMarkdownRemark___id',
  project___childContentfulProjectDetailTextNode___childrenMarkdownRemark___excerpt = 'project___childContentfulProjectDetailTextNode___childrenMarkdownRemark___excerpt',
  project___childContentfulProjectDetailTextNode___childrenMarkdownRemark___rawMarkdownBody = 'project___childContentfulProjectDetailTextNode___childrenMarkdownRemark___rawMarkdownBody',
  project___childContentfulProjectDetailTextNode___childrenMarkdownRemark___html = 'project___childContentfulProjectDetailTextNode___childrenMarkdownRemark___html',
  project___childContentfulProjectDetailTextNode___childrenMarkdownRemark___htmlAst = 'project___childContentfulProjectDetailTextNode___childrenMarkdownRemark___htmlAst',
  project___childContentfulProjectDetailTextNode___childrenMarkdownRemark___excerptAst = 'project___childContentfulProjectDetailTextNode___childrenMarkdownRemark___excerptAst',
  project___childContentfulProjectDetailTextNode___childrenMarkdownRemark___headings = 'project___childContentfulProjectDetailTextNode___childrenMarkdownRemark___headings',
  project___childContentfulProjectDetailTextNode___childrenMarkdownRemark___timeToRead = 'project___childContentfulProjectDetailTextNode___childrenMarkdownRemark___timeToRead',
  project___childContentfulProjectDetailTextNode___childrenMarkdownRemark___tableOfContents = 'project___childContentfulProjectDetailTextNode___childrenMarkdownRemark___tableOfContents',
  project___childContentfulProjectDetailTextNode___childrenMarkdownRemark___children = 'project___childContentfulProjectDetailTextNode___childrenMarkdownRemark___children',
  project___childContentfulProjectDetailTextNode___childMarkdownRemark___id = 'project___childContentfulProjectDetailTextNode___childMarkdownRemark___id',
  project___childContentfulProjectDetailTextNode___childMarkdownRemark___excerpt = 'project___childContentfulProjectDetailTextNode___childMarkdownRemark___excerpt',
  project___childContentfulProjectDetailTextNode___childMarkdownRemark___rawMarkdownBody = 'project___childContentfulProjectDetailTextNode___childMarkdownRemark___rawMarkdownBody',
  project___childContentfulProjectDetailTextNode___childMarkdownRemark___html = 'project___childContentfulProjectDetailTextNode___childMarkdownRemark___html',
  project___childContentfulProjectDetailTextNode___childMarkdownRemark___htmlAst = 'project___childContentfulProjectDetailTextNode___childMarkdownRemark___htmlAst',
  project___childContentfulProjectDetailTextNode___childMarkdownRemark___excerptAst = 'project___childContentfulProjectDetailTextNode___childMarkdownRemark___excerptAst',
  project___childContentfulProjectDetailTextNode___childMarkdownRemark___headings = 'project___childContentfulProjectDetailTextNode___childMarkdownRemark___headings',
  project___childContentfulProjectDetailTextNode___childMarkdownRemark___timeToRead = 'project___childContentfulProjectDetailTextNode___childMarkdownRemark___timeToRead',
  project___childContentfulProjectDetailTextNode___childMarkdownRemark___tableOfContents = 'project___childContentfulProjectDetailTextNode___childMarkdownRemark___tableOfContents',
  project___childContentfulProjectDetailTextNode___childMarkdownRemark___children = 'project___childContentfulProjectDetailTextNode___childMarkdownRemark___children',
  project___parent___id = 'project___parent___id',
  project___parent___parent___id = 'project___parent___parent___id',
  project___parent___parent___children = 'project___parent___parent___children',
  project___parent___children = 'project___parent___children',
  project___parent___children___id = 'project___parent___children___id',
  project___parent___children___children = 'project___parent___children___children',
  project___parent___internal___content = 'project___parent___internal___content',
  project___parent___internal___contentDigest = 'project___parent___internal___contentDigest',
  project___parent___internal___description = 'project___parent___internal___description',
  project___parent___internal___fieldOwners = 'project___parent___internal___fieldOwners',
  project___parent___internal___ignoreType = 'project___parent___internal___ignoreType',
  project___parent___internal___mediaType = 'project___parent___internal___mediaType',
  project___parent___internal___owner = 'project___parent___internal___owner',
  project___parent___internal___type = 'project___parent___internal___type',
  project___children = 'project___children',
  project___children___id = 'project___children___id',
  project___children___parent___id = 'project___children___parent___id',
  project___children___parent___children = 'project___children___parent___children',
  project___children___children = 'project___children___children',
  project___children___children___id = 'project___children___children___id',
  project___children___children___children = 'project___children___children___children',
  project___children___internal___content = 'project___children___internal___content',
  project___children___internal___contentDigest = 'project___children___internal___contentDigest',
  project___children___internal___description = 'project___children___internal___description',
  project___children___internal___fieldOwners = 'project___children___internal___fieldOwners',
  project___children___internal___ignoreType = 'project___children___internal___ignoreType',
  project___children___internal___mediaType = 'project___children___internal___mediaType',
  project___children___internal___owner = 'project___children___internal___owner',
  project___children___internal___type = 'project___children___internal___type',
  project___internal___content = 'project___internal___content',
  project___internal___contentDigest = 'project___internal___contentDigest',
  project___internal___description = 'project___internal___description',
  project___internal___fieldOwners = 'project___internal___fieldOwners',
  project___internal___ignoreType = 'project___internal___ignoreType',
  project___internal___mediaType = 'project___internal___mediaType',
  project___internal___owner = 'project___internal___owner',
  project___internal___type = 'project___internal___type',
  spaceId = 'spaceId',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  sys___type = 'sys___type',
  sys___revision = 'sys___revision',
  sys___contentType___sys___type = 'sys___contentType___sys___type',
  sys___contentType___sys___linkType = 'sys___contentType___sys___linkType',
  sys___contentType___sys___id = 'sys___contentType___sys___id',
  oss = 'oss',
  oss___contentful_id = 'oss___contentful_id',
  oss___id = 'oss___id',
  oss___node_locale = 'oss___node_locale',
  oss___name = 'oss___name',
  oss___subName = 'oss___subName',
  oss___startDate = 'oss___startDate',
  oss___href = 'oss___href',
  oss___tags = 'oss___tags',
  oss___tags___contentful_id = 'oss___tags___contentful_id',
  oss___tags___id = 'oss___tags___id',
  oss___tags___node_locale = 'oss___tags___node_locale',
  oss___tags___name = 'oss___tags___name',
  oss___tags___level = 'oss___tags___level',
  oss___tags___skill_map = 'oss___tags___skill_map',
  oss___tags___skill_map___contentful_id = 'oss___tags___skill_map___contentful_id',
  oss___tags___skill_map___id = 'oss___tags___skill_map___id',
  oss___tags___skill_map___node_locale = 'oss___tags___skill_map___node_locale',
  oss___tags___skill_map___sortKey = 'oss___tags___skill_map___sortKey',
  oss___tags___skill_map___name = 'oss___tags___skill_map___name',
  oss___tags___skill_map___expanded = 'oss___tags___skill_map___expanded',
  oss___tags___skill_map___skills = 'oss___tags___skill_map___skills',
  oss___tags___skill_map___spaceId = 'oss___tags___skill_map___spaceId',
  oss___tags___skill_map___createdAt = 'oss___tags___skill_map___createdAt',
  oss___tags___skill_map___updatedAt = 'oss___tags___skill_map___updatedAt',
  oss___tags___skill_map___children = 'oss___tags___skill_map___children',
  oss___tags___project = 'oss___tags___project',
  oss___tags___project___contentful_id = 'oss___tags___project___contentful_id',
  oss___tags___project___id = 'oss___tags___project___id',
  oss___tags___project___node_locale = 'oss___tags___project___node_locale',
  oss___tags___project___name = 'oss___tags___project___name',
  oss___tags___project___subName = 'oss___tags___project___subName',
  oss___tags___project___startDate = 'oss___tags___project___startDate',
  oss___tags___project___endDate = 'oss___tags___project___endDate',
  oss___tags___project___tags = 'oss___tags___project___tags',
  oss___tags___project___spaceId = 'oss___tags___project___spaceId',
  oss___tags___project___createdAt = 'oss___tags___project___createdAt',
  oss___tags___project___updatedAt = 'oss___tags___project___updatedAt',
  oss___tags___project___childrenContentfulProjectDetailTextNode = 'oss___tags___project___childrenContentfulProjectDetailTextNode',
  oss___tags___project___children = 'oss___tags___project___children',
  oss___tags___spaceId = 'oss___tags___spaceId',
  oss___tags___createdAt = 'oss___tags___createdAt',
  oss___tags___updatedAt = 'oss___tags___updatedAt',
  oss___tags___sys___type = 'oss___tags___sys___type',
  oss___tags___sys___revision = 'oss___tags___sys___revision',
  oss___tags___oss = 'oss___tags___oss',
  oss___tags___oss___contentful_id = 'oss___tags___oss___contentful_id',
  oss___tags___oss___id = 'oss___tags___oss___id',
  oss___tags___oss___node_locale = 'oss___tags___oss___node_locale',
  oss___tags___oss___name = 'oss___tags___oss___name',
  oss___tags___oss___subName = 'oss___tags___oss___subName',
  oss___tags___oss___startDate = 'oss___tags___oss___startDate',
  oss___tags___oss___href = 'oss___tags___oss___href',
  oss___tags___oss___tags = 'oss___tags___oss___tags',
  oss___tags___oss___spaceId = 'oss___tags___oss___spaceId',
  oss___tags___oss___createdAt = 'oss___tags___oss___createdAt',
  oss___tags___oss___updatedAt = 'oss___tags___oss___updatedAt',
  oss___tags___oss___childrenContentfulOssDetailTextNode = 'oss___tags___oss___childrenContentfulOssDetailTextNode',
  oss___tags___oss___children = 'oss___tags___oss___children',
  oss___tags___parent___id = 'oss___tags___parent___id',
  oss___tags___parent___children = 'oss___tags___parent___children',
  oss___tags___children = 'oss___tags___children',
  oss___tags___children___id = 'oss___tags___children___id',
  oss___tags___children___children = 'oss___tags___children___children',
  oss___tags___internal___content = 'oss___tags___internal___content',
  oss___tags___internal___contentDigest = 'oss___tags___internal___contentDigest',
  oss___tags___internal___description = 'oss___tags___internal___description',
  oss___tags___internal___fieldOwners = 'oss___tags___internal___fieldOwners',
  oss___tags___internal___ignoreType = 'oss___tags___internal___ignoreType',
  oss___tags___internal___mediaType = 'oss___tags___internal___mediaType',
  oss___tags___internal___owner = 'oss___tags___internal___owner',
  oss___tags___internal___type = 'oss___tags___internal___type',
  oss___icon___contentful_id = 'oss___icon___contentful_id',
  oss___icon___id = 'oss___icon___id',
  oss___icon___node_locale = 'oss___icon___node_locale',
  oss___icon___name = 'oss___icon___name',
  oss___icon___what_i_can_do = 'oss___icon___what_i_can_do',
  oss___icon___what_i_can_do___contentful_id = 'oss___icon___what_i_can_do___contentful_id',
  oss___icon___what_i_can_do___id = 'oss___icon___what_i_can_do___id',
  oss___icon___what_i_can_do___node_locale = 'oss___icon___what_i_can_do___node_locale',
  oss___icon___what_i_can_do___sortKey = 'oss___icon___what_i_can_do___sortKey',
  oss___icon___what_i_can_do___name = 'oss___icon___what_i_can_do___name',
  oss___icon___what_i_can_do___subName = 'oss___icon___what_i_can_do___subName',
  oss___icon___what_i_can_do___spaceId = 'oss___icon___what_i_can_do___spaceId',
  oss___icon___what_i_can_do___createdAt = 'oss___icon___what_i_can_do___createdAt',
  oss___icon___what_i_can_do___updatedAt = 'oss___icon___what_i_can_do___updatedAt',
  oss___icon___what_i_can_do___children = 'oss___icon___what_i_can_do___children',
  oss___icon___project = 'oss___icon___project',
  oss___icon___project___contentful_id = 'oss___icon___project___contentful_id',
  oss___icon___project___id = 'oss___icon___project___id',
  oss___icon___project___node_locale = 'oss___icon___project___node_locale',
  oss___icon___project___name = 'oss___icon___project___name',
  oss___icon___project___subName = 'oss___icon___project___subName',
  oss___icon___project___startDate = 'oss___icon___project___startDate',
  oss___icon___project___endDate = 'oss___icon___project___endDate',
  oss___icon___project___tags = 'oss___icon___project___tags',
  oss___icon___project___spaceId = 'oss___icon___project___spaceId',
  oss___icon___project___createdAt = 'oss___icon___project___createdAt',
  oss___icon___project___updatedAt = 'oss___icon___project___updatedAt',
  oss___icon___project___childrenContentfulProjectDetailTextNode = 'oss___icon___project___childrenContentfulProjectDetailTextNode',
  oss___icon___project___children = 'oss___icon___project___children',
  oss___icon___oss = 'oss___icon___oss',
  oss___icon___oss___contentful_id = 'oss___icon___oss___contentful_id',
  oss___icon___oss___id = 'oss___icon___oss___id',
  oss___icon___oss___node_locale = 'oss___icon___oss___node_locale',
  oss___icon___oss___name = 'oss___icon___oss___name',
  oss___icon___oss___subName = 'oss___icon___oss___subName',
  oss___icon___oss___startDate = 'oss___icon___oss___startDate',
  oss___icon___oss___href = 'oss___icon___oss___href',
  oss___icon___oss___tags = 'oss___icon___oss___tags',
  oss___icon___oss___spaceId = 'oss___icon___oss___spaceId',
  oss___icon___oss___createdAt = 'oss___icon___oss___createdAt',
  oss___icon___oss___updatedAt = 'oss___icon___oss___updatedAt',
  oss___icon___oss___childrenContentfulOssDetailTextNode = 'oss___icon___oss___childrenContentfulOssDetailTextNode',
  oss___icon___oss___children = 'oss___icon___oss___children',
  oss___icon___svg___id = 'oss___icon___svg___id',
  oss___icon___svg___children = 'oss___icon___svg___children',
  oss___icon___svg___svg = 'oss___icon___svg___svg',
  oss___icon___svg___childrenMarkdownRemark = 'oss___icon___svg___childrenMarkdownRemark',
  oss___icon___spaceId = 'oss___icon___spaceId',
  oss___icon___createdAt = 'oss___icon___createdAt',
  oss___icon___updatedAt = 'oss___icon___updatedAt',
  oss___icon___sys___type = 'oss___icon___sys___type',
  oss___icon___sys___revision = 'oss___icon___sys___revision',
  oss___icon___history = 'oss___icon___history',
  oss___icon___history___contentful_id = 'oss___icon___history___contentful_id',
  oss___icon___history___id = 'oss___icon___history___id',
  oss___icon___history___node_locale = 'oss___icon___history___node_locale',
  oss___icon___history___name = 'oss___icon___history___name',
  oss___icon___history___date = 'oss___icon___history___date',
  oss___icon___history___subName = 'oss___icon___history___subName',
  oss___icon___history___spaceId = 'oss___icon___history___spaceId',
  oss___icon___history___createdAt = 'oss___icon___history___createdAt',
  oss___icon___history___updatedAt = 'oss___icon___history___updatedAt',
  oss___icon___history___children = 'oss___icon___history___children',
  oss___icon___contact = 'oss___icon___contact',
  oss___icon___contact___contentful_id = 'oss___icon___contact___contentful_id',
  oss___icon___contact___id = 'oss___icon___contact___id',
  oss___icon___contact___node_locale = 'oss___icon___contact___node_locale',
  oss___icon___contact___sortKey = 'oss___icon___contact___sortKey',
  oss___icon___contact___name = 'oss___icon___contact___name',
  oss___icon___contact___subName = 'oss___icon___contact___subName',
  oss___icon___contact___href = 'oss___icon___contact___href',
  oss___icon___contact___spaceId = 'oss___icon___contact___spaceId',
  oss___icon___contact___createdAt = 'oss___icon___contact___createdAt',
  oss___icon___contact___updatedAt = 'oss___icon___contact___updatedAt',
  oss___icon___contact___children = 'oss___icon___contact___children',
  oss___icon___childrenContentfulIconSvgTextNode = 'oss___icon___childrenContentfulIconSvgTextNode',
  oss___icon___childrenContentfulIconSvgTextNode___id = 'oss___icon___childrenContentfulIconSvgTextNode___id',
  oss___icon___childrenContentfulIconSvgTextNode___children = 'oss___icon___childrenContentfulIconSvgTextNode___children',
  oss___icon___childrenContentfulIconSvgTextNode___svg = 'oss___icon___childrenContentfulIconSvgTextNode___svg',
  oss___icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark = 'oss___icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark',
  oss___icon___childContentfulIconSvgTextNode___id = 'oss___icon___childContentfulIconSvgTextNode___id',
  oss___icon___childContentfulIconSvgTextNode___children = 'oss___icon___childContentfulIconSvgTextNode___children',
  oss___icon___childContentfulIconSvgTextNode___svg = 'oss___icon___childContentfulIconSvgTextNode___svg',
  oss___icon___childContentfulIconSvgTextNode___childrenMarkdownRemark = 'oss___icon___childContentfulIconSvgTextNode___childrenMarkdownRemark',
  oss___icon___parent___id = 'oss___icon___parent___id',
  oss___icon___parent___children = 'oss___icon___parent___children',
  oss___icon___children = 'oss___icon___children',
  oss___icon___children___id = 'oss___icon___children___id',
  oss___icon___children___children = 'oss___icon___children___children',
  oss___icon___internal___content = 'oss___icon___internal___content',
  oss___icon___internal___contentDigest = 'oss___icon___internal___contentDigest',
  oss___icon___internal___description = 'oss___icon___internal___description',
  oss___icon___internal___fieldOwners = 'oss___icon___internal___fieldOwners',
  oss___icon___internal___ignoreType = 'oss___icon___internal___ignoreType',
  oss___icon___internal___mediaType = 'oss___icon___internal___mediaType',
  oss___icon___internal___owner = 'oss___icon___internal___owner',
  oss___icon___internal___type = 'oss___icon___internal___type',
  oss___image___contentful_id = 'oss___image___contentful_id',
  oss___image___id = 'oss___image___id',
  oss___image___spaceId = 'oss___image___spaceId',
  oss___image___createdAt = 'oss___image___createdAt',
  oss___image___updatedAt = 'oss___image___updatedAt',
  oss___image___file___url = 'oss___image___file___url',
  oss___image___file___fileName = 'oss___image___file___fileName',
  oss___image___file___contentType = 'oss___image___file___contentType',
  oss___image___title = 'oss___image___title',
  oss___image___description = 'oss___image___description',
  oss___image___node_locale = 'oss___image___node_locale',
  oss___image___sys___type = 'oss___image___sys___type',
  oss___image___sys___revision = 'oss___image___sys___revision',
  oss___image___localFile___sourceInstanceName = 'oss___image___localFile___sourceInstanceName',
  oss___image___localFile___absolutePath = 'oss___image___localFile___absolutePath',
  oss___image___localFile___relativePath = 'oss___image___localFile___relativePath',
  oss___image___localFile___extension = 'oss___image___localFile___extension',
  oss___image___localFile___size = 'oss___image___localFile___size',
  oss___image___localFile___prettySize = 'oss___image___localFile___prettySize',
  oss___image___localFile___modifiedTime = 'oss___image___localFile___modifiedTime',
  oss___image___localFile___accessTime = 'oss___image___localFile___accessTime',
  oss___image___localFile___changeTime = 'oss___image___localFile___changeTime',
  oss___image___localFile___birthTime = 'oss___image___localFile___birthTime',
  oss___image___localFile___root = 'oss___image___localFile___root',
  oss___image___localFile___dir = 'oss___image___localFile___dir',
  oss___image___localFile___base = 'oss___image___localFile___base',
  oss___image___localFile___ext = 'oss___image___localFile___ext',
  oss___image___localFile___name = 'oss___image___localFile___name',
  oss___image___localFile___relativeDirectory = 'oss___image___localFile___relativeDirectory',
  oss___image___localFile___dev = 'oss___image___localFile___dev',
  oss___image___localFile___mode = 'oss___image___localFile___mode',
  oss___image___localFile___nlink = 'oss___image___localFile___nlink',
  oss___image___localFile___uid = 'oss___image___localFile___uid',
  oss___image___localFile___gid = 'oss___image___localFile___gid',
  oss___image___localFile___rdev = 'oss___image___localFile___rdev',
  oss___image___localFile___ino = 'oss___image___localFile___ino',
  oss___image___localFile___atimeMs = 'oss___image___localFile___atimeMs',
  oss___image___localFile___mtimeMs = 'oss___image___localFile___mtimeMs',
  oss___image___localFile___ctimeMs = 'oss___image___localFile___ctimeMs',
  oss___image___localFile___atime = 'oss___image___localFile___atime',
  oss___image___localFile___mtime = 'oss___image___localFile___mtime',
  oss___image___localFile___ctime = 'oss___image___localFile___ctime',
  oss___image___localFile___birthtime = 'oss___image___localFile___birthtime',
  oss___image___localFile___birthtimeMs = 'oss___image___localFile___birthtimeMs',
  oss___image___localFile___blksize = 'oss___image___localFile___blksize',
  oss___image___localFile___blocks = 'oss___image___localFile___blocks',
  oss___image___localFile___url = 'oss___image___localFile___url',
  oss___image___localFile___publicURL = 'oss___image___localFile___publicURL',
  oss___image___localFile___childrenImageSharp = 'oss___image___localFile___childrenImageSharp',
  oss___image___localFile___childrenLocale = 'oss___image___localFile___childrenLocale',
  oss___image___localFile___id = 'oss___image___localFile___id',
  oss___image___localFile___children = 'oss___image___localFile___children',
  oss___image___fixed___base64 = 'oss___image___fixed___base64',
  oss___image___fixed___tracedSVG = 'oss___image___fixed___tracedSVG',
  oss___image___fixed___aspectRatio = 'oss___image___fixed___aspectRatio',
  oss___image___fixed___width = 'oss___image___fixed___width',
  oss___image___fixed___height = 'oss___image___fixed___height',
  oss___image___fixed___src = 'oss___image___fixed___src',
  oss___image___fixed___srcSet = 'oss___image___fixed___srcSet',
  oss___image___fixed___srcWebp = 'oss___image___fixed___srcWebp',
  oss___image___fixed___srcSetWebp = 'oss___image___fixed___srcSetWebp',
  oss___image___fluid___base64 = 'oss___image___fluid___base64',
  oss___image___fluid___tracedSVG = 'oss___image___fluid___tracedSVG',
  oss___image___fluid___aspectRatio = 'oss___image___fluid___aspectRatio',
  oss___image___fluid___src = 'oss___image___fluid___src',
  oss___image___fluid___srcSet = 'oss___image___fluid___srcSet',
  oss___image___fluid___srcWebp = 'oss___image___fluid___srcWebp',
  oss___image___fluid___srcSetWebp = 'oss___image___fluid___srcSetWebp',
  oss___image___fluid___sizes = 'oss___image___fluid___sizes',
  oss___image___gatsbyImageData = 'oss___image___gatsbyImageData',
  oss___image___resize___base64 = 'oss___image___resize___base64',
  oss___image___resize___tracedSVG = 'oss___image___resize___tracedSVG',
  oss___image___resize___src = 'oss___image___resize___src',
  oss___image___resize___width = 'oss___image___resize___width',
  oss___image___resize___height = 'oss___image___resize___height',
  oss___image___resize___aspectRatio = 'oss___image___resize___aspectRatio',
  oss___image___parent___id = 'oss___image___parent___id',
  oss___image___parent___children = 'oss___image___parent___children',
  oss___image___children = 'oss___image___children',
  oss___image___children___id = 'oss___image___children___id',
  oss___image___children___children = 'oss___image___children___children',
  oss___image___internal___content = 'oss___image___internal___content',
  oss___image___internal___contentDigest = 'oss___image___internal___contentDigest',
  oss___image___internal___description = 'oss___image___internal___description',
  oss___image___internal___fieldOwners = 'oss___image___internal___fieldOwners',
  oss___image___internal___ignoreType = 'oss___image___internal___ignoreType',
  oss___image___internal___mediaType = 'oss___image___internal___mediaType',
  oss___image___internal___owner = 'oss___image___internal___owner',
  oss___image___internal___type = 'oss___image___internal___type',
  oss___detail___id = 'oss___detail___id',
  oss___detail___parent___id = 'oss___detail___parent___id',
  oss___detail___parent___children = 'oss___detail___parent___children',
  oss___detail___children = 'oss___detail___children',
  oss___detail___children___id = 'oss___detail___children___id',
  oss___detail___children___children = 'oss___detail___children___children',
  oss___detail___internal___content = 'oss___detail___internal___content',
  oss___detail___internal___contentDigest = 'oss___detail___internal___contentDigest',
  oss___detail___internal___description = 'oss___detail___internal___description',
  oss___detail___internal___fieldOwners = 'oss___detail___internal___fieldOwners',
  oss___detail___internal___ignoreType = 'oss___detail___internal___ignoreType',
  oss___detail___internal___mediaType = 'oss___detail___internal___mediaType',
  oss___detail___internal___owner = 'oss___detail___internal___owner',
  oss___detail___internal___type = 'oss___detail___internal___type',
  oss___detail___detail = 'oss___detail___detail',
  oss___detail___sys___type = 'oss___detail___sys___type',
  oss___detail___childrenMarkdownRemark = 'oss___detail___childrenMarkdownRemark',
  oss___detail___childrenMarkdownRemark___id = 'oss___detail___childrenMarkdownRemark___id',
  oss___detail___childrenMarkdownRemark___excerpt = 'oss___detail___childrenMarkdownRemark___excerpt',
  oss___detail___childrenMarkdownRemark___rawMarkdownBody = 'oss___detail___childrenMarkdownRemark___rawMarkdownBody',
  oss___detail___childrenMarkdownRemark___html = 'oss___detail___childrenMarkdownRemark___html',
  oss___detail___childrenMarkdownRemark___htmlAst = 'oss___detail___childrenMarkdownRemark___htmlAst',
  oss___detail___childrenMarkdownRemark___excerptAst = 'oss___detail___childrenMarkdownRemark___excerptAst',
  oss___detail___childrenMarkdownRemark___headings = 'oss___detail___childrenMarkdownRemark___headings',
  oss___detail___childrenMarkdownRemark___timeToRead = 'oss___detail___childrenMarkdownRemark___timeToRead',
  oss___detail___childrenMarkdownRemark___tableOfContents = 'oss___detail___childrenMarkdownRemark___tableOfContents',
  oss___detail___childrenMarkdownRemark___children = 'oss___detail___childrenMarkdownRemark___children',
  oss___detail___childMarkdownRemark___id = 'oss___detail___childMarkdownRemark___id',
  oss___detail___childMarkdownRemark___excerpt = 'oss___detail___childMarkdownRemark___excerpt',
  oss___detail___childMarkdownRemark___rawMarkdownBody = 'oss___detail___childMarkdownRemark___rawMarkdownBody',
  oss___detail___childMarkdownRemark___html = 'oss___detail___childMarkdownRemark___html',
  oss___detail___childMarkdownRemark___htmlAst = 'oss___detail___childMarkdownRemark___htmlAst',
  oss___detail___childMarkdownRemark___excerptAst = 'oss___detail___childMarkdownRemark___excerptAst',
  oss___detail___childMarkdownRemark___headings = 'oss___detail___childMarkdownRemark___headings',
  oss___detail___childMarkdownRemark___timeToRead = 'oss___detail___childMarkdownRemark___timeToRead',
  oss___detail___childMarkdownRemark___tableOfContents = 'oss___detail___childMarkdownRemark___tableOfContents',
  oss___detail___childMarkdownRemark___children = 'oss___detail___childMarkdownRemark___children',
  oss___spaceId = 'oss___spaceId',
  oss___createdAt = 'oss___createdAt',
  oss___updatedAt = 'oss___updatedAt',
  oss___sys___type = 'oss___sys___type',
  oss___sys___revision = 'oss___sys___revision',
  oss___childrenContentfulOssDetailTextNode = 'oss___childrenContentfulOssDetailTextNode',
  oss___childrenContentfulOssDetailTextNode___id = 'oss___childrenContentfulOssDetailTextNode___id',
  oss___childrenContentfulOssDetailTextNode___parent___id = 'oss___childrenContentfulOssDetailTextNode___parent___id',
  oss___childrenContentfulOssDetailTextNode___parent___children = 'oss___childrenContentfulOssDetailTextNode___parent___children',
  oss___childrenContentfulOssDetailTextNode___children = 'oss___childrenContentfulOssDetailTextNode___children',
  oss___childrenContentfulOssDetailTextNode___children___id = 'oss___childrenContentfulOssDetailTextNode___children___id',
  oss___childrenContentfulOssDetailTextNode___children___children = 'oss___childrenContentfulOssDetailTextNode___children___children',
  oss___childrenContentfulOssDetailTextNode___internal___content = 'oss___childrenContentfulOssDetailTextNode___internal___content',
  oss___childrenContentfulOssDetailTextNode___internal___contentDigest = 'oss___childrenContentfulOssDetailTextNode___internal___contentDigest',
  oss___childrenContentfulOssDetailTextNode___internal___description = 'oss___childrenContentfulOssDetailTextNode___internal___description',
  oss___childrenContentfulOssDetailTextNode___internal___fieldOwners = 'oss___childrenContentfulOssDetailTextNode___internal___fieldOwners',
  oss___childrenContentfulOssDetailTextNode___internal___ignoreType = 'oss___childrenContentfulOssDetailTextNode___internal___ignoreType',
  oss___childrenContentfulOssDetailTextNode___internal___mediaType = 'oss___childrenContentfulOssDetailTextNode___internal___mediaType',
  oss___childrenContentfulOssDetailTextNode___internal___owner = 'oss___childrenContentfulOssDetailTextNode___internal___owner',
  oss___childrenContentfulOssDetailTextNode___internal___type = 'oss___childrenContentfulOssDetailTextNode___internal___type',
  oss___childrenContentfulOssDetailTextNode___detail = 'oss___childrenContentfulOssDetailTextNode___detail',
  oss___childrenContentfulOssDetailTextNode___sys___type = 'oss___childrenContentfulOssDetailTextNode___sys___type',
  oss___childrenContentfulOssDetailTextNode___childrenMarkdownRemark = 'oss___childrenContentfulOssDetailTextNode___childrenMarkdownRemark',
  oss___childrenContentfulOssDetailTextNode___childrenMarkdownRemark___id = 'oss___childrenContentfulOssDetailTextNode___childrenMarkdownRemark___id',
  oss___childrenContentfulOssDetailTextNode___childrenMarkdownRemark___excerpt = 'oss___childrenContentfulOssDetailTextNode___childrenMarkdownRemark___excerpt',
  oss___childrenContentfulOssDetailTextNode___childrenMarkdownRemark___rawMarkdownBody = 'oss___childrenContentfulOssDetailTextNode___childrenMarkdownRemark___rawMarkdownBody',
  oss___childrenContentfulOssDetailTextNode___childrenMarkdownRemark___html = 'oss___childrenContentfulOssDetailTextNode___childrenMarkdownRemark___html',
  oss___childrenContentfulOssDetailTextNode___childrenMarkdownRemark___htmlAst = 'oss___childrenContentfulOssDetailTextNode___childrenMarkdownRemark___htmlAst',
  oss___childrenContentfulOssDetailTextNode___childrenMarkdownRemark___excerptAst = 'oss___childrenContentfulOssDetailTextNode___childrenMarkdownRemark___excerptAst',
  oss___childrenContentfulOssDetailTextNode___childrenMarkdownRemark___headings = 'oss___childrenContentfulOssDetailTextNode___childrenMarkdownRemark___headings',
  oss___childrenContentfulOssDetailTextNode___childrenMarkdownRemark___timeToRead = 'oss___childrenContentfulOssDetailTextNode___childrenMarkdownRemark___timeToRead',
  oss___childrenContentfulOssDetailTextNode___childrenMarkdownRemark___tableOfContents = 'oss___childrenContentfulOssDetailTextNode___childrenMarkdownRemark___tableOfContents',
  oss___childrenContentfulOssDetailTextNode___childrenMarkdownRemark___children = 'oss___childrenContentfulOssDetailTextNode___childrenMarkdownRemark___children',
  oss___childrenContentfulOssDetailTextNode___childMarkdownRemark___id = 'oss___childrenContentfulOssDetailTextNode___childMarkdownRemark___id',
  oss___childrenContentfulOssDetailTextNode___childMarkdownRemark___excerpt = 'oss___childrenContentfulOssDetailTextNode___childMarkdownRemark___excerpt',
  oss___childrenContentfulOssDetailTextNode___childMarkdownRemark___rawMarkdownBody = 'oss___childrenContentfulOssDetailTextNode___childMarkdownRemark___rawMarkdownBody',
  oss___childrenContentfulOssDetailTextNode___childMarkdownRemark___html = 'oss___childrenContentfulOssDetailTextNode___childMarkdownRemark___html',
  oss___childrenContentfulOssDetailTextNode___childMarkdownRemark___htmlAst = 'oss___childrenContentfulOssDetailTextNode___childMarkdownRemark___htmlAst',
  oss___childrenContentfulOssDetailTextNode___childMarkdownRemark___excerptAst = 'oss___childrenContentfulOssDetailTextNode___childMarkdownRemark___excerptAst',
  oss___childrenContentfulOssDetailTextNode___childMarkdownRemark___headings = 'oss___childrenContentfulOssDetailTextNode___childMarkdownRemark___headings',
  oss___childrenContentfulOssDetailTextNode___childMarkdownRemark___timeToRead = 'oss___childrenContentfulOssDetailTextNode___childMarkdownRemark___timeToRead',
  oss___childrenContentfulOssDetailTextNode___childMarkdownRemark___tableOfContents = 'oss___childrenContentfulOssDetailTextNode___childMarkdownRemark___tableOfContents',
  oss___childrenContentfulOssDetailTextNode___childMarkdownRemark___children = 'oss___childrenContentfulOssDetailTextNode___childMarkdownRemark___children',
  oss___childContentfulOssDetailTextNode___id = 'oss___childContentfulOssDetailTextNode___id',
  oss___childContentfulOssDetailTextNode___parent___id = 'oss___childContentfulOssDetailTextNode___parent___id',
  oss___childContentfulOssDetailTextNode___parent___children = 'oss___childContentfulOssDetailTextNode___parent___children',
  oss___childContentfulOssDetailTextNode___children = 'oss___childContentfulOssDetailTextNode___children',
  oss___childContentfulOssDetailTextNode___children___id = 'oss___childContentfulOssDetailTextNode___children___id',
  oss___childContentfulOssDetailTextNode___children___children = 'oss___childContentfulOssDetailTextNode___children___children',
  oss___childContentfulOssDetailTextNode___internal___content = 'oss___childContentfulOssDetailTextNode___internal___content',
  oss___childContentfulOssDetailTextNode___internal___contentDigest = 'oss___childContentfulOssDetailTextNode___internal___contentDigest',
  oss___childContentfulOssDetailTextNode___internal___description = 'oss___childContentfulOssDetailTextNode___internal___description',
  oss___childContentfulOssDetailTextNode___internal___fieldOwners = 'oss___childContentfulOssDetailTextNode___internal___fieldOwners',
  oss___childContentfulOssDetailTextNode___internal___ignoreType = 'oss___childContentfulOssDetailTextNode___internal___ignoreType',
  oss___childContentfulOssDetailTextNode___internal___mediaType = 'oss___childContentfulOssDetailTextNode___internal___mediaType',
  oss___childContentfulOssDetailTextNode___internal___owner = 'oss___childContentfulOssDetailTextNode___internal___owner',
  oss___childContentfulOssDetailTextNode___internal___type = 'oss___childContentfulOssDetailTextNode___internal___type',
  oss___childContentfulOssDetailTextNode___detail = 'oss___childContentfulOssDetailTextNode___detail',
  oss___childContentfulOssDetailTextNode___sys___type = 'oss___childContentfulOssDetailTextNode___sys___type',
  oss___childContentfulOssDetailTextNode___childrenMarkdownRemark = 'oss___childContentfulOssDetailTextNode___childrenMarkdownRemark',
  oss___childContentfulOssDetailTextNode___childrenMarkdownRemark___id = 'oss___childContentfulOssDetailTextNode___childrenMarkdownRemark___id',
  oss___childContentfulOssDetailTextNode___childrenMarkdownRemark___excerpt = 'oss___childContentfulOssDetailTextNode___childrenMarkdownRemark___excerpt',
  oss___childContentfulOssDetailTextNode___childrenMarkdownRemark___rawMarkdownBody = 'oss___childContentfulOssDetailTextNode___childrenMarkdownRemark___rawMarkdownBody',
  oss___childContentfulOssDetailTextNode___childrenMarkdownRemark___html = 'oss___childContentfulOssDetailTextNode___childrenMarkdownRemark___html',
  oss___childContentfulOssDetailTextNode___childrenMarkdownRemark___htmlAst = 'oss___childContentfulOssDetailTextNode___childrenMarkdownRemark___htmlAst',
  oss___childContentfulOssDetailTextNode___childrenMarkdownRemark___excerptAst = 'oss___childContentfulOssDetailTextNode___childrenMarkdownRemark___excerptAst',
  oss___childContentfulOssDetailTextNode___childrenMarkdownRemark___headings = 'oss___childContentfulOssDetailTextNode___childrenMarkdownRemark___headings',
  oss___childContentfulOssDetailTextNode___childrenMarkdownRemark___timeToRead = 'oss___childContentfulOssDetailTextNode___childrenMarkdownRemark___timeToRead',
  oss___childContentfulOssDetailTextNode___childrenMarkdownRemark___tableOfContents = 'oss___childContentfulOssDetailTextNode___childrenMarkdownRemark___tableOfContents',
  oss___childContentfulOssDetailTextNode___childrenMarkdownRemark___children = 'oss___childContentfulOssDetailTextNode___childrenMarkdownRemark___children',
  oss___childContentfulOssDetailTextNode___childMarkdownRemark___id = 'oss___childContentfulOssDetailTextNode___childMarkdownRemark___id',
  oss___childContentfulOssDetailTextNode___childMarkdownRemark___excerpt = 'oss___childContentfulOssDetailTextNode___childMarkdownRemark___excerpt',
  oss___childContentfulOssDetailTextNode___childMarkdownRemark___rawMarkdownBody = 'oss___childContentfulOssDetailTextNode___childMarkdownRemark___rawMarkdownBody',
  oss___childContentfulOssDetailTextNode___childMarkdownRemark___html = 'oss___childContentfulOssDetailTextNode___childMarkdownRemark___html',
  oss___childContentfulOssDetailTextNode___childMarkdownRemark___htmlAst = 'oss___childContentfulOssDetailTextNode___childMarkdownRemark___htmlAst',
  oss___childContentfulOssDetailTextNode___childMarkdownRemark___excerptAst = 'oss___childContentfulOssDetailTextNode___childMarkdownRemark___excerptAst',
  oss___childContentfulOssDetailTextNode___childMarkdownRemark___headings = 'oss___childContentfulOssDetailTextNode___childMarkdownRemark___headings',
  oss___childContentfulOssDetailTextNode___childMarkdownRemark___timeToRead = 'oss___childContentfulOssDetailTextNode___childMarkdownRemark___timeToRead',
  oss___childContentfulOssDetailTextNode___childMarkdownRemark___tableOfContents = 'oss___childContentfulOssDetailTextNode___childMarkdownRemark___tableOfContents',
  oss___childContentfulOssDetailTextNode___childMarkdownRemark___children = 'oss___childContentfulOssDetailTextNode___childMarkdownRemark___children',
  oss___parent___id = 'oss___parent___id',
  oss___parent___parent___id = 'oss___parent___parent___id',
  oss___parent___parent___children = 'oss___parent___parent___children',
  oss___parent___children = 'oss___parent___children',
  oss___parent___children___id = 'oss___parent___children___id',
  oss___parent___children___children = 'oss___parent___children___children',
  oss___parent___internal___content = 'oss___parent___internal___content',
  oss___parent___internal___contentDigest = 'oss___parent___internal___contentDigest',
  oss___parent___internal___description = 'oss___parent___internal___description',
  oss___parent___internal___fieldOwners = 'oss___parent___internal___fieldOwners',
  oss___parent___internal___ignoreType = 'oss___parent___internal___ignoreType',
  oss___parent___internal___mediaType = 'oss___parent___internal___mediaType',
  oss___parent___internal___owner = 'oss___parent___internal___owner',
  oss___parent___internal___type = 'oss___parent___internal___type',
  oss___children = 'oss___children',
  oss___children___id = 'oss___children___id',
  oss___children___parent___id = 'oss___children___parent___id',
  oss___children___parent___children = 'oss___children___parent___children',
  oss___children___children = 'oss___children___children',
  oss___children___children___id = 'oss___children___children___id',
  oss___children___children___children = 'oss___children___children___children',
  oss___children___internal___content = 'oss___children___internal___content',
  oss___children___internal___contentDigest = 'oss___children___internal___contentDigest',
  oss___children___internal___description = 'oss___children___internal___description',
  oss___children___internal___fieldOwners = 'oss___children___internal___fieldOwners',
  oss___children___internal___ignoreType = 'oss___children___internal___ignoreType',
  oss___children___internal___mediaType = 'oss___children___internal___mediaType',
  oss___children___internal___owner = 'oss___children___internal___owner',
  oss___children___internal___type = 'oss___children___internal___type',
  oss___internal___content = 'oss___internal___content',
  oss___internal___contentDigest = 'oss___internal___contentDigest',
  oss___internal___description = 'oss___internal___description',
  oss___internal___fieldOwners = 'oss___internal___fieldOwners',
  oss___internal___ignoreType = 'oss___internal___ignoreType',
  oss___internal___mediaType = 'oss___internal___mediaType',
  oss___internal___owner = 'oss___internal___owner',
  oss___internal___type = 'oss___internal___type',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type'
}

export type ContentfulTagFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  level?: Maybe<IntQueryOperatorInput>;
  skill_map?: Maybe<ContentfulSkillMapFilterListInput>;
  project?: Maybe<ContentfulProjectFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulTagSysFilterInput>;
  oss?: Maybe<ContentfulOssFilterListInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ContentfulTagFilterListInput = {
  elemMatch?: Maybe<ContentfulTagFilterInput>;
};

export type ContentfulTagGroupConnection = {
  __typename?: 'ContentfulTagGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulTagEdge>;
  nodes: Array<ContentfulTag>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulTagSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulTagFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulTagSys = {
  __typename?: 'ContentfulTagSys';
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulTagSysContentType>;
};

export type ContentfulTagSysContentType = {
  __typename?: 'ContentfulTagSysContentType';
  sys?: Maybe<ContentfulTagSysContentTypeSys>;
};

export type ContentfulTagSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulTagSysContentTypeSysFilterInput>;
};

export type ContentfulTagSysContentTypeSys = {
  __typename?: 'ContentfulTagSysContentTypeSys';
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulTagSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulTagSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulTagSysContentTypeFilterInput>;
};

export type ContentfulWhatICanDo = ContentfulReference & ContentfulEntry & Node & {
  __typename?: 'ContentfulWhatICanDo';
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  sortKey?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  subName?: Maybe<Scalars['String']>;
  icon?: Maybe<ContentfulIcon>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulWhatICanDoSys>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulWhatICanDoCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulWhatICanDoUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulWhatICanDoConnection = {
  __typename?: 'ContentfulWhatICanDoConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulWhatICanDoEdge>;
  nodes: Array<ContentfulWhatICanDo>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulWhatICanDoGroupConnection>;
};


export type ContentfulWhatICanDoConnectionDistinctArgs = {
  field: ContentfulWhatICanDoFieldsEnum;
};


export type ContentfulWhatICanDoConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulWhatICanDoFieldsEnum;
};

export type ContentfulWhatICanDoEdge = {
  __typename?: 'ContentfulWhatICanDoEdge';
  next?: Maybe<ContentfulWhatICanDo>;
  node: ContentfulWhatICanDo;
  previous?: Maybe<ContentfulWhatICanDo>;
};

export enum ContentfulWhatICanDoFieldsEnum {
  contentful_id = 'contentful_id',
  id = 'id',
  node_locale = 'node_locale',
  sortKey = 'sortKey',
  name = 'name',
  subName = 'subName',
  icon___contentful_id = 'icon___contentful_id',
  icon___id = 'icon___id',
  icon___node_locale = 'icon___node_locale',
  icon___name = 'icon___name',
  icon___what_i_can_do = 'icon___what_i_can_do',
  icon___what_i_can_do___contentful_id = 'icon___what_i_can_do___contentful_id',
  icon___what_i_can_do___id = 'icon___what_i_can_do___id',
  icon___what_i_can_do___node_locale = 'icon___what_i_can_do___node_locale',
  icon___what_i_can_do___sortKey = 'icon___what_i_can_do___sortKey',
  icon___what_i_can_do___name = 'icon___what_i_can_do___name',
  icon___what_i_can_do___subName = 'icon___what_i_can_do___subName',
  icon___what_i_can_do___icon___contentful_id = 'icon___what_i_can_do___icon___contentful_id',
  icon___what_i_can_do___icon___id = 'icon___what_i_can_do___icon___id',
  icon___what_i_can_do___icon___node_locale = 'icon___what_i_can_do___icon___node_locale',
  icon___what_i_can_do___icon___name = 'icon___what_i_can_do___icon___name',
  icon___what_i_can_do___icon___what_i_can_do = 'icon___what_i_can_do___icon___what_i_can_do',
  icon___what_i_can_do___icon___project = 'icon___what_i_can_do___icon___project',
  icon___what_i_can_do___icon___oss = 'icon___what_i_can_do___icon___oss',
  icon___what_i_can_do___icon___spaceId = 'icon___what_i_can_do___icon___spaceId',
  icon___what_i_can_do___icon___createdAt = 'icon___what_i_can_do___icon___createdAt',
  icon___what_i_can_do___icon___updatedAt = 'icon___what_i_can_do___icon___updatedAt',
  icon___what_i_can_do___icon___history = 'icon___what_i_can_do___icon___history',
  icon___what_i_can_do___icon___contact = 'icon___what_i_can_do___icon___contact',
  icon___what_i_can_do___icon___childrenContentfulIconSvgTextNode = 'icon___what_i_can_do___icon___childrenContentfulIconSvgTextNode',
  icon___what_i_can_do___icon___children = 'icon___what_i_can_do___icon___children',
  icon___what_i_can_do___spaceId = 'icon___what_i_can_do___spaceId',
  icon___what_i_can_do___createdAt = 'icon___what_i_can_do___createdAt',
  icon___what_i_can_do___updatedAt = 'icon___what_i_can_do___updatedAt',
  icon___what_i_can_do___sys___type = 'icon___what_i_can_do___sys___type',
  icon___what_i_can_do___sys___revision = 'icon___what_i_can_do___sys___revision',
  icon___what_i_can_do___parent___id = 'icon___what_i_can_do___parent___id',
  icon___what_i_can_do___parent___children = 'icon___what_i_can_do___parent___children',
  icon___what_i_can_do___children = 'icon___what_i_can_do___children',
  icon___what_i_can_do___children___id = 'icon___what_i_can_do___children___id',
  icon___what_i_can_do___children___children = 'icon___what_i_can_do___children___children',
  icon___what_i_can_do___internal___content = 'icon___what_i_can_do___internal___content',
  icon___what_i_can_do___internal___contentDigest = 'icon___what_i_can_do___internal___contentDigest',
  icon___what_i_can_do___internal___description = 'icon___what_i_can_do___internal___description',
  icon___what_i_can_do___internal___fieldOwners = 'icon___what_i_can_do___internal___fieldOwners',
  icon___what_i_can_do___internal___ignoreType = 'icon___what_i_can_do___internal___ignoreType',
  icon___what_i_can_do___internal___mediaType = 'icon___what_i_can_do___internal___mediaType',
  icon___what_i_can_do___internal___owner = 'icon___what_i_can_do___internal___owner',
  icon___what_i_can_do___internal___type = 'icon___what_i_can_do___internal___type',
  icon___project = 'icon___project',
  icon___project___contentful_id = 'icon___project___contentful_id',
  icon___project___id = 'icon___project___id',
  icon___project___node_locale = 'icon___project___node_locale',
  icon___project___name = 'icon___project___name',
  icon___project___subName = 'icon___project___subName',
  icon___project___startDate = 'icon___project___startDate',
  icon___project___endDate = 'icon___project___endDate',
  icon___project___tags = 'icon___project___tags',
  icon___project___tags___contentful_id = 'icon___project___tags___contentful_id',
  icon___project___tags___id = 'icon___project___tags___id',
  icon___project___tags___node_locale = 'icon___project___tags___node_locale',
  icon___project___tags___name = 'icon___project___tags___name',
  icon___project___tags___level = 'icon___project___tags___level',
  icon___project___tags___skill_map = 'icon___project___tags___skill_map',
  icon___project___tags___project = 'icon___project___tags___project',
  icon___project___tags___spaceId = 'icon___project___tags___spaceId',
  icon___project___tags___createdAt = 'icon___project___tags___createdAt',
  icon___project___tags___updatedAt = 'icon___project___tags___updatedAt',
  icon___project___tags___oss = 'icon___project___tags___oss',
  icon___project___tags___children = 'icon___project___tags___children',
  icon___project___icon___contentful_id = 'icon___project___icon___contentful_id',
  icon___project___icon___id = 'icon___project___icon___id',
  icon___project___icon___node_locale = 'icon___project___icon___node_locale',
  icon___project___icon___name = 'icon___project___icon___name',
  icon___project___icon___what_i_can_do = 'icon___project___icon___what_i_can_do',
  icon___project___icon___project = 'icon___project___icon___project',
  icon___project___icon___oss = 'icon___project___icon___oss',
  icon___project___icon___spaceId = 'icon___project___icon___spaceId',
  icon___project___icon___createdAt = 'icon___project___icon___createdAt',
  icon___project___icon___updatedAt = 'icon___project___icon___updatedAt',
  icon___project___icon___history = 'icon___project___icon___history',
  icon___project___icon___contact = 'icon___project___icon___contact',
  icon___project___icon___childrenContentfulIconSvgTextNode = 'icon___project___icon___childrenContentfulIconSvgTextNode',
  icon___project___icon___children = 'icon___project___icon___children',
  icon___project___detail___id = 'icon___project___detail___id',
  icon___project___detail___children = 'icon___project___detail___children',
  icon___project___detail___detail = 'icon___project___detail___detail',
  icon___project___detail___childrenMarkdownRemark = 'icon___project___detail___childrenMarkdownRemark',
  icon___project___spaceId = 'icon___project___spaceId',
  icon___project___createdAt = 'icon___project___createdAt',
  icon___project___updatedAt = 'icon___project___updatedAt',
  icon___project___sys___type = 'icon___project___sys___type',
  icon___project___sys___revision = 'icon___project___sys___revision',
  icon___project___childrenContentfulProjectDetailTextNode = 'icon___project___childrenContentfulProjectDetailTextNode',
  icon___project___childrenContentfulProjectDetailTextNode___id = 'icon___project___childrenContentfulProjectDetailTextNode___id',
  icon___project___childrenContentfulProjectDetailTextNode___children = 'icon___project___childrenContentfulProjectDetailTextNode___children',
  icon___project___childrenContentfulProjectDetailTextNode___detail = 'icon___project___childrenContentfulProjectDetailTextNode___detail',
  icon___project___childrenContentfulProjectDetailTextNode___childrenMarkdownRemark = 'icon___project___childrenContentfulProjectDetailTextNode___childrenMarkdownRemark',
  icon___project___childContentfulProjectDetailTextNode___id = 'icon___project___childContentfulProjectDetailTextNode___id',
  icon___project___childContentfulProjectDetailTextNode___children = 'icon___project___childContentfulProjectDetailTextNode___children',
  icon___project___childContentfulProjectDetailTextNode___detail = 'icon___project___childContentfulProjectDetailTextNode___detail',
  icon___project___childContentfulProjectDetailTextNode___childrenMarkdownRemark = 'icon___project___childContentfulProjectDetailTextNode___childrenMarkdownRemark',
  icon___project___parent___id = 'icon___project___parent___id',
  icon___project___parent___children = 'icon___project___parent___children',
  icon___project___children = 'icon___project___children',
  icon___project___children___id = 'icon___project___children___id',
  icon___project___children___children = 'icon___project___children___children',
  icon___project___internal___content = 'icon___project___internal___content',
  icon___project___internal___contentDigest = 'icon___project___internal___contentDigest',
  icon___project___internal___description = 'icon___project___internal___description',
  icon___project___internal___fieldOwners = 'icon___project___internal___fieldOwners',
  icon___project___internal___ignoreType = 'icon___project___internal___ignoreType',
  icon___project___internal___mediaType = 'icon___project___internal___mediaType',
  icon___project___internal___owner = 'icon___project___internal___owner',
  icon___project___internal___type = 'icon___project___internal___type',
  icon___oss = 'icon___oss',
  icon___oss___contentful_id = 'icon___oss___contentful_id',
  icon___oss___id = 'icon___oss___id',
  icon___oss___node_locale = 'icon___oss___node_locale',
  icon___oss___name = 'icon___oss___name',
  icon___oss___subName = 'icon___oss___subName',
  icon___oss___startDate = 'icon___oss___startDate',
  icon___oss___href = 'icon___oss___href',
  icon___oss___tags = 'icon___oss___tags',
  icon___oss___tags___contentful_id = 'icon___oss___tags___contentful_id',
  icon___oss___tags___id = 'icon___oss___tags___id',
  icon___oss___tags___node_locale = 'icon___oss___tags___node_locale',
  icon___oss___tags___name = 'icon___oss___tags___name',
  icon___oss___tags___level = 'icon___oss___tags___level',
  icon___oss___tags___skill_map = 'icon___oss___tags___skill_map',
  icon___oss___tags___project = 'icon___oss___tags___project',
  icon___oss___tags___spaceId = 'icon___oss___tags___spaceId',
  icon___oss___tags___createdAt = 'icon___oss___tags___createdAt',
  icon___oss___tags___updatedAt = 'icon___oss___tags___updatedAt',
  icon___oss___tags___oss = 'icon___oss___tags___oss',
  icon___oss___tags___children = 'icon___oss___tags___children',
  icon___oss___icon___contentful_id = 'icon___oss___icon___contentful_id',
  icon___oss___icon___id = 'icon___oss___icon___id',
  icon___oss___icon___node_locale = 'icon___oss___icon___node_locale',
  icon___oss___icon___name = 'icon___oss___icon___name',
  icon___oss___icon___what_i_can_do = 'icon___oss___icon___what_i_can_do',
  icon___oss___icon___project = 'icon___oss___icon___project',
  icon___oss___icon___oss = 'icon___oss___icon___oss',
  icon___oss___icon___spaceId = 'icon___oss___icon___spaceId',
  icon___oss___icon___createdAt = 'icon___oss___icon___createdAt',
  icon___oss___icon___updatedAt = 'icon___oss___icon___updatedAt',
  icon___oss___icon___history = 'icon___oss___icon___history',
  icon___oss___icon___contact = 'icon___oss___icon___contact',
  icon___oss___icon___childrenContentfulIconSvgTextNode = 'icon___oss___icon___childrenContentfulIconSvgTextNode',
  icon___oss___icon___children = 'icon___oss___icon___children',
  icon___oss___image___contentful_id = 'icon___oss___image___contentful_id',
  icon___oss___image___id = 'icon___oss___image___id',
  icon___oss___image___spaceId = 'icon___oss___image___spaceId',
  icon___oss___image___createdAt = 'icon___oss___image___createdAt',
  icon___oss___image___updatedAt = 'icon___oss___image___updatedAt',
  icon___oss___image___title = 'icon___oss___image___title',
  icon___oss___image___description = 'icon___oss___image___description',
  icon___oss___image___node_locale = 'icon___oss___image___node_locale',
  icon___oss___image___gatsbyImageData = 'icon___oss___image___gatsbyImageData',
  icon___oss___image___children = 'icon___oss___image___children',
  icon___oss___detail___id = 'icon___oss___detail___id',
  icon___oss___detail___children = 'icon___oss___detail___children',
  icon___oss___detail___detail = 'icon___oss___detail___detail',
  icon___oss___detail___childrenMarkdownRemark = 'icon___oss___detail___childrenMarkdownRemark',
  icon___oss___spaceId = 'icon___oss___spaceId',
  icon___oss___createdAt = 'icon___oss___createdAt',
  icon___oss___updatedAt = 'icon___oss___updatedAt',
  icon___oss___sys___type = 'icon___oss___sys___type',
  icon___oss___sys___revision = 'icon___oss___sys___revision',
  icon___oss___childrenContentfulOssDetailTextNode = 'icon___oss___childrenContentfulOssDetailTextNode',
  icon___oss___childrenContentfulOssDetailTextNode___id = 'icon___oss___childrenContentfulOssDetailTextNode___id',
  icon___oss___childrenContentfulOssDetailTextNode___children = 'icon___oss___childrenContentfulOssDetailTextNode___children',
  icon___oss___childrenContentfulOssDetailTextNode___detail = 'icon___oss___childrenContentfulOssDetailTextNode___detail',
  icon___oss___childrenContentfulOssDetailTextNode___childrenMarkdownRemark = 'icon___oss___childrenContentfulOssDetailTextNode___childrenMarkdownRemark',
  icon___oss___childContentfulOssDetailTextNode___id = 'icon___oss___childContentfulOssDetailTextNode___id',
  icon___oss___childContentfulOssDetailTextNode___children = 'icon___oss___childContentfulOssDetailTextNode___children',
  icon___oss___childContentfulOssDetailTextNode___detail = 'icon___oss___childContentfulOssDetailTextNode___detail',
  icon___oss___childContentfulOssDetailTextNode___childrenMarkdownRemark = 'icon___oss___childContentfulOssDetailTextNode___childrenMarkdownRemark',
  icon___oss___parent___id = 'icon___oss___parent___id',
  icon___oss___parent___children = 'icon___oss___parent___children',
  icon___oss___children = 'icon___oss___children',
  icon___oss___children___id = 'icon___oss___children___id',
  icon___oss___children___children = 'icon___oss___children___children',
  icon___oss___internal___content = 'icon___oss___internal___content',
  icon___oss___internal___contentDigest = 'icon___oss___internal___contentDigest',
  icon___oss___internal___description = 'icon___oss___internal___description',
  icon___oss___internal___fieldOwners = 'icon___oss___internal___fieldOwners',
  icon___oss___internal___ignoreType = 'icon___oss___internal___ignoreType',
  icon___oss___internal___mediaType = 'icon___oss___internal___mediaType',
  icon___oss___internal___owner = 'icon___oss___internal___owner',
  icon___oss___internal___type = 'icon___oss___internal___type',
  icon___svg___id = 'icon___svg___id',
  icon___svg___parent___id = 'icon___svg___parent___id',
  icon___svg___parent___children = 'icon___svg___parent___children',
  icon___svg___children = 'icon___svg___children',
  icon___svg___children___id = 'icon___svg___children___id',
  icon___svg___children___children = 'icon___svg___children___children',
  icon___svg___internal___content = 'icon___svg___internal___content',
  icon___svg___internal___contentDigest = 'icon___svg___internal___contentDigest',
  icon___svg___internal___description = 'icon___svg___internal___description',
  icon___svg___internal___fieldOwners = 'icon___svg___internal___fieldOwners',
  icon___svg___internal___ignoreType = 'icon___svg___internal___ignoreType',
  icon___svg___internal___mediaType = 'icon___svg___internal___mediaType',
  icon___svg___internal___owner = 'icon___svg___internal___owner',
  icon___svg___internal___type = 'icon___svg___internal___type',
  icon___svg___svg = 'icon___svg___svg',
  icon___svg___sys___type = 'icon___svg___sys___type',
  icon___svg___childrenMarkdownRemark = 'icon___svg___childrenMarkdownRemark',
  icon___svg___childrenMarkdownRemark___id = 'icon___svg___childrenMarkdownRemark___id',
  icon___svg___childrenMarkdownRemark___excerpt = 'icon___svg___childrenMarkdownRemark___excerpt',
  icon___svg___childrenMarkdownRemark___rawMarkdownBody = 'icon___svg___childrenMarkdownRemark___rawMarkdownBody',
  icon___svg___childrenMarkdownRemark___html = 'icon___svg___childrenMarkdownRemark___html',
  icon___svg___childrenMarkdownRemark___htmlAst = 'icon___svg___childrenMarkdownRemark___htmlAst',
  icon___svg___childrenMarkdownRemark___excerptAst = 'icon___svg___childrenMarkdownRemark___excerptAst',
  icon___svg___childrenMarkdownRemark___headings = 'icon___svg___childrenMarkdownRemark___headings',
  icon___svg___childrenMarkdownRemark___timeToRead = 'icon___svg___childrenMarkdownRemark___timeToRead',
  icon___svg___childrenMarkdownRemark___tableOfContents = 'icon___svg___childrenMarkdownRemark___tableOfContents',
  icon___svg___childrenMarkdownRemark___children = 'icon___svg___childrenMarkdownRemark___children',
  icon___svg___childMarkdownRemark___id = 'icon___svg___childMarkdownRemark___id',
  icon___svg___childMarkdownRemark___excerpt = 'icon___svg___childMarkdownRemark___excerpt',
  icon___svg___childMarkdownRemark___rawMarkdownBody = 'icon___svg___childMarkdownRemark___rawMarkdownBody',
  icon___svg___childMarkdownRemark___html = 'icon___svg___childMarkdownRemark___html',
  icon___svg___childMarkdownRemark___htmlAst = 'icon___svg___childMarkdownRemark___htmlAst',
  icon___svg___childMarkdownRemark___excerptAst = 'icon___svg___childMarkdownRemark___excerptAst',
  icon___svg___childMarkdownRemark___headings = 'icon___svg___childMarkdownRemark___headings',
  icon___svg___childMarkdownRemark___timeToRead = 'icon___svg___childMarkdownRemark___timeToRead',
  icon___svg___childMarkdownRemark___tableOfContents = 'icon___svg___childMarkdownRemark___tableOfContents',
  icon___svg___childMarkdownRemark___children = 'icon___svg___childMarkdownRemark___children',
  icon___spaceId = 'icon___spaceId',
  icon___createdAt = 'icon___createdAt',
  icon___updatedAt = 'icon___updatedAt',
  icon___sys___type = 'icon___sys___type',
  icon___sys___revision = 'icon___sys___revision',
  icon___history = 'icon___history',
  icon___history___contentful_id = 'icon___history___contentful_id',
  icon___history___id = 'icon___history___id',
  icon___history___node_locale = 'icon___history___node_locale',
  icon___history___name = 'icon___history___name',
  icon___history___date = 'icon___history___date',
  icon___history___subName = 'icon___history___subName',
  icon___history___icon___contentful_id = 'icon___history___icon___contentful_id',
  icon___history___icon___id = 'icon___history___icon___id',
  icon___history___icon___node_locale = 'icon___history___icon___node_locale',
  icon___history___icon___name = 'icon___history___icon___name',
  icon___history___icon___what_i_can_do = 'icon___history___icon___what_i_can_do',
  icon___history___icon___project = 'icon___history___icon___project',
  icon___history___icon___oss = 'icon___history___icon___oss',
  icon___history___icon___spaceId = 'icon___history___icon___spaceId',
  icon___history___icon___createdAt = 'icon___history___icon___createdAt',
  icon___history___icon___updatedAt = 'icon___history___icon___updatedAt',
  icon___history___icon___history = 'icon___history___icon___history',
  icon___history___icon___contact = 'icon___history___icon___contact',
  icon___history___icon___childrenContentfulIconSvgTextNode = 'icon___history___icon___childrenContentfulIconSvgTextNode',
  icon___history___icon___children = 'icon___history___icon___children',
  icon___history___spaceId = 'icon___history___spaceId',
  icon___history___createdAt = 'icon___history___createdAt',
  icon___history___updatedAt = 'icon___history___updatedAt',
  icon___history___sys___type = 'icon___history___sys___type',
  icon___history___sys___revision = 'icon___history___sys___revision',
  icon___history___parent___id = 'icon___history___parent___id',
  icon___history___parent___children = 'icon___history___parent___children',
  icon___history___children = 'icon___history___children',
  icon___history___children___id = 'icon___history___children___id',
  icon___history___children___children = 'icon___history___children___children',
  icon___history___internal___content = 'icon___history___internal___content',
  icon___history___internal___contentDigest = 'icon___history___internal___contentDigest',
  icon___history___internal___description = 'icon___history___internal___description',
  icon___history___internal___fieldOwners = 'icon___history___internal___fieldOwners',
  icon___history___internal___ignoreType = 'icon___history___internal___ignoreType',
  icon___history___internal___mediaType = 'icon___history___internal___mediaType',
  icon___history___internal___owner = 'icon___history___internal___owner',
  icon___history___internal___type = 'icon___history___internal___type',
  icon___contact = 'icon___contact',
  icon___contact___contentful_id = 'icon___contact___contentful_id',
  icon___contact___id = 'icon___contact___id',
  icon___contact___node_locale = 'icon___contact___node_locale',
  icon___contact___sortKey = 'icon___contact___sortKey',
  icon___contact___name = 'icon___contact___name',
  icon___contact___subName = 'icon___contact___subName',
  icon___contact___href = 'icon___contact___href',
  icon___contact___icon___contentful_id = 'icon___contact___icon___contentful_id',
  icon___contact___icon___id = 'icon___contact___icon___id',
  icon___contact___icon___node_locale = 'icon___contact___icon___node_locale',
  icon___contact___icon___name = 'icon___contact___icon___name',
  icon___contact___icon___what_i_can_do = 'icon___contact___icon___what_i_can_do',
  icon___contact___icon___project = 'icon___contact___icon___project',
  icon___contact___icon___oss = 'icon___contact___icon___oss',
  icon___contact___icon___spaceId = 'icon___contact___icon___spaceId',
  icon___contact___icon___createdAt = 'icon___contact___icon___createdAt',
  icon___contact___icon___updatedAt = 'icon___contact___icon___updatedAt',
  icon___contact___icon___history = 'icon___contact___icon___history',
  icon___contact___icon___contact = 'icon___contact___icon___contact',
  icon___contact___icon___childrenContentfulIconSvgTextNode = 'icon___contact___icon___childrenContentfulIconSvgTextNode',
  icon___contact___icon___children = 'icon___contact___icon___children',
  icon___contact___spaceId = 'icon___contact___spaceId',
  icon___contact___createdAt = 'icon___contact___createdAt',
  icon___contact___updatedAt = 'icon___contact___updatedAt',
  icon___contact___sys___type = 'icon___contact___sys___type',
  icon___contact___sys___revision = 'icon___contact___sys___revision',
  icon___contact___parent___id = 'icon___contact___parent___id',
  icon___contact___parent___children = 'icon___contact___parent___children',
  icon___contact___children = 'icon___contact___children',
  icon___contact___children___id = 'icon___contact___children___id',
  icon___contact___children___children = 'icon___contact___children___children',
  icon___contact___internal___content = 'icon___contact___internal___content',
  icon___contact___internal___contentDigest = 'icon___contact___internal___contentDigest',
  icon___contact___internal___description = 'icon___contact___internal___description',
  icon___contact___internal___fieldOwners = 'icon___contact___internal___fieldOwners',
  icon___contact___internal___ignoreType = 'icon___contact___internal___ignoreType',
  icon___contact___internal___mediaType = 'icon___contact___internal___mediaType',
  icon___contact___internal___owner = 'icon___contact___internal___owner',
  icon___contact___internal___type = 'icon___contact___internal___type',
  icon___childrenContentfulIconSvgTextNode = 'icon___childrenContentfulIconSvgTextNode',
  icon___childrenContentfulIconSvgTextNode___id = 'icon___childrenContentfulIconSvgTextNode___id',
  icon___childrenContentfulIconSvgTextNode___parent___id = 'icon___childrenContentfulIconSvgTextNode___parent___id',
  icon___childrenContentfulIconSvgTextNode___parent___children = 'icon___childrenContentfulIconSvgTextNode___parent___children',
  icon___childrenContentfulIconSvgTextNode___children = 'icon___childrenContentfulIconSvgTextNode___children',
  icon___childrenContentfulIconSvgTextNode___children___id = 'icon___childrenContentfulIconSvgTextNode___children___id',
  icon___childrenContentfulIconSvgTextNode___children___children = 'icon___childrenContentfulIconSvgTextNode___children___children',
  icon___childrenContentfulIconSvgTextNode___internal___content = 'icon___childrenContentfulIconSvgTextNode___internal___content',
  icon___childrenContentfulIconSvgTextNode___internal___contentDigest = 'icon___childrenContentfulIconSvgTextNode___internal___contentDigest',
  icon___childrenContentfulIconSvgTextNode___internal___description = 'icon___childrenContentfulIconSvgTextNode___internal___description',
  icon___childrenContentfulIconSvgTextNode___internal___fieldOwners = 'icon___childrenContentfulIconSvgTextNode___internal___fieldOwners',
  icon___childrenContentfulIconSvgTextNode___internal___ignoreType = 'icon___childrenContentfulIconSvgTextNode___internal___ignoreType',
  icon___childrenContentfulIconSvgTextNode___internal___mediaType = 'icon___childrenContentfulIconSvgTextNode___internal___mediaType',
  icon___childrenContentfulIconSvgTextNode___internal___owner = 'icon___childrenContentfulIconSvgTextNode___internal___owner',
  icon___childrenContentfulIconSvgTextNode___internal___type = 'icon___childrenContentfulIconSvgTextNode___internal___type',
  icon___childrenContentfulIconSvgTextNode___svg = 'icon___childrenContentfulIconSvgTextNode___svg',
  icon___childrenContentfulIconSvgTextNode___sys___type = 'icon___childrenContentfulIconSvgTextNode___sys___type',
  icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark = 'icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark',
  icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___id = 'icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___id',
  icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___excerpt = 'icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___excerpt',
  icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___rawMarkdownBody = 'icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___rawMarkdownBody',
  icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___html = 'icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___html',
  icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___htmlAst = 'icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___htmlAst',
  icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___excerptAst = 'icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___excerptAst',
  icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___headings = 'icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___headings',
  icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___timeToRead = 'icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___timeToRead',
  icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___tableOfContents = 'icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___tableOfContents',
  icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___children = 'icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___children',
  icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___id = 'icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___id',
  icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___excerpt = 'icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___excerpt',
  icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___rawMarkdownBody = 'icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___rawMarkdownBody',
  icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___html = 'icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___html',
  icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___htmlAst = 'icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___htmlAst',
  icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___excerptAst = 'icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___excerptAst',
  icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___headings = 'icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___headings',
  icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___timeToRead = 'icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___timeToRead',
  icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___tableOfContents = 'icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___tableOfContents',
  icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___children = 'icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___children',
  icon___childContentfulIconSvgTextNode___id = 'icon___childContentfulIconSvgTextNode___id',
  icon___childContentfulIconSvgTextNode___parent___id = 'icon___childContentfulIconSvgTextNode___parent___id',
  icon___childContentfulIconSvgTextNode___parent___children = 'icon___childContentfulIconSvgTextNode___parent___children',
  icon___childContentfulIconSvgTextNode___children = 'icon___childContentfulIconSvgTextNode___children',
  icon___childContentfulIconSvgTextNode___children___id = 'icon___childContentfulIconSvgTextNode___children___id',
  icon___childContentfulIconSvgTextNode___children___children = 'icon___childContentfulIconSvgTextNode___children___children',
  icon___childContentfulIconSvgTextNode___internal___content = 'icon___childContentfulIconSvgTextNode___internal___content',
  icon___childContentfulIconSvgTextNode___internal___contentDigest = 'icon___childContentfulIconSvgTextNode___internal___contentDigest',
  icon___childContentfulIconSvgTextNode___internal___description = 'icon___childContentfulIconSvgTextNode___internal___description',
  icon___childContentfulIconSvgTextNode___internal___fieldOwners = 'icon___childContentfulIconSvgTextNode___internal___fieldOwners',
  icon___childContentfulIconSvgTextNode___internal___ignoreType = 'icon___childContentfulIconSvgTextNode___internal___ignoreType',
  icon___childContentfulIconSvgTextNode___internal___mediaType = 'icon___childContentfulIconSvgTextNode___internal___mediaType',
  icon___childContentfulIconSvgTextNode___internal___owner = 'icon___childContentfulIconSvgTextNode___internal___owner',
  icon___childContentfulIconSvgTextNode___internal___type = 'icon___childContentfulIconSvgTextNode___internal___type',
  icon___childContentfulIconSvgTextNode___svg = 'icon___childContentfulIconSvgTextNode___svg',
  icon___childContentfulIconSvgTextNode___sys___type = 'icon___childContentfulIconSvgTextNode___sys___type',
  icon___childContentfulIconSvgTextNode___childrenMarkdownRemark = 'icon___childContentfulIconSvgTextNode___childrenMarkdownRemark',
  icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___id = 'icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___id',
  icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___excerpt = 'icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___excerpt',
  icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___rawMarkdownBody = 'icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___rawMarkdownBody',
  icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___html = 'icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___html',
  icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___htmlAst = 'icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___htmlAst',
  icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___excerptAst = 'icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___excerptAst',
  icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___headings = 'icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___headings',
  icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___timeToRead = 'icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___timeToRead',
  icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___tableOfContents = 'icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___tableOfContents',
  icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___children = 'icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___children',
  icon___childContentfulIconSvgTextNode___childMarkdownRemark___id = 'icon___childContentfulIconSvgTextNode___childMarkdownRemark___id',
  icon___childContentfulIconSvgTextNode___childMarkdownRemark___excerpt = 'icon___childContentfulIconSvgTextNode___childMarkdownRemark___excerpt',
  icon___childContentfulIconSvgTextNode___childMarkdownRemark___rawMarkdownBody = 'icon___childContentfulIconSvgTextNode___childMarkdownRemark___rawMarkdownBody',
  icon___childContentfulIconSvgTextNode___childMarkdownRemark___html = 'icon___childContentfulIconSvgTextNode___childMarkdownRemark___html',
  icon___childContentfulIconSvgTextNode___childMarkdownRemark___htmlAst = 'icon___childContentfulIconSvgTextNode___childMarkdownRemark___htmlAst',
  icon___childContentfulIconSvgTextNode___childMarkdownRemark___excerptAst = 'icon___childContentfulIconSvgTextNode___childMarkdownRemark___excerptAst',
  icon___childContentfulIconSvgTextNode___childMarkdownRemark___headings = 'icon___childContentfulIconSvgTextNode___childMarkdownRemark___headings',
  icon___childContentfulIconSvgTextNode___childMarkdownRemark___timeToRead = 'icon___childContentfulIconSvgTextNode___childMarkdownRemark___timeToRead',
  icon___childContentfulIconSvgTextNode___childMarkdownRemark___tableOfContents = 'icon___childContentfulIconSvgTextNode___childMarkdownRemark___tableOfContents',
  icon___childContentfulIconSvgTextNode___childMarkdownRemark___children = 'icon___childContentfulIconSvgTextNode___childMarkdownRemark___children',
  icon___parent___id = 'icon___parent___id',
  icon___parent___parent___id = 'icon___parent___parent___id',
  icon___parent___parent___children = 'icon___parent___parent___children',
  icon___parent___children = 'icon___parent___children',
  icon___parent___children___id = 'icon___parent___children___id',
  icon___parent___children___children = 'icon___parent___children___children',
  icon___parent___internal___content = 'icon___parent___internal___content',
  icon___parent___internal___contentDigest = 'icon___parent___internal___contentDigest',
  icon___parent___internal___description = 'icon___parent___internal___description',
  icon___parent___internal___fieldOwners = 'icon___parent___internal___fieldOwners',
  icon___parent___internal___ignoreType = 'icon___parent___internal___ignoreType',
  icon___parent___internal___mediaType = 'icon___parent___internal___mediaType',
  icon___parent___internal___owner = 'icon___parent___internal___owner',
  icon___parent___internal___type = 'icon___parent___internal___type',
  icon___children = 'icon___children',
  icon___children___id = 'icon___children___id',
  icon___children___parent___id = 'icon___children___parent___id',
  icon___children___parent___children = 'icon___children___parent___children',
  icon___children___children = 'icon___children___children',
  icon___children___children___id = 'icon___children___children___id',
  icon___children___children___children = 'icon___children___children___children',
  icon___children___internal___content = 'icon___children___internal___content',
  icon___children___internal___contentDigest = 'icon___children___internal___contentDigest',
  icon___children___internal___description = 'icon___children___internal___description',
  icon___children___internal___fieldOwners = 'icon___children___internal___fieldOwners',
  icon___children___internal___ignoreType = 'icon___children___internal___ignoreType',
  icon___children___internal___mediaType = 'icon___children___internal___mediaType',
  icon___children___internal___owner = 'icon___children___internal___owner',
  icon___children___internal___type = 'icon___children___internal___type',
  icon___internal___content = 'icon___internal___content',
  icon___internal___contentDigest = 'icon___internal___contentDigest',
  icon___internal___description = 'icon___internal___description',
  icon___internal___fieldOwners = 'icon___internal___fieldOwners',
  icon___internal___ignoreType = 'icon___internal___ignoreType',
  icon___internal___mediaType = 'icon___internal___mediaType',
  icon___internal___owner = 'icon___internal___owner',
  icon___internal___type = 'icon___internal___type',
  spaceId = 'spaceId',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  sys___type = 'sys___type',
  sys___revision = 'sys___revision',
  sys___contentType___sys___type = 'sys___contentType___sys___type',
  sys___contentType___sys___linkType = 'sys___contentType___sys___linkType',
  sys___contentType___sys___id = 'sys___contentType___sys___id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type'
}

export type ContentfulWhatICanDoFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  sortKey?: Maybe<IntQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  subName?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<ContentfulIconFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulWhatICanDoSysFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ContentfulWhatICanDoFilterListInput = {
  elemMatch?: Maybe<ContentfulWhatICanDoFilterInput>;
};

export type ContentfulWhatICanDoGroupConnection = {
  __typename?: 'ContentfulWhatICanDoGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulWhatICanDoEdge>;
  nodes: Array<ContentfulWhatICanDo>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulWhatICanDoSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulWhatICanDoFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulWhatICanDoSys = {
  __typename?: 'ContentfulWhatICanDoSys';
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulWhatICanDoSysContentType>;
};

export type ContentfulWhatICanDoSysContentType = {
  __typename?: 'ContentfulWhatICanDoSysContentType';
  sys?: Maybe<ContentfulWhatICanDoSysContentTypeSys>;
};

export type ContentfulWhatICanDoSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulWhatICanDoSysContentTypeSysFilterInput>;
};

export type ContentfulWhatICanDoSysContentTypeSys = {
  __typename?: 'ContentfulWhatICanDoSysContentTypeSys';
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulWhatICanDoSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulWhatICanDoSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulWhatICanDoSysContentTypeFilterInput>;
};


export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
};

export type Directory = Node & {
  __typename?: 'Directory';
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryConnection = {
  __typename?: 'DirectoryConnection';
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<DirectoryGroupConnection>;
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  __typename?: 'DirectoryEdge';
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export enum DirectoryFieldsEnum {
  sourceInstanceName = 'sourceInstanceName',
  absolutePath = 'absolutePath',
  relativePath = 'relativePath',
  extension = 'extension',
  size = 'size',
  prettySize = 'prettySize',
  modifiedTime = 'modifiedTime',
  accessTime = 'accessTime',
  changeTime = 'changeTime',
  birthTime = 'birthTime',
  root = 'root',
  dir = 'dir',
  base = 'base',
  ext = 'ext',
  name = 'name',
  relativeDirectory = 'relativeDirectory',
  dev = 'dev',
  mode = 'mode',
  nlink = 'nlink',
  uid = 'uid',
  gid = 'gid',
  rdev = 'rdev',
  ino = 'ino',
  atimeMs = 'atimeMs',
  mtimeMs = 'mtimeMs',
  ctimeMs = 'ctimeMs',
  atime = 'atime',
  mtime = 'mtime',
  ctime = 'ctime',
  birthtime = 'birthtime',
  birthtimeMs = 'birthtimeMs',
  blksize = 'blksize',
  blocks = 'blocks',
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type'
}

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DirectoryGroupConnection = {
  __typename?: 'DirectoryGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DuotoneGradient = {
  highlight: Scalars['String'];
  shadow: Scalars['String'];
  opacity?: Maybe<Scalars['Int']>;
};

export type File = Node & {
  __typename?: 'File';
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>;
  /** Returns all children nodes filtered by type ImageSharp */
  childrenImageSharp?: Maybe<Array<Maybe<ImageSharp>>>;
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  childImageSharp?: Maybe<ImageSharp>;
  /** Returns all children nodes filtered by type Locale */
  childrenLocale?: Maybe<Array<Maybe<Locale>>>;
  /** Returns the first child node of type Locale or null if there are no children of given type on this node */
  childLocale?: Maybe<Locale>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileConnection = {
  __typename?: 'FileConnection';
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<FileGroupConnection>;
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  __typename?: 'FileEdge';
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export enum FileFieldsEnum {
  sourceInstanceName = 'sourceInstanceName',
  absolutePath = 'absolutePath',
  relativePath = 'relativePath',
  extension = 'extension',
  size = 'size',
  prettySize = 'prettySize',
  modifiedTime = 'modifiedTime',
  accessTime = 'accessTime',
  changeTime = 'changeTime',
  birthTime = 'birthTime',
  root = 'root',
  dir = 'dir',
  base = 'base',
  ext = 'ext',
  name = 'name',
  relativeDirectory = 'relativeDirectory',
  dev = 'dev',
  mode = 'mode',
  nlink = 'nlink',
  uid = 'uid',
  gid = 'gid',
  rdev = 'rdev',
  ino = 'ino',
  atimeMs = 'atimeMs',
  mtimeMs = 'mtimeMs',
  ctimeMs = 'ctimeMs',
  atime = 'atime',
  mtime = 'mtime',
  ctime = 'ctime',
  birthtime = 'birthtime',
  birthtimeMs = 'birthtimeMs',
  blksize = 'blksize',
  blocks = 'blocks',
  url = 'url',
  publicURL = 'publicURL',
  childrenImageSharp = 'childrenImageSharp',
  childrenImageSharp___fixed___base64 = 'childrenImageSharp___fixed___base64',
  childrenImageSharp___fixed___tracedSVG = 'childrenImageSharp___fixed___tracedSVG',
  childrenImageSharp___fixed___aspectRatio = 'childrenImageSharp___fixed___aspectRatio',
  childrenImageSharp___fixed___width = 'childrenImageSharp___fixed___width',
  childrenImageSharp___fixed___height = 'childrenImageSharp___fixed___height',
  childrenImageSharp___fixed___src = 'childrenImageSharp___fixed___src',
  childrenImageSharp___fixed___srcSet = 'childrenImageSharp___fixed___srcSet',
  childrenImageSharp___fixed___srcWebp = 'childrenImageSharp___fixed___srcWebp',
  childrenImageSharp___fixed___srcSetWebp = 'childrenImageSharp___fixed___srcSetWebp',
  childrenImageSharp___fixed___originalName = 'childrenImageSharp___fixed___originalName',
  childrenImageSharp___fluid___base64 = 'childrenImageSharp___fluid___base64',
  childrenImageSharp___fluid___tracedSVG = 'childrenImageSharp___fluid___tracedSVG',
  childrenImageSharp___fluid___aspectRatio = 'childrenImageSharp___fluid___aspectRatio',
  childrenImageSharp___fluid___src = 'childrenImageSharp___fluid___src',
  childrenImageSharp___fluid___srcSet = 'childrenImageSharp___fluid___srcSet',
  childrenImageSharp___fluid___srcWebp = 'childrenImageSharp___fluid___srcWebp',
  childrenImageSharp___fluid___srcSetWebp = 'childrenImageSharp___fluid___srcSetWebp',
  childrenImageSharp___fluid___sizes = 'childrenImageSharp___fluid___sizes',
  childrenImageSharp___fluid___originalImg = 'childrenImageSharp___fluid___originalImg',
  childrenImageSharp___fluid___originalName = 'childrenImageSharp___fluid___originalName',
  childrenImageSharp___fluid___presentationWidth = 'childrenImageSharp___fluid___presentationWidth',
  childrenImageSharp___fluid___presentationHeight = 'childrenImageSharp___fluid___presentationHeight',
  childrenImageSharp___gatsbyImageData = 'childrenImageSharp___gatsbyImageData',
  childrenImageSharp___original___width = 'childrenImageSharp___original___width',
  childrenImageSharp___original___height = 'childrenImageSharp___original___height',
  childrenImageSharp___original___src = 'childrenImageSharp___original___src',
  childrenImageSharp___resize___src = 'childrenImageSharp___resize___src',
  childrenImageSharp___resize___tracedSVG = 'childrenImageSharp___resize___tracedSVG',
  childrenImageSharp___resize___width = 'childrenImageSharp___resize___width',
  childrenImageSharp___resize___height = 'childrenImageSharp___resize___height',
  childrenImageSharp___resize___aspectRatio = 'childrenImageSharp___resize___aspectRatio',
  childrenImageSharp___resize___originalName = 'childrenImageSharp___resize___originalName',
  childrenImageSharp___id = 'childrenImageSharp___id',
  childrenImageSharp___parent___id = 'childrenImageSharp___parent___id',
  childrenImageSharp___parent___parent___id = 'childrenImageSharp___parent___parent___id',
  childrenImageSharp___parent___parent___children = 'childrenImageSharp___parent___parent___children',
  childrenImageSharp___parent___children = 'childrenImageSharp___parent___children',
  childrenImageSharp___parent___children___id = 'childrenImageSharp___parent___children___id',
  childrenImageSharp___parent___children___children = 'childrenImageSharp___parent___children___children',
  childrenImageSharp___parent___internal___content = 'childrenImageSharp___parent___internal___content',
  childrenImageSharp___parent___internal___contentDigest = 'childrenImageSharp___parent___internal___contentDigest',
  childrenImageSharp___parent___internal___description = 'childrenImageSharp___parent___internal___description',
  childrenImageSharp___parent___internal___fieldOwners = 'childrenImageSharp___parent___internal___fieldOwners',
  childrenImageSharp___parent___internal___ignoreType = 'childrenImageSharp___parent___internal___ignoreType',
  childrenImageSharp___parent___internal___mediaType = 'childrenImageSharp___parent___internal___mediaType',
  childrenImageSharp___parent___internal___owner = 'childrenImageSharp___parent___internal___owner',
  childrenImageSharp___parent___internal___type = 'childrenImageSharp___parent___internal___type',
  childrenImageSharp___children = 'childrenImageSharp___children',
  childrenImageSharp___children___id = 'childrenImageSharp___children___id',
  childrenImageSharp___children___parent___id = 'childrenImageSharp___children___parent___id',
  childrenImageSharp___children___parent___children = 'childrenImageSharp___children___parent___children',
  childrenImageSharp___children___children = 'childrenImageSharp___children___children',
  childrenImageSharp___children___children___id = 'childrenImageSharp___children___children___id',
  childrenImageSharp___children___children___children = 'childrenImageSharp___children___children___children',
  childrenImageSharp___children___internal___content = 'childrenImageSharp___children___internal___content',
  childrenImageSharp___children___internal___contentDigest = 'childrenImageSharp___children___internal___contentDigest',
  childrenImageSharp___children___internal___description = 'childrenImageSharp___children___internal___description',
  childrenImageSharp___children___internal___fieldOwners = 'childrenImageSharp___children___internal___fieldOwners',
  childrenImageSharp___children___internal___ignoreType = 'childrenImageSharp___children___internal___ignoreType',
  childrenImageSharp___children___internal___mediaType = 'childrenImageSharp___children___internal___mediaType',
  childrenImageSharp___children___internal___owner = 'childrenImageSharp___children___internal___owner',
  childrenImageSharp___children___internal___type = 'childrenImageSharp___children___internal___type',
  childrenImageSharp___internal___content = 'childrenImageSharp___internal___content',
  childrenImageSharp___internal___contentDigest = 'childrenImageSharp___internal___contentDigest',
  childrenImageSharp___internal___description = 'childrenImageSharp___internal___description',
  childrenImageSharp___internal___fieldOwners = 'childrenImageSharp___internal___fieldOwners',
  childrenImageSharp___internal___ignoreType = 'childrenImageSharp___internal___ignoreType',
  childrenImageSharp___internal___mediaType = 'childrenImageSharp___internal___mediaType',
  childrenImageSharp___internal___owner = 'childrenImageSharp___internal___owner',
  childrenImageSharp___internal___type = 'childrenImageSharp___internal___type',
  childImageSharp___fixed___base64 = 'childImageSharp___fixed___base64',
  childImageSharp___fixed___tracedSVG = 'childImageSharp___fixed___tracedSVG',
  childImageSharp___fixed___aspectRatio = 'childImageSharp___fixed___aspectRatio',
  childImageSharp___fixed___width = 'childImageSharp___fixed___width',
  childImageSharp___fixed___height = 'childImageSharp___fixed___height',
  childImageSharp___fixed___src = 'childImageSharp___fixed___src',
  childImageSharp___fixed___srcSet = 'childImageSharp___fixed___srcSet',
  childImageSharp___fixed___srcWebp = 'childImageSharp___fixed___srcWebp',
  childImageSharp___fixed___srcSetWebp = 'childImageSharp___fixed___srcSetWebp',
  childImageSharp___fixed___originalName = 'childImageSharp___fixed___originalName',
  childImageSharp___fluid___base64 = 'childImageSharp___fluid___base64',
  childImageSharp___fluid___tracedSVG = 'childImageSharp___fluid___tracedSVG',
  childImageSharp___fluid___aspectRatio = 'childImageSharp___fluid___aspectRatio',
  childImageSharp___fluid___src = 'childImageSharp___fluid___src',
  childImageSharp___fluid___srcSet = 'childImageSharp___fluid___srcSet',
  childImageSharp___fluid___srcWebp = 'childImageSharp___fluid___srcWebp',
  childImageSharp___fluid___srcSetWebp = 'childImageSharp___fluid___srcSetWebp',
  childImageSharp___fluid___sizes = 'childImageSharp___fluid___sizes',
  childImageSharp___fluid___originalImg = 'childImageSharp___fluid___originalImg',
  childImageSharp___fluid___originalName = 'childImageSharp___fluid___originalName',
  childImageSharp___fluid___presentationWidth = 'childImageSharp___fluid___presentationWidth',
  childImageSharp___fluid___presentationHeight = 'childImageSharp___fluid___presentationHeight',
  childImageSharp___gatsbyImageData = 'childImageSharp___gatsbyImageData',
  childImageSharp___original___width = 'childImageSharp___original___width',
  childImageSharp___original___height = 'childImageSharp___original___height',
  childImageSharp___original___src = 'childImageSharp___original___src',
  childImageSharp___resize___src = 'childImageSharp___resize___src',
  childImageSharp___resize___tracedSVG = 'childImageSharp___resize___tracedSVG',
  childImageSharp___resize___width = 'childImageSharp___resize___width',
  childImageSharp___resize___height = 'childImageSharp___resize___height',
  childImageSharp___resize___aspectRatio = 'childImageSharp___resize___aspectRatio',
  childImageSharp___resize___originalName = 'childImageSharp___resize___originalName',
  childImageSharp___id = 'childImageSharp___id',
  childImageSharp___parent___id = 'childImageSharp___parent___id',
  childImageSharp___parent___parent___id = 'childImageSharp___parent___parent___id',
  childImageSharp___parent___parent___children = 'childImageSharp___parent___parent___children',
  childImageSharp___parent___children = 'childImageSharp___parent___children',
  childImageSharp___parent___children___id = 'childImageSharp___parent___children___id',
  childImageSharp___parent___children___children = 'childImageSharp___parent___children___children',
  childImageSharp___parent___internal___content = 'childImageSharp___parent___internal___content',
  childImageSharp___parent___internal___contentDigest = 'childImageSharp___parent___internal___contentDigest',
  childImageSharp___parent___internal___description = 'childImageSharp___parent___internal___description',
  childImageSharp___parent___internal___fieldOwners = 'childImageSharp___parent___internal___fieldOwners',
  childImageSharp___parent___internal___ignoreType = 'childImageSharp___parent___internal___ignoreType',
  childImageSharp___parent___internal___mediaType = 'childImageSharp___parent___internal___mediaType',
  childImageSharp___parent___internal___owner = 'childImageSharp___parent___internal___owner',
  childImageSharp___parent___internal___type = 'childImageSharp___parent___internal___type',
  childImageSharp___children = 'childImageSharp___children',
  childImageSharp___children___id = 'childImageSharp___children___id',
  childImageSharp___children___parent___id = 'childImageSharp___children___parent___id',
  childImageSharp___children___parent___children = 'childImageSharp___children___parent___children',
  childImageSharp___children___children = 'childImageSharp___children___children',
  childImageSharp___children___children___id = 'childImageSharp___children___children___id',
  childImageSharp___children___children___children = 'childImageSharp___children___children___children',
  childImageSharp___children___internal___content = 'childImageSharp___children___internal___content',
  childImageSharp___children___internal___contentDigest = 'childImageSharp___children___internal___contentDigest',
  childImageSharp___children___internal___description = 'childImageSharp___children___internal___description',
  childImageSharp___children___internal___fieldOwners = 'childImageSharp___children___internal___fieldOwners',
  childImageSharp___children___internal___ignoreType = 'childImageSharp___children___internal___ignoreType',
  childImageSharp___children___internal___mediaType = 'childImageSharp___children___internal___mediaType',
  childImageSharp___children___internal___owner = 'childImageSharp___children___internal___owner',
  childImageSharp___children___internal___type = 'childImageSharp___children___internal___type',
  childImageSharp___internal___content = 'childImageSharp___internal___content',
  childImageSharp___internal___contentDigest = 'childImageSharp___internal___contentDigest',
  childImageSharp___internal___description = 'childImageSharp___internal___description',
  childImageSharp___internal___fieldOwners = 'childImageSharp___internal___fieldOwners',
  childImageSharp___internal___ignoreType = 'childImageSharp___internal___ignoreType',
  childImageSharp___internal___mediaType = 'childImageSharp___internal___mediaType',
  childImageSharp___internal___owner = 'childImageSharp___internal___owner',
  childImageSharp___internal___type = 'childImageSharp___internal___type',
  childrenLocale = 'childrenLocale',
  childrenLocale___id = 'childrenLocale___id',
  childrenLocale___parent___id = 'childrenLocale___parent___id',
  childrenLocale___parent___parent___id = 'childrenLocale___parent___parent___id',
  childrenLocale___parent___parent___children = 'childrenLocale___parent___parent___children',
  childrenLocale___parent___children = 'childrenLocale___parent___children',
  childrenLocale___parent___children___id = 'childrenLocale___parent___children___id',
  childrenLocale___parent___children___children = 'childrenLocale___parent___children___children',
  childrenLocale___parent___internal___content = 'childrenLocale___parent___internal___content',
  childrenLocale___parent___internal___contentDigest = 'childrenLocale___parent___internal___contentDigest',
  childrenLocale___parent___internal___description = 'childrenLocale___parent___internal___description',
  childrenLocale___parent___internal___fieldOwners = 'childrenLocale___parent___internal___fieldOwners',
  childrenLocale___parent___internal___ignoreType = 'childrenLocale___parent___internal___ignoreType',
  childrenLocale___parent___internal___mediaType = 'childrenLocale___parent___internal___mediaType',
  childrenLocale___parent___internal___owner = 'childrenLocale___parent___internal___owner',
  childrenLocale___parent___internal___type = 'childrenLocale___parent___internal___type',
  childrenLocale___children = 'childrenLocale___children',
  childrenLocale___children___id = 'childrenLocale___children___id',
  childrenLocale___children___parent___id = 'childrenLocale___children___parent___id',
  childrenLocale___children___parent___children = 'childrenLocale___children___parent___children',
  childrenLocale___children___children = 'childrenLocale___children___children',
  childrenLocale___children___children___id = 'childrenLocale___children___children___id',
  childrenLocale___children___children___children = 'childrenLocale___children___children___children',
  childrenLocale___children___internal___content = 'childrenLocale___children___internal___content',
  childrenLocale___children___internal___contentDigest = 'childrenLocale___children___internal___contentDigest',
  childrenLocale___children___internal___description = 'childrenLocale___children___internal___description',
  childrenLocale___children___internal___fieldOwners = 'childrenLocale___children___internal___fieldOwners',
  childrenLocale___children___internal___ignoreType = 'childrenLocale___children___internal___ignoreType',
  childrenLocale___children___internal___mediaType = 'childrenLocale___children___internal___mediaType',
  childrenLocale___children___internal___owner = 'childrenLocale___children___internal___owner',
  childrenLocale___children___internal___type = 'childrenLocale___children___internal___type',
  childrenLocale___internal___content = 'childrenLocale___internal___content',
  childrenLocale___internal___contentDigest = 'childrenLocale___internal___contentDigest',
  childrenLocale___internal___description = 'childrenLocale___internal___description',
  childrenLocale___internal___fieldOwners = 'childrenLocale___internal___fieldOwners',
  childrenLocale___internal___ignoreType = 'childrenLocale___internal___ignoreType',
  childrenLocale___internal___mediaType = 'childrenLocale___internal___mediaType',
  childrenLocale___internal___owner = 'childrenLocale___internal___owner',
  childrenLocale___internal___type = 'childrenLocale___internal___type',
  childrenLocale___language = 'childrenLocale___language',
  childrenLocale___ns = 'childrenLocale___ns',
  childrenLocale___data = 'childrenLocale___data',
  childrenLocale___fileAbsolutePath = 'childrenLocale___fileAbsolutePath',
  childLocale___id = 'childLocale___id',
  childLocale___parent___id = 'childLocale___parent___id',
  childLocale___parent___parent___id = 'childLocale___parent___parent___id',
  childLocale___parent___parent___children = 'childLocale___parent___parent___children',
  childLocale___parent___children = 'childLocale___parent___children',
  childLocale___parent___children___id = 'childLocale___parent___children___id',
  childLocale___parent___children___children = 'childLocale___parent___children___children',
  childLocale___parent___internal___content = 'childLocale___parent___internal___content',
  childLocale___parent___internal___contentDigest = 'childLocale___parent___internal___contentDigest',
  childLocale___parent___internal___description = 'childLocale___parent___internal___description',
  childLocale___parent___internal___fieldOwners = 'childLocale___parent___internal___fieldOwners',
  childLocale___parent___internal___ignoreType = 'childLocale___parent___internal___ignoreType',
  childLocale___parent___internal___mediaType = 'childLocale___parent___internal___mediaType',
  childLocale___parent___internal___owner = 'childLocale___parent___internal___owner',
  childLocale___parent___internal___type = 'childLocale___parent___internal___type',
  childLocale___children = 'childLocale___children',
  childLocale___children___id = 'childLocale___children___id',
  childLocale___children___parent___id = 'childLocale___children___parent___id',
  childLocale___children___parent___children = 'childLocale___children___parent___children',
  childLocale___children___children = 'childLocale___children___children',
  childLocale___children___children___id = 'childLocale___children___children___id',
  childLocale___children___children___children = 'childLocale___children___children___children',
  childLocale___children___internal___content = 'childLocale___children___internal___content',
  childLocale___children___internal___contentDigest = 'childLocale___children___internal___contentDigest',
  childLocale___children___internal___description = 'childLocale___children___internal___description',
  childLocale___children___internal___fieldOwners = 'childLocale___children___internal___fieldOwners',
  childLocale___children___internal___ignoreType = 'childLocale___children___internal___ignoreType',
  childLocale___children___internal___mediaType = 'childLocale___children___internal___mediaType',
  childLocale___children___internal___owner = 'childLocale___children___internal___owner',
  childLocale___children___internal___type = 'childLocale___children___internal___type',
  childLocale___internal___content = 'childLocale___internal___content',
  childLocale___internal___contentDigest = 'childLocale___internal___contentDigest',
  childLocale___internal___description = 'childLocale___internal___description',
  childLocale___internal___fieldOwners = 'childLocale___internal___fieldOwners',
  childLocale___internal___ignoreType = 'childLocale___internal___ignoreType',
  childLocale___internal___mediaType = 'childLocale___internal___mediaType',
  childLocale___internal___owner = 'childLocale___internal___owner',
  childLocale___internal___type = 'childLocale___internal___type',
  childLocale___language = 'childLocale___language',
  childLocale___ns = 'childLocale___ns',
  childLocale___data = 'childLocale___data',
  childLocale___fileAbsolutePath = 'childLocale___fileAbsolutePath',
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type'
}

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childrenImageSharp?: Maybe<ImageSharpFilterListInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  childrenLocale?: Maybe<LocaleFilterListInput>;
  childLocale?: Maybe<LocaleFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type FileGroupConnection = {
  __typename?: 'FileGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export enum GatsbyImageLayout {
  FIXED = 'FIXED',
  FULL_WIDTH = 'FULL_WIDTH',
  CONSTRAINED = 'CONSTRAINED'
}

export enum GatsbyImagePlaceholder {
  DOMINANT_COLOR = 'DOMINANT_COLOR',
  TRACED_SVG = 'TRACED_SVG',
  BLURRED = 'BLURRED',
  NONE = 'NONE'
}

export enum ImageCropFocus {
  CENTER = 'CENTER',
  NORTH = 'NORTH',
  NORTHEAST = 'NORTHEAST',
  EAST = 'EAST',
  SOUTHEAST = 'SOUTHEAST',
  SOUTH = 'SOUTH',
  SOUTHWEST = 'SOUTHWEST',
  WEST = 'WEST',
  NORTHWEST = 'NORTHWEST',
  ENTROPY = 'ENTROPY',
  ATTENTION = 'ATTENTION'
}

export enum ImageFit {
  COVER = 'COVER',
  CONTAIN = 'CONTAIN',
  FILL = 'FILL',
  INSIDE = 'INSIDE',
  OUTSIDE = 'OUTSIDE'
}

export enum ImageFormat {
  NO_CHANGE = 'NO_CHANGE',
  AUTO = 'AUTO',
  JPG = 'JPG',
  PNG = 'PNG',
  WEBP = 'WEBP',
  AVIF = 'AVIF'
}

export enum ImageLayout {
  FIXED = 'FIXED',
  FULL_WIDTH = 'FULL_WIDTH',
  CONSTRAINED = 'CONSTRAINED'
}

export enum ImagePlaceholder {
  DOMINANT_COLOR = 'DOMINANT_COLOR',
  TRACED_SVG = 'TRACED_SVG',
  BLURRED = 'BLURRED',
  NONE = 'NONE'
}

export enum ImageResizingBehavior {
  NO_CHANGE = 'NO_CHANGE',
  /** Same as the default resizing, but adds padding so that the generated image has the specified dimensions. */
  PAD = 'PAD',
  /** Crop a part of the original image to match the specified size. */
  CROP = 'CROP',
  /**
   * Crop the image to the specified dimensions, if the original image is smaller
   * than these dimensions, then the image will be upscaled.
   */
  FILL = 'FILL',
  /** When used in association with the f parameter below, creates a thumbnail from the image based on a focus area. */
  THUMB = 'THUMB',
  /** Scale the image regardless of the original aspect ratio. */
  SCALE = 'SCALE'
}

export type ImageSharp = Node & {
  __typename?: 'ImageSharp';
  fixed?: Maybe<ImageSharpFixed>;
  fluid?: Maybe<ImageSharpFluid>;
  gatsbyImageData: Scalars['JSON'];
  original?: Maybe<ImageSharpOriginal>;
  resize?: Maybe<ImageSharpResize>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ImageSharpFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type ImageSharpFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type ImageSharpGatsbyImageDataArgs = {
  layout?: Maybe<ImageLayout>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  placeholder?: Maybe<ImagePlaceholder>;
  blurredOptions?: Maybe<BlurredOptions>;
  tracedSVGOptions?: Maybe<Potrace>;
  formats?: Maybe<Array<Maybe<ImageFormat>>>;
  outputPixelDensities?: Maybe<Array<Maybe<Scalars['Float']>>>;
  breakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
  sizes?: Maybe<Scalars['String']>;
  quality?: Maybe<Scalars['Int']>;
  jpgOptions?: Maybe<JpgOptions>;
  pngOptions?: Maybe<PngOptions>;
  webpOptions?: Maybe<WebPOptions>;
  avifOptions?: Maybe<AvifOptions>;
  transformOptions?: Maybe<TransformOptions>;
  backgroundColor?: Maybe<Scalars['String']>;
};


export type ImageSharpResizeArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG?: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

export type ImageSharpConnection = {
  __typename?: 'ImageSharpConnection';
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ImageSharpGroupConnection>;
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  __typename?: 'ImageSharpEdge';
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export enum ImageSharpFieldsEnum {
  fixed___base64 = 'fixed___base64',
  fixed___tracedSVG = 'fixed___tracedSVG',
  fixed___aspectRatio = 'fixed___aspectRatio',
  fixed___width = 'fixed___width',
  fixed___height = 'fixed___height',
  fixed___src = 'fixed___src',
  fixed___srcSet = 'fixed___srcSet',
  fixed___srcWebp = 'fixed___srcWebp',
  fixed___srcSetWebp = 'fixed___srcSetWebp',
  fixed___originalName = 'fixed___originalName',
  fluid___base64 = 'fluid___base64',
  fluid___tracedSVG = 'fluid___tracedSVG',
  fluid___aspectRatio = 'fluid___aspectRatio',
  fluid___src = 'fluid___src',
  fluid___srcSet = 'fluid___srcSet',
  fluid___srcWebp = 'fluid___srcWebp',
  fluid___srcSetWebp = 'fluid___srcSetWebp',
  fluid___sizes = 'fluid___sizes',
  fluid___originalImg = 'fluid___originalImg',
  fluid___originalName = 'fluid___originalName',
  fluid___presentationWidth = 'fluid___presentationWidth',
  fluid___presentationHeight = 'fluid___presentationHeight',
  gatsbyImageData = 'gatsbyImageData',
  original___width = 'original___width',
  original___height = 'original___height',
  original___src = 'original___src',
  resize___src = 'resize___src',
  resize___tracedSVG = 'resize___tracedSVG',
  resize___width = 'resize___width',
  resize___height = 'resize___height',
  resize___aspectRatio = 'resize___aspectRatio',
  resize___originalName = 'resize___originalName',
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type'
}

export type ImageSharpFilterInput = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ImageSharpFilterListInput = {
  elemMatch?: Maybe<ImageSharpFilterInput>;
};

export type ImageSharpFixed = {
  __typename?: 'ImageSharpFixed';
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpFluid = {
  __typename?: 'ImageSharpFluid';
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImageSharpFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpGroupConnection = {
  __typename?: 'ImageSharpGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginal = {
  __typename?: 'ImageSharpOriginal';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginalFilterInput = {
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResize = {
  __typename?: 'ImageSharpResize';
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpResizeFilterInput = {
  src?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpSortInput = {
  fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type InlineSvg = {
  __typename?: 'InlineSvg';
  content?: Maybe<Scalars['String']>;
  originalContent?: Maybe<Scalars['String']>;
  dataURI?: Maybe<Scalars['String']>;
  absolutePath?: Maybe<Scalars['String']>;
  relativePath?: Maybe<Scalars['String']>;
};

export type Internal = {
  __typename?: 'Internal';
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>;
  contentDigest?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  fieldOwners?: Maybe<StringQueryOperatorInput>;
  ignoreType?: Maybe<BooleanQueryOperatorInput>;
  mediaType?: Maybe<StringQueryOperatorInput>;
  owner?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type JpgOptions = {
  quality?: Maybe<Scalars['Int']>;
  progressive?: Maybe<Scalars['Boolean']>;
};


export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars['JSON']>;
  ne?: Maybe<Scalars['JSON']>;
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  nin?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  regex?: Maybe<Scalars['JSON']>;
  glob?: Maybe<Scalars['JSON']>;
};

export type Locale = Node & {
  __typename?: 'Locale';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  language?: Maybe<Scalars['String']>;
  ns?: Maybe<Scalars['String']>;
  data?: Maybe<Scalars['String']>;
  fileAbsolutePath?: Maybe<Scalars['String']>;
};

export type LocaleConnection = {
  __typename?: 'LocaleConnection';
  totalCount: Scalars['Int'];
  edges: Array<LocaleEdge>;
  nodes: Array<Locale>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<LocaleGroupConnection>;
};


export type LocaleConnectionDistinctArgs = {
  field: LocaleFieldsEnum;
};


export type LocaleConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: LocaleFieldsEnum;
};

export type LocaleEdge = {
  __typename?: 'LocaleEdge';
  next?: Maybe<Locale>;
  node: Locale;
  previous?: Maybe<Locale>;
};

export enum LocaleFieldsEnum {
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  language = 'language',
  ns = 'ns',
  data = 'data',
  fileAbsolutePath = 'fileAbsolutePath'
}

export type LocaleFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  language?: Maybe<StringQueryOperatorInput>;
  ns?: Maybe<StringQueryOperatorInput>;
  data?: Maybe<StringQueryOperatorInput>;
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>;
};

export type LocaleFilterListInput = {
  elemMatch?: Maybe<LocaleFilterInput>;
};

export type LocaleGroupConnection = {
  __typename?: 'LocaleGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<LocaleEdge>;
  nodes: Array<Locale>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type LocaleSortInput = {
  fields?: Maybe<Array<Maybe<LocaleFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export enum MarkdownExcerptFormats {
  PLAIN = 'PLAIN',
  HTML = 'HTML',
  MARKDOWN = 'MARKDOWN'
}

export type MarkdownHeading = {
  __typename?: 'MarkdownHeading';
  id?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  depth?: Maybe<Scalars['Int']>;
};

export type MarkdownHeadingFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  value?: Maybe<StringQueryOperatorInput>;
  depth?: Maybe<IntQueryOperatorInput>;
};

export type MarkdownHeadingFilterListInput = {
  elemMatch?: Maybe<MarkdownHeadingFilterInput>;
};

export enum MarkdownHeadingLevels {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6'
}

export type MarkdownRemark = Node & {
  __typename?: 'MarkdownRemark';
  id: Scalars['ID'];
  frontmatter?: Maybe<MarkdownRemarkFrontmatter>;
  excerpt?: Maybe<Scalars['String']>;
  rawMarkdownBody?: Maybe<Scalars['String']>;
  html?: Maybe<Scalars['String']>;
  htmlAst?: Maybe<Scalars['JSON']>;
  excerptAst?: Maybe<Scalars['JSON']>;
  headings?: Maybe<Array<Maybe<MarkdownHeading>>>;
  timeToRead?: Maybe<Scalars['Int']>;
  tableOfContents?: Maybe<Scalars['String']>;
  wordCount?: Maybe<MarkdownWordCount>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type MarkdownRemarkExcerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
  format?: Maybe<MarkdownExcerptFormats>;
};


export type MarkdownRemarkExcerptAstArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
};


export type MarkdownRemarkHeadingsArgs = {
  depth?: Maybe<MarkdownHeadingLevels>;
};


export type MarkdownRemarkTableOfContentsArgs = {
  absolute?: Maybe<Scalars['Boolean']>;
  pathToSlugField?: Maybe<Scalars['String']>;
  maxDepth?: Maybe<Scalars['Int']>;
  heading?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkConnection = {
  __typename?: 'MarkdownRemarkConnection';
  totalCount: Scalars['Int'];
  edges: Array<MarkdownRemarkEdge>;
  nodes: Array<MarkdownRemark>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<MarkdownRemarkGroupConnection>;
};


export type MarkdownRemarkConnectionDistinctArgs = {
  field: MarkdownRemarkFieldsEnum;
};


export type MarkdownRemarkConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: MarkdownRemarkFieldsEnum;
};

export type MarkdownRemarkEdge = {
  __typename?: 'MarkdownRemarkEdge';
  next?: Maybe<MarkdownRemark>;
  node: MarkdownRemark;
  previous?: Maybe<MarkdownRemark>;
};

export enum MarkdownRemarkFieldsEnum {
  id = 'id',
  frontmatter___title = 'frontmatter___title',
  excerpt = 'excerpt',
  rawMarkdownBody = 'rawMarkdownBody',
  html = 'html',
  htmlAst = 'htmlAst',
  excerptAst = 'excerptAst',
  headings = 'headings',
  headings___id = 'headings___id',
  headings___value = 'headings___value',
  headings___depth = 'headings___depth',
  timeToRead = 'timeToRead',
  tableOfContents = 'tableOfContents',
  wordCount___paragraphs = 'wordCount___paragraphs',
  wordCount___sentences = 'wordCount___sentences',
  wordCount___words = 'wordCount___words',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type'
}

export type MarkdownRemarkFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  frontmatter?: Maybe<MarkdownRemarkFrontmatterFilterInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  rawMarkdownBody?: Maybe<StringQueryOperatorInput>;
  html?: Maybe<StringQueryOperatorInput>;
  htmlAst?: Maybe<JsonQueryOperatorInput>;
  excerptAst?: Maybe<JsonQueryOperatorInput>;
  headings?: Maybe<MarkdownHeadingFilterListInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
  tableOfContents?: Maybe<StringQueryOperatorInput>;
  wordCount?: Maybe<MarkdownWordCountFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type MarkdownRemarkFilterListInput = {
  elemMatch?: Maybe<MarkdownRemarkFilterInput>;
};

export type MarkdownRemarkFrontmatter = {
  __typename?: 'MarkdownRemarkFrontmatter';
  title?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkGroupConnection = {
  __typename?: 'MarkdownRemarkGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<MarkdownRemarkEdge>;
  nodes: Array<MarkdownRemark>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkSortInput = {
  fields?: Maybe<Array<Maybe<MarkdownRemarkFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type MarkdownWordCount = {
  __typename?: 'MarkdownWordCount';
  paragraphs?: Maybe<Scalars['Int']>;
  sentences?: Maybe<Scalars['Int']>;
  words?: Maybe<Scalars['Int']>;
};

export type MarkdownWordCountFilterInput = {
  paragraphs?: Maybe<IntQueryOperatorInput>;
  sentences?: Maybe<IntQueryOperatorInput>;
  words?: Maybe<IntQueryOperatorInput>;
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type PngOptions = {
  quality?: Maybe<Scalars['Int']>;
  compressionSpeed?: Maybe<Scalars['Int']>;
};

export type Potrace = {
  turnPolicy?: Maybe<PotraceTurnPolicy>;
  turdSize?: Maybe<Scalars['Float']>;
  alphaMax?: Maybe<Scalars['Float']>;
  optCurve?: Maybe<Scalars['Boolean']>;
  optTolerance?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Int']>;
  blackOnWhite?: Maybe<Scalars['Boolean']>;
  color?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
};

export enum PotraceTurnPolicy {
  TURNPOLICY_BLACK = 'TURNPOLICY_BLACK',
  TURNPOLICY_WHITE = 'TURNPOLICY_WHITE',
  TURNPOLICY_LEFT = 'TURNPOLICY_LEFT',
  TURNPOLICY_RIGHT = 'TURNPOLICY_RIGHT',
  TURNPOLICY_MINORITY = 'TURNPOLICY_MINORITY',
  TURNPOLICY_MAJORITY = 'TURNPOLICY_MAJORITY'
}

export type Query = {
  __typename?: 'Query';
  contentfulEntry?: Maybe<ContentfulEntry>;
  allContentfulEntry: ContentfulEntryConnection;
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  imageSharp?: Maybe<ImageSharp>;
  allImageSharp: ImageSharpConnection;
  markdownRemark?: Maybe<MarkdownRemark>;
  allMarkdownRemark: MarkdownRemarkConnection;
  contentfulAsset?: Maybe<ContentfulAsset>;
  allContentfulAsset: ContentfulAssetConnection;
  contentfulSkillMap?: Maybe<ContentfulSkillMap>;
  allContentfulSkillMap: ContentfulSkillMapConnection;
  contentfulIcon?: Maybe<ContentfulIcon>;
  allContentfulIcon: ContentfulIconConnection;
  contentfulWhatICanDo?: Maybe<ContentfulWhatICanDo>;
  allContentfulWhatICanDo: ContentfulWhatICanDoConnection;
  contentfulQualification?: Maybe<ContentfulQualification>;
  allContentfulQualification: ContentfulQualificationConnection;
  contentfulProject?: Maybe<ContentfulProject>;
  allContentfulProject: ContentfulProjectConnection;
  contentfulOss?: Maybe<ContentfulOss>;
  allContentfulOss: ContentfulOssConnection;
  contentfulHistory?: Maybe<ContentfulHistory>;
  allContentfulHistory: ContentfulHistoryConnection;
  contentfulContact?: Maybe<ContentfulContact>;
  allContentfulContact: ContentfulContactConnection;
  contentfulQualificationMap?: Maybe<ContentfulQualificationMap>;
  allContentfulQualificationMap: ContentfulQualificationMapConnection;
  contentfulTag?: Maybe<ContentfulTag>;
  allContentfulTag: ContentfulTagConnection;
  contentfulHello?: Maybe<ContentfulHello>;
  allContentfulHello: ContentfulHelloConnection;
  contentfulBlogAuthor?: Maybe<ContentfulBlogAuthor>;
  allContentfulBlogAuthor: ContentfulBlogAuthorConnection;
  locale?: Maybe<Locale>;
  allLocale: LocaleConnection;
  contentfulOssDetailTextNode?: Maybe<ContentfulOssDetailTextNode>;
  allContentfulOssDetailTextNode: ContentfulOssDetailTextNodeConnection;
  contentfulProjectDetailTextNode?: Maybe<ContentfulProjectDetailTextNode>;
  allContentfulProjectDetailTextNode: ContentfulProjectDetailTextNodeConnection;
  contentfulIconSvgTextNode?: Maybe<ContentfulIconSvgTextNode>;
  allContentfulIconSvgTextNode: ContentfulIconSvgTextNodeConnection;
  contentfulContentType?: Maybe<ContentfulContentType>;
  allContentfulContentType: ContentfulContentTypeConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
};


export type QueryContentfulEntryArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllContentfulEntryArgs = {
  filter?: Maybe<ContentfulEntryFilterInput>;
  sort?: Maybe<ContentfulEntrySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childrenImageSharp?: Maybe<ImageSharpFilterListInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  childrenLocale?: Maybe<LocaleFilterListInput>;
  childLocale?: Maybe<LocaleFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>;
  sort?: Maybe<FileSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>;
  sort?: Maybe<DirectorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>;
  sort?: Maybe<SiteSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>;
  sort?: Maybe<SitePageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryImageSharpArgs = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllImageSharpArgs = {
  filter?: Maybe<ImageSharpFilterInput>;
  sort?: Maybe<ImageSharpSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryMarkdownRemarkArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  frontmatter?: Maybe<MarkdownRemarkFrontmatterFilterInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  rawMarkdownBody?: Maybe<StringQueryOperatorInput>;
  html?: Maybe<StringQueryOperatorInput>;
  htmlAst?: Maybe<JsonQueryOperatorInput>;
  excerptAst?: Maybe<JsonQueryOperatorInput>;
  headings?: Maybe<MarkdownHeadingFilterListInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
  tableOfContents?: Maybe<StringQueryOperatorInput>;
  wordCount?: Maybe<MarkdownWordCountFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllMarkdownRemarkArgs = {
  filter?: Maybe<MarkdownRemarkFilterInput>;
  sort?: Maybe<MarkdownRemarkSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulAssetArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  file?: Maybe<ContentfulAssetFileFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulAssetSysFilterInput>;
  localFile?: Maybe<FileFilterInput>;
  fixed?: Maybe<ContentfulFixedFilterInput>;
  fluid?: Maybe<ContentfulFluidFilterInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  resize?: Maybe<ContentfulResizeFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentfulAssetArgs = {
  filter?: Maybe<ContentfulAssetFilterInput>;
  sort?: Maybe<ContentfulAssetSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulSkillMapArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  sortKey?: Maybe<IntQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  expanded?: Maybe<BooleanQueryOperatorInput>;
  skills?: Maybe<ContentfulTagFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulSkillMapSysFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentfulSkillMapArgs = {
  filter?: Maybe<ContentfulSkillMapFilterInput>;
  sort?: Maybe<ContentfulSkillMapSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulIconArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  what_i_can_do?: Maybe<ContentfulWhatICanDoFilterListInput>;
  project?: Maybe<ContentfulProjectFilterListInput>;
  oss?: Maybe<ContentfulOssFilterListInput>;
  svg?: Maybe<ContentfulIconSvgTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulIconSysFilterInput>;
  history?: Maybe<ContentfulHistoryFilterListInput>;
  contact?: Maybe<ContentfulContactFilterListInput>;
  childrenContentfulIconSvgTextNode?: Maybe<ContentfulIconSvgTextNodeFilterListInput>;
  childContentfulIconSvgTextNode?: Maybe<ContentfulIconSvgTextNodeFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentfulIconArgs = {
  filter?: Maybe<ContentfulIconFilterInput>;
  sort?: Maybe<ContentfulIconSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulWhatICanDoArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  sortKey?: Maybe<IntQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  subName?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<ContentfulIconFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulWhatICanDoSysFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentfulWhatICanDoArgs = {
  filter?: Maybe<ContentfulWhatICanDoFilterInput>;
  sort?: Maybe<ContentfulWhatICanDoSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulQualificationArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  qualification_map?: Maybe<ContentfulQualificationMapFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulQualificationSysFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentfulQualificationArgs = {
  filter?: Maybe<ContentfulQualificationFilterInput>;
  sort?: Maybe<ContentfulQualificationSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulProjectArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  subName?: Maybe<StringQueryOperatorInput>;
  startDate?: Maybe<DateQueryOperatorInput>;
  endDate?: Maybe<DateQueryOperatorInput>;
  tags?: Maybe<ContentfulTagFilterListInput>;
  icon?: Maybe<ContentfulIconFilterInput>;
  detail?: Maybe<ContentfulProjectDetailTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulProjectSysFilterInput>;
  childrenContentfulProjectDetailTextNode?: Maybe<ContentfulProjectDetailTextNodeFilterListInput>;
  childContentfulProjectDetailTextNode?: Maybe<ContentfulProjectDetailTextNodeFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentfulProjectArgs = {
  filter?: Maybe<ContentfulProjectFilterInput>;
  sort?: Maybe<ContentfulProjectSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulOssArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  subName?: Maybe<StringQueryOperatorInput>;
  startDate?: Maybe<DateQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
  tags?: Maybe<ContentfulTagFilterListInput>;
  icon?: Maybe<ContentfulIconFilterInput>;
  image?: Maybe<ContentfulAssetFilterInput>;
  detail?: Maybe<ContentfulOssDetailTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulOssSysFilterInput>;
  childrenContentfulOssDetailTextNode?: Maybe<ContentfulOssDetailTextNodeFilterListInput>;
  childContentfulOssDetailTextNode?: Maybe<ContentfulOssDetailTextNodeFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentfulOssArgs = {
  filter?: Maybe<ContentfulOssFilterInput>;
  sort?: Maybe<ContentfulOssSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulHistoryArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  subName?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<ContentfulIconFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulHistorySysFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentfulHistoryArgs = {
  filter?: Maybe<ContentfulHistoryFilterInput>;
  sort?: Maybe<ContentfulHistorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulContactArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  sortKey?: Maybe<IntQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  subName?: Maybe<StringQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<ContentfulIconFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulContactSysFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentfulContactArgs = {
  filter?: Maybe<ContentfulContactFilterInput>;
  sort?: Maybe<ContentfulContactSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulQualificationMapArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  sortKey?: Maybe<IntQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  expanded?: Maybe<BooleanQueryOperatorInput>;
  qualifications?: Maybe<ContentfulQualificationFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulQualificationMapSysFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentfulQualificationMapArgs = {
  filter?: Maybe<ContentfulQualificationMapFilterInput>;
  sort?: Maybe<ContentfulQualificationMapSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulTagArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  level?: Maybe<IntQueryOperatorInput>;
  skill_map?: Maybe<ContentfulSkillMapFilterListInput>;
  project?: Maybe<ContentfulProjectFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulTagSysFilterInput>;
  oss?: Maybe<ContentfulOssFilterListInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentfulTagArgs = {
  filter?: Maybe<ContentfulTagFilterInput>;
  sort?: Maybe<ContentfulTagSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulHelloArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  sortKey?: Maybe<IntQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulHelloSysFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentfulHelloArgs = {
  filter?: Maybe<ContentfulHelloFilterInput>;
  sort?: Maybe<ContentfulHelloSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulBlogAuthorArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentfulBlogAuthorArgs = {
  filter?: Maybe<ContentfulBlogAuthorFilterInput>;
  sort?: Maybe<ContentfulBlogAuthorSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryLocaleArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  language?: Maybe<StringQueryOperatorInput>;
  ns?: Maybe<StringQueryOperatorInput>;
  data?: Maybe<StringQueryOperatorInput>;
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllLocaleArgs = {
  filter?: Maybe<LocaleFilterInput>;
  sort?: Maybe<LocaleSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulOssDetailTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  detail?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulOssDetailTextNodeSysFilterInput>;
  childrenMarkdownRemark?: Maybe<MarkdownRemarkFilterListInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
};


export type QueryAllContentfulOssDetailTextNodeArgs = {
  filter?: Maybe<ContentfulOssDetailTextNodeFilterInput>;
  sort?: Maybe<ContentfulOssDetailTextNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulProjectDetailTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  detail?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulProjectDetailTextNodeSysFilterInput>;
  childrenMarkdownRemark?: Maybe<MarkdownRemarkFilterListInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
};


export type QueryAllContentfulProjectDetailTextNodeArgs = {
  filter?: Maybe<ContentfulProjectDetailTextNodeFilterInput>;
  sort?: Maybe<ContentfulProjectDetailTextNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulIconSvgTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  svg?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulIconSvgTextNodeSysFilterInput>;
  childrenMarkdownRemark?: Maybe<MarkdownRemarkFilterListInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
};


export type QueryAllContentfulIconSvgTextNodeArgs = {
  filter?: Maybe<ContentfulIconSvgTextNodeFilterInput>;
  sort?: Maybe<ContentfulIconSvgTextNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulContentTypeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  displayField?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulContentTypeSysFilterInput>;
};


export type QueryAllContentfulContentTypeArgs = {
  filter?: Maybe<ContentfulContentTypeFilterInput>;
  sort?: Maybe<ContentfulContentTypeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteBuildMetadataArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>;
  sort?: Maybe<SiteBuildMetadataSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>;
  sort?: Maybe<SitePluginSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type Site = Node & {
  __typename?: 'Site';
  buildTime?: Maybe<Scalars['Date']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  port?: Maybe<Scalars['Int']>;
  host?: Maybe<Scalars['String']>;
  polyfill?: Maybe<Scalars['Boolean']>;
  pathPrefix?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
  __typename?: 'SiteBuildMetadata';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  buildTime?: Maybe<Scalars['Date']>;
};


export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataConnection = {
  __typename?: 'SiteBuildMetadataConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteBuildMetadataGroupConnection>;
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  __typename?: 'SiteBuildMetadataEdge';
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export enum SiteBuildMetadataFieldsEnum {
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  buildTime = 'buildTime'
}

export type SiteBuildMetadataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type SiteBuildMetadataGroupConnection = {
  __typename?: 'SiteBuildMetadataGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteConnection = {
  __typename?: 'SiteConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteGroupConnection>;
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  __typename?: 'SiteEdge';
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export enum SiteFieldsEnum {
  buildTime = 'buildTime',
  siteMetadata___title = 'siteMetadata___title',
  siteMetadata___description = 'siteMetadata___description',
  siteMetadata___siteUrl = 'siteMetadata___siteUrl',
  port = 'port',
  host = 'host',
  polyfill = 'polyfill',
  pathPrefix = 'pathPrefix',
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type'
}

export type SiteFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteGroupConnection = {
  __typename?: 'SiteGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePage = Node & {
  __typename?: 'SitePage';
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>;
  context?: Maybe<SitePageContext>;
  pluginCreator?: Maybe<SitePlugin>;
  pluginCreatorId?: Maybe<Scalars['String']>;
  componentPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SitePageConnection = {
  __typename?: 'SitePageConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePageGroupConnection>;
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageContext = {
  __typename?: 'SitePageContext';
  language?: Maybe<Scalars['String']>;
  i18n?: Maybe<SitePageContextI18n>;
};

export type SitePageContextFilterInput = {
  language?: Maybe<StringQueryOperatorInput>;
  i18n?: Maybe<SitePageContextI18nFilterInput>;
};

export type SitePageContextI18n = {
  __typename?: 'SitePageContextI18n';
  language?: Maybe<Scalars['String']>;
  languages?: Maybe<Array<Maybe<Scalars['String']>>>;
  defaultLanguage?: Maybe<Scalars['String']>;
  generateDefaultLanguagePage?: Maybe<Scalars['Boolean']>;
  routed?: Maybe<Scalars['Boolean']>;
  originalPath?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
};

export type SitePageContextI18nFilterInput = {
  language?: Maybe<StringQueryOperatorInput>;
  languages?: Maybe<StringQueryOperatorInput>;
  defaultLanguage?: Maybe<StringQueryOperatorInput>;
  generateDefaultLanguagePage?: Maybe<BooleanQueryOperatorInput>;
  routed?: Maybe<BooleanQueryOperatorInput>;
  originalPath?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
};

export type SitePageEdge = {
  __typename?: 'SitePageEdge';
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export enum SitePageFieldsEnum {
  path = 'path',
  component = 'component',
  internalComponentName = 'internalComponentName',
  componentChunkName = 'componentChunkName',
  matchPath = 'matchPath',
  isCreatedByStatefulCreatePages = 'isCreatedByStatefulCreatePages',
  context___language = 'context___language',
  context___i18n___language = 'context___i18n___language',
  context___i18n___languages = 'context___i18n___languages',
  context___i18n___defaultLanguage = 'context___i18n___defaultLanguage',
  context___i18n___generateDefaultLanguagePage = 'context___i18n___generateDefaultLanguagePage',
  context___i18n___routed = 'context___i18n___routed',
  context___i18n___originalPath = 'context___i18n___originalPath',
  context___i18n___path = 'context___i18n___path',
  pluginCreator___id = 'pluginCreator___id',
  pluginCreator___parent___id = 'pluginCreator___parent___id',
  pluginCreator___parent___parent___id = 'pluginCreator___parent___parent___id',
  pluginCreator___parent___parent___children = 'pluginCreator___parent___parent___children',
  pluginCreator___parent___children = 'pluginCreator___parent___children',
  pluginCreator___parent___children___id = 'pluginCreator___parent___children___id',
  pluginCreator___parent___children___children = 'pluginCreator___parent___children___children',
  pluginCreator___parent___internal___content = 'pluginCreator___parent___internal___content',
  pluginCreator___parent___internal___contentDigest = 'pluginCreator___parent___internal___contentDigest',
  pluginCreator___parent___internal___description = 'pluginCreator___parent___internal___description',
  pluginCreator___parent___internal___fieldOwners = 'pluginCreator___parent___internal___fieldOwners',
  pluginCreator___parent___internal___ignoreType = 'pluginCreator___parent___internal___ignoreType',
  pluginCreator___parent___internal___mediaType = 'pluginCreator___parent___internal___mediaType',
  pluginCreator___parent___internal___owner = 'pluginCreator___parent___internal___owner',
  pluginCreator___parent___internal___type = 'pluginCreator___parent___internal___type',
  pluginCreator___children = 'pluginCreator___children',
  pluginCreator___children___id = 'pluginCreator___children___id',
  pluginCreator___children___parent___id = 'pluginCreator___children___parent___id',
  pluginCreator___children___parent___children = 'pluginCreator___children___parent___children',
  pluginCreator___children___children = 'pluginCreator___children___children',
  pluginCreator___children___children___id = 'pluginCreator___children___children___id',
  pluginCreator___children___children___children = 'pluginCreator___children___children___children',
  pluginCreator___children___internal___content = 'pluginCreator___children___internal___content',
  pluginCreator___children___internal___contentDigest = 'pluginCreator___children___internal___contentDigest',
  pluginCreator___children___internal___description = 'pluginCreator___children___internal___description',
  pluginCreator___children___internal___fieldOwners = 'pluginCreator___children___internal___fieldOwners',
  pluginCreator___children___internal___ignoreType = 'pluginCreator___children___internal___ignoreType',
  pluginCreator___children___internal___mediaType = 'pluginCreator___children___internal___mediaType',
  pluginCreator___children___internal___owner = 'pluginCreator___children___internal___owner',
  pluginCreator___children___internal___type = 'pluginCreator___children___internal___type',
  pluginCreator___internal___content = 'pluginCreator___internal___content',
  pluginCreator___internal___contentDigest = 'pluginCreator___internal___contentDigest',
  pluginCreator___internal___description = 'pluginCreator___internal___description',
  pluginCreator___internal___fieldOwners = 'pluginCreator___internal___fieldOwners',
  pluginCreator___internal___ignoreType = 'pluginCreator___internal___ignoreType',
  pluginCreator___internal___mediaType = 'pluginCreator___internal___mediaType',
  pluginCreator___internal___owner = 'pluginCreator___internal___owner',
  pluginCreator___internal___type = 'pluginCreator___internal___type',
  pluginCreator___resolve = 'pluginCreator___resolve',
  pluginCreator___name = 'pluginCreator___name',
  pluginCreator___version = 'pluginCreator___version',
  pluginCreator___pluginOptions___spaceId = 'pluginCreator___pluginOptions___spaceId',
  pluginCreator___pluginOptions___accessToken = 'pluginCreator___pluginOptions___accessToken',
  pluginCreator___pluginOptions___downloadLocal = 'pluginCreator___pluginOptions___downloadLocal',
  pluginCreator___pluginOptions___allExtensions = 'pluginCreator___pluginOptions___allExtensions',
  pluginCreator___pluginOptions___isTSX = 'pluginCreator___pluginOptions___isTSX',
  pluginCreator___pluginOptions___jsxPragma = 'pluginCreator___pluginOptions___jsxPragma',
  pluginCreator___pluginOptions___stylesProvider___injectFirst = 'pluginCreator___pluginOptions___stylesProvider___injectFirst',
  pluginCreator___pluginOptions___modules = 'pluginCreator___pluginOptions___modules',
  pluginCreator___pluginOptions___name = 'pluginCreator___pluginOptions___name',
  pluginCreator___pluginOptions___path = 'pluginCreator___pluginOptions___path',
  pluginCreator___pluginOptions___siteUrl = 'pluginCreator___pluginOptions___siteUrl',
  pluginCreator___pluginOptions___localeJsonSourceName = 'pluginCreator___pluginOptions___localeJsonSourceName',
  pluginCreator___pluginOptions___languages = 'pluginCreator___pluginOptions___languages',
  pluginCreator___pluginOptions___defaultLanguage = 'pluginCreator___pluginOptions___defaultLanguage',
  pluginCreator___pluginOptions___trackingId = 'pluginCreator___pluginOptions___trackingId',
  pluginCreator___pluginOptions___lang = 'pluginCreator___pluginOptions___lang',
  pluginCreator___pluginOptions___short_name = 'pluginCreator___pluginOptions___short_name',
  pluginCreator___pluginOptions___description = 'pluginCreator___pluginOptions___description',
  pluginCreator___pluginOptions___start_url = 'pluginCreator___pluginOptions___start_url',
  pluginCreator___pluginOptions___display = 'pluginCreator___pluginOptions___display',
  pluginCreator___pluginOptions___icons = 'pluginCreator___pluginOptions___icons',
  pluginCreator___pluginOptions___icons___src = 'pluginCreator___pluginOptions___icons___src',
  pluginCreator___pluginOptions___icons___sizes = 'pluginCreator___pluginOptions___icons___sizes',
  pluginCreator___pluginOptions___icons___type = 'pluginCreator___pluginOptions___icons___type',
  pluginCreator___pluginOptions___theme_color = 'pluginCreator___pluginOptions___theme_color',
  pluginCreator___pluginOptions___background_color = 'pluginCreator___pluginOptions___background_color',
  pluginCreator___pluginOptions___cache_busting_mode = 'pluginCreator___pluginOptions___cache_busting_mode',
  pluginCreator___pluginOptions___include_favicon = 'pluginCreator___pluginOptions___include_favicon',
  pluginCreator___pluginOptions___legacy = 'pluginCreator___pluginOptions___legacy',
  pluginCreator___pluginOptions___theme_color_in_head = 'pluginCreator___pluginOptions___theme_color_in_head',
  pluginCreator___pluginOptions___exclude = 'pluginCreator___pluginOptions___exclude',
  pluginCreator___pluginOptions___createLinkInHead = 'pluginCreator___pluginOptions___createLinkInHead',
  pluginCreator___pluginOptions___addUncaughtPages = 'pluginCreator___pluginOptions___addUncaughtPages',
  pluginCreator___pluginOptions___workboxConfig___globPatterns = 'pluginCreator___pluginOptions___workboxConfig___globPatterns',
  pluginCreator___pluginOptions___mergeScriptHashes = 'pluginCreator___pluginOptions___mergeScriptHashes',
  pluginCreator___pluginOptions___mergeStyleHashes = 'pluginCreator___pluginOptions___mergeStyleHashes',
  pluginCreator___pluginOptions___mergeDefaultDirectives = 'pluginCreator___pluginOptions___mergeDefaultDirectives',
  pluginCreator___pluginOptions___directives___connect_src = 'pluginCreator___pluginOptions___directives___connect_src',
  pluginCreator___pluginOptions___directives___default_src = 'pluginCreator___pluginOptions___directives___default_src',
  pluginCreator___pluginOptions___directives___font_src = 'pluginCreator___pluginOptions___directives___font_src',
  pluginCreator___pluginOptions___directives___frame_src = 'pluginCreator___pluginOptions___directives___frame_src',
  pluginCreator___pluginOptions___directives___img_src = 'pluginCreator___pluginOptions___directives___img_src',
  pluginCreator___pluginOptions___directives___manifest_src = 'pluginCreator___pluginOptions___directives___manifest_src',
  pluginCreator___pluginOptions___directives___media_src = 'pluginCreator___pluginOptions___directives___media_src',
  pluginCreator___pluginOptions___directives___object_src = 'pluginCreator___pluginOptions___directives___object_src',
  pluginCreator___pluginOptions___directives___script_src = 'pluginCreator___pluginOptions___directives___script_src',
  pluginCreator___pluginOptions___directives___style_src = 'pluginCreator___pluginOptions___directives___style_src',
  pluginCreator___pluginOptions___directives___base_uri = 'pluginCreator___pluginOptions___directives___base_uri',
  pluginCreator___pluginOptions___directives___form_action = 'pluginCreator___pluginOptions___directives___form_action',
  pluginCreator___pluginOptions___configDir = 'pluginCreator___pluginOptions___configDir',
  pluginCreator___pluginOptions___pathCheck = 'pluginCreator___pluginOptions___pathCheck',
  pluginCreator___nodeAPIs = 'pluginCreator___nodeAPIs',
  pluginCreator___browserAPIs = 'pluginCreator___browserAPIs',
  pluginCreator___ssrAPIs = 'pluginCreator___ssrAPIs',
  pluginCreator___pluginFilepath = 'pluginCreator___pluginFilepath',
  pluginCreator___packageJson___name = 'pluginCreator___packageJson___name',
  pluginCreator___packageJson___description = 'pluginCreator___packageJson___description',
  pluginCreator___packageJson___version = 'pluginCreator___packageJson___version',
  pluginCreator___packageJson___main = 'pluginCreator___packageJson___main',
  pluginCreator___packageJson___author = 'pluginCreator___packageJson___author',
  pluginCreator___packageJson___license = 'pluginCreator___packageJson___license',
  pluginCreator___packageJson___dependencies = 'pluginCreator___packageJson___dependencies',
  pluginCreator___packageJson___dependencies___name = 'pluginCreator___packageJson___dependencies___name',
  pluginCreator___packageJson___dependencies___version = 'pluginCreator___packageJson___dependencies___version',
  pluginCreator___packageJson___devDependencies = 'pluginCreator___packageJson___devDependencies',
  pluginCreator___packageJson___devDependencies___name = 'pluginCreator___packageJson___devDependencies___name',
  pluginCreator___packageJson___devDependencies___version = 'pluginCreator___packageJson___devDependencies___version',
  pluginCreator___packageJson___peerDependencies = 'pluginCreator___packageJson___peerDependencies',
  pluginCreator___packageJson___peerDependencies___name = 'pluginCreator___packageJson___peerDependencies___name',
  pluginCreator___packageJson___peerDependencies___version = 'pluginCreator___packageJson___peerDependencies___version',
  pluginCreator___packageJson___keywords = 'pluginCreator___packageJson___keywords',
  pluginCreatorId = 'pluginCreatorId',
  componentPath = 'componentPath',
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type'
}

export type SitePageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SitePageGroupConnection = {
  __typename?: 'SitePageGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  __typename?: 'SitePlugin';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<SitePluginPluginOptions>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  packageJson?: Maybe<SitePluginPackageJson>;
};

export type SitePluginConnection = {
  __typename?: 'SitePluginConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePluginGroupConnection>;
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  __typename?: 'SitePluginEdge';
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export enum SitePluginFieldsEnum {
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  resolve = 'resolve',
  name = 'name',
  version = 'version',
  pluginOptions___spaceId = 'pluginOptions___spaceId',
  pluginOptions___accessToken = 'pluginOptions___accessToken',
  pluginOptions___downloadLocal = 'pluginOptions___downloadLocal',
  pluginOptions___allExtensions = 'pluginOptions___allExtensions',
  pluginOptions___isTSX = 'pluginOptions___isTSX',
  pluginOptions___jsxPragma = 'pluginOptions___jsxPragma',
  pluginOptions___stylesProvider___injectFirst = 'pluginOptions___stylesProvider___injectFirst',
  pluginOptions___modules = 'pluginOptions___modules',
  pluginOptions___name = 'pluginOptions___name',
  pluginOptions___path = 'pluginOptions___path',
  pluginOptions___siteUrl = 'pluginOptions___siteUrl',
  pluginOptions___localeJsonSourceName = 'pluginOptions___localeJsonSourceName',
  pluginOptions___languages = 'pluginOptions___languages',
  pluginOptions___defaultLanguage = 'pluginOptions___defaultLanguage',
  pluginOptions___trackingId = 'pluginOptions___trackingId',
  pluginOptions___lang = 'pluginOptions___lang',
  pluginOptions___short_name = 'pluginOptions___short_name',
  pluginOptions___description = 'pluginOptions___description',
  pluginOptions___start_url = 'pluginOptions___start_url',
  pluginOptions___display = 'pluginOptions___display',
  pluginOptions___icons = 'pluginOptions___icons',
  pluginOptions___icons___src = 'pluginOptions___icons___src',
  pluginOptions___icons___sizes = 'pluginOptions___icons___sizes',
  pluginOptions___icons___type = 'pluginOptions___icons___type',
  pluginOptions___theme_color = 'pluginOptions___theme_color',
  pluginOptions___background_color = 'pluginOptions___background_color',
  pluginOptions___cache_busting_mode = 'pluginOptions___cache_busting_mode',
  pluginOptions___include_favicon = 'pluginOptions___include_favicon',
  pluginOptions___legacy = 'pluginOptions___legacy',
  pluginOptions___theme_color_in_head = 'pluginOptions___theme_color_in_head',
  pluginOptions___exclude = 'pluginOptions___exclude',
  pluginOptions___createLinkInHead = 'pluginOptions___createLinkInHead',
  pluginOptions___addUncaughtPages = 'pluginOptions___addUncaughtPages',
  pluginOptions___workboxConfig___globPatterns = 'pluginOptions___workboxConfig___globPatterns',
  pluginOptions___mergeScriptHashes = 'pluginOptions___mergeScriptHashes',
  pluginOptions___mergeStyleHashes = 'pluginOptions___mergeStyleHashes',
  pluginOptions___mergeDefaultDirectives = 'pluginOptions___mergeDefaultDirectives',
  pluginOptions___directives___connect_src = 'pluginOptions___directives___connect_src',
  pluginOptions___directives___default_src = 'pluginOptions___directives___default_src',
  pluginOptions___directives___font_src = 'pluginOptions___directives___font_src',
  pluginOptions___directives___frame_src = 'pluginOptions___directives___frame_src',
  pluginOptions___directives___img_src = 'pluginOptions___directives___img_src',
  pluginOptions___directives___manifest_src = 'pluginOptions___directives___manifest_src',
  pluginOptions___directives___media_src = 'pluginOptions___directives___media_src',
  pluginOptions___directives___object_src = 'pluginOptions___directives___object_src',
  pluginOptions___directives___script_src = 'pluginOptions___directives___script_src',
  pluginOptions___directives___style_src = 'pluginOptions___directives___style_src',
  pluginOptions___directives___base_uri = 'pluginOptions___directives___base_uri',
  pluginOptions___directives___form_action = 'pluginOptions___directives___form_action',
  pluginOptions___configDir = 'pluginOptions___configDir',
  pluginOptions___pathCheck = 'pluginOptions___pathCheck',
  nodeAPIs = 'nodeAPIs',
  browserAPIs = 'browserAPIs',
  ssrAPIs = 'ssrAPIs',
  pluginFilepath = 'pluginFilepath',
  packageJson___name = 'packageJson___name',
  packageJson___description = 'packageJson___description',
  packageJson___version = 'packageJson___version',
  packageJson___main = 'packageJson___main',
  packageJson___author = 'packageJson___author',
  packageJson___license = 'packageJson___license',
  packageJson___dependencies = 'packageJson___dependencies',
  packageJson___dependencies___name = 'packageJson___dependencies___name',
  packageJson___dependencies___version = 'packageJson___dependencies___version',
  packageJson___devDependencies = 'packageJson___devDependencies',
  packageJson___devDependencies___name = 'packageJson___devDependencies___name',
  packageJson___devDependencies___version = 'packageJson___devDependencies___version',
  packageJson___peerDependencies = 'packageJson___peerDependencies',
  packageJson___peerDependencies___name = 'packageJson___peerDependencies___name',
  packageJson___peerDependencies___version = 'packageJson___peerDependencies___version',
  packageJson___keywords = 'packageJson___keywords'
}

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type SitePluginGroupConnection = {
  __typename?: 'SitePluginGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJson = {
  __typename?: 'SitePluginPackageJson';
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  main?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonDependencies = {
  __typename?: 'SitePluginPackageJsonDependencies';
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependencies = {
  __typename?: 'SitePluginPackageJsonDevDependencies';
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  main?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
  license?: Maybe<StringQueryOperatorInput>;
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependencies = {
  __typename?: 'SitePluginPackageJsonPeerDependencies';
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPluginOptions = {
  __typename?: 'SitePluginPluginOptions';
  spaceId?: Maybe<Scalars['String']>;
  accessToken?: Maybe<Scalars['String']>;
  downloadLocal?: Maybe<Scalars['Boolean']>;
  allExtensions?: Maybe<Scalars['Boolean']>;
  isTSX?: Maybe<Scalars['Boolean']>;
  jsxPragma?: Maybe<Scalars['String']>;
  stylesProvider?: Maybe<SitePluginPluginOptionsStylesProvider>;
  modules?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  siteUrl?: Maybe<Scalars['String']>;
  localeJsonSourceName?: Maybe<Scalars['String']>;
  languages?: Maybe<Array<Maybe<Scalars['String']>>>;
  defaultLanguage?: Maybe<Scalars['String']>;
  trackingId?: Maybe<Scalars['String']>;
  lang?: Maybe<Scalars['String']>;
  short_name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  start_url?: Maybe<Scalars['String']>;
  display?: Maybe<Scalars['String']>;
  icons?: Maybe<Array<Maybe<SitePluginPluginOptionsIcons>>>;
  theme_color?: Maybe<Scalars['String']>;
  background_color?: Maybe<Scalars['String']>;
  cache_busting_mode?: Maybe<Scalars['String']>;
  include_favicon?: Maybe<Scalars['Boolean']>;
  legacy?: Maybe<Scalars['Boolean']>;
  theme_color_in_head?: Maybe<Scalars['Boolean']>;
  exclude?: Maybe<Array<Maybe<Scalars['String']>>>;
  createLinkInHead?: Maybe<Scalars['Boolean']>;
  addUncaughtPages?: Maybe<Scalars['Boolean']>;
  workboxConfig?: Maybe<SitePluginPluginOptionsWorkboxConfig>;
  mergeScriptHashes?: Maybe<Scalars['Boolean']>;
  mergeStyleHashes?: Maybe<Scalars['Boolean']>;
  mergeDefaultDirectives?: Maybe<Scalars['Boolean']>;
  directives?: Maybe<SitePluginPluginOptionsDirectives>;
  configDir?: Maybe<Scalars['String']>;
  pathCheck?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsDirectives = {
  __typename?: 'SitePluginPluginOptionsDirectives';
  connect_src?: Maybe<Scalars['String']>;
  default_src?: Maybe<Scalars['String']>;
  font_src?: Maybe<Scalars['String']>;
  frame_src?: Maybe<Scalars['String']>;
  img_src?: Maybe<Scalars['String']>;
  manifest_src?: Maybe<Scalars['String']>;
  media_src?: Maybe<Scalars['String']>;
  object_src?: Maybe<Scalars['String']>;
  script_src?: Maybe<Scalars['String']>;
  style_src?: Maybe<Scalars['String']>;
  base_uri?: Maybe<Scalars['String']>;
  form_action?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsDirectivesFilterInput = {
  connect_src?: Maybe<StringQueryOperatorInput>;
  default_src?: Maybe<StringQueryOperatorInput>;
  font_src?: Maybe<StringQueryOperatorInput>;
  frame_src?: Maybe<StringQueryOperatorInput>;
  img_src?: Maybe<StringQueryOperatorInput>;
  manifest_src?: Maybe<StringQueryOperatorInput>;
  media_src?: Maybe<StringQueryOperatorInput>;
  object_src?: Maybe<StringQueryOperatorInput>;
  script_src?: Maybe<StringQueryOperatorInput>;
  style_src?: Maybe<StringQueryOperatorInput>;
  base_uri?: Maybe<StringQueryOperatorInput>;
  form_action?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsFilterInput = {
  spaceId?: Maybe<StringQueryOperatorInput>;
  accessToken?: Maybe<StringQueryOperatorInput>;
  downloadLocal?: Maybe<BooleanQueryOperatorInput>;
  allExtensions?: Maybe<BooleanQueryOperatorInput>;
  isTSX?: Maybe<BooleanQueryOperatorInput>;
  jsxPragma?: Maybe<StringQueryOperatorInput>;
  stylesProvider?: Maybe<SitePluginPluginOptionsStylesProviderFilterInput>;
  modules?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  siteUrl?: Maybe<StringQueryOperatorInput>;
  localeJsonSourceName?: Maybe<StringQueryOperatorInput>;
  languages?: Maybe<StringQueryOperatorInput>;
  defaultLanguage?: Maybe<StringQueryOperatorInput>;
  trackingId?: Maybe<StringQueryOperatorInput>;
  lang?: Maybe<StringQueryOperatorInput>;
  short_name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  start_url?: Maybe<StringQueryOperatorInput>;
  display?: Maybe<StringQueryOperatorInput>;
  icons?: Maybe<SitePluginPluginOptionsIconsFilterListInput>;
  theme_color?: Maybe<StringQueryOperatorInput>;
  background_color?: Maybe<StringQueryOperatorInput>;
  cache_busting_mode?: Maybe<StringQueryOperatorInput>;
  include_favicon?: Maybe<BooleanQueryOperatorInput>;
  legacy?: Maybe<BooleanQueryOperatorInput>;
  theme_color_in_head?: Maybe<BooleanQueryOperatorInput>;
  exclude?: Maybe<StringQueryOperatorInput>;
  createLinkInHead?: Maybe<BooleanQueryOperatorInput>;
  addUncaughtPages?: Maybe<BooleanQueryOperatorInput>;
  workboxConfig?: Maybe<SitePluginPluginOptionsWorkboxConfigFilterInput>;
  mergeScriptHashes?: Maybe<BooleanQueryOperatorInput>;
  mergeStyleHashes?: Maybe<BooleanQueryOperatorInput>;
  mergeDefaultDirectives?: Maybe<BooleanQueryOperatorInput>;
  directives?: Maybe<SitePluginPluginOptionsDirectivesFilterInput>;
  configDir?: Maybe<StringQueryOperatorInput>;
  pathCheck?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginPluginOptionsIcons = {
  __typename?: 'SitePluginPluginOptionsIcons';
  src?: Maybe<Scalars['String']>;
  sizes?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsIconsFilterInput = {
  src?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsIconsFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsIconsFilterInput>;
};

export type SitePluginPluginOptionsStylesProvider = {
  __typename?: 'SitePluginPluginOptionsStylesProvider';
  injectFirst?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsStylesProviderFilterInput = {
  injectFirst?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginPluginOptionsWorkboxConfig = {
  __typename?: 'SitePluginPluginOptionsWorkboxConfig';
  globPatterns?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPluginOptionsWorkboxConfigFilterInput = {
  globPatterns?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  __typename?: 'SiteSiteMetadata';
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  siteUrl?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  siteUrl?: Maybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export enum SortOrderEnum {
  ASC = 'ASC',
  DESC = 'DESC'
}

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
};

export type TransformOptions = {
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
};

export type WebPOptions = {
  quality?: Maybe<Scalars['Int']>;
};

export type BicstoneIconDataQueryVariables = Exact<{ [key: string]: never; }>;


export type BicstoneIconDataQuery = (
  { __typename?: 'Query' }
  & { contentfulAsset?: Maybe<(
    { __typename?: 'ContentfulAsset' }
    & Pick<ContentfulAsset, 'title'>
    & { svg?: Maybe<(
      { __typename?: 'InlineSvg' }
      & Pick<InlineSvg, 'content'>
    )> }
  )> }
);

export type ContactDataQueryVariables = Exact<{ [key: string]: never; }>;


export type ContactDataQuery = (
  { __typename?: 'Query' }
  & { allContentfulContact: (
    { __typename?: 'ContentfulContactConnection' }
    & { edges: Array<(
      { __typename?: 'ContentfulContactEdge' }
      & { node: (
        { __typename?: 'ContentfulContact' }
        & Pick<ContentfulContact, 'id' | 'node_locale' | 'name' | 'subName' | 'href'>
        & { icon?: Maybe<(
          { __typename?: 'ContentfulIcon' }
          & Pick<ContentfulIcon, 'name'>
          & { svg?: Maybe<(
            { __typename?: 'contentfulIconSvgTextNode' }
            & Pick<ContentfulIconSvgTextNode, 'svg'>
          )> }
        )> }
      ) }
    )> }
  ) }
);

export type HelloDataQueryVariables = Exact<{ [key: string]: never; }>;


export type HelloDataQuery = (
  { __typename?: 'Query' }
  & { allContentfulHello: (
    { __typename?: 'ContentfulHelloConnection' }
    & { edges: Array<(
      { __typename?: 'ContentfulHelloEdge' }
      & { node: (
        { __typename?: 'ContentfulHello' }
        & Pick<ContentfulHello, 'id' | 'node_locale' | 'name' | 'href'>
      ) }
    )> }
  ) }
);

export type HistoryDataQueryVariables = Exact<{ [key: string]: never; }>;


export type HistoryDataQuery = (
  { __typename?: 'Query' }
  & { allContentfulHistory: (
    { __typename?: 'ContentfulHistoryConnection' }
    & { edges: Array<(
      { __typename?: 'ContentfulHistoryEdge' }
      & { node: (
        { __typename?: 'ContentfulHistory' }
        & Pick<ContentfulHistory, 'id' | 'node_locale' | 'date' | 'name' | 'subName'>
        & { icon?: Maybe<(
          { __typename?: 'ContentfulIcon' }
          & Pick<ContentfulIcon, 'name'>
          & { svg?: Maybe<(
            { __typename?: 'contentfulIconSvgTextNode' }
            & Pick<ContentfulIconSvgTextNode, 'svg'>
          )> }
        )> }
      ) }
    )> }
  ) }
);

export type OssDataQueryVariables = Exact<{ [key: string]: never; }>;


export type OssDataQuery = (
  { __typename?: 'Query' }
  & { allContentfulOss: (
    { __typename?: 'ContentfulOssConnection' }
    & { edges: Array<(
      { __typename?: 'ContentfulOssEdge' }
      & { node: (
        { __typename?: 'ContentfulOss' }
        & Pick<ContentfulOss, 'id' | 'node_locale' | 'name' | 'subName' | 'startDate' | 'href'>
        & { tags?: Maybe<Array<Maybe<(
          { __typename?: 'ContentfulTag' }
          & Pick<ContentfulTag, 'name'>
        )>>>, icon?: Maybe<(
          { __typename?: 'ContentfulIcon' }
          & Pick<ContentfulIcon, 'name'>
          & { svg?: Maybe<(
            { __typename?: 'contentfulIconSvgTextNode' }
            & Pick<ContentfulIconSvgTextNode, 'svg'>
          )> }
        )>, image?: Maybe<(
          { __typename?: 'ContentfulAsset' }
          & Pick<ContentfulAsset, 'title'>
          & { file?: Maybe<(
            { __typename?: 'ContentfulAssetFile' }
            & Pick<ContentfulAssetFile, 'url'>
          )>, localFile?: Maybe<(
            { __typename?: 'File' }
            & { childImageSharp?: Maybe<(
              { __typename?: 'ImageSharp' }
              & Pick<ImageSharp, 'gatsbyImageData'>
            )> }
          )> }
        )>, detail?: Maybe<(
          { __typename?: 'contentfulOssDetailTextNode' }
          & { childMarkdownRemark?: Maybe<(
            { __typename?: 'MarkdownRemark' }
            & Pick<MarkdownRemark, 'html'>
          )> }
        )> }
      ) }
    )> }
  ) }
);

export type ProjectDataQueryVariables = Exact<{ [key: string]: never; }>;


export type ProjectDataQuery = (
  { __typename?: 'Query' }
  & { allContentfulProject: (
    { __typename?: 'ContentfulProjectConnection' }
    & { edges: Array<(
      { __typename?: 'ContentfulProjectEdge' }
      & { node: (
        { __typename?: 'ContentfulProject' }
        & Pick<ContentfulProject, 'id' | 'node_locale' | 'name' | 'subName' | 'startDate' | 'endDate'>
        & { startDateRow: ContentfulProject['startDate'], endDateRow: ContentfulProject['endDate'] }
        & { tags?: Maybe<Array<Maybe<(
          { __typename?: 'ContentfulTag' }
          & Pick<ContentfulTag, 'name'>
        )>>>, icon?: Maybe<(
          { __typename?: 'ContentfulIcon' }
          & Pick<ContentfulIcon, 'name'>
          & { svg?: Maybe<(
            { __typename?: 'contentfulIconSvgTextNode' }
            & Pick<ContentfulIconSvgTextNode, 'svg'>
          )> }
        )>, detail?: Maybe<(
          { __typename?: 'contentfulProjectDetailTextNode' }
          & { childMarkdownRemark?: Maybe<(
            { __typename?: 'MarkdownRemark' }
            & Pick<MarkdownRemark, 'html'>
          )> }
        )> }
      ) }
    )> }
  ) }
);

export type QualificationMapDataQueryVariables = Exact<{ [key: string]: never; }>;


export type QualificationMapDataQuery = (
  { __typename?: 'Query' }
  & { allContentfulQualificationMap: (
    { __typename?: 'ContentfulQualificationMapConnection' }
    & { edges: Array<(
      { __typename?: 'ContentfulQualificationMapEdge' }
      & { node: (
        { __typename?: 'ContentfulQualificationMap' }
        & Pick<ContentfulQualificationMap, 'id' | 'node_locale' | 'name' | 'expanded'>
        & { qualifications?: Maybe<Array<Maybe<(
          { __typename?: 'ContentfulQualification' }
          & Pick<ContentfulQualification, 'id' | 'name' | 'date'>
        )>>> }
      ) }
    )> }
  ) }
);

export type SkillDataQueryVariables = Exact<{ [key: string]: never; }>;


export type SkillDataQuery = (
  { __typename?: 'Query' }
  & { allContentfulSkillMap: (
    { __typename?: 'ContentfulSkillMapConnection' }
    & { edges: Array<(
      { __typename?: 'ContentfulSkillMapEdge' }
      & { node: (
        { __typename?: 'ContentfulSkillMap' }
        & Pick<ContentfulSkillMap, 'id' | 'name' | 'node_locale' | 'expanded'>
        & { skills?: Maybe<Array<Maybe<(
          { __typename?: 'ContentfulTag' }
          & Pick<ContentfulTag, 'id' | 'level' | 'name'>
        )>>> }
      ) }
    )> }
  ) }
);

export type WhatICanDoDataQueryVariables = Exact<{ [key: string]: never; }>;


export type WhatICanDoDataQuery = (
  { __typename?: 'Query' }
  & { allContentfulWhatICanDo: (
    { __typename?: 'ContentfulWhatICanDoConnection' }
    & { edges: Array<(
      { __typename?: 'ContentfulWhatICanDoEdge' }
      & { node: (
        { __typename?: 'ContentfulWhatICanDo' }
        & Pick<ContentfulWhatICanDo, 'id' | 'node_locale' | 'name' | 'subName'>
        & { icon?: Maybe<(
          { __typename?: 'ContentfulIcon' }
          & Pick<ContentfulIcon, 'name'>
          & { svg?: Maybe<(
            { __typename?: 'contentfulIconSvgTextNode' }
            & Pick<ContentfulIconSvgTextNode, 'svg'>
          )> }
        )> }
      ) }
    )> }
  ) }
);

export type BuildTimeDataQueryVariables = Exact<{ [key: string]: never; }>;


export type BuildTimeDataQuery = (
  { __typename?: 'Query' }
  & { site?: Maybe<(
    { __typename?: 'Site' }
    & Pick<Site, 'buildTime'>
  )> }
);

export type NotFoundPageQueryVariables = Exact<{
  language: Scalars['String'];
}>;


export type NotFoundPageQuery = (
  { __typename?: 'Query' }
  & { locales: (
    { __typename?: 'LocaleConnection' }
    & { edges: Array<(
      { __typename?: 'LocaleEdge' }
      & { node: (
        { __typename?: 'Locale' }
        & Pick<Locale, 'ns' | 'data' | 'language'>
      ) }
    )> }
  ) }
);

export type IndexPageQueryVariables = Exact<{
  language: Scalars['String'];
}>;


export type IndexPageQuery = (
  { __typename?: 'Query' }
  & { locales: (
    { __typename?: 'LocaleConnection' }
    & { edges: Array<(
      { __typename?: 'LocaleEdge' }
      & { node: (
        { __typename?: 'Locale' }
        & Pick<Locale, 'ns' | 'data' | 'language'>
      ) }
    )> }
  ) }
);

export type PrivacyPageQueryVariables = Exact<{
  language: Scalars['String'];
}>;


export type PrivacyPageQuery = (
  { __typename?: 'Query' }
  & { locales: (
    { __typename?: 'LocaleConnection' }
    & { edges: Array<(
      { __typename?: 'LocaleEdge' }
      & { node: (
        { __typename?: 'Locale' }
        & Pick<Locale, 'ns' | 'data' | 'language'>
      ) }
    )> }
  ) }
);
