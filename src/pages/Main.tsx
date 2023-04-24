import ImageIntroduction from "../components/ImageIntroduction";
import ImageViewer from "../components/ImageViewer";
import ProgressBar from "../components/ProgressBar";

import RatingStar from "../components/RatingStar";
import SmallRatingStar from "../components/SmallRatingStar";
import { IntroductionData, apple_pay, box_1, clockImg, germanImg, master_card, secure_payment, truck, visa_card } from "../consts";

const Main = () => {
    return (
        <div className="container mx-auto px-12 max-sm:px-6 py-6">
            <p>Accueil / Kit Cric Électrique Pour Voiture - LeBigDeal</p>
            <div className="px-12 max-xl:px-0 py-12 flex gap-24 max-xl:flex-col">
                <ImageViewer />
                <div>
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-4">
                            <p className="font-black text-4xl">
                                KIT CRIC ÉLECTRIQUE POUR VOITURE - LEBIGDEAL
                            </p>
                            <RatingStar />
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className="flex gap-4 text-3xl items-center font-bold">
                                <p className="bg-[#ffff00] py-2 px-4 rounded-lg">9,99€</p>
                                <p className="line-through">29,99€</p>
                            </div>
                            <img src={germanImg} className="h-8 w-64" alt="" />
                            <img src={clockImg} className="h-8 w-64" alt="" />
                        </div>
                    </div>
                    <div className="py-8">
                        <p className="border-b border-gray-200"></p>
                    </div>
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-4">
                            <div className="flex gap-2 items-center">
                                <img src={truck} className="w-8 h-8" alt="" />
                                <p className="text-lg">Livraison 24h-48h</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <img src={box_1} className="w-8 h-8" alt="" />
                                <p className="text-lg">Livraison Gratuite Belgique 🇧🇪</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <img src={secure_payment} className="w-8 h-8" alt="" />
                                <p className="text-lg pr-2">Paiement Sécurisé</p>
                                <img src={apple_pay} className="w-10 h-10" alt="" />
                                <img src={master_card} className="w-10 h-10" alt="" />
                                <img src={visa_card} className="w-10 h-10" alt="" />
                            </div>
                        </div>
                        <button className="w-full bg-black text-white py-4 text-base font-bold ">
                            ACHETER MAINTENENT
                        </button>
                    </div>
                    <p className="pt-4 text-gray-200 text-sm">*Participez à notre concours pour avoir une chance de gagner un prix en cliquant sur le bouton ci-dessus.</p>
                </div>
            </div>
            <div className="container mx-auto py-12  w-[80%] max-sm:w-full ">
                <p className="text-5xl max-sm:text-4xl text-center font-black">LE CRIC DE VOITURE QUE TOUS LES PROPRIÉTAIRES DE VOITURES VEULENT !
                </p>
                <div className="px-12 max-sm:px-0 flex flex-col gap-12 py-12 items-center justify-center">
                    {IntroductionData.map((item: any, index: any) => {
                        return <ImageIntroduction key={`intro-${index}`} image={item.image} title={item.title} />
                    })}
                </div>
                <div className="px-12 max-sm:px-0 flex flex-col gap-4 ">
                    <p className="font-bold text-lg ">Détail du Produit :</p>
                    <ul className="flex flex-col gap-4">
                        <li>Matériaux: métal, acier, plastique</li>
                        <li>Poids maximum supporté : 5 tonnes</li>
                        <li>Hauteur de la levée : 15-43CM</li>
                        <li>Taille de la boîte : 30 X 17CM</li>
                        <li>Poids du kit : 5.69kg</li>
                    </ul>
                </div>
                <p className="pt-36 py-12 font-bold text-2xl">Avis des clients</p>
                <div className="px-12 max-sm:px-6 border-y py-12 border-gray-300 flex items-center max-xl:flex-col gap-8">
                    <div className="flex-[1_1_30%] flex flex-col gap-2">
                        <div className="flex items-center justify-center">
                            <p className="text-6xl font-black text-[#f3c621]">4.8</p>
                            <p className="text-xl font-semibold">/5</p>
                        </div>
                        <div>
                            <SmallRatingStar size="md" />
                        </div>
                        <p className="max-xl:text-center">De 12 avis</p>
                    </div>
                    <div className="flex-[1_1_40%] justify-center">
                        <ProgressBar />
                    </div>
                    <div className="flex-[1_1_30%] flex justify-center">
                        <button className="bg-[#373737] text-white py-3 px-6">Écrire un avis</button>
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-2 py-12 max-xl:grid-cols-3 max-lg:grid-cols-1">

                    <div className="border border-gray-300 rounded-xl px-4 py-6 flex flex-col gap-4">
                        <div className="flex gap-2 items-center">
                            <p className="text-lg font-bold">Yannick D</p>
                            <p className="text-sm">Vérifié  </p>
                        </div>
                        <SmallRatingStar size="sm" />
                        <p>Tout fonctionne très bien, le cric est assez puissant pour soulever mon audi A4 sans problème, top</p>
                        <img src={require("../assets/img/png/client1.webp")} className="" alt="" />
                        <p className="text-right text-sm">il y a 2 semaines</p>
                    </div>
                    <div className="border border-gray-300 rounded-xl px-4 py-6 flex flex-col gap-4">
                        <div className="flex gap-2 items-center">
                            <p className="text-lg font-bold">Jerome Grassier </p>
                            <p className="text-sm">Vérifié  </p>
                        </div>
                        <SmallRatingStar size="sm" />
                        <p>Produit conforme à la description, facile à utiliser, livraison rapide ! Réduit considérablement le temps de travail. J'achèterai à nouveau chez ce vendeur sans hésitation.</p>
                        <img src={require("../assets/img/png/client2.webp")} className="" alt="" />
                        <p className="text-right text-sm">il y a 2 semaines</p>
                    </div>
                    <div className="border border-gray-300 rounded-xl px-4 py-6 flex flex-col gap-4">
                        <div className="flex gap-2 items-center">
                            <p className="text-lg font-bold">Antoine Robin</p>
                            <p className="text-sm">Vérifié  </p>
                        </div>
                        <SmallRatingStar size="sm" />
                        <p>Le cric fonctionne très bien. Il est très silencieux par rapport à un autre cric électrique que j'ai essayé. Je ne peux pas en dire plus sur la clé à chocs.</p>
                        <img src={require("../assets/img/png/client10.webp")} className="" alt="" />
                        <p className="text-right text-sm">il y a 2 semaines</p>
                    </div>
                    <div className="border border-gray-300 rounded-xl px-4 py-6 flex flex-col gap-4">
                        <div className="flex gap-2 items-center">
                            <p className="text-lg font-bold">Jonathan Loirat </p>
                            <p className="text-sm">Vérifié  </p>
                        </div>
                        <SmallRatingStar size="sm" />
                        <p>Ce petit kit est un outil très puissant. Je dois dire que j'ai lu les commentaires sur ce produit et regardé les vidéos et que j'avais encore des doutes sur ses capacités, mais j'ai pensé que cela valait la peine d'essayer. En ce moment, je suis surpris de voir à quel point il est puissant et facile à utiliser. Il a soulevé la roue avant de ma clio sans aucun soucis, excellent !</p>
                        <img src={require("../assets/img/png/client4.webp")} className="" alt="" />
                        <p className="text-right text-sm">il y a 2 semaines</p>
                    </div>

                    <div className="border border-gray-300 rounded-xl px-4 py-6 flex flex-col gap-4">
                        <div className="flex gap-2 items-center">
                            <p className="text-lg font-bold">Jérémy Grossier </p>
                            <p className="text-sm">Vérifié  </p>
                        </div>
                        <SmallRatingStar size="sm" />
                        <p>produit bien fini et fonctionne parfaitement, je suis content de mon achat</p>
                        <img src={require("../assets/img/png/client5.webp")} className="" alt="" />
                        <p className="text-right text-sm">il y a 2 semaines</p>
                    </div>
                    <div className="border border-gray-300 rounded-xl px-4 py-6 flex flex-col gap-4">
                        <div className="flex gap-2 items-center">
                            <p className="text-lg font-bold">Amine Youssef  </p>
                            <p className="text-sm">Vérifié  </p>
                        </div>
                        <SmallRatingStar size="sm" />
                        <p>Le produit fonctionne vraiment bien, pour le prix vous pouvez y aller les yeux fermés</p>
                        <img src={require("../assets/img/png/client6.webp")} className="" alt="" />
                        <p className="text-right text-sm">il y a 2 semaines</p>
                    </div>
                    <div className="border border-gray-300 rounded-xl px-4 py-6 flex flex-col gap-4">
                        <div className="flex gap-2 items-center">
                            <p className="text-lg font-bold">Frederic Basnas </p>
                            <p className="text-sm">Vérifié  </p>
                        </div>
                        <SmallRatingStar size="sm" />
                        <p>Le bigdeal est sérieux et j'ai été livré en belgique dans les 48h vraiment pratique</p>
                        <img src={require("../assets/img/png/client7.webp")} className="" alt="" />
                        <p className="text-right text-sm">il y a 2 semaines</p>
                    </div>
                    <div className="border border-gray-300 rounded-xl px-4 py-6 flex flex-col gap-4">
                        <div className="flex gap-2 items-center">
                            <p className="text-lg font-bold">Martin Leroy</p>
                            <p className="text-sm">Vérifié  </p>
                        </div>
                        <SmallRatingStar size="sm" />
                        <p>Je l'utilise depuis quelques semaines, vraiment sympa silencieux et efficace</p>
                        <img src={require("../assets/img/png/client8.webp")} className="" alt="" />
                        <p className="text-right text-sm">il y a 2 semaines</p>
                    </div>
                    <div className="border border-gray-300 rounded-xl px-4 py-6 flex flex-col gap-4">
                        <div className="flex gap-2 items-center">
                            <p className="text-lg font-bold">Isaac Cohen </p>
                            <p className="text-sm">Vérifié  </p>
                        </div>
                        <SmallRatingStar size="sm" />
                        <p>Bien pratique et pour le prix ca vaut le coup de le prendre et de laisser dans la voiture</p>
                        <img src={require("../assets/img/png/client9.webp")} className="" alt="" />
                        <p className="text-right text-sm">il y a 2 semaines</p>
                    </div>
                    <div className="border border-gray-300 rounded-xl px-4 py-6 flex flex-col gap-4">
                        <div className="flex gap-2 items-center">
                            <p className="text-lg font-bold">Romain Brou</p>
                            <p className="text-sm">Vérifié  </p>
                        </div>
                        <SmallRatingStar size="sm" />
                        <p>Agréablement surpris ! le cric est puissant, avec des belles finitions</p>
                        <img src={require("../assets/img/png/client3.webp")} className="" alt="" />
                        <p className="text-right text-sm">il y a 2 semaines</p>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Main;