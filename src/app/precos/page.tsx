import Link from "next/link";
import "@/app/styles/scss/precos.scss";
import { memo } from "react";

const Precos = () => {
	return (
		<>
			<section className="content-center precos">
				<h1>Escolha o <span>plano contábil</span> ideal<br /> para sua empresa</h1>
				<Link href="/" className="video">
					<span>
						<svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 99" width="160" height="99">
							<title>Ellipse 1161</title>
							<defs>
								<image  width="99" height="99" id="img1" href="data:image/png;base64,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"/>
								<image  width="69" height="68" id="img2" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEUAAABECAMAAADgDwi+AAAAAXNSR0IB2cksfwAAALdQTFRFAAAA59/P6uTU6eXV6uXX6+bW6+XW7ObX6+bX6eLW59/X39/P6+bY6+bX6ubX5+PT6uXW5OTU6+bY5+PX6+bY6+XX79/P7OXX6+TW5+fX6+XW6ebW6OTW6+PT6uTU6+bW6eXW6uTV6+bY6eXV79/f6+bW6+bW6uTW6ufU5+fX6ubW6+XV6uTX79/X6+PX7OTW6eXX6uTa6+fX6+XX7ObY7+Ta7+fX6ubW6ebW7ObW6uXX6ura6ufXyfnCUAAAAD10Uk5TACBggJ+vz9+/UCAQ7//fQM8wr0CPfxCfcCDvoHBAMHCwkM+wEODPkGBAwIBgIECQgDBAgO8wIKCwUNAwYJGCczEAAAJnSURBVHiczdjvT9NAGAfw5xmu6yhzkhDiFITIcCYsGGJCYvz/4wsTYrI5Egii8rs4wcHaraybvfWH7a13vd7xwu+brd31k95z1+sBAjvox/sCo4mGFqcl47xhF3TqN7SKhX4epTp8kv6DbfwRVQpakXGH5IL7sYhSRZdtTC+Zu8lSjNID3yCxNarSlFKeY5U7eVWxy1GWhiIGiX7NUoR6E6b0K10xihllTWawaKYoORGAoZOiPMuJAMxfzSjihf2XqMSh8pzxhPAzshNK7V4GgcqtFVeeTqQUeBjEFLn+kPTHkVLrS96Kd71uhsrLniwCYLmBIllaP5WR6SvyVSGpnvqK7AD5IcPkKau3KgiA1iWKSm1JvPqiaoe87vQ85dXMWpw3ZRNh7beq0h8jrHez2/GzdIzw+jq7HT/LRwgLQu8OXrCH9avsZlm5Q6WHKEgZVWcuiftfKepTlyiPUd27xxjpyjnC5qWqUjtA0DmbOLGQJ6BxrqpYLsLbM1VlZR9BvbxklVIuzGqHrLtbP9WUtTZRVOfdemv6VlPrEtmXEWX7WEVZ2Q/2DCVNHnHIfnCqNH/IK15tw72UfGWWjyBS5CvjDVCkwLtvcsjGF4gp9ROpAjvBVjt8pe0cSrzcnDetpCI1Tpt7QCnw/iAvYkSrZKwfeZmgspSSk4khyb8bc2xZG4N27Cg5MjsdwQF3tj/HD6nx3cWOCPLixkwcz8yS5mHm7Thbe9SZ2blWr7a5TmNyYtLn0mbsrst20gzm/1+aC1/TCEun+8JVvIVj47LWigvaxeJpym3wlWk+2vOfyOcH9/sFr91fz0qkg/yR5PcAAAAASUVORK5CYII="/>
								<image  width="20" height="21" id="img3" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAVCAMAAABxCz6aAAAAAXNSR0IB2cksfwAAAGBQTFRFAAAAICAgICggICskIiskIiskICskICgoISojICkkIiokICojICkjISskIiojICsjIikkISsjIDAgIyokJCwkIiwkIiskIiwkIDAgIiojIislIiwkIDAoISslIiskIyok2ufL5QAAACB0Uk5TABAgcO//jyDfcIBgUL+fX3DfIMBA73CAEJDfryCg0LC3qdcjAAAAiUlEQVR4nG3OzQrCMBAE4JmuWH9K6UGKh77/sxUNFaGhBzVpaUSbbHLZ2Q82DAHSe0SPEBJ8uwjLdRVOWzy9QhCxGhfejRqBg3UagePoNAZWCCmfGoFPDs853GewosbaDynWNGnPSgyS8g1vIfyxKdh/I9tHCBff/054Le7LaKdh8zXRkbQmqjAD8Y0tRTxTZiEAAAAASUVORK5CYII="/>
							</defs>
							<use id="Background" href="#img1" x="0" y="0"/>
							<use id="Camada 1" href="#img2" x="75" y="15"/>
							<use id="Camada 2" href="#img3" x="100" y="39"/>
						</svg>
					</span>
					<span className="text">Entenda os planos</span>
				</Link>
				<div className="box">
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-end">

						{/* plano PJ */}
						<div className="flex flex-col available">
							<div className="area">
								<div className="stripe">
									<span>Mais contratado</span>
								</div>
								<div className="content">
									<h3>Plano PJ</h3>
									<p>de <span className="overline">R$240</span> por a partir de</p>
									<p><span className="monetary">R$</span> <span className="value">199</span> <span className="recurrence"> / mensal</span></p>
									<p>Faturamento Mensal: Ideal até 50 mil*. <br />Notas fiscais: até 10 notas/mês</p>
									<p></p>

									<ul>
										<li>
											<span>
												<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10.6108" cy="10.2539" r="9.8125" fill="#2BBE41"/><path d="M9.46395 12.886L6.9454 10.3675L7.42887 9.88399L9.46395 11.9191L13.7814 7.60156L14.2649 8.08503L9.46395 12.886Z" fill="#F3F5F7"/></svg>
											</span>
											Abertura Gratuita
										</li>
										<li>
											<span>
												<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10.6108" cy="10.2539" r="9.8125" fill="#2BBE41"/><path d="M9.46395 12.886L6.9454 10.3675L7.42887 9.88399L9.46395 11.9191L13.7814 7.60156L14.2649 8.08503L9.46395 12.886Z" fill="#F3F5F7"/></svg>
											</span>
											Certificado digital e-CNPJ
										</li>
										<li>
											<span>
												<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10.6108" cy="10.2539" r="9.8125" fill="#2BBE41"/><path d="M9.46395 12.886L6.9454 10.3675L7.42887 9.88399L9.46395 11.9191L13.7814 7.60156L14.2649 8.08503L9.46395 12.886Z" fill="#F3F5F7"/></svg>
											</span>
											Plataforma com emissor e gestão financeira
										</li>
										<li>
											<span>
												<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10.6108" cy="10.2539" r="9.8125" fill="#2BBE41"/><path d="M9.46395 12.886L6.9454 10.3675L7.42887 9.88399L9.46395 11.9191L13.7814 7.60156L14.2649 8.08503L9.46395 12.886Z" fill="#F3F5F7"/></svg>
											</span>
											Contabilidade, pró-labore e entrega de as obrigações com o governo
										</li>
										<li>
											<span>
												<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10.6108" cy="10.2539" r="9.8125" fill="#2BBE41"/><path d="M9.46395 12.886L6.9454 10.3675L7.42887 9.88399L9.46395 11.9191L13.7814 7.60156L14.2649 8.08503L9.46395 12.886Z" fill="#F3F5F7"/></svg>
											</span>
											Atendimento whatsapp, e-mail, telefone e video
										</li>
									</ul>
									<Link href="/" className="cta">Comece grátis</Link>
								</div>
							</div>
						</div>
						
						{/* plano PJ Plus */}
						<div className="flex flex-col">
							<div className="area">
								<div className="content">
									<h3>Plano PJ Plus</h3>
									<p>de <span className="overline">R$320</span> por a partir de</p>
									<p><span className="monetary">R$</span> <span className="value">249</span> <span className="recurrence"> / mensal</span></p>
									<p>Faturamento Mensal: Ideal até 100 mil* <br />Notas fiscais: até 50 notas/mês</p>

									<ul>
										<li>
											<span>
												<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10.6108" cy="10.2539" r="9.8125" fill="#2BBE41"/><path d="M9.46395 12.886L6.9454 10.3675L7.42887 9.88399L9.46395 11.9191L13.7814 7.60156L14.2649 8.08503L9.46395 12.886Z" fill="#F3F5F7"/></svg>
											</span>
											Tudo que contém o Plano PJ
										</li>
										<li>
											<span>
												<svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.87689 0.941406L5.87689 10.9414" stroke="#2BBE41" strokeWidth="1.5"/><path d="M10.8769 5.94141L0.876892 5.94141" stroke="#2BBE41" strokeWidth="1.5"/></svg>
											</span>
											Entrega do IRPF de 1 sócio(a)
										</li>
										<li>
											<span>
												<svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.87689 0.941406L5.87689 10.9414" stroke="#2BBE41" strokeWidth="1.5"/><path d="M10.8769 5.94141L0.876892 5.94141" stroke="#2BBE41" strokeWidth="1.5"/></svg>
											</span>
											Relatórios contábeis mensais
										</li>
										<li>
											<span>
												<svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.87689 0.941406L5.87689 10.9414" stroke="#2BBE41" strokeWidth="1.5"/><path d="M10.8769 5.94141L0.876892 5.94141" stroke="#2BBE41" strokeWidth="1.5"/></svg>
											</span>
											Multibenefícios (i)
										</li>
									</ul>
									<Link href="/" className="cta type-2">Comece grátis</Link>
								</div>
							</div>
						</div>
						
						{/* plano PJ VIP */}
						<div className="flex flex-col">
							<div className="area">
								<div className="content">
									<h3>Plano PJ VIP</h3>
									<p>de <span className="overline">R$500</span> por a partir de</p>
									<p><span className="monetary">R$</span> <span className="value">329</span> <span className="recurrence"> / mensal</span></p>
									<p>Faturamento Mensal: Ideal até 100 mil* <br />Notas fiscais: até 100 notas/mês</p>

									<ul>
										<li>
											<span>
												<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10.6108" cy="10.2539" r="9.8125" fill="#2BBE41"/><path d="M9.46395 12.886L6.9454 10.3675L7.42887 9.88399L9.46395 11.9191L13.7814 7.60156L14.2649 8.08503L9.46395 12.886Z" fill="#F3F5F7"/></svg>
											</span>
											Tudo que contém o Plano PJ e Plus
										</li>
										<li>
											<span>
												<svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.87689 0.941406L5.87689 10.9414" stroke="#2BBE41" strokeWidth="1.5"/><path d="M10.8769 5.94141L0.876892 5.94141" stroke="#2BBE41" strokeWidth="1.5"/></svg>
											</span>
											Gestão financeira completa (i)
										</li>
										<li>
											<span>
												<svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.87689 0.941406L5.87689 10.9414" stroke="#2BBE41" strokeWidth="1.5"/><path d="M10.8769 5.94141L0.876892 5.94141" stroke="#2BBE41" strokeWidth="1.5"/></svg>
											</span>
											Pró-labore até 2 sócios(as) grátis
										</li>
										<li>
											<span>
												<svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.87689 0.941406L5.87689 10.9414" stroke="#2BBE41" strokeWidth="1.5"/><path d="M10.8769 5.94141L0.876892 5.94141" stroke="#2BBE41" strokeWidth="1.5"/></svg>
											</span>
											Pagamentos de contas
										</li>
										<li>
											<span>
												<svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.87689 0.941406L5.87689 10.9414" stroke="#2BBE41" strokeWidth="1.5"/><path d="M10.8769 5.94141L0.876892 5.94141" stroke="#2BBE41" strokeWidth="1.5"/></svg>
											</span>
											Distribuição de lucros
										</li>
									</ul>
									<Link href="/" className="cta type-2">Comece grátis</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default memo(Precos)
