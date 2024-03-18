import * as Avt from '@radix-ui/react-avatar';
import { If } from 'if-component-ts';

type AvatarType = {
  image : string;
}
export default function Avatar({
  image
}:AvatarType) {
  return (
    <Avt.Root>
      <If test={image}>
        <Avt.Image
          src={image}
          alt='imagem_usuario'
        />
      </If>
      <If test={image}>

      </If>
    </Avt.Root>
  )
}
