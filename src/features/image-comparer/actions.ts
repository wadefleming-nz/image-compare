import { Image } from './image-type';

export const BEFORE_IMAGE_CHANGED = 'BEFORE_IMAGE_CHANGED ';
export const AFTER_IMAGE_CHANGED = 'AFTER_IMAGE_CHANGED';
export const IMAGES_RESET = 'IMAGES_RESET';

interface BeforeImageChangedAction {
  type: typeof BEFORE_IMAGE_CHANGED;
  payload: Image;
}

interface AfterImageChangedAction {
  type: typeof AFTER_IMAGE_CHANGED;
  payload: Image;
}

interface ImagesResetAction {
  type: typeof IMAGES_RESET;
  payload: never;
}

export type ImageActionTypes =
  | BeforeImageChangedAction
  | AfterImageChangedAction
  | ImagesResetAction;
