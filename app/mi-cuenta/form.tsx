'use client'

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { URL_BASE } from "@/lib/endpoint";
import { useTokenStore } from "@/lib/globalStore";
import { regex } from "@/lib/regex";

import { useEffect, useState } from "react";

const Loading = () => (
    <center className="h-[460px]">
        <span className="text-[60px] font-extrabold text-primary">Cargando...</span>
    </center>
);

const MyAccount = () => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const token = useTokenStore((state:any) => state.token)
    const updateToken = useTokenStore((state:any) => state.setToken)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userResponse = await fetch('https://www.dashboard.hauscenter.com.bo/api/users/me', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                });
                const userData = await userResponse.json()

                if (userResponse.ok) {
                    setUser(userData);
                    setLoading(false);
                }
            } catch (error) {
            }
        };
        if (token == null || token == undefined || token == 'null' || token == 'undefined') {
            setLoading(false)
        } else {
            fetchData();
        }

    }, []);

    const handleEmailChange = (e: any) => {
        setEmail(e.target.value);
    };

    const handleUsernameChange = (e: any) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e: any) => {
        setPassword(e.target.value);
    };

    const handleSubmitUpdate = async (e: any) => {
        try {
            e.preventDefault();

            const userData = {
                email: email ?? '',
                username: username ?? '',
            };

            const data = fetch(`https://www.dashboard.hauscenter.com.bo/api/users/1`, {
                headers: {
                    Authorization: `Bearer `, //${token}
                },
                body: JSON.stringify(userData)
            });

            if ((await data).ok) {
                alert("Información actualizada");
            }
        } catch (error) {
            alert("Error al actualizar la información. Por favor, intenta de nuevo.");
        }
    };

    const handleSubmitRegister = async (e: any) => {
        try {
            e.preventDefault();

            const userRegister = {
                email: email,
                password: password,
                username: email,
            };

            if (!regex.email.test(userRegister.email)) {
                return alert('Dirección de correo electrónico no válida');
            }

            if (!regex.password.test(userRegister.password)) {
                return alert('La contraseña debe tener al menos 8 caracteres, una letra minúscula, una letra mayúscula y un número.')
            }

            const registerDataForm = await fetch(`${URL_BASE}/api/auth/local/register`, {
                headers: {
                    "Content-Type": "application/json",
                },
                method: 'POST',
                body: JSON.stringify(userRegister)
            })

            const response = await registerDataForm.json()


            if (registerDataForm.ok) {
                updateToken(response.jwt)
            } else {
                alert('Ocurrio un error intente ingresando con otros datos');   
            }
        } catch (error) {
            alert("Error al registrar. Por favor, intenta de nuevo.");
        }
    };

    const handleSubmit = async (e: any) => {
        try {
            e.preventDefault();

            const userLogin = {
                identifier: email,
                password: password,
            };
            const loginDataForm = await fetch(`${URL_BASE}/api/auth/local`, {
                headers: {
                    "Content-Type": "application/json",
                },
                method: 'POST',
                body: JSON.stringify(userLogin)
            })

            const response = await loginDataForm.json()
            if (loginDataForm.ok) {
                setUser(response)
                updateToken(response.jwt)
            } else {
                alert('Ocurrio un error intente ingresando con otros datos');   
            }

        } catch (error) {
            alert("Error al iniciar sesión. Por favor, intenta con otra cuenta.");

        }
    };

    return (
        <div>
            {loading ? <Loading /> : token != null || token != undefined ? <Profile user={user} handleSubmitUpdate={handleSubmitUpdate} handleEmailChange={handleEmailChange} handleUsernameChange={handleUsernameChange} /> : <PageCuenta handleSubmit={handleSubmit} handleEmailChange={handleEmailChange} handlePasswordChange={handlePasswordChange} handleUsernameChange={handleUsernameChange} handleSubmitRegister={handleSubmitRegister} />}
        </div>
    );
}

interface IForm {
    infoProfile: IInput[];
    billing: IInput[];
}

interface IInput {
    label: string;
    id: string;
    placeholder: string;
    inputType: 'text' | 'number' | 'email' | 'password' | 'date';
    defaultValue: string;
    handle?: (e: any) => void
}



const Profile = ({ user, handleSubmitUpdate, closeSession, handleEmailChange, handleUsernameChange }: any) => {
    
    const token = useTokenStore((state:any) => state.token);
    
    const [email, setEmail] = useState(user.email ? user.email : '')
    const [fullname, setFullName] = useState(user.nombre_completo ? user.nombre_completo : '')
    const [cellphone, setCellphone] = useState(user.celular ? user.celular : '')
    const [ci, setCi] = useState(user.ci ? user.ci : '')
    const [emailAlternative, setEmailAlternative] = useState(user.correo_respaldo ? user.correo_respaldo : '')
    const [cellphoneAlternative, setCellphoneAlternative] = useState(user.celular_respaldo ? user.celular_respaldo : '')
    const [dateBirth, setDateBrith] = useState(user.fecha_nac ? user.fecha_nac : '')
    const [razonSocial, setRazonSocial] = useState(user.razon_social ? user.razon_social : '')
    const [nit, setNit] = useState(user.nit ? user.nit : '')
    const [addressPrimary, setAddressPrimary] = useState(user.direccion_principal ? user.direccion_principal : '')

    const handleSubmitUpdateInfoPersonal = async (e: any) => {
        try {
            e.preventDefault()

            const userData = {
                email,
                nombre_completo: fullname,
                celular: cellphone,
                ci,
                correo_respaldo: emailAlternative,
                celular_respaldo: cellphoneAlternative,
                fecha_nac: dateBirth.lenght ?? new Date(),
                direccion_principal: addressPrimary
            };
            const responseUserProfile = await fetch(`https://www.dashboard.hauscenter.com.bo/api/users/${user.id}`, {
                method: 'PUT',
                headers: {
                    Authorization: `Bearer ${token}`, //${token}
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData)
            });

            const dataUserProfile = await responseUserProfile.json()


            if (responseUserProfile.ok) {

                alert("Información actualizada");
            } else {
                alert ('Ocurrio un error revise sus datos y vuelva a intentar.')
            }
        } catch (error) {
            alert("Error al actualizar la información. Por favor, intenta de nuevo.");
        }
    }

    const handleSubmitUpdateBilling = async (e: any) => {
        try {
            e.preventDefault()

            const billingData = {
                razon_social: razonSocial,
                nit
            };

            const responseUserProfile = await fetch(`https://www.dashboard.hauscenter.com.bo/api/users/${user.id}`, {
                method: 'PUT',
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(billingData)
            });

            const dataUserBilling = await responseUserProfile.json()


            if (responseUserProfile.ok) {
                alert("Información actualizada");
            }
        } catch (error) {
            alert("Error al actualizar la información. Por favor, intenta de nuevo.");
        }
    }

    const form: IForm = {
        infoProfile: [
            {
                label: 'NOMBRE COMPLETO',
                id: 'fullname',
                placeholder: 'Ingresa tu nombre completo',
                inputType: 'text',
                defaultValue: fullname,
                handle: (e: any) => setFullName(e.target.value),
            },
            {
                label: 'CORREO ELECTRONICO',
                id: 'email',
                placeholder: 'Ingresa tu email',
                inputType: 'email',
                handle: (e: any) => setEmail(e.target.value),
                defaultValue: email,
            },
            {
                label: 'NÚMERO DE TELEFONO',
                id: 'cellphone',
                placeholder: '777 77 777',
                handle: (e: any) => setCellphone(e.target.value),
                inputType: 'number',
                defaultValue: cellphone,
            },
            {
                label: 'CI',
                id: 'ci',
                handle: (e: any) => setCi(e.target.value),
                placeholder: '123456789',
                defaultValue: ci,
                inputType: 'text',
            },
            {
                label: 'CORREO RESPALDO (OPCIONAL)',
                id: 'emailAlternative',
                handle: (e: any) => setEmailAlternative(e.target.value),
                placeholder: 'mi-correo@gmail.com',
                defaultValue: emailAlternative,
                inputType: 'text',
            },
            {
                label: 'NÚMERO DE RESPALDO',
                placeholder: '766 55 444',
                id: 'cellphoneAlternative',
                handle: (e: any) => setCellphoneAlternative(e.target.value),
                inputType: 'text',
                defaultValue: cellphoneAlternative,
            },
            {
                label: 'FECHA DE NACIMIENTO',
                id: 'dateBrith',
                placeholder: '',
                handle: (e: any) => setDateBrith(e.target.value),
                inputType: 'date',
                defaultValue: dateBirth,
            },
        ],
        billing: [
            {
                label: 'RAZÓN SOCIAL O NOMBRE',
                id: 'razonSocial',
                handle: (e: any) => setRazonSocial(e.target.value),
                defaultValue: razonSocial,
                placeholder: 'Ingresa tu razon social',
                inputType: 'text',
            },
            {
                label: 'NIT / CI',
                id: 'nit',
                handle: (e: any) => setNit(e.target.value),
                defaultValue: nit,
                placeholder: 'Ingresa tu NIT / CI',
                inputType: 'text',
            },
        ],
    }

    return (
        <div>
            <Tabs defaultValue="infoPersonal" className="w-full p-8">
                <TabsList>
                    <TabsTrigger value="infoPersonal">Información personal</TabsTrigger>
                    <TabsTrigger value="billing">Datos de facturación</TabsTrigger>
                    <TabsTrigger value="order">Pedidos</TabsTrigger>
                    <TabsTrigger value="voucher">Cupones</TabsTrigger>
                </TabsList>
                <TabsContent value="infoPersonal">
                    <form onSubmit={handleSubmitUpdateInfoPersonal} className="space-y-6" method="post">
                        <div className="grid grid-cols-5 gap-6 mt-8">
                            {
                                form.infoProfile.map((element: IInput) => (
                                    <div key={element.id} className="col-span-1">
                                        <Label htmlFor={element.id}>{element.label}</Label>
                                        <Input
                                            type={element.inputType}
                                            onChange={element.handle}
                                            className="border-gray-800 border-opacity-40"
                                            id={element.id}
                                            placeholder={element.placeholder}
                                            defaultValue={element.defaultValue}
                                        />
                                    </div>
                                ))
                            }
                            <div className="col-span-3">
                                <Label htmlFor='address'>Direccion de entrega</Label>
                                <Input
                                    type={'text'}
                                    onChange={(e:any) => setAddressPrimary(e.target.value)}
                                    className="border-gray-800 border-opacity-40"
                                    id='address'
                                    placeholder='Ingresa tu direccion de entrega'
                                    defaultValue={addressPrimary}
                                />
                            </div>
                        </div>
                        <p className=" text-right"><Button onClick={handleSubmitUpdateInfoPersonal} type={'button'}>Actualizar informacion</Button></p>
                    </form>
                </TabsContent>
                <TabsContent value="billing">
                    <form onSubmit={handleSubmitUpdateBilling} className="space-y-6" method="post">
                        <div className="grid grid-cols-5 gap-6 mt-8">
                            {
                                form.billing.map((element: IInput) => (
                                    <div key={element.id} className="col-span-1">
                                        <Label htmlFor={element.id}>{element.label}</Label>
                                        <Input
                                            type={element.inputType}
                                            onChange={element.handle}
                                            className="border-gray-800 border-opacity-40"
                                            id={element.id}
                                            placeholder={element.placeholder}
                                            defaultValue={element.defaultValue}
                                        />
                                    </div>
                                ))
                            }
                        </div>
                        <p className=" text-right"><Button onClick={handleSubmitUpdateBilling} type={'button'}>Actualizar informacion</Button></p>
                    </form>
                </TabsContent>
                <TabsContent value="order">
                    <div className="mt-8">
                        <p className="text-center">Sin orden realizadas.</p>
                    </div>
                </TabsContent>
                <TabsContent value="voucher">
                    <div className="mt-8">
                        <p className="text-center">Sin cupones asignados.</p>
                    </div>
                </TabsContent>
            </Tabs>

            {/* Formulario de actualización de perfil */}
            {/* <form onSubmit={handleSubmitUpdate} className="grid grid-cols-4 gap-4 my-32">
                <div className="col-span-1">
                    <div className="flex flex-col">
                        <span className="text-xl font-extrabold text-sky-900 uppercase ">Usuario</span>
                        <input type="text" onChange={handleUsernameChange} className="h-[50px] rounded-full border-solid border-2 border-sky-900 focus:outline-none focus:border-sky-900 focus:ring-0 focus:ring-sky-900 placeholder:text-3xl text-xl px-4" defaultValue={user.username} required />
                    </div>
                </div>

                <div className="col-span-1">
                    <div className="flex flex-col">
                        <span className="text-xl font-extrabold text-sky-900 uppercase ">Email</span>
                        <input type="text" onChange={handleEmailChange} className="h-[50px] rounded-full border-solid border-2 border-sky-900 focus:outline-none focus:border-sky-900 focus:ring-0 focus:ring-sky-900 placeholder:text-3xl text-xl px-4" defaultValue={user.email} required />
                    </div>
                </div>

                <div className="col-span-4">
                    <div className="flex justify-end gap-4">
                        <button type="submit" className="text-xl font-extrabold text-white bg-sky-900 rounded-full py-2 px-8 uppercase mt-4">Actualizar</button>
                        <button type="button" onClick={closeSession} className="text-xl font-extrabold text-white bg-sky-900 rounded-full py-2 px-8 uppercase mt-4">Cerrar sesión</button>
                    </div>
                </div>
            </form> */}
        </div>
    );
};

const PageCuenta = ({ handleSubmit, handleEmailChange, handlePasswordChange, handleUsernameChange, handleSubmitRegister }: any) => {
    return (
        <div className="grid grid-cols-2">
            <div className="col-span-2">
                <p className="font-extrabold text-6xl text-primary text-center my-12">MI CUENTA</p>
            </div>

            <div className="col-span-1 m-10 flex justify-center border-r-2 border-solid border-sky-900">
                <form onSubmit={handleSubmit} className="w-2/3" autoComplete="off">
                    <Card>
                        <CardHeader>
                            <CardTitle>Iniciar sesión</CardTitle>
                            <CardDescription>Ingrese su correo electrónico y contraseña para iniciar sesión</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    onChange={handleEmailChange}
                                    className="border-gray-800 border-opacity-40"
                                    id="email"
                                    placeholder="Ingresa tu email"
                                />
                            </div>
                            <div className="">
                                <Label htmlFor="password">Contraseña</Label>
                                <Input
                                    onChange={handlePasswordChange}
                                    className="border-gray-800 border-opacity-40"
                                    type="password"
                                    id="password"
                                    placeholder="Ingresa tu contraseña"
                                />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button type={'button'} onClick={handleSubmit} className="w-full">Iniciar sesión</Button>
                        </CardFooter>
                    </Card>

                </form>
            </div>

            <div className="col-span-1 p-10 flex justify-start">
                {/* Formulario de registro */}
                <form onSubmit={handleSubmitRegister} className="w-2/3" method="post" autoComplete="off">
                    <Card>
                        <CardHeader>
                            <CardTitle>Registrate</CardTitle>
                            <CardDescription>Ingrese su correo electrónico a continuación para crear su cuenta</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    onChange={handleEmailChange}
                                    className="border-gray-800 border-opacity-40"
                                    id="email"
                                    placeholder="Ingresa tu email"
                                />
                            </div>
                            <div className="">
                                <Label htmlFor="password">Contraseña</Label>
                                <Input
                                    type="password"
                                    onChange={handlePasswordChange}
                                    className="border-gray-800 border-opacity-40"
                                    id="email"
                                    placeholder="Ingresa tu contraseña"
                                />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button type={'button'} onClick={handleSubmitRegister} className="w-full">Crear cuenta</Button>
                        </CardFooter>
                    </Card>
                </form>
            </div>
        </div>
    );
};

export default MyAccount