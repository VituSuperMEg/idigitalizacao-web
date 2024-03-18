import { mostrarDuasLetras } from '@/util/util';
import * as Avt from '@radix-ui/react-avatar';
import { If } from 'if-component-ts';

type AvatarType = {
  image?: string;
  name : string;
}
export default function Avatar({
  image,
  name
}:AvatarType) {
  return (
    <Avt.Root>
      <If test={image}>
        <Avt.Image
          src={image}
          alt='imagem_usuario'
          className='rounded-full'
        />
      </If>
      <If test={!image}>
        <Avt.Fallback className='w-8 h-8 bg-zinc-800 p-3 rounded-full'>
          <span className='text-violet-100'>{mostrarDuasLetras(name)}</span>
        </Avt.Fallback>
      </If>
    </Avt.Root>
  )
}
