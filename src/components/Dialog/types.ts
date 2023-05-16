import { ReactHTMLAttributes, ReactHTMLElement } from '@/types/React';

export interface DialogProps extends Omit<ReactHTMLAttributes<'dialog'>, 'onCancel' | 'onClose'> {
  escape?: boolean;
  onClose?: ReactHTMLAttributes<'dialog'>['onClose'];
  // 이벤트 핸들러의 이름을 명확한 이름으로 변경
  // - 'cancel' 이벤트는 `Esc` 키에만 반응함
  // - 사용자가 생각하는 확인, 취소 액션은 `children`의 하위 엘리먼트에서 유발함
  /** See {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/cancel_event} */
  onEscape?: ReactHTMLAttributes<'dialog'>['onCancel'];
}

export type DialogRef = ReactHTMLElement<'dialog'>;
