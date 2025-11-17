import Header from './Header';

// Image assets from Figma
const img = "https://www.figma.com/api/mcp/asset/bb7b46cb-a359-4d63-b828-0c202a7d9321";
const img1 = "https://www.figma.com/api/mcp/asset/a79b59c8-40ac-4e24-967d-eb53f26f7317";
const img2 = "https://www.figma.com/api/mcp/asset/266cfd19-dedc-4648-bf29-6279ffe8e7c9";
const imgRectangle29491 = "https://www.figma.com/api/mcp/asset/0f28f423-8a28-49fb-8331-2e8906adc3c2";
const imgG18 = "https://www.figma.com/api/mcp/asset/fc54425f-5c66-434a-bc67-a992bd006580";
const imgG22 = "https://www.figma.com/api/mcp/asset/2c9bb8f4-e45f-44b7-8c26-309c36b8bb63";
const imgG26 = "https://www.figma.com/api/mcp/asset/fda4a851-4095-42aa-b08a-f8536b1607f1";
const imgG30 = "https://www.figma.com/api/mcp/asset/b6886da5-2264-46f9-be60-806183c92616";
const imgG34 = "https://www.figma.com/api/mcp/asset/61826796-e5fb-4ef0-a716-eabf898b52e8";
const imgG38 = "https://www.figma.com/api/mcp/asset/a6d087a8-febc-4a05-b91f-3c6b9c3257b6";
const imgG42 = "https://www.figma.com/api/mcp/asset/61c1755f-588c-4507-8fdb-a2d4a712a696";
const imgG46 = "https://www.figma.com/api/mcp/asset/e2fc0600-e2f8-4dc8-944d-21157cf2a3ba";
const imgG50 = "https://www.figma.com/api/mcp/asset/8539e44c-5067-40d6-84a1-a569ac33ed1d";
const imgG54 = "https://www.figma.com/api/mcp/asset/09497718-24b9-427d-bc94-3129c9312c2a";
const imgG58 = "https://www.figma.com/api/mcp/asset/bcd0427b-1f7f-4148-ab30-d3df3991a91f";
const imgG62 = "https://www.figma.com/api/mcp/asset/dbbb531d-8e2a-4140-a93c-8c649816a61d";
const imgG66 = "https://www.figma.com/api/mcp/asset/aa9aad3b-695f-41fa-8e4a-90a40d3586dc";
const imgG70 = "https://www.figma.com/api/mcp/asset/7804e8c1-52d9-409e-8948-b4946252a5e0";
const imgG74 = "https://www.figma.com/api/mcp/asset/dc45848f-e1e7-4688-8932-5cfba4160e74";
const imgG78 = "https://www.figma.com/api/mcp/asset/878b70e1-9993-448c-87ad-c647b8597658";
const imgG82 = "https://www.figma.com/api/mcp/asset/9118f633-6d80-4592-8e76-40f881776553";
const imgG86 = "https://www.figma.com/api/mcp/asset/85a9d2d5-3d2c-424a-9dd2-1bb89638a139";
const imgG90 = "https://www.figma.com/api/mcp/asset/f4955423-41c6-48c4-8b57-ca85d7ecf020";
const imgG94 = "https://www.figma.com/api/mcp/asset/71ebdeb5-cf14-4461-a4ef-cc112f61099c";
const imgG98 = "https://www.figma.com/api/mcp/asset/57806852-b0f9-4999-88c2-54624b236604";
const imgG102 = "https://www.figma.com/api/mcp/asset/236954f0-d5d8-4771-8eeb-355e9eba5545";
const imgG106 = "https://www.figma.com/api/mcp/asset/9de1ec6c-f6dd-435d-9c5e-c20b6081e956";
const imgG110 = "https://www.figma.com/api/mcp/asset/ef14d17e-70c3-4179-a5f7-c9d4ab3999ec";
const imgG114 = "https://www.figma.com/api/mcp/asset/4e64f91f-44fc-43f2-80c5-4f6b03908d9d";
const imgG118 = "https://www.figma.com/api/mcp/asset/dcc8de37-e254-4f94-a013-c8866e54f464";
const imgG122 = "https://www.figma.com/api/mcp/asset/1d36edf0-6a39-4851-9444-fd979007c5e3";
const imgG126 = "https://www.figma.com/api/mcp/asset/a7cd482e-61d5-4490-8dfe-30915e4bbec2";
const imgG130 = "https://www.figma.com/api/mcp/asset/a138474d-2172-43cc-b183-c8a2a79a2d97";
const imgG134 = "https://www.figma.com/api/mcp/asset/5b76fdaa-6d84-42fb-bd10-17d82504bf09";
const imgG138 = "https://www.figma.com/api/mcp/asset/0054b521-0d76-467c-a8b3-3e46f7a83fa4";
const imgG142 = "https://www.figma.com/api/mcp/asset/b85509fa-ea98-434d-906f-dd0f4bee16e1";
const imgG146 = "https://www.figma.com/api/mcp/asset/d304701d-cbcb-4df5-937f-6f2e649a7db0";
const imgIfoodPago = "https://www.figma.com/api/mcp/asset/48f6866c-6b34-426f-92ed-118a6ad80585";
const imgIcon3 = "https://www.figma.com/api/mcp/asset/18bce6e5-bc79-4de8-b59e-17487e9a48af";

export default function POL() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="POL" data-node-id="1946:756" style={{ backgroundImage: "linear-gradient(90deg, rgba(237, 236, 236, 1) 0%, rgba(237, 236, 236, 1) 100%), linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 100%)" }}>
      <Header className="bg-[#4972b1] box-border content-stretch flex flex-col items-start min-h-[46px] px-[11px] py-0 relative shadow-[0px_1px_4px_0px_rgba(0,0,0,0.3)] shrink-0 w-[1440px]" />
      <div className="bg-white box-border content-stretch flex flex-col items-start pl-[21px] pr-[1142.38px] py-[15px] relative shrink-0 w-full" data-name="Background" data-node-id="1946:758">
        <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#818181] text-[14px] w-full" data-node-id="1946:759" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[33px] whitespace-pre-wrap">Canal de venda - Site Delivery (SAIPOS)</p>
        </div>
      </div>
      <div className="bg-[#f8f8f8] box-border content-stretch flex flex-col gap-[8px] items-start relative shadow-[0px_1px_1px_0px_rgba(0,0,0,0.15)] shrink-0 w-full" data-name="Entrada com POL Obrigatório" data-node-id="1946:760">
        <div className="h-[759px] relative shrink-0 w-full" data-name="Container" data-node-id="1946:761">
          <div className="absolute box-border content-stretch flex flex-col gap-[16px] items-start left-[calc(50%+-525.5px)] min-h-px pb-[43px] pl-[25px] pr-0 pt-[10px] top-0 translate-x-[-50%] w-[355px]" data-name="Container" data-node-id="1946:762">
            <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid justify-items-start leading-[0] relative shrink-0" data-node-id="I1946:762;1929:2593">
              <div className="col-[1] grid-cols-[max-content] grid-rows-[max-content] inline-grid justify-items-start ml-0 mt-0 relative row-[1]" data-node-id="I1946:762;1929:2594">
                <div className="col-[1] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center ml-[330px] mt-[16.5px] relative row-[1] text-[#818181] text-[14px] text-right translate-x-[-100%] translate-y-[-50%] w-[330px]" data-node-id="I1946:762;1929:2595" style={{ fontVariationSettings: "'wdth' 100" }}>
                  <p className="leading-[33px] whitespace-pre-wrap">33% finalizado</p>
                </div>
                <div className="col-[1] grid-cols-[max-content] grid-rows-[max-content] inline-grid justify-items-start ml-0 mt-[33px] relative row-[1]" data-node-id="I1946:762;1929:2596">
                  <div className="bg-[#d9d9d9] col-[1] h-[9px] ml-0 mt-0 rounded-[32px] row-[1] w-[330px]" data-node-id="I1946:762;1929:2597" />
                  <div className="bg-[#198754] col-[1] h-[9px] ml-0 mt-0 rounded-[32px] row-[1] w-[114px]" data-node-id="I1946:762;1929:2598" />
                </div>
              </div>
            </div>
            <div className="box-border content-stretch flex flex-col items-start pb-px pt-0 px-0 relative shrink-0 w-full" data-name="List" data-node-id="I1946:762;1929:2599">
              <div className="bg-white border border-[#e9e9e9] border-solid box-border content-stretch flex flex-col items-start mb-[-1px] p-px relative rounded-tl-[2px] rounded-tr-[2px] shrink-0 w-full" data-name="Item" data-node-id="I1946:762;1933:873">
                <div className="bg-white box-border content-stretch flex gap-[8px] items-center px-[15px] py-[24px] relative shrink-0 w-full" data-name="Container" data-node-id="I1946:762;1933:874">
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container" data-node-id="I1946:762;1933:875">
                    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 size-[20.5px]" data-name="Container" data-node-id="I1946:762;1933:876">
                      <div className="flex-[1_0_0] min-h-px min-w-px relative shrink-0 w-full" data-name="SVG" data-node-id="I1946:762;1933:877">
                        <div className="absolute inset-[8.33%_8.34%_8.33%_8.33%]" data-name="Group" data-node-id="I1946:762;1933:878">
                          <img alt="" className="block max-w-none size-full" src={img} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col font-['Roboto:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[#979797] text-[14px] uppercase whitespace-nowrap" data-node-id="I1946:762;1933:880" style={{ fontVariationSettings: "'wdth' 100" }}>
                    <p className="leading-[20px]">Cadastro e ativação do domínio</p>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-[#e9e9e9] border-solid box-border content-stretch flex flex-col items-start mb-[-1px] p-px relative rounded-tl-[2px] rounded-tr-[2px] shrink-0 w-full" data-name="Item" data-node-id="I1946:762;1933:1242">
                <div className="bg-white box-border content-stretch flex gap-[8px] items-center px-[15px] py-[24px] relative shrink-0 w-full" data-name="Container" data-node-id="I1946:762;1933:1243">
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container" data-node-id="I1946:762;1933:1244">
                    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 size-[20.5px]" data-name="Container" data-node-id="I1946:762;1933:1245">
                      <div className="flex-[1_0_0] min-h-px min-w-px relative shrink-0 w-full" data-name="SVG" data-node-id="I1946:762;1933:1246">
                        <div className="absolute inset-[8.33%_8.34%_8.33%_8.33%]" data-name="Group" data-node-id="I1946:762;1933:1247">
                          <img alt="" className="block max-w-none size-full" src={img} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col font-['Roboto:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[#979797] text-[14px] uppercase whitespace-nowrap" data-node-id="I1946:762;1933:1249" style={{ fontVariationSettings: "'wdth' 100" }}>
                    <p className="leading-[20px]">Aparência da loja</p>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-[#e9e9e9] border-solid box-border content-stretch flex flex-col items-start mb-[-1px] p-px relative rounded-tl-[2px] rounded-tr-[2px] shrink-0 w-full" data-name="Item" data-node-id="I1946:762;1933:1423">
                <div className="bg-white box-border content-stretch flex gap-[8px] items-center px-[15px] py-[24px] relative shrink-0 w-full" data-name="Container" data-node-id="I1946:762;1933:1424">
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container" data-node-id="I1946:762;1933:1425">
                    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 size-[20.5px]" data-name="Container" data-node-id="I1946:762;1933:1426">
                      <div className="flex-[1_0_0] min-h-px min-w-px relative shrink-0 w-full" data-name="SVG" data-node-id="I1946:762;1933:1427">
                        <div className="absolute inset-[8.33%_8.34%_8.33%_8.33%]" data-name="Group" data-node-id="I1946:762;1933:1428">
                          <img alt="" className="block max-w-none size-full" src={img} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col font-['Roboto:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[#979797] text-[14px] uppercase whitespace-nowrap" data-node-id="I1946:762;1933:1430" style={{ fontVariationSettings: "'wdth' 100" }}>
                    <p className="leading-[20px]">Horários de atendimento</p>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-[#e9e9e9] border-solid box-border content-stretch flex flex-col items-start mb-[-1px] p-px relative shrink-0 w-full" data-name="Item" data-node-id="I1946:762;1929:2632">
                <div className="box-border content-stretch flex gap-[8px] items-start px-[17px] py-[24px] relative shrink-0 w-full" data-name="Container" data-node-id="I1946:762;1929:2633">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 size-[17px]" data-name="Container" data-node-id="I1946:762;1932:5608">
                    <div className="relative shrink-0 size-[17px]" data-name="Icon" data-node-id="I1946:762;1932:5609">
                      <img alt="" className="block max-w-none size-full" src={img1} />
                    </div>
                  </div>
                  <div className="flex flex-col font-['Roboto:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[#5e5e5e] text-[14px] uppercase whitespace-nowrap" data-node-id="I1946:762;1929:2639" style={{ fontVariationSettings: "'wdth' 100" }}>
                    <p className="leading-[20px]">pagamento online</p>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-[#e9e9e9] border-solid box-border content-stretch flex flex-col items-start mb-[-1px] p-px relative shrink-0 w-full" data-name="Item" data-node-id="I1946:762;1929:2624">
                <div className="box-border content-stretch flex gap-[8px] items-start px-[15px] py-[24px] relative shrink-0 w-full" data-name="Container" data-node-id="I1946:762;1929:2625">
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container" data-node-id="I1946:762;1929:2626">
                    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 size-[20.5px]" data-name="Container" data-node-id="I1946:762;1929:2627">
                      <div className="flex-[1_0_0] min-h-px min-w-px relative shrink-0 w-full" data-name="SVG" data-node-id="I1946:762;1929:2628">
                        <div className="absolute inset-[8.33%_8.34%_8.33%_8.33%]" data-name="Group" data-node-id="I1946:762;1929:2629">
                          <img alt="" className="block max-w-none size-full" src={img2} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col font-['Roboto:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[#5e5e5e] text-[14px] uppercase whitespace-nowrap" data-node-id="I1946:762;1929:2631" style={{ fontVariationSettings: "'wdth' 100" }}>
                    <p className="leading-[20px]">Pagamento na entrega</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bg-white box-border content-stretch flex flex-col gap-[8px] items-start left-[calc(50%+211px)] shadow-[0px_1px_1px_0px_rgba(0,0,0,0.15)] top-[10px] translate-x-[-50%] w-[1022px]" data-name="Background+Shadow" data-node-id="1946:763">
            <div className="bg-white h-[711px] relative shrink-0 w-full" data-name="Background" data-node-id="1946:764">
              <div className="absolute bg-[#f7f7f7] box-border content-stretch flex flex-col items-start left-[88px] p-[10px] right-[88px] top-[50px]" data-name="Background" data-node-id="1946:765">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2" data-node-id="1946:766">
                  <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[17px] text-black w-full" data-node-id="1946:767" style={{ fontVariationSettings: "'wdth' 100" }}>
                    <p className="leading-[17px] whitespace-pre-wrap">Pagamento Online</p>
                  </div>
                </div>
              </div>
              <div className="absolute bg-[#4770ae] box-border content-stretch flex items-center justify-between left-[88px] p-[40px] rounded-[16px] top-[111px] w-[859px]" data-node-id="1946:768">
                <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid justify-items-start leading-[0] relative shrink-0" data-node-id="1946:769">
                  <div className="col-[1] grid-cols-[max-content] grid-rows-[max-content] inline-grid justify-items-start ml-0 mt-[10.45px] relative row-[1]" data-name="Anota +Ifood" data-node-id="1946:770">
                    <div className="col-[1] grid-cols-[max-content] grid-rows-[max-content] inline-grid justify-items-start ml-0 mt-0 relative row-[1]" data-name="Anotaai" data-node-id="1946:771">
                      <div className="col-[1] ml-0 mt-0 relative row-[1] size-[51.394px]" data-name="Ifood pago" data-node-id="1946:843">
                        <img alt="" className="block max-w-none size-full" src={imgIfoodPago} />
                      </div>
                    </div>
                  </div>
                  <div className="box-border col-[1] content-stretch flex flex-col gap-[16px] items-start ml-[121.29px] mt-0 relative row-[1] text-white w-[379px]" data-node-id="1946:853">
                    <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[1.1] relative shrink-0 text-[0px] text-[26.145px] tracking-[-0.2614px] w-full whitespace-pre-wrap" data-node-id="1946:854" style={{ fontVariationSettings: "'wdth' 100" }}>
                      <span>{`Faça seu cadastro e aceite pagamento online `}</span>
                      <span className="text-[#ffa800]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        agora mesmo
                      </span>
                    </p>
                    <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[16px] w-full" data-node-id="1946:855" style={{ fontVariationSettings: "'wdth' 100" }}>
                      <p className="leading-[12.532px] whitespace-pre-wrap">Você vai levar menos de 2 minutos</p>
                    </div>
                  </div>
                </div>
                <div className="bg-[#58a974] box-border content-stretch flex h-[40px] items-center justify-center overflow-clip px-[13px] py-[7px] relative rounded-[3px] shadow-[0px_2px_5px_0px_rgba(0,0,0,0.16),0px_2px_10px_0px_rgba(0,0,0,0.12)] shrink-0 w-[217px]" data-name="Button" data-node-id="1946:856">
                  <div className="flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[13px] text-center text-white uppercase whitespace-nowrap" data-node-id="1946:857" style={{ fontVariationSettings: "'wdth' 100" }}>
                    <p className="leading-[18.57px]">ativar agora</p>
                  </div>
                </div>
              </div>
              <div className="absolute bg-[#e3f2fd] border border-[#90caf9] border-solid h-[80px] left-[88px] rounded-[10px] top-[316px] w-[859px]" data-name="Container" data-node-id="1946:858">
                <div className="absolute left-[17px] size-[16px] top-[19px]" data-name="Icon" data-node-id="1946:859">
                  <img alt="" className="block max-w-none size-full" src={imgIcon3} />
                </div>
                <div className="absolute h-[45.5px] left-[41px] top-[17px] w-[778px]" data-name="Paragraph" data-node-id="1946:862">
                  <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#424242] text-[14px] top-0 tracking-[-0.1504px] w-[749px] whitespace-pre-wrap" data-node-id="1946:863">
                    Ative o pagamento online para concluir a configuração do Site Delivery. É rápido e isso garantirá que os pagamentos sejam processados e repassados na conta cadastrada.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

