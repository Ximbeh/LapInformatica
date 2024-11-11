"use client"

import { useState } from "react";
import { useRouter } from 'next/navigation';
import { ButtonContainer, FullButton, HalfButton } from "@/components/buttons";
import InputComponent from "@/components/Input";
import Logo from "@/components/logo";
import Image from "next/image";

export default function NovoPedido() {
    const [page, setPage] = useState(1);
    const router = useRouter();

    const [formData, setFormData] = useState({
        conteudoPedido: '',
        pesoPedido: '',
        cepOrigem: '',
        logradouroOrigem: '',
        numeroOrigem: '',
        complementoOrigem: '',
        cepDestino: '',
        logradouroDestino: '',
        numeroDestino: '',
        complementoDestino: ''
    });
   

    const [errors, setErrors] = useState({});
    const handleInputChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
        if (errors[field]) {
            setErrors({ ...errors, [field]: '' });
        }
    };

    const validatePage = () => {
        const newErrors = {};
        if (page === 1) {
            if (!formData.conteudoPedido) newErrors.conteudoPedido = "Conteúdo do pedido é obrigatório";
            if (!formData.pesoPedido) newErrors.pesoPedido = "Peso do pedido é obrigatório";
        } else if (page === 2) {
            if (!formData.cepOrigem) newErrors.cepOrigem = "CEP de origem é obrigatório";
            if (!formData.logradouroOrigem) newErrors.logradouroOrigem = "Logradouro de origem é obrigatório";
            if (!formData.numeroOrigem) newErrors.numeroOrigem = "Número de origem é obrigatório";
        } else if (page === 3) {
            if (!formData.cepDestino) newErrors.cepDestino = "CEP de destino é obrigatório";
            if (!formData.logradouroDestino) newErrors.logradouroDestino = "Logradouro de destino é obrigatório";
            if (!formData.numeroDestino) newErrors.numeroDestino = "Número de destino é obrigatório";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleNextPage = () => {
        if (validatePage()) {
            setPage(page + 1);
        }
    };

    const handlePreviousPage = () => setPage(page - 1);
    const handleCancel = () => {
        resetForm();
        router.push("dashboardCliente");
    };
    const handleAcompanhar = () => router.push("/acompanhar");

    const resetForm = () => {
        setFormData({
            conteudoPedido: '',
            pesoPedido: '',
            cepOrigem: '',
            logradouroOrigem: '',
            numeroOrigem: '',
            complementoOrigem: '',
            cepDestino: '',
            logradouroDestino: '',
            numeroDestino: '',
            complementoDestino: ''
        });
        setErrors({});
    };
    
    return (
        <div className="flex flex-col items-center justify-center h-screen relative">
            <Logo />
            
            {/* Página 1: Novo Pedido */}
            {page === 1 && (
                 <div>
                 <h2 className="text-lapBlue text-2xl mb-6 text-center">Novo pedido</h2>
                 <div className="flex flex-col gap-4">
                     <InputComponent
                         label="Conteúdo do pedido"
                         placeholder="Uma breve descrição"
                         value={formData.conteudoPedido}
                         onChange={(e) => handleInputChange('conteudoPedido', e.target.value)}
                         error={!!errors.conteudoPedido}
                            errorMessage={errors.conteudoPedido}
                     />
                     <InputComponent
                         label="Peso do pedido"
                         placeholder="Ex: 8.4kg"
                         value={formData.pesoPedido}
                         onChange={(e) => handleInputChange('pesoPedido', e.target.value)}
                         error={!!errors.pesoPedido}
                         errorMessage={errors.pesoPedido}
                     />
                     <ButtonContainer>
                         <HalfButton darker={true} text="Cancelar" onClick={handleCancel} />
                         <HalfButton darker={false} text="Continuar" onClick={handleNextPage} />
                     </ButtonContainer>
                 </div>
             </div>
            )}

            {/* Página 2: Origem */}
            {page === 2 && (
                <div>
                <h2 className="text-lapBlue text-2xl text-center">Novo pedido</h2>
                <h1 className="text-lapDarkBlue text-4xl mb-2 text-center">Origem</h1>
                <div className="flex flex-col gap-4">
                    <InputComponent
                        label="CEP"
                        placeholder="0000-000"
                        value={formData.cepOrigem}
                        onChange={(e) => handleInputChange('cepOrigem', e.target.value)}
                        error={!!errors.cepOrigem}
                        errorMessage={errors.cepOrigem}
                    />
                    <InputComponent
                        label="Logradouro"
                        placeholder="Ex: Rua Fulano Siclano"
                        value={formData.logradouroOrigem}
                        onChange={(e) => handleInputChange('logradouroOrigem', e.target.value)}
                        error={!!errors.logradouroOrigem}
                        errorMessage={errors.logradouroOrigem}
                    />
                    <InputComponent
                        label="Número"
                        placeholder="0000"
                        value={formData.numeroOrigem}
                        onChange={(e) => handleInputChange('numeroOrigem', e.target.value)}
                        error={!!errors.numeroOrigem}
                        errorMessage={errors.numeroOrigem}
                    />
                    <InputComponent
                        label="Complemento"
                        placeholder="Casa, Apto, Etc..."
                        value={formData.complementoOrigem}
                        onChange={(e) => handleInputChange('complementoOrigem', e.target.value)}
                        error={!!errors.complementoOrigem}
                        errorMessage={errors.complementoOrigem}
                    />
                    <ButtonContainer>
                        <HalfButton darker={true} text="Voltar" onClick={handlePreviousPage} />
                        <HalfButton darker={false} text="Continuar" onClick={handleNextPage} />
                    </ButtonContainer>
                </div>
            </div>
            )}

            {/* Página 3: Destino */}
            {page === 3 && (
                <div>
                <h2 className="text-lapBlue text-2xl text-center">Novo pedido</h2>
                <h1 className="text-lapDarkBlue text-4xl mb-2 text-center">Destino</h1>
                <div className="flex flex-col gap-4">
                    <InputComponent
                        label="CEP"
                        placeholder="0000-000"
                        value={formData.cepDestino}
                        onChange={(e) => handleInputChange('cepDestino', e.target.value)}
                        error={!!errors.cepDestino}
                        errorMessage={errors.cepDestino}
                    />
                    <InputComponent
                        label="Logradouro"
                        placeholder="Ex: Rua Fulano Siclano"
                        value={formData.logradouroDestino}
                        onChange={(e) => handleInputChange('logradouroDestino', e.target.value)}
                        error={!!errors.logradouroDestino}
                        errorMessage={errors.logradouroDestino}
                    />
                    <InputComponent
                        label="Número"
                        placeholder="0000"
                        value={formData.numeroDestino}
                        onChange={(e) => handleInputChange('numeroDestino', e.target.value)}
                        error={!!errors.numeroDestino}
                        errorMessage={errors.numeroDestino}
                    />
                    <InputComponent
                        label="Complemento"
                        placeholder="Casa, Apto, Etc..."
                        value={formData.complementoDestino}
                        onChange={(e) => handleInputChange('complementoDestino', e.target.value)}
                        error={!!errors.complementoDestino}
                        errorMessage={errors.complementoDestino}
                    />
                    <ButtonContainer>
                        <HalfButton darker={true} text="Voltar" onClick={handlePreviousPage} />
                        <HalfButton darker={false} text="Conferir" onClick={handleNextPage} />
                    </ButtonContainer>
                </div>
            </div>
            )}

            {/* Página 4: Concluir */}
            {page === 4 && (
                <div className="w-full">
                <h2 className="text-lapBlue text-2xl text-center">Novo pedido</h2>
                <h1 className="text-lapDarkBlue text-4xl mb-4 text-center">Concluído</h1>
                <div className="flex flex-col gap-4">
                    <div>
                        <h4 className="text-lapBlue">Conteúdo:</h4>
                        <p className="text-gray-400 text-xs">{formData.conteudoPedido}</p>
                    </div>
                    <div>
                        <h4 className="text-lapBlue">Origem:</h4>
                        <p className="text-gray-400 text-xs">
                            {formData.logradouroOrigem}, {formData.numeroOrigem}, {formData.complementoOrigem}, {formData.cepOrigem}
                        </p>
                    </div>
                    <div>
                        <h4 className="text-lapBlue">Destino:</h4>
                        <p className="text-gray-400 text-xs">
                            {formData.logradouroDestino}, {formData.numeroDestino}, {formData.complementoDestino}, {formData.cepDestino}
                        </p>
                    </div>
                    <div>
                        <h4 className="text-lapBlue">Peso:</h4>
                        <p className="text-gray-400 text-xs">{formData.pesoPedido}</p>
                    </div>
                    <ButtonContainer>
                        <HalfButton darker={true} text="Voltar" onClick={handlePreviousPage} />
                        <HalfButton darker={false} text="Confirmar" onClick={handleNextPage} />
                    </ButtonContainer>
                </div>
            </div>
            )}

            {/* Página Final: Concluído */}
            {page === 5 && (
                <div>
                    <h2 className="text-lapBlue text-2xl text-center">Novo pedido</h2>
                    <h1 className="text-lapDarkBlue text-4xl mb-4 text-center">Concluído</h1>
                    <div className="flex flex-col gap-4">
                        <div>
                            <h4 className="text-lapBlue">Seu pedido foi enviado!</h4>
                            <p className="text-gray-400 text-xs">Um entregador irá aceitar, receber e enviar seu pedido em breve, fique atento as notificações e acompanhe o progresso.</p>
                        </div>
                        <ButtonContainer>
                            <HalfButton darker={true} text="Menu" onClick={handleCancel} />
                            <HalfButton darker={false} text="Novo Pedido" onClick={() => {
                                resetForm();
                                setPage(1);
                            }} />
                        </ButtonContainer>
                        <FullButton text="Acompanhar" onClick={handleAcompanhar} />
                    </div>
                </div>
            )}
        </div>
    );
}
