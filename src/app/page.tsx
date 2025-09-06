import Link from "next/link";
import "@/app/styles/scss/page.scss";
import { memo } from "react";

const Home = () => {
	return (
		<>
			<section className="content-center page">
				<h1>Por que a <span>Contabilidade.com</span> <br />é a melhor opção?</h1>
				<div className="box">
					<div className="resources">

						{/* beneficios */}
						<div className="row">
							<div className="grid grid-cols-4">
								<span className="col-span-2 flex flex-col info">
									<span>Benefícios inclusos no seu pacote</span>
								</span>
								<span className="flex flex-col inclusive">
									<span>
										<svg width="33" height="40" viewBox="0 0 33 40" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M23.2089 30.0608C22.1744 30.3396 21.0767 30.46 19.9431 30.3963C14.6785 30.1004 10.4329 25.7821 10.197 20.4815C9.93025 14.5116 14.6614 9.58773 20.5347 9.58773C21.4324 9.58773 22.3027 9.703 23.1337 9.91977C24.0655 10.1624 24.97 9.43805 24.97 8.46945V1.78214C24.97 1.11117 24.5015 0.533108 23.8484 0.398914C22.4053 0.10472 20.9075 -0.0329139 19.3703 0.00665602C8.72823 0.275043 0.117457 9.06816 0.00118739 19.7796C-0.118502 30.9262 8.82569 39.9998 19.8764 39.9998C21.2169 39.9998 22.5267 39.8656 23.7937 39.611C24.4793 39.4733 24.9683 38.8591 24.9683 38.1555V31.4011C24.9683 30.4772 24.0946 29.8217 23.2072 30.0608H23.2089Z" fill="#232425"/>
											<path d="M31.2632 14.243C30.0509 13.0232 28.0846 13.0232 26.8723 14.243L23.8784 17.2554L23.0696 16.4417C21.8573 15.2219 19.891 15.2219 18.6787 16.4417C17.4665 17.6615 17.4665 19.64 18.6787 20.8597L22.8644 25.0713C23.4287 25.6391 24.3435 25.6391 24.9077 25.0713L26.0807 23.8911C26.1388 23.8326 26.1901 23.7724 26.2431 23.7105L31.2615 18.661C32.4738 17.4412 32.4738 15.4627 31.2615 14.243H31.2632Z" fill="#2BC041"/>
										</svg>
									</span>
								</span>
								<span className="flex flex-col price">
									<span>Média de <br />Mercado</span>
								</span>
							</div>
						</div>
						
						{/* beneficios */}
						<div className="row">
							<div className="grid grid-cols-4 item-s">
								<span className="col-span-2 flex flex-col info">
									<span>Certificado Digital</span>
								</span>
								<span className="flex flex-col inclusive">
									<span>incluso</span>
								</span>
								<span className="flex flex-col price">
									<span>R$ 200/ano</span>
								</span>
							</div>
						</div>
						
						{/* beneficios */}
						<div className="row">
							<div className="grid grid-cols-4 item-s">
								<span className="col-span-2 flex flex-col info">
									<span>Abertura de empresa, 100% digital</span>
								</span>
								<span className="flex flex-col inclusive">
									<span>incluso</span>
								</span>
								<span className="flex flex-col price">
									<span>R$ 700/ano</span>
								</span>
							</div>
						</div>

						{/* beneficios */}
						<div className="row">
							<div className="grid grid-cols-4 item-s">
								<span className="col-span-2 flex flex-col info">
									<span>Contabilidade Consultiva</span>
								</span>
								<span className="flex flex-col inclusive">
									<span>incluso</span>
								</span>
								<span className="flex flex-col price">
									<span>R$ 5.880,00/mês</span>
								</span>
							</div>
						</div>

						{/* beneficios */}
						<div className="row">
							<div className="grid grid-cols-4 item-s">
								<span className="col-span-2 flex flex-col info">
									<span>Conta PJ gratuita, digital e integrada à sua contabilidade</span>
								</span>
								<span className="flex flex-col inclusive">
									<span>incluso</span>
								</span>
								<span className="flex flex-col price">
									<span>R$ 756,00/ano</span>
								</span>
							</div>
						</div>
						
						{/* beneficios */}
						<div className="row">
							<div className="grid grid-cols-4 item-s">
								<span className="col-span-2 flex flex-col info">
									<span>Atendimento personalizado por telefone e WhatsApp a partir do plano de entrada</span>
								</span>
								<span className="flex flex-col inclusive">
									<span>incluso</span>
								</span>
								<span className="flex flex-col price">
									<span>R$1.920/ano</span>
								</span>
							</div>
						</div>
					</div>
				</div>
				<h2>
					<svg width="62" height="63" viewBox="0 0 62 63" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M31 57.6335C45.2678 57.6335 56.8334 46.0679 56.8334 31.8001C56.8334 17.5324 45.2678 5.9668 31 5.9668C16.7323 5.9668 5.16669 17.5324 5.16669 31.8001C5.16669 46.0679 16.7323 57.6335 31 57.6335Z" stroke="#1FB841" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
						<path d="M38.75 22.7578C36.9804 20.9882 33.8649 19.7586 31 19.6811M31 19.6811C27.59 19.5881 24.5417 21.1303 24.5417 25.3411C24.5417 33.0911 38.75 29.2161 38.75 36.9661C38.75 41.3862 34.968 43.285 31 43.1429M31 19.6811V15.0078M23.25 39.5495C24.9137 41.7711 28.0111 43.037 31 43.1429M31 43.1429V48.5911" stroke="#1FB841" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
					</svg>
					<span>Uma economia média de <strong>R$ 9.456/ano</strong></span>
				</h2>
				<Link href="/precos" className="cta">Abrir empresa grátis</Link>
			</section>
		</>
	)
}

export default memo(Home)
