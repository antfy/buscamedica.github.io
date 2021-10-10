const tf = require('@tensorflow/tfjs');

const tf = require('@tensorflow/tfjs');

// util function to normalize a value between a given range.
function normalize(value, min, max) {
    if (min === undefined || max === undefined) {
        return value;
    }
    return (value - min) / (max - min);
}

// data can be loaded from URLs or local file paths when running in Node.js.
const TRAIN_DATA_PATH = './csv/dataset2.csv';
const TEST_DATA_PATH = './csv/testdataset.csv';

// Constants from training data
// min values
const acne_min = 0;
const acumulacao_compulsiva_min = 0;
const agitacao_min = 0;
const agressao_min = 0;
const alteracao_da_digestao_min = 0;
const alteracao_de_humor_min = 0;
const alteracao_na_percepcao_das_cores_min = 0;
const alteracoes_no_ciclo_menstrual_min = 0;
const alucinacoes_min = 0;
const alucinacoes_visuais_min = 0;
const amnesia_min = 0;
const anemia_min = 0;
const anomalias_na_locomocao_min = 0;
const anormalidade_onde_linhas_retas_parecem_onduladas_min = 0;
const ansiedade_min = 0;
const aparecimento_de_carocos_ao_apalpar_a_mama_min = 0;
const apatia_min = 0;
const aperto_forte_no_coracao__regiao_levemente_a_esquerda_da_linha_media__min = 0;
const aperto_no_peito_min = 0;
const apreensao_min = 0;
const ardor_na_garganta_min = 0;
const ardor_no_corpo_min = 0;
const atraso_na_puberdade_ou_puberdade_precoce_min = 0;
const aumento_de_gorduras_pelo_corpo_min = 0;
const aumento_de_infeccoes_principalmenbte_em_criancas_e_bebes_min = 0;
const aumento_de_peso_min = 0;
const aumento_de_sensibilidade_na_pele_min = 0;
const ausencia_de_urina_min = 0;
const auto_imagem_distorcida_min = 0;
const automutilacao_min = 0;
const aversao_a_alimentos_min = 0;
const azia_ou_queimacao_no_estomago_min = 0;
const boca_seca_min = 0;
const cabelo_ralo_ou_fino_min = 0;
const calafrios_min = 0;
const calor_no_ouvido_min = 0;
const cegueira_noturna_min = 0;
const chiado_no_peito_min = 0;
const choro_min = 0;
const coceira_na_garganta_min = 0;
const coceira_na_mama_min = 0;
const coceira_nazal_insistente_min = 0;
const coceira_no_ceu_da_boca_min = 0;
const coceira_irritacao_nos_olhos_min = 0;
const coloracao_acinzentado_azulado_min = 0;
const comportamento_desorganizado_min = 0;
const comportamentos_de_risco_min = 0;
const compulsao_alimentar_min = 0;
const confusao_mental_min = 0;
const constipacao_intestinal_min = 0;
const convulsoes_min = 0;
const coportamento_ritualisticos_min = 0;
const cor_rosa_vermelha_ou_marrom_de_urina_min = 0;
const coriza_min = 0;
const costas_encurvadas_min = 0;
const crenca_de_que_um_evento_comum_tem_um_significado_especial_e_pessoal_min = 0;
const crenca_que_os_pensamentos_nao_sao_seus_min = 0;
const crepitacoes_das_articulacoes_min = 0;
const crescimento_das_mamas_nos_meninos_min = 0;
const crescimento_e_desenvolvimento_lento_em_criancas_min = 0;
const culpa_min = 0;
const declinio_do_sono_min = 0;
const deformidade_do_local_fraturado_min = 0;
const deformidade_nas_articulacoes_min = 0;
const delirio_min = 0;
const delirio_persecutorio_min = 0;
const delirio_religioso_min = 0;
const depressao_min = 0;
const derpressao_agitada_min = 0;
const desanimo_min = 0;
const descascamento_das_unhas_min = 0;
const desconforto_na_mandibula_min = 0;
const desconforto_na_regiao_das_escapulas_min = 0;
const desconforto_na_regiao_do_abdomen_min = 0;
const desconforto_no_braco_direito_min = 0;
const desconforto_no_braco_esquerdo_min = 0;
const descontamento_geral_min = 0;
const desesperanca_min = 0;
const desmaios_min = 0;
const desorientacao_min = 0;
const diarreia_min = 0;
const diarreia_persistente_por_mais_de_3_semanas_min = 0;
const diferenca_de_gastos_em_sapatos_de_um_pe_para_outro_min = 0;
const dificuldade_de_adormecer_min = 0;
const dificuldade_de_concentracao_min = 0;
const dificuldade_de_crescimento_min = 0;
const dificuldade_de_fazer_atividades_diarias_min = 0;
const dificuldade_de_respirar_durante_atividades_fisicas_min = 0;
const dificuldade_em_engolir_min = 0;
const dificuldade_para_evacuar_min = 0;
const dificuldades_de_se_adaptar_a_luz_min = 0;
const diminuicao_da_mobilidade_nas_articulacoes_min = 0;
const diminuicao_de_pelos_min = 0;
const disfuncao_eretil_min = 0;
const disfuncao_sexual_min = 0;
const disturbio_do_desequilibro_min = 0;
const disturbios_do_sono_min = 0;
const dominuicao_da_libido_min = 0;
const dor_a_degluticao_min = 0;
const dor_abdominal_min = 0;
const dor_ao_longo_de_uma_via_nervosa__ciatica_ou_herpes_zoster_por_exemplo__min = 0;
const dor_ao_urinar_min = 0;
const dor_de_cabeca_min = 0;
const dor_de_garganta_min = 0;
const dor_e_colica_frequente_abdominal_min = 0;
const dor_na_mama_min = 0;
const dor_nas_articulacoes_min = 0;
const dor_nas_costas_min = 0;
const dor_nas_costas_rins_min = 0;
const dor_nas_pernas_min = 0;
const dor_nas_unhas_min = 0;
const dor_no_pescoco_min = 0;
const dor_nos_olhos_min = 0;
const dor_nos_ossos_min = 0;
const dor_nos_pes_min = 0;
const dor_tardia_nos_musculos_min = 0;
const dores_ao_defecar_min = 0;
const dores_durante_o_sexo_min = 0;
const dores_fortes_nas_articulacoes_min = 0;
const dores_na_parte_inferior_das_costas_min = 0;
const dores_na_regiao_sacral_min = 0;
const dores_na_testa_min = 0;
const dores_na_vagina_min = 0;
const dores_nas_maos_min = 0;
const dores_nas_partes_de_tras_dos_olhos_min = 0;
const dores_nas_pelvis_min = 0;
const dores_no_anus_min = 0;
const dores_no_braco_min = 0;
const dores_no_peito_min = 0;
const dores_no_peito_ao_comer_min = 0;
const dores_no_peito_ao_respirar_fundo_min = 0;
const dores_no_peito_ao_tossir_min = 0;
const dores_no_quadril_min = 0;
const dores_no_rosto_min = 0;
const dores_nos_joelhos_min = 0;
const dores_nos_musculos_min = 0;
const dores_nos_ouvidos_min = 0;
const dormencia_na_pele_min = 0;
const drenagem_de_fluidos_nos_ouvidos_min = 0;
const enfraquecimento_dos_ossos_min = 0;
const episodio_maniaco_min = 0;
const escurecimento_da_visao_min = 0;
const espasmos_musculares_min = 0;
const espirros_repetidos_min = 0;
const esquecimento_min = 0;
const estalos_nas_articulacoes_min = 0;
const estresse_min = 0;
const euforia_min = 0;
const excesso_de_desejo_sexual_min = 0;
const excesso_de_pele_min = 0;
const excesso_de_pele_no_rosto_min = 0;
const excesso_de_pelos_em_mulheres_min = 0;
const excesso_de_sede_min = 0;
const excesso_de_sonolencia_min = 0;
const excitabilidade_min = 0;
const fadiga_min = 0;
const fala_ininteligivel_min = 0;
const fala_rapida_e_frenetica_min = 0;
const falsa_superioridade_min = 0;
const falta_de_ar_min = 0;
const falta_de_concentracao_min = 0;
const falta_de_exercicio_fisico_min = 0;
const falta_de_moderacao_min = 0;
const febre_min = 0;
const fechar_os_olhos_para_enxergar_melhor_min = 0;
const feridas_com_cicatrizacao_lenta_min = 0;
const fome_frequente_min = 0;
const formacao_de_pequenas_bolhas_na_pele_min = 0;
const formacao_de_tecido_osseo_min = 0;
const formigamento_nas_maos_min = 0;
const formigamento_nas_pernas_min = 0;
const formigamento_no_braco_min = 0;
const formigamento_no_corpo_min = 0;
const formigamentos_ou_picadas_na_pele_min = 0;
const fraqueza_dos_musculos_min = 0;
const fraqueza_pelo_corpo_min = 0;
const fraturas_dos_ossos_min = 0;
const frequencia_cardiaca_lenta_min = 0;
const ganho_de_peso_min = 0;
const gases_min = 0;
const grandiosidade_min = 0;
const hiperatividade_min = 0;
const hipertensao_min = 0;
const hostilidade_min = 0;
const impulsividade_min = 0;
const incapacidade_de_esvaziar_o_intestino_min = 0;
const incapacidade_de_se_movimentar_na_regiao_fraturada_min = 0;
const inchaco_das_pernas_min = 0;
const inchaco_glanglios_min = 0;
const inchaco_na_boca_min = 0;
const inchaco_na_lingua_min = 0;
const inchaco_na_regiao_do_abdomen_min = 0;
const inchaco_na_regiao_sacral_min = 0;
const inchaco_nas_articulacoes_min = 0;
const inchaco_no_corpo_min = 0;
const inchaco_no_rosto_min = 0;
const inchaco_nos_dedos_min = 0;
const inchaco_nos_olhos_min = 0;
const inchaco_nos_pes_min = 0;
const incomodo_no_coracao__regiao_levemente_a_esquerda_da_linha_media__min = 0;
const infeccoes_frequentes_dos_rins_min = 0;
const infeccoes_frequentes_na_pele_min = 0;
const infeccoes_nas_unhas_min = 0;
const infertilidade_min = 0;
const inflamacao_no_ouvido_min = 0;
const ingestao_de_laxantes_min = 0;
const inquietacao_min = 0;
const insonia_min = 0;
const invencao_de_coisas_min = 0;
const irritabilidade_min = 0;
const irritacao_na_garganta_min = 0;
const isolamento_social_min = 0;
const lentidao_durante_atividades_min = 0;
const lentidao_nos_movimentos_min = 0;
const ma_coordenacao_motora_min = 0;
const mal_estar_min = 0;
const mal_estar_geral_min = 0;
const mancar_ao_andar_min = 0;
const manchas_avermelhadas_ou_que_cocam_min = 0;
const manchas_avermelhadas_que_desaparecem_e_reaparecem_em_diversas_partes_do_corpo_min = 0;
const mau_cheiro_min = 0;
const medo_min = 0;
const memoria_fraca_min = 0;
const menstruacao_dolorosa_min = 0;
const menstruacao_intensa_min = 0;
const menstruacao_irregular_min = 0;
const miccao_excessiva_durante_a_noite_min = 0;
const movimentos_involuntarios_min = 0;
const movimentos_repetitivos_min = 0;
const mudanca_do_aspecto_da_pele_na_mama_min = 0;
const mudancas_de_humor_min = 0;
const narcisimo_min = 0;
const nariz_entupido_min = 0;
const nariz_escorrendo_min = 0;
const nas_mulheres_ausencia_de_menstruacao_min = 0;
const nausea_enjoo_min = 0;
const nervosismo_min = 0;
const noites_mal_dormidas_min = 0;
const obsessoes_sexuais_min = 0;
const olhos_lacrimejando_min = 0;
const olhos_marejados_min = 0;
const olhos_vermelhos_min = 0;
const ouvir_vozes_min = 0;
const padrao_de_respiracao_anormal_min = 0;
const palidez_min = 0;
const palpitacao_do_coracao_min = 0;
const paralisia_min = 0;
const paranoia_min = 0;
const parte_branca_dos_olhos_secas_e_expessas_min = 0;
const pele_amarelada_min = 0;
const pele_com_coloracao_acinzentado_azulado_min = 0;
const pele_fria_min = 0;
const pele_oleosa_min = 0;
const pele_ressecada_com_vermelhidao_nas_dobras_min = 0;
const pele_seca_min = 0;
const pele_seca_e_escamosa_min = 0;
const pele_umida_min = 0;
const pensamento_acelerado_min = 0;
const pensamentos_indesejados_min = 0;
const pensamentos_suicidas_min = 0;
const perda_de_altura_min = 0;
const perda_de_apetite_min = 0;
const perda_de_audicao_min = 0;
const perda_de_equilibrio_min = 0;
const perda_de_flexibilidade_nas_articulacoes_min = 0;
const perda_de_interesse_min = 0;
const perda_de_massa_muscular_min = 0;
const perda_de_massa_ossea_min = 0;
const perda_de_memoria_min = 0;
const perda_de_olfato_min = 0;
const perda_de_peso_min = 0;
const perda_de_prazer_nas_atividades_min = 0;
const perda_de_sensibilidade_na_pele_min = 0;
const perda_de_visao_parcial_ou_completa_min = 0;
const perda_do_sentido_de_posicao_min = 0;
const perturbacoes_do_paladar_min = 0;
const perturbacoes_no_olfato_min = 0;
const pesadelos_min = 0;
const pessimismo_min = 0;
const pigarro_na_garganta_min = 0;
const pintas_que_mudam_de_tamanho_e_cor_min = 0;
const pneumonia_min = 0;
const poluicao_ambiental_e_sonora_min = 0;
const preocupacao_excessiva_com_o_peso_e_dietas_min = 0;
const pressao_nos_seios_paranasais_min = 0;
const prisao_de_ventre_min = 0;
const privacao_do_sono_min = 0;
const psicose_min = 0;
const pus_na_garganta_min = 0;
const pus_no_ouvido_min = 0;
const queda_de_cabelo_min = 0;
const raiva_min = 0;
const ranger_os_dentes_min = 0;
const rangidos_nas_articulacoes_min = 0;
const refluxo_min = 0;
const repeticao_incessante_de_pensamentos_min = 0;
const repeticao_persistente_de_palavras_ou_acoes_min = 0;
const repeticao_sem_sentido_das_proprias_palavras_min = 0;
const respiracao_rapida_min = 0;
const respiracao_sibilante_min = 0;
const resposta_emocional_inadequada_min = 0;
const rigidez_muscular_min = 0;
const rigidez_nas_articulacoes_min = 0;
const rigidez_nos_pulsos_min = 0;
const ritmo_cardiaco_acelerado_min = 0;
const ronco_min = 0;
const rupturas_dos_ossos_min = 0;
const saliencia_ossea_nos_dedos_das_maos_min = 0;
const saliencia_ossea_nos_dedos_dos_pes_min = 0;
const sangramento_min = 0;
const sangramento_anal_min = 0;
const sangramento_no_nariz_min = 0;
const sangramentos_na_gengiva_min = 0;
const sangue_na_urina_min = 0;
const secrecao_nos_olhos_min = 0;
const secrecao_pelo_mamilo_nao_estando_gravida_min = 0;
const secura_nos_olhos_min = 0;
const sensacao_de_desmaio_min = 0;
const sensacao_de_facada_na_parte_inferior_min = 0;
const sensacao_de_frio_nas_maos_min = 0;
const sensacao_de_peso_nos_olhos_min = 0;
const sensacao_de_queimacao_na_garganta_min = 0;
const sensacao_de_queimacao_pelo_corpo_min = 0;
const sensibilidade_a_dor_pelo_corpo_min = 0;
const sensibilidade_a_luz_min = 0;
const sensibilidade_ao_frio_pelo_corpo_min = 0;
const sensibilidade_na_cabeca_min = 0;
const sensibilidade_nas_articulacoes_min = 0;
const sensibilidade_nos_musculos_min = 0;
const sensibilidade_nos_pulsos_min = 0;
const sensibilidade_pelo_corpo_min = 0;
const sinais_com_textura_e_bordas_irregulares_min = 0;
const sinais_e_sintomas_de_andropausa_e_menopausa_min = 0;
const sudorese_noturna_min = 0;
const suor_min = 0;
const suor_excessivo_min = 0;
const surdez_min = 0;
const surgimento_de_estrias_min = 0;
const tabagismo_min = 0;
const tecidos_inchados_min = 0;
const temperatura_baixa_min = 0;
const temperatura_elevada_no_local_da_fratura_min = 0;
const tonturas_min = 0;
const tosse_min = 0;
const tosse_com_catarro_min = 0;
const tosse_com_sangue_min = 0;
const tosse_cronica_min = 0;
const transtorno_dissociativo_min = 0;
const tremor_dos_musculos_min = 0;
const tremor_nos_olhos_min = 0;
const trincos_dos_ossos_min = 0;
const tristeza_min = 0;
const unhas_amarelas_min = 0;
const unhas_enfraquecidas_min = 0;
const urina_escura_min = 0;
const urina_espumosa_min = 0;
const uso_excessivo_de_alcool_min = 0;
const vasos_sanguineos_novos_e_anormais_min = 0;
const vermelhidao_intensa_apos_picada_de_insetos_min = 0;
const vermelhidao_na_pele_min = 0;
const vermelhidao_nos_olhos_min = 0;
const vermilhidao_no_ouvido_min = 0;
const vertigem_min = 0;
const vicio_comportamental_min = 0;
const visao_com_brilho_min = 0;
const visao_distorcida_min = 0;
const visao_dupla_min = 0;
const visao_embacada_min = 0;
const visualizacao_de_pontos_min = 0;
const vomito_min = 0;
const vomito_induzido_min = 0;
const vontade_de_urinar_varias_vezes_ao_dia_min = 0;
const vontade_frequente_de_urinar_min = 0;
const zumbido_nos_ouvidos_min = 0;
// max values
const acne_max = 5;
const acumulacao_compulsiva_max = 5;
const agitacao_max = 5;
const agressao_max = 5;
const alteracao_da_digestao_max = 5;
const alteracao_de_humor_max = 5;
const alteracao_na_percepcao_das_cores_max = 5;
const alteracoes_no_ciclo_menstrual_max = 5;
const alucinacoes_max = 5;
const alucinacoes_visuais_max = 5;
const amnesia_max = 5;
const anemia_max = 5;
const anomalias_na_locomocao_max = 5;
const anormalidade_onde_linhas_retas_parecem_onduladas_max = 5;
const ansiedade_max = 5;
const aparecimento_de_carocos_ao_apalpar_a_mama_max = 5;
const apatia_max = 5;
const aperto_forte_no_coracao__regiao_levemente_a_esquerda_da_linha_media__max = 5;
const aperto_no_peito_max = 5;
const apreensao_max = 5;
const ardor_na_garganta_max = 5;
const ardor_no_corpo_max = 5;
const atraso_na_puberdade_ou_puberdade_precoce_max = 5;
const aumento_de_gorduras_pelo_corpo_max = 5;
const aumento_de_infeccoes_principalmenbte_em_criancas_e_bebes_max = 5;
const aumento_de_peso_max = 5;
const aumento_de_sensibilidade_na_pele_max = 5;
const ausencia_de_urina_max = 5;
const auto_imagem_distorcida_max = 5;
const automutilacao_max = 5;
const aversao_a_alimentos_max = 5;
const azia_ou_queimacao_no_estomago_max = 5;
const boca_seca_max = 5;
const cabelo_ralo_ou_fino_max = 5;
const calafrios_max = 5;
const calor_no_ouvido_max = 5;
const cegueira_noturna_max = 5;
const chiado_no_peito_max = 5;
const choro_max = 5;
const coceira_na_garganta_max = 5;
const coceira_na_mama_max = 5;
const coceira_nazal_insistente_max = 5;
const coceira_no_ceu_da_boca_max = 5;
const coceira_irritacao_nos_olhos_max = 5;
const coloracao_acinzentado_azulado_max = 5;
const comportamento_desorganizado_max = 5;
const comportamentos_de_risco_max = 5;
const compulsao_alimentar_max = 5;
const confusao_mental_max = 5;
const constipacao_intestinal_max = 5;
const convulsoes_max = 5;
const coportamento_ritualisticos_max = 5;
const cor_rosa_vermelha_ou_marrom_de_urina_max = 5;
const coriza_max = 5;
const costas_encurvadas_max = 5;
const crenca_de_que_um_evento_comum_tem_um_significado_especial_e_pessoal_max = 5;
const crenca_que_os_pensamentos_nao_sao_seus_max = 5;
const crepitacoes_das_articulacoes_max = 5;
const crescimento_das_mamas_nos_meninos_max = 5;
const crescimento_e_desenvolvimento_lento_em_criancas_max = 5;
const culpa_max = 5;
const declinio_do_sono_max = 5;
const deformidade_do_local_fraturado_max = 5;
const deformidade_nas_articulacoes_max = 5;
const delirio_max = 5;
const delirio_persecutorio_max = 5;
const delirio_religioso_max = 5;
const depressao_max = 5;
const derpressao_agitada_max = 5;
const desanimo_max = 5;
const descascamento_das_unhas_max = 5;
const desconforto_na_mandibula_max = 5;
const desconforto_na_regiao_das_escapulas_max = 5;
const desconforto_na_regiao_do_abdomen_max = 5;
const desconforto_no_braco_direito_max = 5;
const desconforto_no_braco_esquerdo_max = 5;
const descontamento_geral_max = 5;
const desesperanca_max = 5;
const desmaios_max = 5;
const desorientacao_max = 5;
const diarreia_max = 5;
const diarreia_persistente_por_mais_de_3_semanas_max = 5;
const diferenca_de_gastos_em_sapatos_de_um_pe_para_outro_max = 5;
const dificuldade_de_adormecer_max = 5;
const dificuldade_de_concentracao_max = 5;
const dificuldade_de_crescimento_max = 5;
const dificuldade_de_fazer_atividades_diarias_max = 5;
const dificuldade_de_respirar_durante_atividades_fisicas_max = 5;
const dificuldade_em_engolir_max = 5;
const dificuldade_para_evacuar_max = 5;
const dificuldades_de_se_adaptar_a_luz_max = 5;
const diminuicao_da_mobilidade_nas_articulacoes_max = 5;
const diminuicao_de_pelos_max = 5;
const disfuncao_eretil_max = 5;
const disfuncao_sexual_max = 5;
const disturbio_do_desequilibro_max = 5;
const disturbios_do_sono_max = 5;
const dominuicao_da_libido_max = 5;
const dor_a_degluticao_max = 5;
const dor_abdominal_max = 5;
const dor_ao_longo_de_uma_via_nervosa__ciatica_ou_herpes_zoster_por_exemplo__max = 5;
const dor_ao_urinar_max = 5;
const dor_de_cabeca_max = 5;
const dor_de_garganta_max = 5;
const dor_e_colica_frequente_abdominal_max = 5;
const dor_na_mama_max = 5;
const dor_nas_articulacoes_max = 5;
const dor_nas_costas_max = 5;
const dor_nas_costas_rins_max = 5;
const dor_nas_pernas_max = 5;
const dor_nas_unhas_max = 5;
const dor_no_pescoco_max = 5;
const dor_nos_olhos_max = 5;
const dor_nos_ossos_max = 5;
const dor_nos_pes_max = 5;
const dor_tardia_nos_musculos_max = 5;
const dores_ao_defecar_max = 5;
const dores_durante_o_sexo_max = 5;
const dores_fortes_nas_articulacoes_max = 5;
const dores_na_parte_inferior_das_costas_max = 5;
const dores_na_regiao_sacral_max = 5;
const dores_na_testa_max = 5;
const dores_na_vagina_max = 5;
const dores_nas_maos_max = 5;
const dores_nas_partes_de_tras_dos_olhos_max = 5;
const dores_nas_pelvis_max = 5;
const dores_no_anus_max = 5;
const dores_no_braco_max = 5;
const dores_no_peito_max = 5;
const dores_no_peito_ao_comer_max = 5;
const dores_no_peito_ao_respirar_fundo_max = 5;
const dores_no_peito_ao_tossir_max = 5;
const dores_no_quadril_max = 5;
const dores_no_rosto_max = 5;
const dores_nos_joelhos_max = 5;
const dores_nos_musculos_max = 5;
const dores_nos_ouvidos_max = 5;
const dormencia_na_pele_max = 5;
const drenagem_de_fluidos_nos_ouvidos_max = 5;
const enfraquecimento_dos_ossos_max = 5;
const episodio_maniaco_max = 5;
const escurecimento_da_visao_max = 5;
const espasmos_musculares_max = 5;
const espirros_repetidos_max = 5;
const esquecimento_max = 5;
const estalos_nas_articulacoes_max = 5;
const estresse_max = 5;
const euforia_max = 5;
const excesso_de_desejo_sexual_max = 5;
const excesso_de_pele_max = 5;
const excesso_de_pele_no_rosto_max = 5;
const excesso_de_pelos_em_mulheres_max = 5;
const excesso_de_sede_max = 5;
const excesso_de_sonolencia_max = 5;
const excitabilidade_max = 5;
const fadiga_max = 5;
const fala_ininteligivel_max = 5;
const fala_rapida_e_frenetica_max = 5;
const falsa_superioridade_max = 5;
const falta_de_ar_max = 5;
const falta_de_concentracao_max = 5;
const falta_de_exercicio_fisico_max = 5;
const falta_de_moderacao_max = 5;
const febre_max = 5;
const fechar_os_olhos_para_enxergar_melhor_max = 5;
const feridas_com_cicatrizacao_lenta_max = 5;
const fome_frequente_max = 5;
const formacao_de_pequenas_bolhas_na_pele_max = 5;
const formacao_de_tecido_osseo_max = 5;
const formigamento_nas_maos_max = 5;
const formigamento_nas_pernas_max = 5;
const formigamento_no_braco_max = 5;
const formigamento_no_corpo_max = 5;
const formigamentos_ou_picadas_na_pele_max = 5;
const fraqueza_dos_musculos_max = 5;
const fraqueza_pelo_corpo_max = 5;
const fraturas_dos_ossos_max = 5;
const frequencia_cardiaca_lenta_max = 5;
const ganho_de_peso_max = 5;
const gases_max = 5;
const grandiosidade_max = 5;
const hiperatividade_max = 5;
const hipertensao_max = 5;
const hostilidade_max = 5;
const impulsividade_max = 5;
const incapacidade_de_esvaziar_o_intestino_max = 5;
const incapacidade_de_se_movimentar_na_regiao_fraturada_max = 5;
const inchaco_das_pernas_max = 5;
const inchaco_glanglios_max = 5;
const inchaco_na_boca_max = 5;
const inchaco_na_lingua_max = 5;
const inchaco_na_regiao_do_abdomen_max = 5;
const inchaco_na_regiao_sacral_max = 5;
const inchaco_nas_articulacoes_max = 5;
const inchaco_no_corpo_max = 5;
const inchaco_no_rosto_max = 5;
const inchaco_nos_dedos_max = 5;
const inchaco_nos_olhos_max = 5;
const inchaco_nos_pes_max = 5;
const incomodo_no_coracao__regiao_levemente_a_esquerda_da_linha_media__max = 5;
const infeccoes_frequentes_dos_rins_max = 5;
const infeccoes_frequentes_na_pele_max = 5;
const infeccoes_nas_unhas_max = 5;
const infertilidade_max = 5;
const inflamacao_no_ouvido_max = 5;
const ingestao_de_laxantes_max = 5;
const inquietacao_max = 5;
const insonia_max = 5;
const invencao_de_coisas_max = 5;
const irritabilidade_max = 5;
const irritacao_na_garganta_max = 5;
const isolamento_social_max = 5;
const lentidao_durante_atividades_max = 5;
const lentidao_nos_movimentos_max = 5;
const ma_coordenacao_motora_max = 5;
const mal_estar_max = 5;
const mal_estar_geral_max = 5;
const mancar_ao_andar_max = 5;
const manchas_avermelhadas_ou_que_cocam_max = 5;
const manchas_avermelhadas_que_desaparecem_e_reaparecem_em_diversas_partes_do_corpo_max = 5;
const mau_cheiro_max = 5;
const medo_max = 5;
const memoria_fraca_max = 5;
const menstruacao_dolorosa_max = 5;
const menstruacao_intensa_max = 5;
const menstruacao_irregular_max = 5;
const miccao_excessiva_durante_a_noite_max = 5;
const movimentos_involuntarios_max = 5;
const movimentos_repetitivos_max = 5;
const mudanca_do_aspecto_da_pele_na_mama_max = 5;
const mudancas_de_humor_max = 5;
const narcisimo_max = 5;
const nariz_entupido_max = 5;
const nariz_escorrendo_max = 5;
const nas_mulheres_ausencia_de_menstruacao_max = 5;
const nausea_enjoo_max = 5;
const nervosismo_max = 5;
const noites_mal_dormidas_max = 5;
const obsessoes_sexuais_max = 5;
const olhos_lacrimejando_max = 5;
const olhos_marejados_max = 5;
const olhos_vermelhos_max = 5;
const ouvir_vozes_max = 5;
const padrao_de_respiracao_anormal_max = 5;
const palidez_max = 5;
const palpitacao_do_coracao_max = 5;
const paralisia_max = 5;
const paranoia_max = 5;
const parte_branca_dos_olhos_secas_e_expessas_max = 5;
const pele_amarelada_max = 5;
const pele_com_coloracao_acinzentado_azulado_max = 5;
const pele_fria_max = 5;
const pele_oleosa_max = 5;
const pele_ressecada_com_vermelhidao_nas_dobras_max = 5;
const pele_seca_max = 5;
const pele_seca_e_escamosa_max = 5;
const pele_umida_max = 5;
const pensamento_acelerado_max = 5;
const pensamentos_indesejados_max = 5;
const pensamentos_suicidas_max = 5;
const perda_de_altura_max = 5;
const perda_de_apetite_max = 5;
const perda_de_audicao_max = 5;
const perda_de_equilibrio_max = 5;
const perda_de_flexibilidade_nas_articulacoes_max = 5;
const perda_de_interesse_max = 5;
const perda_de_massa_muscular_max = 5;
const perda_de_massa_ossea_max = 5;
const perda_de_memoria_max = 5;
const perda_de_olfato_max = 5;
const perda_de_peso_max = 5;
const perda_de_prazer_nas_atividades_max = 5;
const perda_de_sensibilidade_na_pele_max = 5;
const perda_de_visao_parcial_ou_completa_max = 5;
const perda_do_sentido_de_posicao_max = 5;
const perturbacoes_do_paladar_max = 5;
const perturbacoes_no_olfato_max = 5;
const pesadelos_max = 5;
const pessimismo_max = 5;
const pigarro_na_garganta_max = 5;
const pintas_que_mudam_de_tamanho_e_cor_max = 5;
const pneumonia_max = 5;
const poluicao_ambiental_e_sonora_max = 5;
const preocupacao_excessiva_com_o_peso_e_dietas_max = 5;
const pressao_nos_seios_paranasais_max = 5;
const prisao_de_ventre_max = 5;
const privacao_do_sono_max = 5;
const psicose_max = 5;
const pus_na_garganta_max = 5;
const pus_no_ouvido_max = 5;
const queda_de_cabelo_max = 5;
const raiva_max = 5;
const ranger_os_dentes_max = 5;
const rangidos_nas_articulacoes_max = 5;
const refluxo_max = 5;
const repeticao_incessante_de_pensamentos_max = 5;
const repeticao_persistente_de_palavras_ou_acoes_max = 5;
const repeticao_sem_sentido_das_proprias_palavras_max = 5;
const respiracao_rapida_max = 5;
const respiracao_sibilante_max = 5;
const resposta_emocional_inadequada_max = 5;
const rigidez_muscular_max = 5;
const rigidez_nas_articulacoes_max = 5;
const rigidez_nos_pulsos_max = 5;
const ritmo_cardiaco_acelerado_max = 5;
const ronco_max = 5;
const rupturas_dos_ossos_max = 5;
const saliencia_ossea_nos_dedos_das_maos_max = 5;
const saliencia_ossea_nos_dedos_dos_pes_max = 5;
const sangramento_max = 5;
const sangramento_anal_max = 5;
const sangramento_no_nariz_max = 5;
const sangramentos_na_gengiva_max = 5;
const sangue_na_urina_max = 5;
const secrecao_nos_olhos_max = 5;
const secrecao_pelo_mamilo_nao_estando_gravida_max = 5;
const secura_nos_olhos_max = 5;
const sensacao_de_desmaio_max = 5;
const sensacao_de_facada_na_parte_inferior_max = 5;
const sensacao_de_frio_nas_maos_max = 5;
const sensacao_de_peso_nos_olhos_max = 5;
const sensacao_de_queimacao_na_garganta_max = 5;
const sensacao_de_queimacao_pelo_corpo_max = 5;
const sensibilidade_a_dor_pelo_corpo_max = 5;
const sensibilidade_a_luz_max = 5;
const sensibilidade_ao_frio_pelo_corpo_max = 5;
const sensibilidade_na_cabeca_max = 5;
const sensibilidade_nas_articulacoes_max = 5;
const sensibilidade_nos_musculos_max = 5;
const sensibilidade_nos_pulsos_max = 5;
const sensibilidade_pelo_corpo_max = 5;
const sinais_com_textura_e_bordas_irregulares_max = 5;
const sinais_e_sintomas_de_andropausa_e_menopausa_max = 5;
const sudorese_noturna_max = 5;
const suor_max = 5;
const suor_excessivo_max = 5;
const surdez_max = 5;
const surgimento_de_estrias_max = 5;
const tabagismo_max = 5;
const tecidos_inchados_max = 5;
const temperatura_baixa_max = 5;
const temperatura_elevada_no_local_da_fratura_max = 5;
const tonturas_max = 5;
const tosse_max = 5;
const tosse_com_catarro_max = 5;
const tosse_com_sangue_max = 5;
const tosse_cronica_max = 5;
const transtorno_dissociativo_max = 5;
const tremor_dos_musculos_max = 5;
const tremor_nos_olhos_max = 5;
const trincos_dos_ossos_max = 5;
const tristeza_max = 5;
const unhas_amarelas_max = 5;
const unhas_enfraquecidas_max = 5;
const urina_escura_max = 5;
const urina_espumosa_max = 5;
const uso_excessivo_de_alcool_max = 5;
const vasos_sanguineos_novos_e_anormais_max = 5;
const vermelhidao_intensa_apos_picada_de_insetos_max = 5;
const vermelhidao_na_pele_max = 5;
const vermelhidao_nos_olhos_max = 5;
const vermilhidao_no_ouvido_max = 5;
const vertigem_max = 5;
const vicio_comportamental_max = 5;
const visao_com_brilho_max = 5;
const visao_distorcida_max = 5;
const visao_dupla_max = 5;
const visao_embacada_max = 5;
const visualizacao_de_pontos_max = 5;
const vomito_max = 5;
const vomito_induzido_max = 5;
const vontade_de_urinar_varias_vezes_ao_dia_max = 5;
const vontade_frequente_de_urinar_max = 5;
const zumbido_nos_ouvidos_max = 5;

// details
const num_doctor_classes = 18;
const dataset2_length = 270;
const testdataset_length = 54;

// Converts a row from the CSV into features and labels.
// Each feature field is normalized within training data constants
const csvTransform =
    ({ xs, ys }) => {
        const values = [
            normalize(xs.acne, acne_min, acne_max),
            normalize(xs.acumulacao_compulsiva, acumulacao_compulsiva_min, acumulacao_compulsiva_max),
            normalize(xs.agitacao, agitacao_min, agitacao_max),
            normalize(xs.agressao, agressao_min, agressao_max),
            normalize(xs.alteracao_da_digestao, alteracao_da_digestao_min, alteracao_da_digestao_max),
            normalize(xs.alteracao_de_humor, alteracao_de_humor_min, alteracao_de_humor_max),
            normalize(xs.alteracao_na_percepcao_das_cores, alteracao_na_percepcao_das_cores_min, alteracao_na_percepcao_das_cores_max),
            normalize(xs.alteracoes_no_ciclo_menstrual, alteracoes_no_ciclo_menstrual_min, alteracoes_no_ciclo_menstrual_max),
            normalize(xs.alucinacoes, alucinacoes_min, alucinacoes_max),
            normalize(xs.alucinacoes_visuais, alucinacoes_visuais_min, alucinacoes_visuais_max),
            normalize(xs.amnesia, amnesia_min, amnesia_max),
            normalize(xs.anemia, anemia_min, anemia_max),
            normalize(xs.anomalias_na_locomocao, anomalias_na_locomocao_min, anomalias_na_locomocao_max),
            normalize(xs.anormalidade_onde_linhas_retas_parecem_onduladas, anormalidade_onde_linhas_retas_parecem_onduladas_min, anormalidade_onde_linhas_retas_parecem_onduladas_max),
            normalize(xs.ansiedade, ansiedade_min, ansiedade_max),
            normalize(xs.aparecimento_de_carocos_ao_apalpar_a_mama, aparecimento_de_carocos_ao_apalpar_a_mama_min, aparecimento_de_carocos_ao_apalpar_a_mama_max),
            normalize(xs.apatia, apatia_min, apatia_max),
            normalize(xs.aperto_forte_no_coracao__regiao_levemente_a_esquerda_da_linha_media_, aperto_forte_no_coracao__regiao_levemente_a_esquerda_da_linha_media__min, aperto_forte_no_coracao__regiao_levemente_a_esquerda_da_linha_media__max),
            normalize(xs.aperto_no_peito, aperto_no_peito_min, aperto_no_peito_max),
            normalize(xs.apreensao, apreensao_min, apreensao_max),
            normalize(xs.ardor_na_garganta, ardor_na_garganta_min, ardor_na_garganta_max),
            normalize(xs.ardor_no_corpo, ardor_no_corpo_min, ardor_no_corpo_max),
            normalize(xs.atraso_na_puberdade_ou_puberdade_precoce, atraso_na_puberdade_ou_puberdade_precoce_min, atraso_na_puberdade_ou_puberdade_precoce_max),
            normalize(xs.aumento_de_gorduras_pelo_corpo, aumento_de_gorduras_pelo_corpo_min, aumento_de_gorduras_pelo_corpo_max),
            normalize(xs.aumento_de_infeccoes, _principalmenbte_em_criancas_e_bebes, aumento_de_infeccoes, _principalmenbte_em_criancas_e_bebes_min, aumento_de_infeccoes, _principalmenbte_em_criancas_e_bebes_max),
            normalize(xs.aumento_de_peso, aumento_de_peso_min, aumento_de_peso_max),
            normalize(xs.aumento_de_sensibilidade_na_pele, aumento_de_sensibilidade_na_pele_min, aumento_de_sensibilidade_na_pele_max),
            normalize(xs.ausencia_de_urina, ausencia_de_urina_min, ausencia_de_urina_max),
            normalize(xs.auto_imagem_distorcida, auto_imagem_distorcida_min, auto_imagem_distorcida_max),
            normalize(xs.automutilacao, automutilacao_min, automutilacao_max),
            normalize(xs.aversao_a_alimentos, aversao_a_alimentos_min, aversao_a_alimentos_max),
            normalize(xs.azia_ou_queimacao_no_estomago, azia_ou_queimacao_no_estomago_min, azia_ou_queimacao_no_estomago_max),
            normalize(xs.boca_seca, boca_seca_min, boca_seca_max),
            normalize(xs.cabelo_ralo_ou_fino, cabelo_ralo_ou_fino_min, cabelo_ralo_ou_fino_max),
            normalize(xs.calafrios, calafrios_min, calafrios_max),
            normalize(xs.calor_no_ouvido, calor_no_ouvido_min, calor_no_ouvido_max),
            normalize(xs.cegueira_noturna, cegueira_noturna_min, cegueira_noturna_max),
            normalize(xs.chiado_no_peito, chiado_no_peito_min, chiado_no_peito_max),
            normalize(xs.choro, choro_min, choro_max),
            normalize(xs.coceira_na_garganta, coceira_na_garganta_min, coceira_na_garganta_max),
            normalize(xs.coceira_na_mama, coceira_na_mama_min, coceira_na_mama_max),
            normalize(xs.coceira_nazal_insistente, coceira_nazal_insistente_min, coceira_nazal_insistente_max),
            normalize(xs.coceira_no_ceu_da_boca, coceira_no_ceu_da_boca_min, coceira_no_ceu_da_boca_max),
            normalize(xs.coceira_irritacao_nos_olhos, coceira_irritacao_nos_olhos_min, coceira_irritacao_nos_olhos_max),
            normalize(xs.coloracao_acinzentado_azulado, coloracao_acinzentado_azulado_min, coloracao_acinzentado_azulado_max),
            normalize(xs.comportamento_desorganizado, comportamento_desorganizado_min, comportamento_desorganizado_max),
            normalize(xs.comportamentos_de_risco, comportamentos_de_risco_min, comportamentos_de_risco_max),
            normalize(xs.compulsao_alimentar, compulsao_alimentar_min, compulsao_alimentar_max),
            normalize(xs.confusao_mental, confusao_mental_min, confusao_mental_max),
            normalize(xs.constipacao_intestinal, constipacao_intestinal_min, constipacao_intestinal_max),
            normalize(xs.convulsoes, convulsoes_min, convulsoes_max),
            normalize(xs.coportamento_ritualisticos, coportamento_ritualisticos_min, coportamento_ritualisticos_max),
            normalize(xs.cor_rosa, _vermelha_ou_marrom_de_urina, cor_rosa, _vermelha_ou_marrom_de_urina_min, cor_rosa, _vermelha_ou_marrom_de_urina_max),
            normalize(xs.coriza, coriza_min, coriza_max),
            normalize(xs.costas_encurvadas, costas_encurvadas_min, costas_encurvadas_max),
            normalize(xs.crenca_de_que_um_evento_comum_tem_um_significado_especial_e_pessoal, crenca_de_que_um_evento_comum_tem_um_significado_especial_e_pessoal_min, crenca_de_que_um_evento_comum_tem_um_significado_especial_e_pessoal_max),
            normalize(xs.crenca_que_os_pensamentos_nao_sao_seus, crenca_que_os_pensamentos_nao_sao_seus_min, crenca_que_os_pensamentos_nao_sao_seus_max),
            normalize(xs.crepitacoes_das_articulacoes, crepitacoes_das_articulacoes_min, crepitacoes_das_articulacoes_max),
            normalize(xs.crescimento_das_mamas_nos_meninos, crescimento_das_mamas_nos_meninos_min, crescimento_das_mamas_nos_meninos_max),
            normalize(xs.crescimento_e_desenvolvimento_lento_em_criancas, crescimento_e_desenvolvimento_lento_em_criancas_min, crescimento_e_desenvolvimento_lento_em_criancas_max),
            normalize(xs.culpa, culpa_min, culpa_max),
            normalize(xs.declinio_do_sono, declinio_do_sono_min, declinio_do_sono_max),
            normalize(xs.deformidade_do_local_fraturado, deformidade_do_local_fraturado_min, deformidade_do_local_fraturado_max),
            normalize(xs.deformidade_nas_articulacoes, deformidade_nas_articulacoes_min, deformidade_nas_articulacoes_max),
            normalize(xs.delirio, delirio_min, delirio_max),
            normalize(xs.delirio_persecutorio, delirio_persecutorio_min, delirio_persecutorio_max),
            normalize(xs.delirio_religioso, delirio_religioso_min, delirio_religioso_max),
            normalize(xs.depressao, depressao_min, depressao_max),
            normalize(xs.derpressao_agitada, derpressao_agitada_min, derpressao_agitada_max),
            normalize(xs.desanimo, desanimo_min, desanimo_max),
            normalize(xs.descascamento_das_unhas, descascamento_das_unhas_min, descascamento_das_unhas_max),
            normalize(xs.desconforto_na_mandibula, desconforto_na_mandibula_min, desconforto_na_mandibula_max),
            normalize(xs.desconforto_na_regiao_das_escapulas, desconforto_na_regiao_das_escapulas_min, desconforto_na_regiao_das_escapulas_max),
            normalize(xs.desconforto_na_regiao_do_abdomen, desconforto_na_regiao_do_abdomen_min, desconforto_na_regiao_do_abdomen_max),
            normalize(xs.desconforto_no_braco_direito, desconforto_no_braco_direito_min, desconforto_no_braco_direito_max),
            normalize(xs.desconforto_no_braco_esquerdo, desconforto_no_braco_esquerdo_min, desconforto_no_braco_esquerdo_max),
            normalize(xs.descontamento_geral, descontamento_geral_min, descontamento_geral_max),
            normalize(xs.desesperanca, desesperanca_min, desesperanca_max),
            normalize(xs.desmaios, desmaios_min, desmaios_max),
            normalize(xs.desorientacao, desorientacao_min, desorientacao_max),
            normalize(xs.diarreia, diarreia_min, diarreia_max),
            normalize(xs.diarreia_persistente_por_mais_de_3_semanas, diarreia_persistente_por_mais_de_3_semanas_min, diarreia_persistente_por_mais_de_3_semanas_max),
            normalize(xs.diferenca_de_gastos_em_sapatos_de_um_pe_para_outro, diferenca_de_gastos_em_sapatos_de_um_pe_para_outro_min, diferenca_de_gastos_em_sapatos_de_um_pe_para_outro_max),
            normalize(xs.dificuldade_de_adormecer, dificuldade_de_adormecer_min, dificuldade_de_adormecer_max),
            normalize(xs.dificuldade_de_concentracao, dificuldade_de_concentracao_min, dificuldade_de_concentracao_max),
            normalize(xs.dificuldade_de_crescimento, dificuldade_de_crescimento_min, dificuldade_de_crescimento_max),
            normalize(xs.dificuldade_de_fazer_atividades_diarias, dificuldade_de_fazer_atividades_diarias_min, dificuldade_de_fazer_atividades_diarias_max),
            normalize(xs.dificuldade_de_respirar_durante_atividades_fisicas, dificuldade_de_respirar_durante_atividades_fisicas_min, dificuldade_de_respirar_durante_atividades_fisicas_max),
            normalize(xs.dificuldade_em_engolir, dificuldade_em_engolir_min, dificuldade_em_engolir_max),
            normalize(xs.dificuldade_para_evacuar, dificuldade_para_evacuar_min, dificuldade_para_evacuar_max),
            normalize(xs.dificuldades_de_se_adaptar_a_luz, dificuldades_de_se_adaptar_a_luz_min, dificuldades_de_se_adaptar_a_luz_max),
            normalize(xs.diminuicao_da_mobilidade_nas_articulacoes, diminuicao_da_mobilidade_nas_articulacoes_min, diminuicao_da_mobilidade_nas_articulacoes_max),
            normalize(xs.diminuicao_de_pelos, diminuicao_de_pelos_min, diminuicao_de_pelos_max),
            normalize(xs.disfuncao_eretil, disfuncao_eretil_min, disfuncao_eretil_max),
            normalize(xs.disfuncao_sexual, disfuncao_sexual_min, disfuncao_sexual_max),
            normalize(xs.disturbio_do_desequilibro, disturbio_do_desequilibro_min, disturbio_do_desequilibro_max),
            normalize(xs.disturbios_do_sono, disturbios_do_sono_min, disturbios_do_sono_max),
            normalize(xs.dominuicao_da_libido, dominuicao_da_libido_min, dominuicao_da_libido_max),
            normalize(xs.dor_a_degluticao, dor_a_degluticao_min, dor_a_degluticao_max),
            normalize(xs.dor_abdominal, dor_abdominal_min, dor_abdominal_max),
            normalize(xs.dor_ao_longo_de_uma_via_nervosa__ciatica_ou_herpes_zoster, _por_exemplo_, dor_ao_longo_de_uma_via_nervosa__ciatica_ou_herpes_zoster, _por_exemplo__min, dor_ao_longo_de_uma_via_nervosa__ciatica_ou_herpes_zoster, _por_exemplo__max),
            normalize(xs.dor_ao_urinar, dor_ao_urinar_min, dor_ao_urinar_max),
            normalize(xs.dor_de_cabeca, dor_de_cabeca_min, dor_de_cabeca_max),
            normalize(xs.dor_de_garganta, dor_de_garganta_min, dor_de_garganta_max),
            normalize(xs.dor_e_colica_frequente_abdominal, dor_e_colica_frequente_abdominal_min, dor_e_colica_frequente_abdominal_max),
            normalize(xs.dor_na_mama, dor_na_mama_min, dor_na_mama_max),
            normalize(xs.dor_nas_articulacoes, dor_nas_articulacoes_min, dor_nas_articulacoes_max),
            normalize(xs.dor_nas_costas, dor_nas_costas_min, dor_nas_costas_max),
            normalize(xs.dor_nas_costas_rins, dor_nas_costas_rins_min, dor_nas_costas_rins_max),
            normalize(xs.dor_nas_pernas, dor_nas_pernas_min, dor_nas_pernas_max),
            normalize(xs.dor_nas_unhas, dor_nas_unhas_min, dor_nas_unhas_max),
            normalize(xs.dor_no_pescoco, dor_no_pescoco_min, dor_no_pescoco_max),
            normalize(xs.dor_nos_olhos, dor_nos_olhos_min, dor_nos_olhos_max),
            normalize(xs.dor_nos_ossos, dor_nos_ossos_min, dor_nos_ossos_max),
            normalize(xs.dor_nos_pes, dor_nos_pes_min, dor_nos_pes_max),
            normalize(xs.dor_tardia_nos_musculos, dor_tardia_nos_musculos_min, dor_tardia_nos_musculos_max),
            normalize(xs.dores_ao_defecar, dores_ao_defecar_min, dores_ao_defecar_max),
            normalize(xs.dores_durante_o_sexo, dores_durante_o_sexo_min, dores_durante_o_sexo_max),
            normalize(xs.dores_fortes_nas_articulacoes, dores_fortes_nas_articulacoes_min, dores_fortes_nas_articulacoes_max),
            normalize(xs.dores_na_parte_inferior_das_costas, dores_na_parte_inferior_das_costas_min, dores_na_parte_inferior_das_costas_max),
            normalize(xs.dores_na_regiao_sacral, dores_na_regiao_sacral_min, dores_na_regiao_sacral_max),
            normalize(xs.dores_na_testa, dores_na_testa_min, dores_na_testa_max),
            normalize(xs.dores_na_vagina, dores_na_vagina_min, dores_na_vagina_max),
            normalize(xs.dores_nas_maos, dores_nas_maos_min, dores_nas_maos_max),
            normalize(xs.dores_nas_partes_de_tras_dos_olhos, dores_nas_partes_de_tras_dos_olhos_min, dores_nas_partes_de_tras_dos_olhos_max),
            normalize(xs.dores_nas_pelvis, dores_nas_pelvis_min, dores_nas_pelvis_max),
            normalize(xs.dores_no_anus, dores_no_anus_min, dores_no_anus_max),
            normalize(xs.dores_no_braco, dores_no_braco_min, dores_no_braco_max),
            normalize(xs.dores_no_peito, dores_no_peito_min, dores_no_peito_max),
            normalize(xs.dores_no_peito_ao_comer, dores_no_peito_ao_comer_min, dores_no_peito_ao_comer_max),
            normalize(xs.dores_no_peito_ao_respirar_fundo, dores_no_peito_ao_respirar_fundo_min, dores_no_peito_ao_respirar_fundo_max),
            normalize(xs.dores_no_peito_ao_tossir, dores_no_peito_ao_tossir_min, dores_no_peito_ao_tossir_max),
            normalize(xs.dores_no_quadril, dores_no_quadril_min, dores_no_quadril_max),
            normalize(xs.dores_no_rosto, dores_no_rosto_min, dores_no_rosto_max),
            normalize(xs.dores_nos_joelhos, dores_nos_joelhos_min, dores_nos_joelhos_max),
            normalize(xs.dores_nos_musculos, dores_nos_musculos_min, dores_nos_musculos_max),
            normalize(xs.dores_nos_ouvidos, dores_nos_ouvidos_min, dores_nos_ouvidos_max),
            normalize(xs.dormencia_na_pele, dormencia_na_pele_min, dormencia_na_pele_max),
            normalize(xs.drenagem_de_fluidos_nos_ouvidos, drenagem_de_fluidos_nos_ouvidos_min, drenagem_de_fluidos_nos_ouvidos_max),
            normalize(xs.enfraquecimento_dos_ossos, enfraquecimento_dos_ossos_min, enfraquecimento_dos_ossos_max),
            normalize(xs.episodio_maniaco, episodio_maniaco_min, episodio_maniaco_max),
            normalize(xs.escurecimento_da_visao, escurecimento_da_visao_min, escurecimento_da_visao_max),
            normalize(xs.espasmos_musculares, espasmos_musculares_min, espasmos_musculares_max),
            normalize(xs.espirros_repetidos, espirros_repetidos_min, espirros_repetidos_max),
            normalize(xs.esquecimento, esquecimento_min, esquecimento_max),
            normalize(xs.estalos_nas_articulacoes, estalos_nas_articulacoes_min, estalos_nas_articulacoes_max),
            normalize(xs.estresse, estresse_min, estresse_max),
            normalize(xs.euforia, euforia_min, euforia_max),
            normalize(xs.excesso_de_desejo_sexual, excesso_de_desejo_sexual_min, excesso_de_desejo_sexual_max),
            normalize(xs.excesso_de_pele, excesso_de_pele_min, excesso_de_pele_max),
            normalize(xs.excesso_de_pele_no_rosto, excesso_de_pele_no_rosto_min, excesso_de_pele_no_rosto_max),
            normalize(xs.excesso_de_pelos_em_mulheres, excesso_de_pelos_em_mulheres_min, excesso_de_pelos_em_mulheres_max),
            normalize(xs.excesso_de_sede, excesso_de_sede_min, excesso_de_sede_max),
            normalize(xs.excesso_de_sonolencia, excesso_de_sonolencia_min, excesso_de_sonolencia_max),
            normalize(xs.excitabilidade, excitabilidade_min, excitabilidade_max),
            normalize(xs.fadiga, fadiga_min, fadiga_max),
            normalize(xs.fala_ininteligivel, fala_ininteligivel_min, fala_ininteligivel_max),
            normalize(xs.fala_rapida_e_frenetica, fala_rapida_e_frenetica_min, fala_rapida_e_frenetica_max),
            normalize(xs.falsa_superioridade, falsa_superioridade_min, falsa_superioridade_max),
            normalize(xs.falta_de_ar, falta_de_ar_min, falta_de_ar_max),
            normalize(xs.falta_de_concentracao, falta_de_concentracao_min, falta_de_concentracao_max),
            normalize(xs.falta_de_exercicio_fisico, falta_de_exercicio_fisico_min, falta_de_exercicio_fisico_max),
            normalize(xs.falta_de_moderacao, falta_de_moderacao_min, falta_de_moderacao_max),
            normalize(xs.febre, febre_min, febre_max),
            normalize(xs.fechar_os_olhos_para_enxergar_melhor, fechar_os_olhos_para_enxergar_melhor_min, fechar_os_olhos_para_enxergar_melhor_max),
            normalize(xs.feridas_com_cicatrizacao_lenta, feridas_com_cicatrizacao_lenta_min, feridas_com_cicatrizacao_lenta_max),
            normalize(xs.fome_frequente, fome_frequente_min, fome_frequente_max),
            normalize(xs.formacao_de_pequenas_bolhas_na_pele, formacao_de_pequenas_bolhas_na_pele_min, formacao_de_pequenas_bolhas_na_pele_max),
            normalize(xs.formacao_de_tecido_osseo, formacao_de_tecido_osseo_min, formacao_de_tecido_osseo_max),
            normalize(xs.formigamento_nas_maos, formigamento_nas_maos_min, formigamento_nas_maos_max),
            normalize(xs.formigamento_nas_pernas, formigamento_nas_pernas_min, formigamento_nas_pernas_max),
            normalize(xs.formigamento_no_braco, formigamento_no_braco_min, formigamento_no_braco_max),
            normalize(xs.formigamento_no_corpo, formigamento_no_corpo_min, formigamento_no_corpo_max),
            normalize(xs.formigamentos_ou_picadas_na_pele, formigamentos_ou_picadas_na_pele_min, formigamentos_ou_picadas_na_pele_max),
            normalize(xs.fraqueza_dos_musculos, fraqueza_dos_musculos_min, fraqueza_dos_musculos_max),
            normalize(xs.fraqueza_pelo_corpo, fraqueza_pelo_corpo_min, fraqueza_pelo_corpo_max),
            normalize(xs.fraturas_dos_ossos, fraturas_dos_ossos_min, fraturas_dos_ossos_max),
            normalize(xs.frequencia_cardiaca_lenta, frequencia_cardiaca_lenta_min, frequencia_cardiaca_lenta_max),
            normalize(xs.ganho_de_peso, ganho_de_peso_min, ganho_de_peso_max),
            normalize(xs.gases, gases_min, gases_max),
            normalize(xs.grandiosidade, grandiosidade_min, grandiosidade_max),
            normalize(xs.hiperatividade, hiperatividade_min, hiperatividade_max),
            normalize(xs.hipertensao, hipertensao_min, hipertensao_max),
            normalize(xs.hostilidade, hostilidade_min, hostilidade_max),
            normalize(xs.impulsividade, impulsividade_min, impulsividade_max),
            normalize(xs.incapacidade_de_esvaziar_o_intestino, incapacidade_de_esvaziar_o_intestino_min, incapacidade_de_esvaziar_o_intestino_max),
            normalize(xs.incapacidade_de_se_movimentar_na_regiao_fraturada, incapacidade_de_se_movimentar_na_regiao_fraturada_min, incapacidade_de_se_movimentar_na_regiao_fraturada_max),
            normalize(xs.inchaco_das_pernas, inchaco_das_pernas_min, inchaco_das_pernas_max),
            normalize(xs.inchaco_glanglios, inchaco_glanglios_min, inchaco_glanglios_max),
            normalize(xs.inchaco_na_boca, inchaco_na_boca_min, inchaco_na_boca_max),
            normalize(xs.inchaco_na_lingua, inchaco_na_lingua_min, inchaco_na_lingua_max),
            normalize(xs.inchaco_na_regiao_do_abdomen, inchaco_na_regiao_do_abdomen_min, inchaco_na_regiao_do_abdomen_max),
            normalize(xs.inchaco_na_regiao_sacral, inchaco_na_regiao_sacral_min, inchaco_na_regiao_sacral_max),
            normalize(xs.inchaco_nas_articulacoes, inchaco_nas_articulacoes_min, inchaco_nas_articulacoes_max),
            normalize(xs.inchaco_no_corpo, inchaco_no_corpo_min, inchaco_no_corpo_max),
            normalize(xs.inchaco_no_rosto, inchaco_no_rosto_min, inchaco_no_rosto_max),
            normalize(xs.inchaco_nos_dedos, inchaco_nos_dedos_min, inchaco_nos_dedos_max),
            normalize(xs.inchaco_nos_olhos, inchaco_nos_olhos_min, inchaco_nos_olhos_max),
            normalize(xs.inchaco_nos_pes, inchaco_nos_pes_min, inchaco_nos_pes_max),
            normalize(xs.incomodo_no_coracao__regiao_levemente_a_esquerda_da_linha_media_, incomodo_no_coracao__regiao_levemente_a_esquerda_da_linha_media__min, incomodo_no_coracao__regiao_levemente_a_esquerda_da_linha_media__max),
            normalize(xs.infeccoes_frequentes_dos_rins, infeccoes_frequentes_dos_rins_min, infeccoes_frequentes_dos_rins_max),
            normalize(xs.infeccoes_frequentes_na_pele, infeccoes_frequentes_na_pele_min, infeccoes_frequentes_na_pele_max),
            normalize(xs.infeccoes_nas_unhas, infeccoes_nas_unhas_min, infeccoes_nas_unhas_max),
            normalize(xs.infertilidade, infertilidade_min, infertilidade_max),
            normalize(xs.inflamacao_no_ouvido, inflamacao_no_ouvido_min, inflamacao_no_ouvido_max),
            normalize(xs.ingestao_de_laxantes, ingestao_de_laxantes_min, ingestao_de_laxantes_max),
            normalize(xs.inquietacao, inquietacao_min, inquietacao_max),
            normalize(xs.insonia, insonia_min, insonia_max),
            normalize(xs.invencao_de_coisas, invencao_de_coisas_min, invencao_de_coisas_max),
            normalize(xs.irritabilidade, irritabilidade_min, irritabilidade_max),
            normalize(xs.irritacao_na_garganta, irritacao_na_garganta_min, irritacao_na_garganta_max),
            normalize(xs.isolamento_social, isolamento_social_min, isolamento_social_max),
            normalize(xs.lentidao_durante_atividades, lentidao_durante_atividades_min, lentidao_durante_atividades_max),
            normalize(xs.lentidao_nos_movimentos, lentidao_nos_movimentos_min, lentidao_nos_movimentos_max),
            normalize(xs.ma_coordenacao_motora, ma_coordenacao_motora_min, ma_coordenacao_motora_max),
            normalize(xs.mal_estar, mal_estar_min, mal_estar_max),
            normalize(xs.mal_estar_geral, mal_estar_geral_min, mal_estar_geral_max),
            normalize(xs.mancar_ao_andar, mancar_ao_andar_min, mancar_ao_andar_max),
            normalize(xs.manchas_avermelhadas_ou_que_cocam, manchas_avermelhadas_ou_que_cocam_min, manchas_avermelhadas_ou_que_cocam_max),
            normalize(xs.manchas_avermelhadas_que_desaparecem_e_reaparecem_em_diversas_partes_do_corpo, manchas_avermelhadas_que_desaparecem_e_reaparecem_em_diversas_partes_do_corpo_min, manchas_avermelhadas_que_desaparecem_e_reaparecem_em_diversas_partes_do_corpo_max),
            normalize(xs.mau_cheiro, mau_cheiro_min, mau_cheiro_max),
            normalize(xs.medo, medo_min, medo_max),
            normalize(xs.memoria_fraca, memoria_fraca_min, memoria_fraca_max),
            normalize(xs.menstruacao_dolorosa, menstruacao_dolorosa_min, menstruacao_dolorosa_max),
            normalize(xs.menstruacao_intensa, menstruacao_intensa_min, menstruacao_intensa_max),
            normalize(xs.menstruacao_irregular, menstruacao_irregular_min, menstruacao_irregular_max),
            normalize(xs.miccao_excessiva_durante_a_noite, miccao_excessiva_durante_a_noite_min, miccao_excessiva_durante_a_noite_max),
            normalize(xs.movimentos_involuntarios, movimentos_involuntarios_min, movimentos_involuntarios_max),
            normalize(xs.movimentos_repetitivos, movimentos_repetitivos_min, movimentos_repetitivos_max),
            normalize(xs.mudanca_do_aspecto_da_pele_na_mama, mudanca_do_aspecto_da_pele_na_mama_min, mudanca_do_aspecto_da_pele_na_mama_max),
            normalize(xs.mudancas_de_humor, mudancas_de_humor_min, mudancas_de_humor_max),
            normalize(xs.narcisimo, narcisimo_min, narcisimo_max),
            normalize(xs.nariz_entupido, nariz_entupido_min, nariz_entupido_max),
            normalize(xs.nariz_escorrendo, nariz_escorrendo_min, nariz_escorrendo_max),
            normalize(xs.nas_mulheres, _ausencia_de_menstruacao, nas_mulheres, _ausencia_de_menstruacao_min, nas_mulheres, _ausencia_de_menstruacao_max),
            normalize(xs.nausea_enjoo, nausea_enjoo_min, nausea_enjoo_max),
            normalize(xs.nervosismo, nervosismo_min, nervosismo_max),
            normalize(xs.noites_mal_dormidas, noites_mal_dormidas_min, noites_mal_dormidas_max),
            normalize(xs.obsessoes_sexuais, obsessoes_sexuais_min, obsessoes_sexuais_max),
            normalize(xs.olhos_lacrimejando, olhos_lacrimejando_min, olhos_lacrimejando_max),
            normalize(xs.olhos_marejados, olhos_marejados_min, olhos_marejados_max),
            normalize(xs.olhos_vermelhos, olhos_vermelhos_min, olhos_vermelhos_max),
            normalize(xs.ouvir_vozes, ouvir_vozes_min, ouvir_vozes_max),
            normalize(xs.padrao_de_respiracao_anormal, padrao_de_respiracao_anormal_min, padrao_de_respiracao_anormal_max),
            normalize(xs.palidez, palidez_min, palidez_max),
            normalize(xs.palpitacao_do_coracao, palpitacao_do_coracao_min, palpitacao_do_coracao_max),
            normalize(xs.paralisia, paralisia_min, paralisia_max),
            normalize(xs.paranoia, paranoia_min, paranoia_max),
            normalize(xs.parte_branca_dos_olhos_secas_e_expessas, parte_branca_dos_olhos_secas_e_expessas_min, parte_branca_dos_olhos_secas_e_expessas_max),
            normalize(xs.pele_amarelada, pele_amarelada_min, pele_amarelada_max),
            normalize(xs.pele_com_coloracao_acinzentado_azulado, pele_com_coloracao_acinzentado_azulado_min, pele_com_coloracao_acinzentado_azulado_max),
            normalize(xs.pele_fria, pele_fria_min, pele_fria_max),
            normalize(xs.pele_oleosa, pele_oleosa_min, pele_oleosa_max),
            normalize(xs.pele_ressecada_com_vermelhidao_nas_dobras, pele_ressecada_com_vermelhidao_nas_dobras_min, pele_ressecada_com_vermelhidao_nas_dobras_max),
            normalize(xs.pele_seca, pele_seca_min, pele_seca_max),
            normalize(xs.pele_seca_e_escamosa, pele_seca_e_escamosa_min, pele_seca_e_escamosa_max),
            normalize(xs.pele_umida, pele_umida_min, pele_umida_max),
            normalize(xs.pensamento_acelerado, pensamento_acelerado_min, pensamento_acelerado_max),
            normalize(xs.pensamentos_indesejados, pensamentos_indesejados_min, pensamentos_indesejados_max),
            normalize(xs.pensamentos_suicidas, pensamentos_suicidas_min, pensamentos_suicidas_max),
            normalize(xs.perda_de_altura, perda_de_altura_min, perda_de_altura_max),
            normalize(xs.perda_de_apetite, perda_de_apetite_min, perda_de_apetite_max),
            normalize(xs.perda_de_audicao, perda_de_audicao_min, perda_de_audicao_max),
            normalize(xs.perda_de_equilibrio, perda_de_equilibrio_min, perda_de_equilibrio_max),
            normalize(xs.perda_de_flexibilidade_nas_articulacoes, perda_de_flexibilidade_nas_articulacoes_min, perda_de_flexibilidade_nas_articulacoes_max),
            normalize(xs.perda_de_interesse, perda_de_interesse_min, perda_de_interesse_max),
            normalize(xs.perda_de_massa_muscular, perda_de_massa_muscular_min, perda_de_massa_muscular_max),
            normalize(xs.perda_de_massa_ossea, perda_de_massa_ossea_min, perda_de_massa_ossea_max),
            normalize(xs.perda_de_memoria, perda_de_memoria_min, perda_de_memoria_max),
            normalize(xs.perda_de_olfato, perda_de_olfato_min, perda_de_olfato_max),
            normalize(xs.perda_de_peso, perda_de_peso_min, perda_de_peso_max),
            normalize(xs.perda_de_prazer_nas_atividades, perda_de_prazer_nas_atividades_min, perda_de_prazer_nas_atividades_max),
            normalize(xs.perda_de_sensibilidade_na_pele, perda_de_sensibilidade_na_pele_min, perda_de_sensibilidade_na_pele_max),
            normalize(xs.perda_de_visao_parcial_ou_completa, perda_de_visao_parcial_ou_completa_min, perda_de_visao_parcial_ou_completa_max),
            normalize(xs.perda_do_sentido_de_posicao, perda_do_sentido_de_posicao_min, perda_do_sentido_de_posicao_max),
            normalize(xs.perturbacoes_do_paladar, perturbacoes_do_paladar_min, perturbacoes_do_paladar_max),
            normalize(xs.perturbacoes_no_olfato, perturbacoes_no_olfato_min, perturbacoes_no_olfato_max),
            normalize(xs.pesadelos, pesadelos_min, pesadelos_max),
            normalize(xs.pessimismo, pessimismo_min, pessimismo_max),
            normalize(xs.pigarro_na_garganta, pigarro_na_garganta_min, pigarro_na_garganta_max),
            normalize(xs.pintas_que_mudam_de_tamanho_e_cor, pintas_que_mudam_de_tamanho_e_cor_min, pintas_que_mudam_de_tamanho_e_cor_max),
            normalize(xs.pneumonia, pneumonia_min, pneumonia_max),
            normalize(xs.poluicao_ambiental_e_sonora, poluicao_ambiental_e_sonora_min, poluicao_ambiental_e_sonora_max),
            normalize(xs.preocupacao_excessiva_com_o_peso_e_dietas, preocupacao_excessiva_com_o_peso_e_dietas_min, preocupacao_excessiva_com_o_peso_e_dietas_max),
            normalize(xs.pressao_nos_seios_paranasais, pressao_nos_seios_paranasais_min, pressao_nos_seios_paranasais_max),
            normalize(xs.prisao_de_ventre, prisao_de_ventre_min, prisao_de_ventre_max),
            normalize(xs.privacao_do_sono, privacao_do_sono_min, privacao_do_sono_max),
            normalize(xs.psicose, psicose_min, psicose_max),
            normalize(xs.pus_na_garganta, pus_na_garganta_min, pus_na_garganta_max),
            normalize(xs.pus_no_ouvido, pus_no_ouvido_min, pus_no_ouvido_max),
            normalize(xs.queda_de_cabelo, queda_de_cabelo_min, queda_de_cabelo_max),
            normalize(xs.raiva, raiva_min, raiva_max),
            normalize(xs.ranger_os_dentes, ranger_os_dentes_min, ranger_os_dentes_max),
            normalize(xs.rangidos_nas_articulacoes, rangidos_nas_articulacoes_min, rangidos_nas_articulacoes_max),
            normalize(xs.refluxo, refluxo_min, refluxo_max),
            normalize(xs.repeticao_incessante_de_pensamentos, repeticao_incessante_de_pensamentos_min, repeticao_incessante_de_pensamentos_max),
            normalize(xs.repeticao_persistente_de_palavras_ou_acoes, repeticao_persistente_de_palavras_ou_acoes_min, repeticao_persistente_de_palavras_ou_acoes_max),
            normalize(xs.repeticao_sem_sentido_das_proprias_palavras, repeticao_sem_sentido_das_proprias_palavras_min, repeticao_sem_sentido_das_proprias_palavras_max),
            normalize(xs.respiracao_rapida, respiracao_rapida_min, respiracao_rapida_max),
            normalize(xs.respiracao_sibilante, respiracao_sibilante_min, respiracao_sibilante_max),
            normalize(xs.resposta_emocional_inadequada, resposta_emocional_inadequada_min, resposta_emocional_inadequada_max),
            normalize(xs.rigidez_muscular, rigidez_muscular_min, rigidez_muscular_max),
            normalize(xs.rigidez_nas_articulacoes, rigidez_nas_articulacoes_min, rigidez_nas_articulacoes_max),
            normalize(xs.rigidez_nos_pulsos, rigidez_nos_pulsos_min, rigidez_nos_pulsos_max),
            normalize(xs.ritmo_cardiaco_acelerado, ritmo_cardiaco_acelerado_min, ritmo_cardiaco_acelerado_max),
            normalize(xs.ronco, ronco_min, ronco_max),
            normalize(xs.rupturas_dos_ossos, rupturas_dos_ossos_min, rupturas_dos_ossos_max),
            normalize(xs.saliencia_ossea_nos_dedos_das_maos, saliencia_ossea_nos_dedos_das_maos_min, saliencia_ossea_nos_dedos_das_maos_max),
            normalize(xs.saliencia_ossea_nos_dedos_dos_pes, saliencia_ossea_nos_dedos_dos_pes_min, saliencia_ossea_nos_dedos_dos_pes_max),
            normalize(xs.sangramento, sangramento_min, sangramento_max),
            normalize(xs.sangramento_anal, sangramento_anal_min, sangramento_anal_max),
            normalize(xs.sangramento_no_nariz, sangramento_no_nariz_min, sangramento_no_nariz_max),
            normalize(xs.sangramentos_na_gengiva, sangramentos_na_gengiva_min, sangramentos_na_gengiva_max),
            normalize(xs.sangue_na_urina, sangue_na_urina_min, sangue_na_urina_max),
            normalize(xs.secrecao_nos_olhos, secrecao_nos_olhos_min, secrecao_nos_olhos_max),
            normalize(xs.secrecao_pelo_mamilo_nao_estando_gravida, secrecao_pelo_mamilo_nao_estando_gravida_min, secrecao_pelo_mamilo_nao_estando_gravida_max),
            normalize(xs.secura_nos_olhos, secura_nos_olhos_min, secura_nos_olhos_max),
            normalize(xs.sensacao_de_desmaio, sensacao_de_desmaio_min, sensacao_de_desmaio_max),
            normalize(xs.sensacao_de_facada_na_parte_inferior, sensacao_de_facada_na_parte_inferior_min, sensacao_de_facada_na_parte_inferior_max),
            normalize(xs.sensacao_de_frio_nas_maos, sensacao_de_frio_nas_maos_min, sensacao_de_frio_nas_maos_max),
            normalize(xs.sensacao_de_peso_nos_olhos, sensacao_de_peso_nos_olhos_min, sensacao_de_peso_nos_olhos_max),
            normalize(xs.sensacao_de_queimacao_na_garganta, sensacao_de_queimacao_na_garganta_min, sensacao_de_queimacao_na_garganta_max),
            normalize(xs.sensacao_de_queimacao_pelo_corpo, sensacao_de_queimacao_pelo_corpo_min, sensacao_de_queimacao_pelo_corpo_max),
            normalize(xs.sensibilidade_a_dor_pelo_corpo, sensibilidade_a_dor_pelo_corpo_min, sensibilidade_a_dor_pelo_corpo_max),
            normalize(xs.sensibilidade_a_luz, sensibilidade_a_luz_min, sensibilidade_a_luz_max),
            normalize(xs.sensibilidade_ao_frio_pelo_corpo, sensibilidade_ao_frio_pelo_corpo_min, sensibilidade_ao_frio_pelo_corpo_max),
            normalize(xs.sensibilidade_na_cabeca, sensibilidade_na_cabeca_min, sensibilidade_na_cabeca_max),
            normalize(xs.sensibilidade_nas_articulacoes, sensibilidade_nas_articulacoes_min, sensibilidade_nas_articulacoes_max),
            normalize(xs.sensibilidade_nos_musculos, sensibilidade_nos_musculos_min, sensibilidade_nos_musculos_max),
            normalize(xs.sensibilidade_nos_pulsos, sensibilidade_nos_pulsos_min, sensibilidade_nos_pulsos_max),
            normalize(xs.sensibilidade_pelo_corpo, sensibilidade_pelo_corpo_min, sensibilidade_pelo_corpo_max),
            normalize(xs.sinais_com_textura_e_bordas_irregulares, sinais_com_textura_e_bordas_irregulares_min, sinais_com_textura_e_bordas_irregulares_max),
            normalize(xs.sinais_e_sintomas_de_andropausa_e_menopausa, sinais_e_sintomas_de_andropausa_e_menopausa_min, sinais_e_sintomas_de_andropausa_e_menopausa_max),
            normalize(xs.sudorese_noturna, sudorese_noturna_min, sudorese_noturna_max),
            normalize(xs.suor, suor_min, suor_max),
            normalize(xs.suor_excessivo, suor_excessivo_min, suor_excessivo_max),
            normalize(xs.surdez, surdez_min, surdez_max),
            normalize(xs.surgimento_de_estrias, surgimento_de_estrias_min, surgimento_de_estrias_max),
            normalize(xs.tabagismo, tabagismo_min, tabagismo_max),
            normalize(xs.tecidos_inchados, tecidos_inchados_min, tecidos_inchados_max),
            normalize(xs.temperatura_baixa, temperatura_baixa_min, temperatura_baixa_max),
            normalize(xs.temperatura_elevada_no_local_da_fratura, temperatura_elevada_no_local_da_fratura_min, temperatura_elevada_no_local_da_fratura_max),
            normalize(xs.tonturas, tonturas_min, tonturas_max),
            normalize(xs.tosse, tosse_min, tosse_max),
            normalize(xs.tosse_com_catarro, tosse_com_catarro_min, tosse_com_catarro_max),
            normalize(xs.tosse_com_sangue, tosse_com_sangue_min, tosse_com_sangue_max),
            normalize(xs.tosse_cronica, tosse_cronica_min, tosse_cronica_max),
            normalize(xs.transtorno_dissociativo, transtorno_dissociativo_min, transtorno_dissociativo_max),
            normalize(xs.tremor_dos_musculos, tremor_dos_musculos_min, tremor_dos_musculos_max),
            normalize(xs.tremor_nos_olhos, tremor_nos_olhos_min, tremor_nos_olhos_max),
            normalize(xs.trincos_dos_ossos, trincos_dos_ossos_min, trincos_dos_ossos_max),
            normalize(xs.tristeza, tristeza_min, tristeza_max),
            normalize(xs.unhas_amarelas, unhas_amarelas_min, unhas_amarelas_max),
            normalize(xs.unhas_enfraquecidas, unhas_enfraquecidas_min, unhas_enfraquecidas_max),
            normalize(xs.urina_escura, urina_escura_min, urina_escura_max),
            normalize(xs.urina_espumosa, urina_espumosa_min, urina_espumosa_max),
            normalize(xs.uso_excessivo_de_alcool, uso_excessivo_de_alcool_min, uso_excessivo_de_alcool_max),
            normalize(xs.vasos_sanguineos_novos_e_anormais, vasos_sanguineos_novos_e_anormais_min, vasos_sanguineos_novos_e_anormais_max),
            normalize(xs.vermelhidao_intensa_apos_picada_de_insetos, vermelhidao_intensa_apos_picada_de_insetos_min, vermelhidao_intensa_apos_picada_de_insetos_max),
            normalize(xs.vermelhidao_na_pele, vermelhidao_na_pele_min, vermelhidao_na_pele_max),
            normalize(xs.vermelhidao_nos_olhos, vermelhidao_nos_olhos_min, vermelhidao_nos_olhos_max),
            normalize(xs.vermilhidao_no_ouvido, vermilhidao_no_ouvido_min, vermilhidao_no_ouvido_max),
            normalize(xs.vertigem, vertigem_min, vertigem_max),
            normalize(xs.vicio_comportamental, vicio_comportamental_min, vicio_comportamental_max),
            normalize(xs.visao_com_brilho, visao_com_brilho_min, visao_com_brilho_max),
            normalize(xs.visao_distorcida, visao_distorcida_min, visao_distorcida_max),
            normalize(xs.visao_dupla, visao_dupla_min, visao_dupla_max),
            normalize(xs.visao_embacada, visao_embacada_min, visao_embacada_max),
            normalize(xs.visualizacao_de_pontos, visualizacao_de_pontos_min, visualizacao_de_pontos_max),
            normalize(xs.vomito, vomito_min, vomito_max),
            normalize(xs.vomito_induzido, vomito_induzido_min, vomito_induzido_max),
            normalize(xs.vontade_de_urinar_varias_vezes_ao_dia, vontade_de_urinar_varias_vezes_ao_dia_min, vontade_de_urinar_varias_vezes_ao_dia_max),
            normalize(xs.vontade_frequente_de_urinar, vontade_frequente_de_urinar_min, vontade_frequente_de_urinar_max),
            normalize(xs.zumbido_nos_ouvidos, zumbido_nos_ouvidos_min, zumbido_nos_ouvidos_max),
        ];
        return { xs: values, ys: ys.especialidade };
    }

const trainingData =
    tf.data.csv(TRAIN_DATA_PATH, { columnConfigs: { especialidade: { isLabel: true } } })
        .map(csvTransform)
        .shuffle(dataset2_length)
        .batch(100);


// Load all training data in one batch to use for evaluation
const trainingValidationData =
    tf.data.csv(TRAIN_DATA_PATH, { columnConfigs: { especialidade: { isLabel: true } } })
        .map(csvTransform)
        .batch(dataset2_length);

// Load all test data in one batch to use for evaluation
const testValidationData =
    tf.data.csv(TEST_DATA_PATH, { columnConfigs: { especialidade: { isLabel: true } } })
        .map(csvTransform)
        .batch(testdataset_length);

// Create model
const model = tf.sequential();
// add the layers to the model:
// input layer
model.add(tf.layers.dense({
    inputShape: [numOfFeatures],
    activation: "sigmoid",
    units: 5
}))
// output layer::16 units for 16 different labels
model.add(tf.layers.dense({
    activation: "softmax",
    units: 18
}));
// compile the model
model.compile({
    loss: "categoricalCrossentropy",
    optimizer: tf.train.adam(0.06)
});

// Evaluate the validation and test dataset
// Returns doctor class evaluation percentages for training data
// with an option to include test data
async function evaluate(useTestData) {
    let results = {};
    await trainingValidationData.forEachAsync(doctorTypeBatch => {
        const values = model.predict(doctorTypeBatch.xs).dataSync();
        const classSize = TRAINING_DATA_LENGTH / num_doctor_classes;
        for (let i = 0; i < num_doctor_classes; i++) {
            results[doctorFromClassNum(i)] = {
                training: calcDoctorClassEval(i, classSize, values)
            };
        }
    });

    if (useTestData) {
        await testValidationData.forEachAsync(doctorTypeBatch => {
            const values = model.predict(doctorTypeBatch.xs).dataSync();
            const classSize = TEST_DATA_LENGTH / num_doctor_classes;
            for (let i = 0; i < num_doctor_classes; i++) {
                results[doctorFromClassNum(i)].validation =
                    calcDoctorClassEval(i, classSize, values);
            }
        });
    }
    return results;
}

async function predictSample(sample) {
    let result = model.predict(tf.tensor(sample, [1, sample.length])).arraySync();
    var maxValue = 0;
    var predictedDoctor = 18;
    for (var i = 0; i < num_doctor_classes; i++) {
        if (result[0][i] > maxValue) {
            predictedDoctor = i;
            maxValue = result[0][i];
        }
    }
    return doctorFromClassNum(predictedDoctor);
}

// Determines accuracy evaluation for a given pitch class by index
function calcDoctorClassEval(doctorIndex, classSize, values) {
    // Output has 18 different class values for each doctor, offset based on
    // which doctor class (ordered by i)
    let index = (doctorIndex * classSize * num_doctor_classes) + doctorIndex;
    let total = 0;
    for (let i = 0; i < classSize; i++) {
        total += values[index];
        index += num_doctor_classes;
    }
    return total / classSize;
}

// Returns the string value for doctor labels
function doctorFromClassNum(classNum) {
    switch (classNum) {
        case 0:
            return 'Alergia e Imunologia';
        case 1:
            return 'Cardiologia';
        case 2:
            return 'Coloproctologia';
        case 3:
            return 'Dermatologia';
        case 4:
            return 'Endocrinologia e Metabologia';
        case 5:
            return 'Gastroenterologia';
        case 6:
            return 'Hematologia e Hemoterapia';
        case 7:
            return 'Mastologia';
        case 8:
            return 'Nefrologia';
        case 9:
            return 'Neurologia';
        case 10:
            return 'Nutrologia';
        case 11:
            return 'Oftalmologia';
        case 12:
            return 'Ortopedia e Traumotologia';
        case 13:
            return 'Otorrinolaringologia';
        case 14:
            return 'Pneumologia';
        case 15:
            return 'Psiquiatria';
        case 16:
            return 'Reumatologia';
        case 17:
            return 'Urologia';
        default:
            return 'Unknown';
    }
}

module.exports = {
    evaluate,
    model,
    doctorFromClassNum,
    predictSample,
    testValidationData,
    trainingData,
    testdataset_length
}





