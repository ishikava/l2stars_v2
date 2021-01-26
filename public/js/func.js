var 	CurrentBackground	= 0;
var 	CurrentQuality		= 0;

var 	BackgroundDB;
var 	Background;

var	TYPE_ROBE		= 1;
var	TYPE_LIGHT		= 2;
var	TYPE_HEAVY		= 3;
var	TYPE_ACCESSORY		= 4;
var	TYPE_SHIELD		= 5;
var	TYPE_1HSWORD		= 6;
var	TYPE_2HSWORD		= 7;
var	TYPE_1HBLUNT		= 8;
var	TYPE_2HBLUNT		= 9;
var	TYPE_FISTS		= 10;
var	TYPE_DUALS		= 11;
var	TYPE_DUALDAGGER		= 12;
var	TYPE_DAGGER		= 13;
var	TYPE_POLE		= 14;
var	TYPE_ETC		= 15;
var	TYPE_BOW		= 16;
var	TYPE_RAPIER		= 17;
var	TYPE_CROSSBOW		= 18;
var	TYPE_ANCIENTSWORD	= 19;
var	TYPE_MISC		= 20;

var	RACE_HUMANFIGHTER	= 0;
var	RACE_HUMANMAGE		= 1;
var	RACE_ELF		= 2;
var	RACE_DARKELF		= 3;
var	RACE_ORCFIGHTER		= 4;
var	RACE_ORCMAGE		= 5;
var	RACE_DWARF		= 6;
var	RACE_KAMAEL		= 7;

var	GENDER_MALE		= 0;
var	GENDER_FEMALE		= 1;

var	GRADE_NG		= 0;
var	GRADE_D			= 1;
var	GRADE_C			= 2;
var	GRADE_B			= 3;
var	GRADE_A			= 4;
var	GRADE_S			= 5;

var	ItemDB;
var	Item;

var 	CurrentGalleryPage;
var 	GalleryDB;
var 	Image;

var 	DownloadDB;
var 	Download;

var 	LinkDB;
var 	Link;

var 	ActiveButton;
var 	Index;

function Encode(Text)
{
    for ( var i = 0; i < Text.length; i++ )
    {
        Text[i] = Text[i] ^ i;
    }

    return(encodeURL(Text));
}

function SwitchSite(Button)
{
    var HTML;

    if ( Button != ActiveButton )
    {
        ActiveButton.className = 'Main_Button' + ActiveButton.id;
        ActiveButton = Button

        switch (Button.id)
        {
            case 'Fashion':
                HTML = '<table cellspacing=\'0\' cellpadding=\'1\' style=\'width:100%;\'>';

                HTML += '	<tr valign=\'top\' align=\'center\'>';
                HTML += '		<td style=\'width:133px;\' class=\'Fashion_SelectionCell\'>Race</td>';
                HTML += '		<td style=\'width:132px;\' class=\'Fashion_SelectionCell\'>Gender</td>';
                HTML += '		<td style=\'width:132px;\' class=\'Fashion_SelectionCell\'>Grade</td>';
                HTML += '		<td style=\'width:132px;\' class=\'Fashion_SelectionCell\'>Type</td>';
                HTML += '		<td class=\'Fashion_SelectionCell\'>Item</td>';
                HTML += '		<td style=\'width:80px;\' class=\'Fashion_SelectionCell\'>Position</td>';
                HTML += '		<td style=\'width:80px;\' class=\'Fashion_SelectionCell\'>Background</td>';
                HTML += '		<td style=\'width:80px;\' class=\'Fashion_SelectionCellEnd\'>Quality</td>';
                HTML += '	</tr>';

                HTML += '	<tr valign=\'top\' align=\'center\'>';
                HTML +=	'		<td style=\'width:133px;\' class=\'Fashion_SelectionCell\'>';
                HTML += '			<select id=\'Selection_Race\' class=\'Fashion_SelectBox form-control\' style=\'width:100%;height:100%;\' onchange=\'FashionUpdate(true);\'>';
                HTML += '				<option value=\'' + RACE_HUMANFIGHTER + '\'>Human Fighter</option>';
                HTML += '				<option value=\'' + RACE_HUMANMAGE + '\'>Human Mage</option>';
                HTML += '				<option value=\'' + RACE_ELF + '\'>Elf</option>';
                HTML += '				<option value=\'' + RACE_DARKELF + '\'>Dark Elf</option>';
                HTML += '				<option value=\'' + RACE_ORCFIGHTER + '\'>Orc Fighter</option>';
                HTML += '				<option value=\'' + RACE_ORCMAGE + '\'>Orc Mage</option>';
                HTML += '				<option value=\'' + RACE_DWARF + '\'>Dwarf</option>';
                HTML += '				<option value=\'' + RACE_KAMAEL + '\'>Kamael</option>';
                HTML += '			</select>';
                HTML += '		</td>';

                HTML += '		<td style=\'width:132px;\' class=\'Fashion_SelectionCell\'>';
                HTML += '			<select id=\'Selection_Gender\' class=\'Fashion_SelectBox form-control\' style=\'width:100%;height:100%;\' onchange=\'FashionUpdate(true);\'>';
                HTML += '				<option value=\'' + GENDER_FEMALE + '\'>Female</option>';
                HTML += '				<option value=\'' + GENDER_MALE + '\'>Male</option>';
                HTML += '			</select>';
                HTML += '		</td>';
                HTML += '		<td style=\'width:132px;\' class=\'Fashion_SelectionCell\'>';
                HTML += '			<select id=\'Selection_Grade\' class=\'Fashion_SelectBox form-control\' style=\'width:100%;height:100%;\' onchange=\'FashionUpdate(true);\'>';
                HTML += '				<option value=\'5\'>S</option>';
                HTML += '				<option value=\'4\'>A</option>';
                HTML += '				<option value=\'3\'>B</option>';
                HTML += '				<option value=\'2\'>C</option>';
                HTML += '				<option value=\'1\'>D</option>';
                HTML += '				<option value=\'0\'>N</option>';
                HTML += '			</select>';
                HTML += '		</td>';

                HTML += '		<td style=\'width:132px;\' class=\'Fashion_SelectionCell\'>';
                HTML += '			<select id=\'Selection_Type\' class=\'Fashion_SelectBox form-control\' style=\'width:100%;height:100%;\' onchange=\'FashionUpdate(true);\'>';
                HTML += '				<option value=\'' + TYPE_ROBE + '\'>Robe</option>';
                HTML += '				<option value=\'' + TYPE_LIGHT + '\'>Light</option>';
                HTML += '				<option value=\'' + TYPE_HEAVY + '\'>Heavy</option>';
                HTML += '				<option value=\'' + TYPE_ACCESSORY + '\'>Accessory</option>';
                HTML += '				<option value=\'' + TYPE_1HSWORD + '\'>1h Sword</option>';
                HTML += '				<option value=\'' + TYPE_2HSWORD + '\'>2h Sword</option>';
                HTML += '				<option value=\'' + TYPE_1HBLUNT + '\'>1h Blunt</option>';
                HTML += '				<option value=\'' + TYPE_2HBLUNT + '\'>2h Blunt</option>';
                HTML += '				<option value=\'' + TYPE_DAGGER + '\'>Dagger</option>';
                HTML += '				<option value=\'' + TYPE_DUALDAGGER + '\'>Dual Dagger</option>';
                HTML += '				<option value=\'' + TYPE_DUALS + '\'>Duals</option>';
                HTML += '				<option value=\'' + TYPE_BOW + '\'>Bow</option>';
                HTML += '				<option value=\'' + TYPE_FISTS + '\'>Fists</option>';
                HTML += '				<option value=\'' + TYPE_POLE + '\'>Pole</option>';
                HTML += '				<option value=\'' + TYPE_ETC + '\'>Etc</option>';
                HTML += '				<option value=\'' + TYPE_SHIELD + '\'>Shield</option>';
                HTML += '				<option value=\'' + TYPE_RAPIER + '\'>Rapier</option>';
                HTML += '				<option value=\'' + TYPE_CROSSBOW + '\'>Crossbow</option>';
                HTML += '				<option value=\'' + TYPE_ANCIENTSWORD + '\'>Ancient Sword</option>';
                HTML += '				<option value=\'' + TYPE_MISC + '\'>Misc</option>';
                HTML += '			</select>';
                HTML += '		</td>';

                HTML += '		<td class=\'Fashion_SelectionCell\'>';
                HTML += '			<select id=\'Selection_Item\' class=\'Fashion_SelectBox form-control\' style=\'width:100%;height:100%;\' onchange=\'FashionShowPicture();\'>';
                HTML += '			</select>';
                HTML += '		</td>';

                HTML += '		<td style=\'width:80px;\' class=\'Fashion_SelectionCell\'>';
                HTML += '			<select id=\'Selection_Position\' class=\'Fashion_SelectBox form-control\' style=\'width:100%;height:100%;\' onchange=\'FashionShowPicture();\'>';
                HTML += '				<option value=\'front_\'>Front</option>';
                HTML += '				<option value=\'right_\'>Right</option>';
                HTML += '				<option value=\'back_\'>Back</option>';
                HTML += '				<option value=\'left_\'>Left</option>';
                HTML += '			</select>';
                HTML += '		</td>';

                HTML += '		<td style=\'width:80px;\' class=\'Fashion_SelectionCell\'>';
                HTML += '			<select id=\'Selection_Background\' class=\'Fashion_SelectBox form-control\' style=\'width:100%;height:100%;\' onchange=\'SetBackground();\'>';

                for ( Index = 0; Index < BackgroundDB.length; Index++ )
                {
                    if ( Index == CurrentBackground )
                    {
                        HTML += '				<option selected=\'selected\' value=\'' + Index + '\'>' + BackgroundDB[Index].Name + '</option>';
                    }
                    else
                    {
                        HTML += '				<option value=\'' + Index + '\'>' + BackgroundDB[Index].Name + '</option>';
                    }
                }

                HTML += '			</select>';
                HTML += '		</td>';

                HTML += '		<td style=\'width:80px;\' class=\'Fashion_SelectionCell\'>';
                HTML += '			<select id=\'Selection_Quality\' class=\'Fashion_SelectBox form-control\' style=\'width:100%;height:100%;\' onchange=\'SetQuality();\'>';

                if ( CurrentQuality == 1 )
                {
                    HTML += '				<option value=\'0\'>Low</option>';
                    HTML += '				<option value=\'1\' selected=\'selected\'>High</option>';
                }
                else
                {
                    HTML += '				<option value=\'0\' selected=\'selected\'>Low</option>';
                    HTML += '				<option value=\'1\'>High</option>';
                }

                HTML += '			</select>';
                HTML += '		</td>';

                HTML += '	</tr>';

                HTML += '</table>';

                document.getElementById('Division_Header').innerHTML = HTML;
                document.getElementById('Division_Header').style.display = '';
                document.getElementById('Division_Footer').style.display = 'none';
                document.getElementById('Division_Content').innerHTML = '<table id=\'ContentTable\' cellpadding=\'0\' cellspacing=\'0\' class=\'ContentTable\' style=\'background-image: url(Images/' + BackgroundDB[CurrentBackground].File + ');\'><tr><td valign=\'top\' align=\'center\' style=\'height:100%;width:100%;background-image: url(Images/Darkelf' + GetQualityString() + '.png);\'><span class=\'Main_GreetingFont\'><br>L2 Fashion - Gracia Final<br><br>Please use the boxes above to select an Race & Item</span></td></tr></table>';

                FashionUpdate(false);

                break;

            case 'Gallery':
                CurrentGalleryPage = 0;

                DrawPageList();

                document.getElementById('Division_Header').style.display = '';
                document.getElementById('Division_Footer').style.display = '';
                document.getElementById('Division_Content').innerHTML = '<table id=\'ContentTable\' cellpadding=\'0\' cellspacing=\'0\' class=\'ContentTable\' style=\'background-image: url(Images/' + BackgroundDB[CurrentBackground].File + ');\'><tr><td valign=\'top\' align=\'center\' style=\'height:100%;width:100%;background-image: url(Images/Elf' + GetQualityString() + '.png);\'><span class=\'Main_GreetingFont\'><br>Art Gallery<br><br>Please use the controls above to select a page</span></td></tr></table>';

                break;

            case 'Downloads':
                HTML = '<br>';

                HTML += '<table class=\'Links_Table\' valign=\'top\' align=\'left\' cellspacing=\'0\' cellpadding=\'0\'>';

                HTML += '	<tr>';
                HTML += '		<td class=\'Downloads_SpacerCell\' align=\'center\'>&nbsp;</td>';
                HTML += '		<td class=\'Downloads_FileCell\' align=\'center\'>File</td>';
                HTML += '		<td class=\'Downloads_SizeCell\' align=\'center\'>Size</td>';
                HTML += '		<td class=\'Downloads_DescriptionCell\' align=\'center\'>Description</td>';
                HTML += '	</tr>';
                HTML += '	<tr>';
                HTML += '		<td colspan=\'4\' align=\'center\'>&nbsp;</td>';
                HTML += '	</tr>';

                for ( Index = 0; Index < DownloadDB.length; Index++ )
                {
                    if ( DownloadDB[Index].Address.length > 0 )
                    {
                        HTML += '	<tr>';

                        if ( DownloadDB[Index].Password == true )
                        {
                            HTML += '		<td class=\'Downloads_SpacerCell\' align=\'center\'><span class=\'Font_Red\'>*</span></td>';
                        }
                        else
                        {
                            HTML += '		<td class=\'Downloads_SpacerCell\' align=\'center\'>&nbsp;</td>';
                        }

                        HTML += '		<td class=\'Downloads_FileCell\' align=\'left\'><a href=\'' + DownloadDB[Index].Address + '\'>' + DownloadDB[Index].Name + '</a></td>';

                        if ( DownloadDB[Index].Size > 1024 )
                        {
                            HTML += '		<td class=\'Downloads_SizeCell\' align=\'left\'>' + Math.floor(DownloadDB[Index].Size / 1024) + ' MB</td>';
                        }
                        else
                        {
                            HTML += '		<td class=\'Downloads_SizeCell\' align=\'left\'>' + DownloadDB[Index].Size + ' KB</td>';
                        }

                        HTML += '		<td class=\'Downloads_DescriptionCell\' align=\'left\'>' + DownloadDB[Index].Description + '</td>';
                        HTML += '	</tr>';
                    }
                    else
                    {
                        HTML += '	<tr>';
                        HTML += '		<td colspan=\'4\'>&nbsp;</td>';
                        HTML += '	</tr>';
                    }
                }

                /*HTML += '	<tr><td colspan=\'4\'>&nbsp;</td></tr>';
                HTML += '	<tr><td colspan=\'4\'>&nbsp;</td></tr>';
                HTML += '	<tr><td class=\'Downloads_SpacerCell\'>&nbsp;</td><td align=\'left\' colspan=\'3\' class=\'Font_Red\'>* Contact Veskya to get the password for this Download</td></tr>';
                */
                HTML += '</table>';

                document.getElementById('Division_Header').style.display = 'none';
                document.getElementById('Division_Footer').style.display = 'none';
                document.getElementById('Division_Content').innerHTML = '<table id=\'ContentTable\' cellpadding=\'0\' cellspacing=\'0\' class=\'ContentTable\' style=\'background-image: url(Images/' + BackgroundDB[CurrentBackground].File + ');\'><tr><td valign=\'top\' align=\'center\' style=\'height:100%;width:100%;background-image: url(Images/Human2' + GetQualityString() + '.png);\'>' + HTML + '</td></tr></table>';

                break;


            case 'Links':
                HTML = '<br>';

                HTML += '<table class=\'Links_Table\' valign=\'top\' align=\'right\' cellspacing=\'0\' cellpadding=\'0\'>';

                HTML += '	<tr>';
                HTML += '		<td class=\'Links_AddressCell\' align=\'center\'>Link</td>';
                HTML += '		<td class=\'Links_DescriptionCell\' align=\'center\'>Description</td>';
                HTML += '	</tr>';
                HTML += '	<tr>';
                HTML += '		<td class=\'Links_AddressCell\'>&nbsp;</td>';
                HTML += '		<td class=\'Links_DescriptionCell\'>&nbsp;</td>';
                HTML += '	</tr>';

                for ( Index = 0; Index < LinkDB.length; Index++ )
                {
                    if ( LinkDB[Index].Address.length > 0 )
                    {
                        HTML += '	<tr>';
                        HTML += '		<td class=\'Links_AddressCell\' align=\'left\'><a href=\'' + LinkDB[Index].Address + '\' target=\'_blank\'>' + LinkDB[Index].Address + '</a></td>';
                        HTML += '		<td class=\'Links_DescriptionCell\' align=\'left\'>' + LinkDB[Index].Description + '</td>';
                        HTML += '	</tr>';
                    }
                    else
                    {
                        HTML += '	<tr>';
                        HTML += '		<td class=\'Links_AddressCell\' align=\'left\'>&nbsp;</td>';
                        HTML += '		<td class=\'Links_DescriptionCell\' align=\'left\'>&nbsp;</td>';
                        HTML += '	</tr>';
                    }
                }

                HTML += '</table>';

                document.getElementById('Division_Header').style.display = 'none';
                document.getElementById('Division_Footer').style.display = 'none';
                document.getElementById('Division_Content').innerHTML = '<table id=\'ContentTable\' cellpadding=\'0\' cellspacing=\'0\' class=\'ContentTable\' style=\'background-image: url(Images/' + BackgroundDB[CurrentBackground].File + ');\'><tr><td valign=\'top\' align=\'center\' style=\'height:100%;width:100%;background-image: url(Images/Human' + GetQualityString() + '.png);\'>' + HTML + '</td></tr></table>';

                break;

            case 'About':
                var	LinkCount		= 0;
                var	DownloadCount		= 0;
                var	DownloadSize		= 0;
                var	FashionImageCount	= 0;

                for ( Index = 0; Index < LinkDB.length; Index++ )
                {
                    if ( LinkDB[Index].Address.length > 0 ) { LinkCount++; }
                }

                for ( Index = 0; Index < DownloadDB.length; Index++ )
                {
                    if ( DownloadDB[Index].Address.length > 0 )
                    {
                        DownloadCount++;
                        DownloadSize += DownloadDB[Index].Size;
                    }
                }

                for ( Index = 0; Index < ItemDB.length; Index++ )
                {
                    if ( ItemDB[Index].Race[RACE_HUMANFIGHTER] == 1 && ItemDB[Index].Sex[GENDER_FEMALE] == 1) { FashionImageCount += 4; }
                    if ( ItemDB[Index].Race[RACE_HUMANFIGHTER] == 1 && ItemDB[Index].Sex[GENDER_MALE] == 1) { FashionImageCount += 4; }

                    if ( ItemDB[Index].Race[RACE_HUMANMAGE] == 1 && ItemDB[Index].Sex[GENDER_FEMALE] == 1) { FashionImageCount += 4; }
                    if ( ItemDB[Index].Race[RACE_HUMANMAGE] == 1 && ItemDB[Index].Sex[GENDER_MALE] == 1) { FashionImageCount += 4; }

                    if ( ItemDB[Index].Race[RACE_ELF] == 1 && ItemDB[Index].Sex[GENDER_FEMALE] == 1) { FashionImageCount += 4; }
                    if ( ItemDB[Index].Race[RACE_ELF] == 1 && ItemDB[Index].Sex[GENDER_MALE] == 1) { FashionImageCount += 4; }

                    if ( ItemDB[Index].Race[RACE_DARKELF] == 1 && ItemDB[Index].Sex[GENDER_FEMALE] == 1) { FashionImageCount += 4; }
                    if ( ItemDB[Index].Race[RACE_DARKELF] == 1 && ItemDB[Index].Sex[GENDER_MALE] == 1) { FashionImageCount += 4; }

                    if ( ItemDB[Index].Race[RACE_ORCFIGHTER] == 1 && ItemDB[Index].Sex[GENDER_FEMALE] == 1) { FashionImageCount += 4; }
                    if ( ItemDB[Index].Race[RACE_ORCFIGHTER] == 1 && ItemDB[Index].Sex[GENDER_MALE] == 1) { FashionImageCount += 4; }

                    if ( ItemDB[Index].Race[RACE_ORCMAGE] == 1 && ItemDB[Index].Sex[GENDER_FEMALE] == 1) { FashionImageCount += 4; }
                    if ( ItemDB[Index].Race[RACE_ORCMAGE] == 1 && ItemDB[Index].Sex[GENDER_MALE] == 1) { FashionImageCount += 4; }

                    if ( ItemDB[Index].Race[RACE_DWARF] == 1 && ItemDB[Index].Sex[GENDER_FEMALE] == 1) { FashionImageCount += 4; }
                    if ( ItemDB[Index].Race[RACE_DWARF] == 1 && ItemDB[Index].Sex[GENDER_MALE] == 1) { FashionImageCount += 4; }

                    if ( ItemDB[Index].Race[RACE_KAMAEL] == 1 && ItemDB[Index].Sex[GENDER_FEMALE] == 1) { FashionImageCount += 4; }
                    if ( ItemDB[Index].Race[RACE_KAMAEL] == 1 && ItemDB[Index].Sex[GENDER_MALE] == 1) { FashionImageCount += 4; }
                }

                HTML = '<br>';

                HTML += '<table class=\'About_Table\' valign=\'top\' align=\'center\' cellspacing=\'0\' cellpadding=\'0\'>';
                HTML += '	<tr>';
                HTML += '		<td colspan=\'2\' align=\'center\'>Ivory Tower</td>';
                HTML += '	</tr>';
                HTML += '	<tr>';
                HTML += '		<td colspan=\'2\' align=\'center\'>&nbsp;</td>';
                HTML += '	</tr>';

                HTML += '	<tr>';
                HTML += '		<td class=\'About_TableOneLeftCell\' align=\'left\'>All Scripts & Screenshots</td>';
                HTML += '		<td align=\'left\'><table class=\'About_Table\' cellspacing=\'0\' cellpadding=\'0\'><tr><td>&copy; Veskya &lt;&#97;dm</td><td>in&#64;ivor</td><td>y-&#116;ower</td><td>.de&gt;</td></tr></table></td>';

                HTML += '	</tr>';
                HTML += '	<tr>';
                HTML += '		<td class=\'About_TableOneLeftCell\' align=\'left\'>Graphics</td>';
                HTML += '		<td align=\'left\'><table class=\'About_Table\' cellspacing=\'0\' cellpadding=\'0\'><tr><td>&copy; Narsilia &lt;&#110;ars</td><td>ilia&#64;ivo</td><td>ry-&#116;ower.d</td><td>e&gt;</td></tr></table></td>';
                HTML += '	</tr>';

                HTML += '</table>';

                HTML += '<br><br>';

                HTML += '<table class=\'About_Table\' valign=\'top\' align=\'center\' cellspacing=\'0\' cellpadding=\'0\'>';
                HTML += '	<tr>';
                HTML += '		<td colspan=\'3\' align=\'center\'>Misc Stats</td>';
                HTML += '	</tr>';
                HTML += '	<tr>';
                HTML += '		<td colspan=\'3\' align=\'center\'>&nbsp;</td>';
                HTML += '	</tr>';

                HTML += '	<tr>';
                HTML += '		<td class=\'About_TableTwoLeftCell\' align=\'left\'>Fashion Images</td>';
                HTML += '		<td class=\'About_TableTwoRightCell\' align=\'left\'>:</td>';
                HTML += '		<td align=\'left\'>' + (FashionImageCount * 2) + '</td>';
                HTML += '	</tr>';
                HTML += '	<tr>';
                HTML += '		<td class=\'About_TableTwoLeftCell\' align=\'left\'>Fashion Size</td>';
                HTML += '		<td class=\'About_TableTwoRightCell\' align=\'left\'>:</td>';
                HTML += '		<td align=\'left\'>~ ' + Math.floor((FashionImageCount * 2) * 0.113096582) + ' MB</td>';
                HTML += '	</tr>';

                HTML += '	<tr>';
                HTML += '		<td class=\'About_TableTwoLeftCell\' align=\'left\'>&nbsp;</td>';
                HTML += '		<td class=\'About_TableTwoRightCell\' align=\'left\'>&nbsp;</td>';
                HTML += '		<td align=\'left\'>&nbsp;</td>';
                HTML += '	</tr>';

                HTML += '	<tr>';
                HTML += '		<td class=\'About_TableTwoLeftCell\' align=\'left\'>Gallery Images</td>';
                HTML += '		<td class=\'About_TableTwoRightCell\' align=\'left\'>:</td>';
                HTML += '		<td align=\'left\'>' + GalleryDB.length + '</td>';
                HTML += '	</tr>';
                HTML += '	<tr>';
                HTML += '		<td class=\'About_TableTwoLeftCell\' align=\'left\'>Gallery Size</td>';
                HTML += '		<td class=\'About_TableTwoRightCell\' align=\'left\'>:</td>';
                HTML += '		<td align=\'left\'>~ ' + Math.floor(GalleryDB.length * 0.649618321) + ' MB</td>';
                HTML += '	</tr>';

                HTML += '	<tr>';
                HTML += '		<td class=\'About_TableTwoLeftCell\' align=\'left\'>&nbsp;</td>';
                HTML += '		<td class=\'About_TableTwoRightCell\' align=\'left\'>&nbsp;</td>';
                HTML += '		<td align=\'left\'>&nbsp;</td>';
                HTML += '	</tr>';

                HTML += '	<tr>';
                HTML += '		<td class=\'About_TableTwoLeftCell\' align=\'left\'>Link Count</td>';
                HTML += '		<td class=\'About_TableTwoRightCell\' align=\'left\'>:</td>';
                HTML += '		<td align=\'left\'>' + LinkCount + '</td>';
                HTML += '	</tr>';

                HTML += '	<tr>';
                HTML += '		<td class=\'About_TableTwoLeftCell\' align=\'left\'>&nbsp;</td>';
                HTML += '		<td class=\'About_TableTwoRightCell\' align=\'left\'>&nbsp;</td>';
                HTML += '		<td align=\'left\'>&nbsp;</td>';
                HTML += '	</tr>';

                HTML += '	<tr>';
                HTML += '		<td class=\'About_TableTwoLeftCell\' align=\'left\'>Download Count</td>';
                HTML += '		<td class=\'About_TableTwoRightCell\' align=\'left\'>:</td>';
                HTML += '		<td align=\'left\'>' + DownloadCount + '</td>';
                HTML += '	</tr>';
                HTML += '	<tr>';
                HTML += '		<td class=\'About_TableTwoLeftCell\' align=\'left\'>Download Size</td>';
                HTML += '		<td class=\'About_TableTwoRightCell\' align=\'left\'>:</td>';
                HTML += '		<td align=\'left\'>~ ' + Math.floor(DownloadSize / 1024) +' MB</td>';
                HTML += '	</tr>';

                HTML += '</table>';

                HTML += '<br><br><br><br><br><br><br><img align=\'center\' src=\'Images/Veskya' + GetQualityString() + '.png\'>'

                document.getElementById('Division_Header').style.display = 'none';
                document.getElementById('Division_Footer').style.display = 'none';
                document.getElementById('Division_Content').innerHTML = '<table id=\'ContentTable\' cellpadding=\'0\' cellspacing=\'0\' class=\'ContentTable\' style=\'background-image: url(Images/' + BackgroundDB[CurrentBackground].File + ');\'><tr><td valign=\'top\' align=\'center\' style=\'height:100%;width:100%;\'>' + HTML + '</td></tr></table>';
        }
    }
}

function HighlightButton(Button)
{
    Button.className = 'Main_Button' + Button.id + 'Highlighted';
}

function FadeButton(Button)
{
    if ( Button == ActiveButton ) { return; }

    Button.className = 'Main_Button' + Button.id;
}

function Init()
{
    var Notice	= '';

    ActiveButton = 0;
    document.getElementById('Division_Header').style.display = 'none';
    document.getElementById('Division_Footer').style.display = 'none';

    document.getElementById('Division_Content').innerHTML = '<table id=\'ContentTable\' cellpadding=\'0\' cellspacing=\'0\' class=\'ContentTable\' style=\'background-image: url(Images/' + BackgroundDB[CurrentBackground].File + ');\'><tr><td valign=\'top\' align=\'center\' style=\'height:100%;width:100%;background-image: url(Images/Fairy' + GetQualityString() + '.png);\'><span class=\'Main_GreetingFont\'><br>Welcome to Ivory Tower<br><br>Please select a section using the buttons above</span></td></tr></table>';


    document.getElementById('SelectionTable').onselectstart = 	function()
    {
        return false;
    };

    document.getElementById('SelectionTable').onmousedown = 	function()
    {
        return false;
    };
}

function SetBackground()
{
    CurrentBackground = document.getElementById('Selection_Background').options[document.getElementById('Selection_Background').selectedIndex].value;

    FashionShowPicture();
}

function SetQuality()
{
    CurrentQuality = document.getElementById('Selection_Quality').options[document.getElementById('Selection_Quality').selectedIndex].value;

    FashionShowPicture();
}

function GetQualityString()
{
    return '_high';
}

function FashionUpdate(ShowPicture)
{
    var Race 	= document.getElementById('Selection_Race').options[document.getElementById('Selection_Race').selectedIndex].value;
    var Gender 	= document.getElementById('Selection_Gender').options[document.getElementById('Selection_Gender').selectedIndex].value;
    var Grade 	= document.getElementById('Selection_Grade').options[document.getElementById('Selection_Grade').selectedIndex].value;
    var Type 	= document.getElementById('Selection_Type').options[document.getElementById('Selection_Type').selectedIndex].value;
    var ItemName 	= '';
    var Position 	= document.getElementById('Selection_Position').options[document.getElementById('Selection_Position').selectedIndex].value;
    var ItemIndex	= 0;
    var ListIndex	= 0;

    if ( document.getElementById('Selection_Item').selectedIndex != -1) {	ItemName = document.getElementById('Selection_Item').options[document.getElementById('Selection_Item').selectedIndex].text;	}

    document.getElementById('Selection_Item').options.length = 0;

    for ( ItemIndex = 0; ItemIndex < ItemDB.length; ItemIndex++ )
    {
        if ( ItemDB[ItemIndex].Sex[Gender] == 1 && ItemDB[ItemIndex].Race[Race] == 1 && ItemDB[ItemIndex].Type == Type )
        {
            if ( Type == TYPE_ACCESSORY || Type == TYPE_MISC )
            {
                document.getElementById('Selection_Item').options[ListIndex] = new Option(ItemDB[ItemIndex].Name, ItemDB[ItemIndex].File);
                if ( ItemName == ItemDB[ItemIndex].Name ) { document.getElementById('Selection_Item').selectedIndex = ListIndex; }

                ListIndex++;
            }
            else
            {
                if ( ItemDB[ItemIndex].Grade == Grade )
                {
                    document.getElementById('Selection_Item').options[ListIndex] = new Option(ItemDB[ItemIndex].Name, ItemDB[ItemIndex].File);
                    if ( ItemName == ItemDB[ItemIndex].Name ) { document.getElementById('Selection_Item').selectedIndex = ListIndex; }

                    ListIndex++;
                }
            }
        }
    }



    if ( document.getElementById('Selection_Item').options.length == 0 )
    {
        document.getElementById('Selection_Item').options[0] = new Option("None", "none");
        document.getElementById('Selection_Item').disabled = true;
        document.getElementById('Selection_Item').className = 'Fashion_SelectBox form-controlDisabled';

        document.getElementById('Selection_Position').disabled = true;
        document.getElementById('Selection_Position').className = 'Fashion_SelectBox form-controlDisabled';
    }
    else
    {
        document.getElementById('Selection_Item').disabled = false;
        document.getElementById('Selection_Item').className = 'Fashion_SelectBox form-control';

        document.getElementById('Selection_Position').disabled = false;
        document.getElementById('Selection_Position').className = 'Fashion_SelectBox form-control';

        if ( ShowPicture == true) { FashionShowPicture(); }
    }
}

function FashionShowPicture()
{
    var Race 	= document.getElementById('Selection_Race').options[document.getElementById('Selection_Race').selectedIndex].value;
    var Gender 	= document.getElementById('Selection_Gender').options[document.getElementById('Selection_Gender').selectedIndex].value;
    var Grade 	= document.getElementById('Selection_Grade').options[document.getElementById('Selection_Grade').selectedIndex].value;
    var Type 	= document.getElementById('Selection_Type').options[document.getElementById('Selection_Type').selectedIndex].value;
    var ItemFile 	= '';
    var Position 	= document.getElementById('Selection_Position').options[document.getElementById('Selection_Position').selectedIndex].value;
    var FileName;

    if ( document.getElementById('Selection_Item').selectedIndex != -1)
    {
        ItemFile = document.getElementById('Selection_Item').options[document.getElementById('Selection_Item').selectedIndex].value;

        if ( ItemFile.toLowerCase() == 'none' ) { return; }
    }
    else
    {
        return;
    }

    if ( Race == RACE_HUMANFIGHTER )
    {
        FileName = "HumanFighter_";
    }
    else if ( Race == RACE_HUMANMAGE )
    {
        FileName = "HumanMage_";
    }
    else if ( Race == RACE_ELF )
    {
        FileName = "Elf_";
    }
    else if ( Race == RACE_DARKELF )
    {
        FileName = "Darkelf_";
    }
    else if ( Race == RACE_ORCFIGHTER )
    {
        FileName = "OrcFighter_";
    }
    else if ( Race == RACE_ORCMAGE )
    {
        FileName = "OrcMage_";
    }
    else if ( Race == RACE_DWARF )
    {
        FileName = "Dwarf_";
    }
    else if ( Race == RACE_KAMAEL )
    {
        FileName = "Kamael_";
    }

    if ( Gender == GENDER_FEMALE )
    {
        FileName += "Female/";
    }
    else if ( Gender == GENDER_MALE )
    {
        FileName += "Male/";
    }

    FileName += Position;

    if ( Type == TYPE_ROBE )
    {
        FileName += "robe_";
    }
    else if ( Type == TYPE_LIGHT )
    {
        FileName += "light_";
    }
    else if ( Type == TYPE_HEAVY )
    {
        FileName += "heavy_";
    }
    else if ( Type == TYPE_ACCESSORY )
    {
        FileName += "accessory_";
    }
    else if ( Type == TYPE_SHIELD )
    {
        FileName += "shield_";
    }
    else if ( Type == TYPE_1HSWORD )
    {
        FileName += "1hsword_";
    }
    else if ( Type == TYPE_2HSWORD )
    {
        FileName += "2hsword_";
    }
    else if ( Type == TYPE_1HBLUNT )
    {
        FileName += "1hblunt_";
    }
    else if ( Type == TYPE_2HBLUNT )
    {
        FileName += "2hblunt_";
    }
    else if ( Type == TYPE_FISTS )
    {
        FileName += "fists_";
    }
    else if ( Type == TYPE_DUALS )
    {
        FileName += "duals_";
    }
    else if ( Type == TYPE_DUALDAGGER )
    {
        FileName += "dualdagger_";
    }
    else if ( Type == TYPE_DAGGER )
    {
        FileName += "dagger_";
    }
    else if ( Type == TYPE_POLE )
    {
        FileName += "pole_";
    }
    else if ( Type == TYPE_ETC )
    {
        FileName += "etc_";
    }
    else if ( Type == TYPE_BOW )
    {
        FileName += "bow_";
    }
    else if ( Type == TYPE_RAPIER )
    {
        FileName += "rapier_";
    }
    else if ( Type == TYPE_ANCIENTSWORD )
    {
        FileName += "ancientsword_";
    }
    else if ( Type == TYPE_CROSSBOW )
    {
        FileName += "crossbow_";
    }
    else if ( Type == TYPE_MISC )
    {
        FileName += "misc_";
    }

    FileName += ItemFile + GetQualityString() + ".png";

    FileName = FileName.replace('/', '-');

    $('.zoomer').css('background-image', 'url(http://cdn.l2stars.com/'+FileName);

    //document.getElementById('Division_Content').innerHTML = '<table id=\'ContentTable\' cellpadding=\'0\' cellspacing=\'0\' class=\'ContentTable\' style=\'background-image: url(Images/' + BackgroundDB[CurrentBackground].File + ');\'><tr><td valign=\'top\' align=\'center\' style=\'height:100%;width:100%;background-image: url(' + FileName + ');\'></td></tr></table>';
}

function GallerySetPage(Page)
{
    if ( Page > Math.ceil(GalleryDB.length / 36) ) { Page = Math.ceil(GalleryDB.length / 36); }

    CurrentGalleryPage = Page;

    DrawPageList();
    DrawThumbnails();
}

function GalleryNextPage()
{
    if ( CurrentGalleryPage <= Math.ceil(GalleryDB.length / 36) ) { GallerySetPage(CurrentGalleryPage + 1); }
}

function GalleryPrevPage()
{
    if ( CurrentGalleryPage >= 2 ) { GallerySetPage(CurrentGalleryPage - 1); }
}

function GalleryNextPageList()
{
    if ( (CurrentGalleryPage + 35) > Math.ceil(GalleryDB.length / 36) )
    {
        GallerySetPage(Math.ceil(GalleryDB.length / 36));
    }
    else
    {
        GallerySetPage(CurrentGalleryPage + 35);
    }
}

function GalleryPrevPageList()
{
    if ( (CurrentGalleryPage - 35) < 1 )
    {
        GallerySetPage(1);
    }
    else
    {
        GallerySetPage(CurrentGalleryPage - 35);
    }
}

function GalleryFirstPageList()
{
    GallerySetPage(1);
}

function GalleryLastPageList()
{
    GallerySetPage(Math.ceil(GalleryDB.length / 36));
}

function DrawPageList()
{
    var HTML;
    var StartPage;

    if ( CurrentGalleryPage == 0 )
    {
        StartPage = 0;
    }
    else
    {
        StartPage = Math.floor((CurrentGalleryPage - 1) / 35) * 35;
    }

    HTML = '	<tr align=\'center\' style=\'background-color:#CCCCCC;\'>';

    HTML += '		<td class=\'Gallery_ControlLeft\'>'
    HTML += '			<span class=\'Gallery_PageListText\' OnMouseOver=\'this.className = "Gallery_PageListTextHighlighted";\' OnMouseOut=\'this.className = "Gallery_PageListText";\' OnClick=\'GalleryFirstPageList();\'><<<&nbsp;&nbsp;</span><span class=\'Gallery_PageListText\' OnMouseOver=\'this.className = "Gallery_PageListTextHighlighted";\' OnMouseOut=\'this.className = "Gallery_PageListText";\' OnClick=\'GalleryPrevPageList();\'><<&nbsp;&nbsp;</span><span class=\'Gallery_PageListText\' OnMouseOver=\'this.className = "Gallery_PageListTextHighlighted";\' OnMouseOut=\'this.className = "Gallery_PageListText";\' OnClick=\'GalleryPrevPage();\'><</span>'
    HTML += '		</td>';

    HTML += '		<td class=\'Gallery_ControlCenter\'>'

    for ( Temp = (StartPage + 1); Temp <= Math.ceil(GalleryDB.length / 36) && Temp <= (StartPage + 35); Temp++ )
    {
        if ( Temp == CurrentGalleryPage )
        {
            HTML += '<span class=\'Gallery_PageListTextHighlighted\' onclick=\'GallerySetPage(' + Temp + ')\'>' + Temp + ' </span>';
        }
        else
        {
            HTML += '<span class=\'Gallery_PageListText\' onclick=\'GallerySetPage(' + Temp + ')\'>' + Temp + ' </span>';
        }
    }

    HTML += '		 </td>';

    HTML += '		<td class=\'Gallery_ControlRight\'>'
    HTML += '			<span Class=\'Gallery_PageListText\' OnMouseOver=\'this.className = "Gallery_PageListTextHighlighted";\' OnMouseOut=\'this.className = "Gallery_PageListText";\' OnClick=\'GalleryNextPage();\'>>&nbsp;&nbsp;</span><span class=\'Gallery_PageListText\' OnMouseOver=\'this.className = "Gallery_PageListTextHighlighted";\' OnMouseOut=\'this.className = "Gallery_PageListText";\' OnClick=\'GalleryNextPageList();\'>>>&nbsp;&nbsp;</span><span class=\'Gallery_PageListText\' OnMouseOver=\'this.className = "Gallery_PageListTextHighlighted";\' OnMouseOut=\'this.className = "Gallery_PageListText";\' OnClick=\'GalleryLastPageList();\'>>>></span>'
    HTML += '		</td>';

    HTML += '	</tr>';

    HTML += '</table>';

    document.getElementById('Division_Header').innerHTML = '<table id=\'Gallery_ControlTableHeader\' cellspacing=\'0\' cellpadding=\'1\' style=\'width:100%;height:0px;border-style:none\'>' + HTML;
    document.getElementById('Division_Footer').innerHTML = '<table id=\'Gallery_ControlTableFooter\' cellspacing=\'0\' cellpadding=\'1\' style=\'width:100%;height:0px;border-style:none\'>' + HTML;

    document.getElementById('Gallery_ControlTableHeader').onselectstart = 	function()
    {
        return false;
    };

    document.getElementById('Gallery_ControlTableHeader').onmousedown = 	function()
    {
        return false;
    };

    document.getElementById('Gallery_ControlTableFooter').onselectstart = 	function()
    {
        return false;
    };

    document.getElementById('Gallery_ControlTableFooter').onmousedown = 	function()
    {
        return false;
    };
}

function DrawThumbnails()
{
    var HTML;
    var CurrentRow;
    var CurrentCell;
    var CurrentImage = (CurrentGalleryPage - 1) * 36;
    var Copyright;

    HTML = '<table id=\'ContentTable\' cellpadding=\'0\' cellspacing=\'0\' class=\'ContentTable\' style=\'background-image: url(Images/' + BackgroundDB[CurrentBackground].File + ');\'>';
    HTML += '<tr><td style=\'width:100%;height:100%;\'><table align=\'center\' cellpadding=\'0\' cellspacing=\'0\'>';

    for ( CurrentRow = 0; CurrentRow < 6; CurrentRow++ )
    {
        HTML += '<tr>';

        for ( CurrentCell = 0; CurrentCell < 6; CurrentCell++ )
        {
            if ( CurrentImage < GalleryDB.length )
            {
                if ( GalleryDB[CurrentImage].Copyright.length > 0 )
                {
                    if ( GalleryDB[CurrentImage].Link.length > 0 )
                    {
                        Copyright = '<a href=\'' + GalleryDB[CurrentImage].Link + '\' target=\'_blank\'>&copy; ' + GalleryDB[CurrentImage].Copyright + '</a>';
                    }
                    else
                    {
                        Copyright = '&copy; ' + GalleryDB[CurrentImage].Copyright;
                    }
                }
                else
                {
                    Copyright = '&nbsp;';
                }

                HTML += '<td align=\'center\' valign=\'center\' style=\'width:170px;height:170px;\'><a href=\'Gallery/' + GalleryDB[CurrentImage].File + '.' + GalleryDB[CurrentImage].FileExt +'\' target=\'_blank\'><div style=\'display:inline-block;width:128px;height:128px;background-image:url(Gallery/Preview/' + CurrentGalleryPage + '.png);background-position: -' + (((CurrentRow * 6) + CurrentCell) * 128) + 'px 0px;\'></div></a><br><span class=\'Gallery_PreviewText\'>' + GalleryDB[CurrentImage].Description + '</span><br><span class=\'Gallery_PreviewText\'>' + Copyright + '</span></td>';
            }
            else
            {
                HTML += '<td align=\'center\' valign=\'center\' style=\'width:170px;height:170px;\'>&nbsp;</td>';
            }

            CurrentImage++;
        }

        HTML += '</tr>';
    }
    HTML += '</table></tr></td>';
    HTML += '</table>';

    document.getElementById('Division_Content').innerHTML = HTML;
}
