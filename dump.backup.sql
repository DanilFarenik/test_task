PGDMP         9                y            hotdog    13.2    13.2     ?           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            ?           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            ?           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            ?           1262    16394    hotdog    DATABASE     c   CREATE DATABASE hotdog WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Russian_Russia.1251';
    DROP DATABASE hotdog;
                postgres    false            ?            1259    16416    product    TABLE     ?   CREATE TABLE public.product (
    id integer NOT NULL,
    title character varying(30),
    description text,
    price integer,
    img character varying(255)
);
    DROP TABLE public.product;
       public         heap    postgres    false            ?            1259    16414    product_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.product_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.product_id_seq;
       public          postgres    false    201            ?           0    0    product_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.product_id_seq OWNED BY public.product.id;
          public          postgres    false    200            #           2604    16419 
   product id    DEFAULT     h   ALTER TABLE ONLY public.product ALTER COLUMN id SET DEFAULT nextval('public.product_id_seq'::regclass);
 9   ALTER TABLE public.product ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    200    201    201            ?          0    16416    product 
   TABLE DATA           E   COPY public.product (id, title, description, price, img) FROM stdin;
    public          postgres    false    201   
       ?           0    0    product_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.product_id_seq', 10, true);
          public          postgres    false    200            %           2606    16424    product product_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.product
    ADD CONSTRAINT product_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.product DROP CONSTRAINT product_pkey;
       public            postgres    false    201            ?   p  x?]?1s? ?kݯ?2?9	?M??S?.?:m?ր,Â??_?E?]??a??{??n??ٛ?uGV???"??E?B|Z}ASo?u%?Ňp??J????S?!\&?'z??????e??U?T,?tZ?:,?AC???o??8]??Ȁ??|????e$IY	??+?4????՚??R???T(?E??ѐ???Z?WV??<?Ӭ~Jd3>R??xw;??~???l?y????t$? ?$p??ڤy????b/?g?ؠ??(?"?Ē'x(?zN???\??ucm??8$h???5?r??4v??!??IB??{???N7?????'?mۦ\|2?YL?U}????+?S?匴??*;??????6?0~O???O???     