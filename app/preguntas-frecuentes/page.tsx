const Title = ({ title }: any) => <h3 className=" text-xl text-primary font-bold">{title}</h3>

const SectionQ = ({ children }: any) => (
    <div className="my-8">
        {children}
    </div>
)

export default function Question() {
    return (
        <div className="container my-10">
            <SectionQ>
                <Title title="&iquest;C&oacute;mo solicito mi factura?" />
                <p>Al momento de realizar tu compra no te olvides de escribir tu correo para envi&aacute;rtelo por ese medio.&nbsp;si no cuentas con correo electr&oacute;nico con tus datos de compra podr&aacute;s solicitarlo en nuestro WhatsApp +591 65069921&nbsp;</p>
            </SectionQ>

            <SectionQ>
                <Title title="&iquest;C&oacute;mo puedo pagar mi cuota?" />
                <p>Tienes 2 formas de realizar el pago de tus cuotas:</p>
                <p>1.- Puedes acercarte a una de nuestras sucursales y realizar el pago</p>
                <p>2.- Tambi&eacute;n cuentas con un QR donde puedes realizar el pago, (solic&iacute;talo por WhatsApp)</p>
            </SectionQ>

            <SectionQ>
                <Title title="&iquest;Cu&aacute;les son los m&eacute;todos de env&iacute;o en Hauscenter.com.bo?" />
                <p>Nuestros m&eacute;todos de env&iacute;o son 2:</p>
                <p><strong>1.- Recojo en tienda:</strong> Podr&aacute;s realizar el recojo de tu producto en nuestra sucursal, mas cercana a tu domicilio</p>
                <p><strong>2.- Env&iacute;o a domicilio:</strong> Te enviaremos hasta la puerta de tu casa tus productos y lo mejor que llegamos a cualquier parte del pa&iacute;s.</p>
            </SectionQ>

            <SectionQ>
                <Title title="&iquest;C&oacute;mo funciona la p&aacute;gina web Hauscenter.com.bo?" />
                <p>1.- Te brindamos la informaci&oacute;n que requieres del producto deseado</p>
                <p>2.- La forma de realizar la compra es casi intuitivo</p>
                <p>3.- Cuando finalizas tu compra te llegara un correo de confirmaci&oacute;n.</p>
                <p>4.- Te entregamos tu pedido hasta la puerta de tu casa o rec&oacute;gelo en tienda</p>
            </SectionQ>

            <SectionQ>
                <Title title="&iquest;C&oacute;mo comprar en Hauscenter.com.bo?" />
                <p>1.- Puedes navegar en por medio de nuestro buscador o men&uacute;</p>
                <p>2.- Elige el producto deseado y dale click a <strong>COMPRAR</strong></p>
                <p>3.- Puedes seguir navegando o finalizar compra</p>
                <p>4.- Ingresa tus datos personales</p>
                <p>5.- Elige si el producto ser&aacute; recogido o enviado a tu domicilio</p>
                <p>6.- Selecciona el m&eacute;todo de pago</p>
                <p>7.- Luego haz click en <strong>COMPRAR AHORA</strong></p>
                <p>8.- Recibe un correo de confirmaci&oacute;n</p>
                <p>9.- Y listo nuestro asesor se comunicar&aacute; contigo para confirmar tu compra.</p>
            </SectionQ>

            <SectionQ>
                <Title title="&iquest;Cu&aacute;les son los m&eacute;todos de pago en Hauscenter.com.bo?" />
                <ul className="list-decimal ml-6">
                    <li>Pago por QR</li>
                    <li>Transferencia Bancaria</li>
                    <li>Pago con tarjeta de cr&eacute;dito o debito</li>
                </ul>
            </SectionQ>

            <SectionQ>
                <Title title="&iquest;El pago que realice por Hauscenter.com.bo, es seguro?" />
                <p>Si, los pagos que realice en nuestra plataforma son seguros, trabajamos con entidades financieras solidas y los datos son resguardado por las mismas para su seguridad.</p>
            </SectionQ>

            <SectionQ>
                <Title title="&iquest;Cu&aacute;nto dura el proceso de compra?" />
                <p>Todo depender&aacute; de vos, y el tiempo que le dediques a tu compra virtual, pero regularmente dura 5 minutos.</p>
            </SectionQ>

            <SectionQ>
                <Title title="&iquest;Puedo realizar mi compra el fin de semana o feriado?" />
                <p>Todo depender&aacute; de vos, y el tiempo que le dediques a tu compra virtual, pero regularmente dura 5 minutos.</p>
                <p>Si, nuestra plataforma virtual funciona las 24hrs al d&iacute;a, los 365 d&iacute;as del a&ntilde;o.</p>
            </SectionQ>

            <SectionQ>
                <Title title="&iquest;C&oacute;mo puedo consultar el estado de mi envi&oacute;?" />
                <p>Uno de nuestros asesores se contactar&aacute; con usted, para brindarle la informaci&oacute;n del estado de su env&iacute;o.</p>
                <p>Igualmente se podr&aacute; contacta con nosotros al WhatsApp +591 65069921, L a V de 8:30 a 12:30 / 14:30 a 18:30 y s&aacute;bados de 09:00 a 13:00</p>
            </SectionQ>

            <SectionQ>
                <Title title="&iquest;Cuento con CrediHaus, puedo comprar?" />
                <p>&iexcl;&iexcl;&iexcl;Si!!!, cont&aacute;ctanos por WhatsApp para agilizar su compra</p>
            </SectionQ>

            <SectionQ>
                <Title title="&iquest;Por qu&eacute; tengo problemas para realizar el pago de mi compra?" />
                <p>1.- Si tu pago lo realizaras con tarjeta de cr&eacute;dito o d&eacute;bito, recuerda habilitarla para este tipo de compras por medio de tu Banco.</p>
                <p>2.-Si tu pago es por medio de QR o transferencia, por favor comun&iacute;cate con nosotros para poder ayudar al WhatsApp +591 65069921</p>
            </SectionQ>

            <SectionQ>
                <Title title="&iquest;Cu&aacute;nto tiempo debo esperar para recibir mi producto?" />
                <p>&nbsp;El recojo de producto o entrega a domicilio depender&aacute; de la ubicaci&oacute;n del stock, como tambi&eacute;n el lugar de su encuentro.</p>
                <p>Nuestro asesor se comunicar&aacute; con usted para poder ayudarlo y gestionar la entrega lo m&aacute;s pronto posible</p>
            </SectionQ>

            <SectionQ>
                <Title title="&iquest;Puedo comprar por WhatsApp?" />
                <p>Si, cont&aacute;ctate con nosotros por nuestro WhatsApp +591 65069921 y te gestionaremos tu compra.</p>
            </SectionQ>

            <SectionQ>
                <Title title="&iquest;Los precios de HAUSCENTER.COM.BO son iguales a los de las sucursales?" />
                <p>No, estos pueden ser diferentes en algunas ocasiones.</p>
            </SectionQ>

            <SectionQ>
                <Title title="&iquest;Qu&eacute; diferencia hay entre comprar en HAUSCENTER.COM.BO y en una sucursal HAUSCENTER?" />
                <p>Hauscenter.com.bo es nuestra p&aacute;gina web (Ecommerce) en donde podr&aacute; realizar sus compras por internet desde cualquier parte del Pa&iacute;s, podr&aacute; navegar en nuestra tienda virtual, donde e brindamos toda la informaci&oacute;n del producto, seleccionar, pagar e indicar el lugar de entrega del producto (envi&oacute; a Domicilio o recojo en tienda).</p>
                <br />
                <p><strong>Nuestras entregas son a nivel nacional, hasta la puerta de tu casa.</strong></p>
                <br />
                <p>Las sucursales Hauscenter se encuentran ubicadas en la ciudad de SANTA CRUZ Y COCHABAMBA, por ello deber&aacute;s apersonarte a realizar tus compras, igualmente nuestros asesores te ayudaran a gestionar tus compras.</p>
            </SectionQ>


            <SectionQ>
                <Title title="&iquest;Cu&aacute;nto tiempo demora una devoluci&oacute;n de dinero, si pague con una tarjeta de cr&eacute;dito o d&eacute;bito?" />
                <p>Una vez solicitada la devoluci&oacute;n de dinero, nosotros enviamos los datos de su consumo a la empresa procesadora de pagos, esta, se encargar&aacute; de realizar las operaciones necesarias con la entidad financiera para que se realice el reembolso y se refleje en tus movimientos y/o estado de cuenta. La devoluci&oacute;n a su tarjeta puede demorar dependiendo de su banco hasta 7 d&iacute;as calendario</p>
            </SectionQ>

            <SectionQ>
                <Title title="&iquest;Cu&aacute;nto tiempo demora una devoluci&oacute;n, si pague con QR o transferencia?" />
                <p>Para compras efectuadas con QR o transferencia, el reembolso se realizar&aacute; por medio de una transferencia a la cuenta bancaria del titular de la compra. Plazo m&aacute;ximo de 3 d&iacute;as h&aacute;biles contados desde que el cliente facilite los datos requeridos para efectuar dicha devoluci&oacute;n.</p>
            </SectionQ>

            <SectionQ>
                <Title title="&iquest;El producto que compre tiene garant&iacute;a?" />
                <p>Si, tu producto cuenta con la garant&iacute;a de la marca adquirida.&nbsp;</p>
            </SectionQ>

            <SectionQ>
                <Title title="&iquest;Qu&eacute; sucede si mi producto no funciona?" />
                <p>&nbsp;Deber&aacute;s comunicarte con nosotros dentro de las 24hrs, para poder ayudarte, pasando las 24hrs deber&aacute;s comunicarte con servicio al cliente de la marca, nuestro servicio al cliente te brindara los datos para su contacto</p>
            </SectionQ>

            <SectionQ>
                <Title title="Tengo un cup&oacute;n promocional &iquest;C&oacute;mo puedo canjearlo?" />
                <p>En el carrito de la compra dispones de un apartado llamado &ldquo;AGREGAR CODIGO&rdquo; para validar tu cup&oacute;n. Una vez canjeado, se restar&aacute; su valor a la cantidad total de tu compra en la parte inferior.&nbsp;</p>
            </SectionQ>
        </div>
    )
}