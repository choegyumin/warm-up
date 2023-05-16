import nonNullable from '@/utils/nonNullable';

const scale = '4px';

function spacing(level: number): string;
function spacing(blockOrStart: number, inlineOrEnd: number): string;
function spacing(top: number, right: number, bottom?: number, left?: number): string;
function spacing(top: number, right?: number, bottom?: number, left?: number): string {
  const values = [
    `calc(${scale} * ${top})`,
    right != null ? `calc(${scale} * ${right})` : undefined,
    bottom != null ? `calc(${scale} * ${bottom})` : undefined,
    left != null ? `calc(${scale} * ${left})` : undefined,
  ];
  return values.filter(nonNullable).join(' ');
}

export default Object.assign(spacing, { scale });
